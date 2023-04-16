import './globals.css'

export const metadata = {
  title: 'Virst',
  description: 'First project on VS code with nextjs: A Todo App',
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
