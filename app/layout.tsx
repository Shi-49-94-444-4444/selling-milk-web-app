import '@/styles/globals.css'
import Navbar from './components/nav'
import Footer from './components/hero/Footer'

export default function RootLayout({
  children,
  style
}: {
  children: React.ReactNode
  style?: boolean | true
}) {
  return (
    <>
      <Navbar style={style}/>
      {children}
      <Footer />
    </>
  )
}
