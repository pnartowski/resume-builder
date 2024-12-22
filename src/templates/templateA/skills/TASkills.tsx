import {TASidePanelHeader} from "../panel/header/TASidePanelHeader";
import style from './TASkills.module.scss';
import {IconType} from "../section-image/SectionImage";

export interface TASkillsProps {
    skills: string[];
}

export const TASkills = (props: TASkillsProps) => {

    const skills = props.skills.map(item => <div className={style.skillItem}>{item}</div>);
    return (
        <div className={style.skillBox}>
            <TASidePanelHeader title="Skills" type={IconType.Skills}/>
            {skills}
        </div>
    );
}