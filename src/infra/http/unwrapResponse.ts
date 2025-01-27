import { HttpResponse } from './HttpFetch';

// thanks to legacy backend, we do not have consistent response structure
export function unwrapResponse<T>(response: HttpResponse<T> | T): T {
  // Check if it's a wrapped response and unwrap
  if ((response as HttpResponse<T>).responseData) {
    return (response as HttpResponse<T>).responseData as T;
  }
  // Otherwise, return the response directly
  return response as T;
}
