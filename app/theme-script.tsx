import Script from "next/script"

export function ThemeScript() {
  return (
    <Script
      id="theme-switcher"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            try {
              const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
              const savedTheme = localStorage.getItem('theme');
              const theme = savedTheme || systemPreference;
              
              document.documentElement.classList.add(theme);
              document.documentElement.style.colorScheme = theme;
              
              if (!savedTheme) localStorage.setItem('theme', theme);
            } catch (e) {
              console.error('Theme initialization failed:', e);
            }
          })();
        `,
      }}
    />
  )
}
