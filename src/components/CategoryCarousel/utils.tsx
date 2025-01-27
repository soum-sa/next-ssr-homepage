export function normalizeString(str: string | string[] | undefined) {
  const altStr = str?.toString() || '';

  return decodeURIComponent(altStr)
    ?.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
