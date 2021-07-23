import React, { useEffect, useState } from 'react';

const Badge = ({children, color}) => {
    const [background, updateBackground] = useState('rgb(185, 28, 28)')
    const [textColor, updateTextColor] = useState('white')

    useEffect(() => {
        switch (color) {
            case 'red':
                updateBackground('rgb(185, 28, 28)');
                updateTextColor('white');
                break;
            case 'blue':
                updateBackground('rgb(29, 78, 216)');
                updateTextColor('white');
                break;
            case 'green':
                updateBackground('rgb(4, 120, 87)');
                updateTextColor('white');
                break;
            case 'yellow':
                updateBackground('rgb(252, 211, 77)');
                updateTextColor('rgb(55, 65, 81)');
                break;
            case 'white':
                updateBackground('rgb(229, 231, 235)');
                updateTextColor('rgb(55, 65, 81)');
                break;
        }
    }, [color])

    return (
        <span style={{
            background,
            color: textColor,
            fontSize: '.9em',
            padding: '.15em .35em',
            fontWeight: 'bold',
            borderRadius: '.2em',
            marginLeft: '.2em'
        }}>
            {children}
        </span>
    );
}

export default Badge;