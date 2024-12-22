import styles from './TAHeader.module.scss'

export interface TAHeader {
    name: string;
    position: string;
}

export const TAHeader = (props: TAHeader) => {
    return (
        <div className={styles.header}>
            <div className={styles.image}></div>
            <div className={styles.headerData}>
                <div className={styles.name}>{props.name}</div>
                <div className={styles.position}>{props.position}</div>
            </div>
        </div>
    );
}