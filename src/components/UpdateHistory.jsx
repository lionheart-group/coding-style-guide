import React from 'react';
import Translate from '@docusaurus/Translate';

import styles from './UpdateHistory.module.css';

const histories = [
    {
        version: 'v0.0.5',
        date: '2022-08-04',
        items: [
            {
                label: <Translate>Prepared JavaScript library list</Translate>,
                link: 'docs/javascript'
            },
        ]
    },
    {
        version: 'v0.0.4',
        date: '2022-06-30',
        items: [
            {
                label: <Translate>Added Node.js(Volta) installing instruction</Translate>,
                link: 'docs/env/node'
            },
        ]
    },
    {
        version: 'v0.0.3',
        date: '2022-05-02',
        items: [
            {
                label: <Translate>Fixed VSCode plugin instruction (stylelint and eslint's config syntax was inverted)</Translate>,
                link: 'docs/env/editor/vscode'
            },
        ]
    },
    {
        version: 'v0.0.2',
        date: '2022-03-31',
        items: [
            {
                label: <Translate>Added Dnsmasq instructions</Translate>,
                link: 'docs/env/dnsmasq'
            },
        ]
    },
    {
        version: 'v0.0.1',
        date: '2022-03-17',
        items: [
            {
                label: <Translate>Added image exporting resolution instructions</Translate>,
                link: 'docs/html/image/export#for-supporting-high-resolution-display'
            },
            {
                label: <Translate>Updated image exporting WebP type instructions</Translate>,
                link: 'docs/html/image/export#webp-webp'
            },
            {
                label: <Translate>{`Added coding tips for <picture> tag`}</Translate>,
                link: 'docs/html/tips/picture'
            },
            {
                label: <Translate>Added coding tips for Flex box layout</Translate>,
                link: 'docs/html/tips/flex'
            },
        ]
    },
];

const UpdateHistoryItem = ({item}) => {
    return (
        <dd className={styles.updateHistory__list__data}><a href={item.link}>{item.label}</a></dd>
    )
}

const UpdateHistorySection = ({version}) => {
    return (
        <>
            <dt className={styles.updateHistory__list__title}>
                <small className={styles.updateHistory__list__title__version}>{version.version}</small>
                <span className={styles.updateHistory__list__title__date}>{version.date}</span>
            </dt>

            {version.items.map((item, i) => (<UpdateHistoryItem key={i} item={item} />))}
        </>
    )
}

const UpdateHistory = () => {
    return (
        <section className={styles.updateHistory}>
            <div className="container">
                <h2><Translate>Updated History</Translate></h2>
                <dl className={styles.updateHistory__list}>
                    {histories.map(version => (<UpdateHistorySection key={version.version} version={version} />))}
                </dl>
            </div>
        </section>
    )
}

export default UpdateHistory;