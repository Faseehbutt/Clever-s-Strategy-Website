import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Clever Community - Smart Trading Starts Here',
  description: 'Custom-built TradingView indicators and strategies for XAUUSD and more',
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
