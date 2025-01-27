const ENVIRONMENTS = {
  SERVER: "SERVER",
  BROWSER: "BROWSER",
} as const;

type ENVIRONMENT = keyof typeof ENVIRONMENTS;

export function getCurrentEnvironment(): ENVIRONMENT {
  if (typeof window === "undefined") return ENVIRONMENTS.SERVER;

  return ENVIRONMENTS.BROWSER;
}
