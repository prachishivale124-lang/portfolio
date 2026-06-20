import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.prachiportfolio.app',
  appName: 'prachi-portfolio',
  webDir: 'public',
  server: {
    url: 'https://portfolio-azure-five-76.vercel.app',
    allowNavigation: [
      'portfolio-azure-five-76.vercel.app',
      '*.vercel.app'
    ]
  }
};

export default config;
