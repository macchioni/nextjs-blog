import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

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
          We are gonna start soon and find together the missing ingredients that umami our lives. If you believe, subscribe, <a href="">nibble something</a> or <a href="/posts/about">learn more</a>.
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
