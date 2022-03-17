import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Translate from '@docusaurus/Translate';

const FeatureList = [
  {
    title: <Translate>Environment</Translate>,
    description: (
      <Translate>Basic environment</Translate>
    ),
    link: './docs/env',
  },
  {
    title: <Translate>HTML</Translate>,
    description: (
      <Translate>HTML Coding Rule</Translate>
    ),
    link: './docs/html',
  },
  {
    title: <Translate>WordPress</Translate>,
    description: (
      <Translate>WordPress Rule</Translate>
    ),
    link: './docs/wordpress',
  },
  {
    title: <Translate>Fegg</Translate>,
    description: (
      <Translate>Fegg Document and Rule</Translate>
    ),
    link: './docs/fegg',
  },
];

function Feature({Svg, title, description, link}) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        {link ? <a href={link}><Translate>Detail</Translate></a> : ''}
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
