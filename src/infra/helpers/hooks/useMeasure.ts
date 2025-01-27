'use client';

import { useMemo, useState } from 'react';

import { isBrowser } from '@ui/lego/utils/isBrowser';
import { noop } from '@ui/lego/utils/noop';

import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

type UseMeasureRect = Pick<DOMRectReadOnly, 'x' | 'y' | 'top' | 'left' | 'right' | 'bottom' | 'height' | 'width'>;
type UseMeasureRef<E extends Element = Element> = (element: E) => void;
type UseMeasureResult<E extends Element = Element> = [UseMeasureRef<E>, UseMeasureRect];

const defaultState: UseMeasureRect = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
};

function useMeasureBrowser<E extends Element = Element>(): UseMeasureResult<E> {
  const [element, ref] = useState<E | null>(null);
  const [rect, setRect] = useState<UseMeasureRect>(defaultState);

  // TODO: add ResizeObserver polyfill
  const observer = useMemo(
    () =>
      new (window as any).ResizeObserver((entries: ResizeObserverEntry[]) => {
        if (entries[0]) {
          const { x, y, width, height, top, left, bottom, right } = entries[0].contentRect;
          setRect({ x, y, width, height, top, left, bottom, right });
        }
      }),
    []
  );

  useIsomorphicLayoutEffect(() => {
    if (!element) return;
    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, [element]);

  return [ref, rect];
}

export const useMeasure =
  isBrowser && typeof (window as any).ResizeObserver !== 'undefined'
    ? useMeasureBrowser
    : ((() => [noop, defaultState]) as typeof useMeasureBrowser);
