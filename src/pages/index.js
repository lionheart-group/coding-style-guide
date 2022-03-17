import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import UpdateHistory from '../components/UpdateHistory';

import Translate, {translate} from '@docusaurus/Translate';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title"><Translate>{siteConfig.title}</Translate></h1>
        <p className="hero__subtitle"><Translate>{siteConfig.tagline}</Translate></p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={translate({message: `Hello from {title}`, id: 'homepage.layout.title'}, {title: translate({message: siteConfig.title})})}
      description={translate({message: 'Description will go into a meta tag in <head />', id: 'homepage.layout.description'})}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <UpdateHistory />
      </main>
    </Layout>
  );
}
