export function redirectToApp(id: string) {
  const appUrl = `soum://soum.sa/spp/${id}`;
  let appOpened = false;

  try {
    new URL(appUrl);
    window.location.href = appUrl;
  } catch (error) {
    return;
  }

  const fallbackTimeout = setTimeout(() => {
    if (!appOpened) {
      if (/android/i.test(navigator.userAgent) || /windows/i.test(navigator.userAgent)) {
        window.location.href = process.env.NEXT_PUBLIC_PLAY_STORE_LINK;
      } else {
        window.location.href = process.env.NEXT_PUBLIC_APP_STORE_LINK;
      }
    }
  }, 3000);

  const handleVisibilityChange = () => {
    if (document.visibilityState === 'hidden') {
      appOpened = true;
      clearTimeout(fallbackTimeout);
    }
  };

  document.addEventListener('visibilitychange', handleVisibilityChange);

  document.addEventListener(
    'click',
    () => {
      appOpened = true;
      clearTimeout(fallbackTimeout);
    },
    { once: true }
  );
}
