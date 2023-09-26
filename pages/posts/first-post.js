// Next.js imports
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
    </Layout>
  );
}

// this is how you create different pages in Next.js
// pages directory -> posts -> .js file
// this route is /pages/posts/first-post.js

// client-side navigation means page transition happens with JavaScript
// faster than default browser navigation

// you create routes as files under pages and use the built-in Link component. No routing libraries are required.

// note: if you need to link to an external page outside the Next.js app, just use an <a> tag without Link.
