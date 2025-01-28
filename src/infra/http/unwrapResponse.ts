export enum HttpStatusCode {
  OK = 200,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  SERVER_ERROR = 500,
}

export type HttpResponse<T = unknown> = {
  responseData: unknown;
  statusCode: HttpStatusCode;
  body?: {
    responseData: T;
  };
};

// thanks to legacy backend, we do not have consistent response structure
export function unwrapResponse<T>(response: HttpResponse<T> | T): T {
  // Check if it's a wrapped response and unwrap
  if ((response as HttpResponse<T>).responseData) {
    return (response as HttpResponse<T>).responseData as T;
  }
  // Otherwise, return the response directly
  return response as T;
}
