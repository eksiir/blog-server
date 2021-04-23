import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Date from '../components/date';
import { getSortedPostsData } from '../lib/posts';
import { GetStaticProps } from 'next';

const getPath = (id: string, url?: string): string => url ? url : `/posts/${id}`;

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
};

export default function Home({
  allPostsData
}: {
  allPostsData: {
    id: string,
    title: string,
    date: string,
    url?: string
  }[]
}): JSX.Element {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Here are a set of blogs I would like to share with you.</p>
        <p>
          If you want to stay up-to-date, check out the{' '}
          <a href="https://app.getbambu.com/feed">Latest</a>{' '}
          in the series.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blogs</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, url }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={getPath(id, url)}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
