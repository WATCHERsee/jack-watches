import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Jack Watches – Premium Timepieces in Pakistan',
  description: 'Authentic watches at unbeatable prices. Skmei, Patek, Rolex & Tissot. Delivered nationwide.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Josefin+Sans:wght@100;200;300;400&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
