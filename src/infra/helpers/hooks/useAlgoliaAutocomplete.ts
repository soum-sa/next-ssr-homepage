'use client';

import isEmpty from 'lodash.isempty';
import { useRouter, usePathname } from 'next/navigation';
import { useState, useMemo, RefObject, useEffect, useCallback } from 'react';
import { createAutocomplete, AutocompleteState } from '@algolia/autocomplete-core';
import { useSearchParams } from 'next/navigation';

import { isBrowser } from '@ui/lego/utils/isBrowser';
import { typesenseClientAdapter } from '@helpers/utils';
import { useAlgoliaSuggestIndex } from '@app/factory/usecases';

interface useAlgoliaQuerySuggestProps {
  placeholder: string;
  formRef: RefObject<HTMLFormElement>;
  panelRef: RefObject<HTMLDivElement>;
  inputRef: RefObject<HTMLInputElement>;
  id?: string;
  minSearchLength?: number;
}

const INITIAL_ALGOLIA_STATE = {
  collections: [],
  completion: null,
  context: {},
  isOpen: false,
  query: '',
  activeItemId: null,
  status: 'idle' as 'idle',
  value: '',
};

function isSearchPage(url: string): boolean {
  return url.includes('search');
}

export function useAlgoliaQuerySuggest<T extends Record<string, unknown>>({
  placeholder,
  formRef,
  panelRef,
  inputRef,
  id,
  minSearchLength = 3,
}: useAlgoliaQuerySuggestProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const query = searchParams?.get('query');

  const [autocompleteState, setAutocompleteState] = useState<AutocompleteState<T>>(INITIAL_ALGOLIA_STATE);

  const { data } = useAlgoliaSuggestIndex();

  const autocomplete = useMemo(
    () =>
      createAutocomplete<T, React.BaseSyntheticEvent, React.MouseEvent, React.KeyboardEvent>({
        placeholder,
        id,
        onStateChange({ state }) {
          setAutocompleteState(state);
        },
        // @ts-ignore
        async getSources({ query }) {
          if (isEmpty(query) || query.length < minSearchLength) {
            return [
              {
                sourceId: 'typesense',
                getItems() {
                  return [];
                },
              },
            ];
          }

          const results = await typesenseClientAdapter
            .collections(data?.value! as string)
            .documents()
            .search(
              {
                q: query,
                query_by: '*',
                highlight_start_tag: '__aa-highlight__',
                highlight_end_tag: '__/aa-highlight__',
              },
              {}
            );

          return [
            {
              sourceId: 'typesense',
              getItems() {
                return results?.hits;
              },
            },
          ];
        },
        openOnFocus: true,
        initialState: {
          query: query as string,
        },
        onSubmit({ state }) {
          router.push(`/search?query=${state.query}`);
        },
      }),
    [placeholder, id, query, minSearchLength, data?.value, router]
  );

  const handleRouteChange = useCallback(() => {
    // if route changed on server
    if (isSearchPage(pathname!)) {
      autocomplete.setIsOpen(false);
    } else {
      autocomplete.setQuery('');
      setAutocompleteState(INITIAL_ALGOLIA_STATE);
    }

    // if route changed on client
    if (isBrowser) {
      const url = window.location.href;
      if (!isSearchPage(url)) {
        autocomplete.setQuery('');
        setAutocompleteState(INITIAL_ALGOLIA_STATE);
      }
    }
  }, [autocomplete, pathname]);

  const { getEnvironmentProps } = autocomplete;

  useEffect(() => {
    handleRouteChange();

    return () => {};
  }, [handleRouteChange, pathname, searchParams]);

  useEffect(() => {
    if (!formRef.current || !panelRef.current || !inputRef.current) {
      return undefined;
    }

    const { onTouchStart, onTouchMove, onMouseDown } = getEnvironmentProps({
      formElement: formRef.current,
      inputElement: inputRef.current,
      panelElement: panelRef.current,
    });

    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('touchstart', onTouchStart);
    window.addEventListener('touchmove', onTouchMove);

    return () => {
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, [getEnvironmentProps, autocompleteState.isOpen, formRef, panelRef, inputRef]);

  return { autocomplete, autocompleteState };
}
