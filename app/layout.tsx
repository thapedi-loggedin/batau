import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Family Camp 2026',
  description: 'Preparing boys and men for real life: leadership, values, and purpose.',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

