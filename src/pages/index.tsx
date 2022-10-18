import React, { useCallback, useEffect, useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import { getFingerprint } from '../utils/fingerprint';
import { getLikeCount, getLikeStatus, likeWebpage } from '../api/webpageLike';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  const like =  async () => {
    let id = await getFingerprint();
    const liked = await getLikeStatus(id);
    if (!liked) {
      likeWebpage(id)
    }
  };

  const [count, setCount] = useState(0);

  const updateCount = useCallback(() => {
    getLikeCount()
      .then(count => {
        setCount(count ?? 0);
      });
  }, []);

  useEffect(() => {
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
