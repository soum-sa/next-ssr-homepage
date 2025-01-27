// sample: GS1.1.1726650338.198.0.1726650338.0.0.0
export function extractGA4SessionId(cookie: string | undefined): number | null {
  if (!cookie) return null;
  // Split the cookie by dot notation
  const cookieParts = cookie.split(".");

  // Ensure the cookie has enough parts
  if (cookieParts.length >= 4) {
    // The session ID is the second numeric value after the first timestamp
    const sessionId = parseInt(cookieParts[2], 10);

    // Check if it's a valid number and return it
    if (!isNaN(sessionId)) {
      return sessionId;
    }
  }

  // Return null if not found or if there's an issue
  return null;
}
