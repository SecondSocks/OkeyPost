import { useState } from 'react';
import styles from './NavigationBar.module.scss'
import { NavButton } from './Button';

export function NavigationBar() {
    const [ cubes, setCubes ] = useState(3);
    const [ index, setIndex ] = useState(-1);

    return (
        <div className={styles.container}>
            <button>←</button>
            {[...Array(cubes).keys()].map((_, i) =>
                <button
                    key={i}
                    onClick={() => setIndex(i)}
                    style={{ borderColor: index === i ? 'green' : 'gray' }}>
                {i+1}</button>
            )}
            <button>→</button>
        </div>
    )
}
