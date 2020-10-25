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
          We are gonna start soon and find together the missing ingredients that umami our existence in new and dangerous ways. If you believe, <a href="/posts/subscribe">subscribe</a>, <a href="posts/you-are-invited">nibble something</a> or <a href="/posts/about">learn more</a>.
        </p>
<link rel="stylesheet"
      href="https://emailoctopus.com/bundles/emailoctopuslist/css/1.6/form.css"
>
<div class="emailoctopus-form-wrapper emailoctopus-form-default emailoctopus-form-wrapper-large"
     style="font-family: Arial, &quot;Helvetica Neue&quot;, Helvetica, sans-serif; color: rgb(26, 26, 26);"
>
  <h2 class="emailoctopus-heading">
    Subscribe to Secret Breakfast
  </h2>
  <p class="emailoctopus-success-message">
  </p>
  <p class="emailoctopus-error-message">
  </p>
  <form action="https://emailoctopus.com/lists/d1be8ca3-0c88-11eb-a3d0-06b4694bee2a/members/embedded/1.3s/add"
        method="post"
        data-message-success="You made it to Secret Breakfast! Check your email for confirmation"
        data-message-missing-email-address="Your email address is required."
        data-message-invalid-email-address="Your email address looks incorrect, please try again."
        data-message-bot-submission-error="This doesn't look like a human submission."
        data-message-consent-required="Please check the checkbox to indicate your consent."
        data-message-invalid-parameters-error="This form has missing or invalid fields."
        data-message-unknown-error="Sorry, an unknown error has occurred. Please try again later."
        class="emailoctopus-form"
        data-sitekey="6LdYsmsUAAAAAPXVTt-ovRsPIJ_IVhvYBBhGvRV6"
  >
    <div class="emailoctopus-form-row">
      <label for="field_0">
        Email address
      </label>
      <input id="field_0"
             name="field_0"
             type="email"
             placeholder
             required="required"
      >
    </div>
    <div aria-hidden="true"
         class="emailoctopus-form-row-hp"
    >
      <input type="text"
             name="hpc4b27b6e-eb38-11e9-be00-06b4694bee2a"
             tabindex="-1"
             autocomplete="nope"
      >
    </div>
    <div class="emailoctopus-form-row-subscribe">
      <input type="hidden"
             name="successRedirectUrl"
      >
      <button type="submit"
              style="background-color: rgb(223, 36, 91); color: rgb(255, 255, 255); font-family: inherit;"
      >
        Subscribe
      </button>
    </div>
  </form>
</div>
<script src="https://emailoctopus.com/bundles/emailoctopuslist/js/1.6/form-recaptcha.js">
</script>
<script src="https://emailoctopus.com/bundles/emailoctopuslist/js/1.6/form-embed.js">
</script>
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
