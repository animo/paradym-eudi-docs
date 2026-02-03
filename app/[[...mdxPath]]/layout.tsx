import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import '../../globals.css'
import type { PropsWithChildren } from 'react'

export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
}

const banner = <Banner storageKey="some-key">The Paradym Wallet supports OpenID4VC 1.0 🎉</Banner>
const navbar = (
  <Navbar
    logo={<>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="120" fill="white" />
        <path d="M561.458 491.99C561.458 491.995 561.453 492 561.447 492H438.442C431.814 492 426.442 497.373 426.442 504V812C426.442 818.627 421.069 824 414.442 824H330C323.373 824 318 818.627 318 812V395.587C318 388.959 323.373 383.587 330 383.587H561.458C585.91 383.587 605.721 403.389 605.721 427.83V447.736C605.721 472.174 585.915 491.974 561.468 491.979C561.462 491.979 561.458 491.984 561.458 491.99ZM550.489 200.212C550.432 200.21 550.387 200.163 550.387 200.106C550.387 200.047 550.339 200 550.281 200H330C323.373 200 318 205.373 318 212V296.392C318 303.02 323.373 308.392 330 308.392H540.318C540.385 308.392 540.439 308.447 540.439 308.514C540.439 308.583 540.498 308.639 540.568 308.635C543.085 308.493 545.623 308.392 548.181 308.392C619.081 308.392 676.558 365.844 676.558 436.712C676.558 507.58 619.081 565.031 548.181 565.031C545.623 565.031 543.085 564.931 540.568 564.789C540.498 564.785 540.439 564.84 540.439 564.91C540.439 564.977 540.385 565.031 540.318 565.031H491.57C484.942 565.031 479.57 570.404 479.57 577.031V661.424C479.57 668.051 484.942 673.424 491.57 673.424H541.542C675.893 672.821 785 566.883 785 436.712C785 306.575 680.692 205.336 550.489 200.212Z" fill="url(#paint0_linear_580_265)" />
        <defs>
          <linearGradient id="paint0_linear_580_265" x1="318" y1="511.99" x2="784.979" y2="511.99" gradientUnits="userSpaceOnUse">
            <stop stop-color="#A77BF3" />
            <stop offset="0.51" stop-color="#635CFF" />
            <stop offset="1" stop-color="#93F5EC" />
          </linearGradient>
        </defs>
      </svg>


      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
        Paradym
      </span>
    </>}
  // ... Your additional navbar options
  />
)
const footer = <Footer>{new Date().getFullYear()} © Paradym.</Footer>





export default async function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/animo/paradym-eudi-docs"
          footer={footer}
        // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
