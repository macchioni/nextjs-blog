import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

function YourPage() {
  return (
    <div>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@SecretBkfst" />
        <meta name="twitter:title" content="Secret Breakfast Newsletter" />
        <meta name="twitter:description" content="An exclusive food loving newsletter. Prime food for thought, crunchy angles, no mainstream junk. Subscribe!" />
        <meta name="twitter:image" content="https://secretbreakfast.club/images/secretbreakfast-256.png" />
      </Head>
      <p>Your page content.</p>
    </div>
  )
}


export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>

      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, this is <strong>Secret Breakfast</strong>. An exclusive food loving <strong>newsletter</strong>. Prime food for thought, crunchy angles, no mainstream junk.
        </p>

        <p>
          We are gonna start soon and find together the missing ingredients that umami our existence in new and dangerous ways. If you believe, <a href="/posts/subscribe">subscribe</a>, <a href="posts/you-are-invited">nibble something</a> or <a href="/posts/about">learn more</a>.
        </p>

      </section>

    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
