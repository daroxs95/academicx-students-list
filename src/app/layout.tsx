import './globals.css';
import localFont from 'next/font/local';

// Types
import type {Metadata} from 'next';

const myFont = localFont({
  src: [
    {
      path: '../assets/fonts/apercu/ApercuPro-ExtraLight.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../assets/fonts/apercu/ApercuPro-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/apercu/ApercuPro-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/apercu/ApercuPro-MediumItalic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../assets/fonts/apercu/ApercuPro-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/apercu/ApercuPro-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AcademicX | Students',
  description: 'List and details of all enrolled students',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
