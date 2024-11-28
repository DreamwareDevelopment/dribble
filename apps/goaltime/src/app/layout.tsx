import { SpeedInsights } from "@vercel/speed-insights/next"

import './global.css';
import { Providers } from './providers';
import { Toaster } from '@/ui-components/toaster';

export const metadata = {
  title: 'Welcome to goaltime',
  description: 'Generated by create-nx-workspace',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body>
        <SpeedInsights />
        <Providers>
          <main>{children}</main>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
