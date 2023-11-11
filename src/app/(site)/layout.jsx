import { Inter } from 'next/font/google';
import './globals.css';
import Toaster from '@/context/toastContext';
import { AuthProvider } from '@/context/authContext';
import { PathProvider } from '@/context/pathContext';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Sphere',
  description: 'Like and Match',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AuthProvider>
          <PathProvider>
            {children}
            <Toaster />
          </PathProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
