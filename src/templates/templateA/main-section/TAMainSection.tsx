import styles from './TAMainSection.module.scss';
import React from "react";
import {IconType, SectionImage} from "../section-image/SectionImage";

export interface TAMainSectionProps {
    children: React.ReactNode;
    title: string;
    type?: IconType;
};

export const TAMainSection = (props: TAMainSectionProps) => {

    return (
        <div className={styles.mainSection}>
            <div className={styles.sectionHeader}>
                <div className={styles.sectionImage}>
                    <SectionImage type={props.type}/>
                </div>
                <div className={styles.sectionTitle}>{props.title}</div>
            </div>
            {props.children}
            <div className={styles.leftPanelLineSeparator}></div>
        </div>
    );
}