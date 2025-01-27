"use client";

import { UnexpectedError } from "@src/components/UnexpectedError";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <UnexpectedError error={error} reset={reset} />;
      </body>
    </html>
  );
}
