// import tailwind
import './globals.css'

export const metadata = {
    title: 'To do list',
    icons: {
        icon: '/tomato.png'
    }
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}