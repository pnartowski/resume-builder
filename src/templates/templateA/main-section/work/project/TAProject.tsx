import {CompanyProject} from "../../../../../model";
import {TAScope} from "../../scope/TAScope";
import styles from './TAProject.module.scss';
import {TAProjectSkills} from "../skill/TAProjectSkills";

export interface TAProjectProps {
    project: CompanyProject;
}

export const TAProject = (props: TAProjectProps) => {


    return (
        <div className={styles.projectBox}>
            <div className={styles.projectName}>{props.project.name}</div>
            <TAScope scope={props.project.scope}/>
            <TAProjectSkills skills={props.project.skills}/>
        </div>
    );
}