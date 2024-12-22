import styles from './TAEducation.module.scss';
import {TAMainSection} from "../TAMainSection";
import {Education} from "../../../../model";
import {TASectionRow} from "../row/TASectionRow";
import {IconType} from "../../section-image/SectionImage";

export interface TAEducationProps {
    education: Education[];
}

export const  TAEducation = (props: TAEducationProps) => {

    const school = (edu: Education) => <TASectionRow from={edu.from} to={edu.to}>
        <div className={styles.educationSchool}>{edu.school}</div>
        <div className={styles.educationTitle}>{edu.title}</div>
    </TASectionRow>

    const schoolMapper = (edus: Education[]) => edus.map(edu => school(edu));

    return (
      <TAMainSection type={IconType.Education} title="Education">
          {schoolMapper(props.education)}
      </TAMainSection>
    );
}