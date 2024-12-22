import styles from './TASectionRow.module.scss';
import React from "react";
import {TATimePeriod} from "../time/TATimePeriod";

export interface TASectionRowProps {
    children: React.ReactNode;
    from?: string;
    to?: string;
}

export const TASectionRow = (props: TASectionRowProps) => {
    return (
      <div className={styles.sectionRow}>
          <div className={styles.row}>
              <div className={styles.time}>
                  <TATimePeriod from={props.from} to={props.to}/>
              </div>
              <div className={styles.data}>
                  {props.children}
              </div>
          </div>
          <div className={styles.pointerBox}>
              <div className={styles.pointer}></div>
          </div>
      </div>
    );
}