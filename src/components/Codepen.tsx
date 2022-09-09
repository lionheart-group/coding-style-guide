import React, { CSSProperties, useEffect, useRef, useMemo } from "react";
import { v4 as uuidv4 } from 'uuid'

const CODEPEN_SCRIPT = 'https://cpwebassets.codepen.io/assets/embed/ei.js';

const defaultStyle: React.CSSProperties = {
    height: 300,
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2 solid',
    margin: '1em 0',
    padding: '1em',
}

type Props = {
    hash: string;
    user: string;
    defaultTab?: string;
    height?: number;
    preview?: boolean;
    editable?: boolean;
    themeId?: string | false;
    style?: CSSProperties;
    title?: string;
}
export const Codepen: React.FC<Props> = ({
    hash,
    user,
    defaultTab = 'css,result',
    height = 300,
    preview = true,
    editable = false,
    themeId = false,
    style = {},
    title = '',
}) => {
    const isMounted = useRef(false);
    const scriptID = useRef(uuidv4());

    const loadScript = () => {
        const script = document.createElement('script');
        script.src = CODEPEN_SCRIPT;
        script.async = true;
        script.id = scriptID.current;

        document.body.appendChild(script);
    }

    useEffect(() => {
        if (isMounted.current) {
            return;
        }
        isMounted.current = true;

        loadScript();

        return () => {
            document.body.removeChild(document.getElementById(scriptID.current));
            isMounted.current = false;
        }
    }, [])

    const props = useMemo(() => {
        const result: React.ComponentProps<'p'> = {};

        if (hash) {
            result['data-slug-hash'] = hash;
        }
        if (user) {
            result['data-user'] = user;
        }
        if (defaultTab) {
            result['data-default-tab'] = defaultTab;
        }
        if (height) {
            result['data-height'] = height;
        }
        if (preview) {
            result['data-preview'] = preview;
        }
        if (editable) {
            result['data-editable'] = editable;
        }
        if (themeId) {
            result['data-theme-id'] = themeId;
        }

        return result;
    }, [])

    return (
        <>
            <p
                className="codepen"
                {...props}
                style={{...defaultStyle, ...style}}
            >
                <span>
                    See the Pen <a href={`https://codepen.io/${user}/pen/${hash}`}>{title}</a> by {user} (<a href={`https://codepen.io/${user}`}>@{user}</a>)
                    on <a href="https://codepen.io">CodePen</a>.
                </span>
            </p>
        </>
    );
}