import type { Metadata } from 'next'
import { Source_Sans_3 } from 'next/font/google'
import './globals.css'
import StyledComponentsRegistry from './lib/registry'

const ss3 = Source_Sans_3({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Romullo\'s Portfolio',
  description: 'My personal portfolio.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={ss3.className}>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
