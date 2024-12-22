import styles from './SectionImage.module.scss';
import React from "react";
import { ReactComponent as Summary} from '../../../assets/summary-check.svg';
import { ReactComponent as WorkHistory} from '../../../assets/briefcase.svg';
import { ReactComponent as Education} from '../../../assets/graduation-cap.svg';
import { ReactComponent as Skills} from '../../../assets/bolt.svg';
import {ReactComponent as PersonalInfo} from '../../../assets/user.svg';
import {ReactComponent as Language} from '../../../assets/language-exchange.svg';
import {ReactComponent as Hobby} from '../../../assets/puzzle-alt.svg';

export enum IconType {
    Summary,
    WorkHistory,
    Education,
    Skills,
    PersonalInfo,
    Language,
    Hobby,
}

export interface SectionImageProps {
    type?: IconType;
}

export const SectionImage = (props: SectionImageProps) => {

    const buildIcon = (type: IconType | undefined) => {
        switch (type) {
            case IconType.Summary:
                return <Summary className={styles.icon}/>;
            case IconType.WorkHistory:
                return <WorkHistory className={styles.icon}/>;
            case IconType.Education:
                return <Education className={styles.icon}/>;
            case IconType.Skills:
                return <Skills className={styles.icon}/>;
            case IconType.PersonalInfo:
                return <PersonalInfo className={styles.icon}/>;
            case IconType.Language:
                return <Language className={styles.icon}/>;
            case IconType.Hobby:
                return <Hobby className={styles.icon}/>
            default:
                return null;
        }
    }

    return (
        <div className={styles.sectionImage}>
            {buildIcon(props.type)}
        </div>
    );
}