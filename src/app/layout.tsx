import { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import { Josefin_Sans } from 'next/font/google'

const josefin = Josefin_Sans({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Todo App',
  description: 'TodoApp made for Jeronimo Cardu',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${josefin.className} dark:bg-[#171823] !p-[2.5rem_1.5rem] desktop:dark:bg-[url(/images/bg-desktop-dark.jpg)]  desktop:bg-[url(/images/bg-desktop-light.jpg)] dark:bg-[url(/images/bg-mobile-dark.jpg)] bg-[url(/images/bg-mobile-light.jpg)] bg-contain bg-no-repeat bg-[#FAFAFA]`}
        cz-shortcut-listen='true'>
        <ThemeProvider defaultTheme='system' enableSystem attribute={'class'}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
