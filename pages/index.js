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
          Hello, this is <strong>Secret Breakfast</strong>. The best place for starting your day, an exclusive food-loving <strong>newsletter</strong> and, incidentally, a boozy ice cream flavor.
        </p>
        <p align="center">
        ⏰ + ✉️ + 🍦
        </p>
        <p>
          We are gonna start soon, we promise prime food for thought, crunchy angles, absolutely no mainstream junk. If you believe, subscribe, <a href="">nibble something</a> o read the <a href="">AMA</a>
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
