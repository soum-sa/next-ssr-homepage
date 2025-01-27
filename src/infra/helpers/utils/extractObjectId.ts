export function extractObjectId(url: string): string | undefined {
  const matches = url.match(/[a-f0-9]{24}/);

  if (matches?.length === 1) {
    return matches[0];
  }

  return;
}
