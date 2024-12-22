import {TASidePanelHeader} from "../panel/header/TASidePanelHeader";
import {Language} from "../../../model";
import style from './TALangs.module.scss';
import {IconType} from "../section-image/SectionImage";

export interface TALangsProps {
    langs: Language[];
}

export const TALangs = (props: TALangsProps) => {

    const languages = props.langs.map(item => <div className={style.langBox}>
            <div className={style.langName}>{item.name} :</div>
            <div className={style.langLevel}>{item.level}</div>
        </div>
    );

    return (
      <div className={style.sidePanelContainer}>
          <TASidePanelHeader type={IconType.Language} title="Languages"/>
          {languages}
      </div>
    );
}