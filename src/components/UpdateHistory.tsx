import React from 'react';
import Translate from '@docusaurus/Translate';

import styles from './UpdateHistory.module.css';

type HistoryItem = {
    label: React.ReactNode,
    link?: string
}
type HistoryVersion = {
    version: string,
    date: string,
    items: HistoryItem[]
}

const histories: HistoryVersion[] = [
    {
        version: 'v0.0.7',
        date: '2022-11-28',
        items: [
            {
                label: <Translate>Added PHPStorm information partialy</Translate>,
                link: 'docs/env/editor/phpstorm'
            },
            {
                label: <Translate>Revised some HTML instruction's mistake</Translate>,
            },
            {
                label: <Translate>Updated task runner instruction</Translate>,
                link: 'docs/html/task-runner/scripts/optimize-image'
            },
            {
                label: <Translate>Added validation library introduction for Validation</Translate>,
                link: 'docs/javascript/validation'
            },
        ]
    },
    {
        version: 'v0.0.6',
        date: '2022-09-09',
        items: [
            {
                label: <Translate>Added coding tips for Grid layout</Translate>,
                link: 'docs/html/tips/grid'
            },
            {
                label: <Translate>Added coding tips for Aspect Ratio property</Translate>,
                link: 'docs/html/tips/aspect-ratio'
            },
            {
                label: <Translate>Added coding tips for :has selector</Translate>,
                link: 'docs/html/tips/has'
            },
            {
                label: <Translate>Added coding tips for Accordion</Translate>,
                link: 'docs/html/tips/accordion'
            },
        ]
    },
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

const UpdateHistoryItem: React.FC<{item: HistoryItem}> = ({item}) => {
    return (
        <dd className={styles.updateHistory__list__data}>
            {item.link ? <a href={item.link}>{item.label}</a> : item.label}
        </dd>
    )
}

const UpdateHistorySection: React.FC<{version: HistoryVersion}> = ({version}) => {
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

const UpdateHistory: React.FC = () => {
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