import React from 'react';
import Translate from '@docusaurus/Translate';

import styles from './UpdateHistory.module.css';

const histories = [
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

            {version.items.map(item => (<UpdateHistoryItem item={item} />))}
        </>
    )
}

const UpdateHistory = () => {
    return (
        <section className={styles.updateHistory}>
            <div className="container">
                <h2><Translate>Updated History</Translate></h2>
                <dl className={styles.updateHistory__list}>
                    {histories.map(version => (<UpdateHistorySection version={version} />))}
                </dl>
            </div>
        </section>
    )
}

export default UpdateHistory;