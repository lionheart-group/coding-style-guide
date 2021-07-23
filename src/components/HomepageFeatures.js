import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Environment',
    description: (
      <>
        Basic environment
      </>
    ),
    link: './docs/env',
  },
  {
    title: 'HTML',
    description: (
      <>
        HTML Coding Rule
      </>
    ),
    link: './docs/html',
  },
  {
    title: 'WordPress',
    description: (
      <>
        WordPress Rule
      </>
    ),
    link: './docs/wordpress',
  },
  {
    title: 'Fegg',
    description: (
      <>
        Fegg Document and Rule
      </>
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
        {link ? <a href={link}>Detail</a> : ''}
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
