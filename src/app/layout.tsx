// Styles
import './global.css'
import './variables.scss'

// Font
import { Prosto_One, Afacad, Coda } from 'next/font/google'

// Components
import { TabProvider } from '@components/TabProvider'

// Types
import type { Metadata } from 'next'
import { LayoutT } from '@shared-types/layouts'

// Metadata
import { siteConfig } from '@config/metadata'

export const metadata: Metadata = siteConfig

const prosto = Prosto_One({
  subsets: ['latin', 'cyrillic', 'latin-ext'],
  weight: '400',
  display: 'swap',
  variable: '--font-prosto',
})

const afacad = Afacad({
  subsets: ['latin', 'latin-ext'],
  weight: '400',
  display: 'swap',
  variable: '--font-afacad',
})

const coda = Coda({
  subsets: ['latin', 'latin-ext'],
  weight: '400',
  display: 'swap',
  variable: '--font-coda',
})

const RootLayout = async ({ children }: LayoutT) => {
  return (
    <html lang='en'>
      <body
        className={`${prosto.className} ${afacad.className} ${coda.className} ${prosto.variable} ${afacad.variable} ${coda.variable} bg-(--bg) text-(--txt) flex flex-col`}
      >
        <main className='w-full flex items-center'>
          <TabProvider>{children}</TabProvider>
        </main>
      </body>
    </html>
  )
}

export default RootLayout
