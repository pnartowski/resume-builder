import styles from './TAProjectSkills.module.scss';

export interface TAProjectSkillsProps {
    skills: string[];
}

export const TAProjectSkills = (props: TAProjectSkillsProps) => {

    const skillMapper = (skills: string[]) => skills ? skills.map(item => <div
        className={styles.skill}>{item}</div>) : null;

    const skillsWrapper = (skills: string[]) => skills ? <div className={styles.skillWrapper}>{skillMapper(skills)}</div> : null;


    return (
        <>
            {skillsWrapper(props.skills)}
        </>
    );
}