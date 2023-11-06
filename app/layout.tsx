import React from 'react';
import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';

import Toast from '@/app/components/Toast';

import './globals.css';

const font = Noto_Sans_KR({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '밥정너',
  description: '밥은 정해져있고 너만 답하면 돼',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <div
          id="container"
          className="relative mx-auto h-[100dvh] max-h-[926px] w-full max-w-[428px] overflow-y-hidden bg-[#282828]"
        >
          {children}
          <Toast />
        </div>
      </body>
    </html>
  );
}
