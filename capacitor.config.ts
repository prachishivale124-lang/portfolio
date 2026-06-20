import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.prachiportfolio.app',
  appName: 'prachi-portfolio',
  webDir: 'public',
  server: {
    url: 'https://YOUR_VERCEL_APP_URL.vercel.app', // TODO: Replace with your actual Vercel URL
    allowNavigation: [
      'YOUR_VERCEL_APP_URL.vercel.app', // TODO: Replace with your actual Vercel domain
      '*.vercel.app'
    ]
  }
};

export default config;
