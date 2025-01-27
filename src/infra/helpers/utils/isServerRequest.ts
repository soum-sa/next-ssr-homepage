export function isServerRequest(url: string): boolean {
  return !url.startsWith("/_next");
}
