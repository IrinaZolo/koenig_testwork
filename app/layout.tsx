import StyledComponentsRegistry from './lib/registry';
import Navigate from '@/components/Navigate';
import Footer from '@/components/Footer'
import '../styles/global.css'

export const metadata = {
  title: 'Koenig testwork', 
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body>
        <Navigate />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <Footer />
      </body>
    </html>

  )
}
