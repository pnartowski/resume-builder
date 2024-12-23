import {CompanyProject, ResumeData} from "../../model";

export interface ContextGeneratorProps {
    data: ResumeData;
}

export const ContextGenerator = (props: ContextGeneratorProps) => {

    const projectMapper = (prjs: CompanyProject[]) => prjs.map(((prj, index) => <div>-
            project {index + 1} responsibilities : {prj.scope.join(", ")} skills: {prj.skills.join(", ")}
        </div>)
    );

    const experience = props.data.experience.map(company=>{
       if(company.projects) {
           return <div>Work experience {company.from} - {company.to} {projectMapper(company.projects)}</div>;
       }

       return <div>
           <div>Work experience {company.from} - {company.to} responsibilities : {company.scope.join(", ")} skills: {company.skills.join(", ")}</div>
       </div>
    });

    return (
        <div>
            <div>Applying on position : {props.data.info.position}</div>
            {experience}
      </div>
    );
}