import styles from './TAScope.module.scss';

export interface TAScopeProps {
    scope: string[];
}

export const TAScope = (props: TAScopeProps) => {

    const scopeItemsMapper = (scope: string[]) => scope.map(item => (<li>{item}</li>));
    const scopeMapper = (scope: string[]) => scope && scope.length > 0 ? <ul className={styles.listWrapper}>{scopeItemsMapper(scope)}</ul> : null;

    return (
      <>
          {scopeMapper(props.scope)}
      </>
    );
}