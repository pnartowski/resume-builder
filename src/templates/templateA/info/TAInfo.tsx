import styles from './TAInfo.module.scss';
import {PersonalData} from "../../../model";
import {TASidePanelHeader} from "../panel/header/TASidePanelHeader";
import '../../../styles.scss'
import {IconType} from "../section-image/SectionImage";

export interface TAInfoProps {
    info: PersonalData;
}

export const TAInfo = (props: TAInfoProps) => {

    return (
        <div className={styles.personalInfo}>
            <TASidePanelHeader type={IconType.PersonalInfo} title="Personal Info"/>
            <div className={styles.label}>email</div>
            <div className={styles.value}>{props.info.email}</div>
            <div className={styles.label}>phone</div>
            <div className={styles.value}>{props.info.phone}</div>
        </div>
    );
}