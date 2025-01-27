import { ReadonlyURLSearchParams, redirect } from 'next/navigation';

export const redirectForMissingProduct = () => {
  return redirect('/?redirectReason=productNotFound');
};

export const isRedirectionForMissingProduct = (searchParams: ReadonlyURLSearchParams | null): boolean => {
  const redirectReason = searchParams?.get('redirectReason');

  return redirectReason === 'productNotFound';
};
