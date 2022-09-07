import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  const like = () => {
    fetch(new URL(`${window.location.origin}/api/like/add`), { method: 'POST'})
      .then(updateCount)
  };

  const [count, setCount] = React.useState(0);

  const updateCount = React.useCallback(() => {
    fetch(new URL(`${window.location.origin}/api/like`), { method: 'GET'})
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setCount(data?.length);
      });
  }, []);

  React.useEffect(() => {
    updateCount();
  }, []);

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Hello from {siteConfig.title}!</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            onClick={like}
          >
            点赞
          </Link>
        </div>
        <div>目前点赞数：{count}</div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="lucaschang 的文档站">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
