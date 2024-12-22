import styles from './TASidePanelHeader.module.scss';
import {IconType, SectionImage} from "../../section-image/SectionImage";

export interface TASidePanelHeaderProps {
    title: string;
    type?: IconType;
}

export const TASidePanelHeader = (props: TASidePanelHeaderProps) => {
    return (
        <div className={styles.headerBox}>
            <SectionImage type={props.type}/>
            <div className={styles.headerTitle}>{props.title}</div>
        </div>
    );
}