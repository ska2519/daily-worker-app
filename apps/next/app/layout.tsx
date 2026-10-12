import './globals.css';

export const metadata = {
  title: '현장노트 - Daily Worker App',
  description: '눈치 보지 않는 100% 익명 현장 커뮤니티',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="bg-white text-gray-900 antialiased min-h-screen">
        {children}
      </body>
    </html>
  )
}
