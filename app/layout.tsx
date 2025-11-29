import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BATAU Camp 2025',
  description: 'Preparing boys and men for real life: leadership, values, and purpose.',
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

