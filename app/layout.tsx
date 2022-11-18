import '../styles/globals.css'
import { Poppins } from '@next/font/google'

const poppins = Poppins({
  weight: '200',
  style: 'normal',
})

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
