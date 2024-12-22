import styles from './TemplateA.module.scss';
import {TAHeader} from "./header/TAHeader";
import {TAMainSection} from "./main-section/TAMainSection";
import {TASectionRow} from "./main-section/row/TASectionRow";
import {ResumeData} from '../../model';
import {TAWorkHistory} from "./main-section/work/TAWorkHistory";
import {TAEducation} from "./main-section/education/TAEducation";
import {TAInfo} from "./info/TAInfo";
import {TASkills} from "./skills/TASkills";
import {TALangs} from "./lang/TALangs";
import {IconType} from "./section-image/SectionImage";
import {TAHobby} from "./hobby/TAHobby";

export interface TemplateProps {
    data: ResumeData;
}

export const TemplateA = (props: TemplateProps) => {


    return (
        <div className={styles.templateA}>
            <div className={styles.rightPanel}>
                <TAHeader name={props.data.info.name} position={props.data.info.position}/>
                <TAMainSection type={IconType.Summary} title="Summary">
                    <TASectionRow>
                        <div>
                            {props.data.summary}
                        </div>
                    </TASectionRow>
                </TAMainSection>
                <TAWorkHistory experience={props.data.experience}/>
                <TAEducation education={props.data.education}/>
            </div>
            <div className={styles.leftPanel}>
                <TAInfo info={props.data.info}/>
                <TASkills skills={props.data.skills}/>
                <TALangs langs={props.data.langs}/>
                <TAHobby hobby={props.data.hobby}/>
            </div>
        </div>
    );
}
