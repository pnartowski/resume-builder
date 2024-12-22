import styles from './TATimePeriod.module.scss';

export interface TATimePeriodProps {
    from?: string;
    to?: string;
}

export const TATimePeriod = (props: TATimePeriodProps) => {
    return (
        <div className={styles.timePeriodBox}>
            { props.from && (<div>{props.to}</div>) }
            { props.from && props.to && (<>
                <div className={styles.dot}/>
                <div className={styles.dot}/>
                <div className={styles.dot}/>
            </>) }
            { props.to && (<div>{props.from}</div>) }
        </div>
    );
}