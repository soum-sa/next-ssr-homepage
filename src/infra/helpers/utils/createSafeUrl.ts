export function createSafeUrl(url: string) {
  return url
    .toLowerCase()
    .trim()
    .replace(/[^\p{L}\p{N}\s/-]/gu, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/\/+/g, "-")
    .replace(/-$/, "");
}

export const hasArabicText = (value: string): boolean => {
  const arabicPattern = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]/;
  return arabicPattern.test(value);
};

export const joinArabicAndEnglistStringsSafely = (
  segments: string[],
  joiner: string = "-"
): string => {
  const { english, arabic } = segments.reduce(
    (previous, current) => {
      if (hasArabicText(current)) {
        previous.arabic.push(current);
      } else {
        previous.english.push(current);
      }
      return previous;
    },
    {
      english: [],
      arabic: [],
    } as { english: string[]; arabic: string[] }
  );

  return [...english, ...arabic].join(joiner);
};
