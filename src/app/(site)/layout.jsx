import { Inter } from 'next/font/google';
import './globals.css';
import Toaster from '@/context/toastContext';
import { AuthContextProvider } from '@/context/authContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Sphere',
  description: 'Like and Match',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <AuthContextProvider>
        <body className={inter.className}>
          {children}
          <Toaster />
        </body>
      </AuthContextProvider>
    </html>
  );
}
