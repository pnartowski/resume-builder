import {TAMainSection} from "../TAMainSection";
import {TASectionRow} from "../row/TASectionRow";
import {Company, CompanyProject} from "../../../../model";
import {TAScope} from "../scope/TAScope";
import {TAProject} from "./project/TAProject";
import {TAProjectSkills} from "./skill/TAProjectSkills";
import {IconType} from "../../section-image/SectionImage";

export interface TAWorkHistoryProps {
    experience: Company[];
}

export const TAWorkHistory = (props: TAWorkHistoryProps) => {

    const projectMapper = (projects: CompanyProject[]) => projects
        ? projects.map(prj => <TAProject project={prj}/>)
        : null;

    const workHistory = props.experience && props.experience.length > 0 &&
        props.experience.map(company => (
            <TASectionRow from={company.from} to={company.to}>
                <b>{company.name}</b>
                <TAScope scope={company.scope}/>
                {projectMapper(company.projects)}
                <TAProjectSkills skills={company.skills}/>
            </TASectionRow>
        ));


    return (
        <TAMainSection type={IconType.WorkHistory} title="Work history">
            {workHistory}
        </TAMainSection>
    );
}