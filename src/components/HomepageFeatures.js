import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Translate from '@docusaurus/Translate';

const FeatureList = [
  {
    title: <Translate>Environment</Translate>,
    link: './docs/env',
  },
  {
    title: <Translate>HTML</Translate>,
    link: './docs/html',
  },
  {
    title: <Translate>JavaScript</Translate>,
    link: './docs/javascript',
  },
  {
    title: <Translate>WordPress</Translate>,
    link: './docs/wordpress',
  },
  {
    title: <Translate>Fegg</Translate>,
    link: './docs/fegg',
  },
];

function Feature({Svg, title, link}) {
  return (
    <>
      {link ? <a href={link} className={styles.features__item}>{title}</a> : <span className={styles.features__item}>{title}</span>}
    </>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.features__inner}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
