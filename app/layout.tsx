import React from 'react';
import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';

import Toast from '@/app/components/Toast';
import ModalsProvider from '@/app/providers/ModalsProvider';
import QueryProvider from '@/app/providers/QueryProvider';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './globals.css';

const font = Noto_Sans_KR({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '밥정너',
  description: '밥은 정해져있어, 너는 먹기만 해!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={font.className}>
        <QueryProvider>
          <div
            id="container"
            className="relative mx-auto h-[100dvh] min-h-screen max-w-md select-none overflow-y-auto overflow-x-hidden bg-white font-Pretendard text-gray-900"
          >
            {children}
            <Toast />
            <ModalsProvider />
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
