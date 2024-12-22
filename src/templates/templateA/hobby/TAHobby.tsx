import {IconType} from "../section-image/SectionImage";
import {TASidePanelHeader} from "../panel/header/TASidePanelHeader";
import style from "./TAHobby.module.scss";

export interface TAHobbyProps {
    hobby: string[];
}

export const TAHobby = (props: TAHobbyProps) => {

    const hobbies = props.hobby && props.hobby.map(item => <div className={style.hobbyItem}>{item}</div>);
    return (
      <div className={style.hobbyBox}>
          <TASidePanelHeader title="Hobby" type={IconType.Hobby}/>
          {hobbies}
      </div>
    );
}