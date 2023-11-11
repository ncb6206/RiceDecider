import React from 'react';
import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';

import Toast from '@/app/components/Toast';

import './globals.css';
import ModalsProvider from '@/app/providers/ModalsProvider';

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
        <div
          id="container"
          className="relative mx-auto h-[100dvh] max-h-[926px] w-full max-w-[428px] select-none overflow-x-hidden overflow-y-hidden border-[1px] border-black bg-white font-Pretendard text-gray-900"
        >
          {children}
          <Toast />
          <ModalsProvider />
        </div>
      </body>
    </html>
  );
}
