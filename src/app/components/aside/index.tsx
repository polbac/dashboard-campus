import * as React from 'react';
import * as styles from './styles.css';
import { connect } from 'react-redux';
import { Filter } from 'app/models';

export type AsidePropTypes = {
    filters: Filter[]
}

@connect(store => store)
export default class Aside extends React.PureComponent<AsidePropTypes, {}> {

    render(): any {
        const { filters } = this.props;

        return (
            <aside className={styles.aside}>
                <div className={styles.title}>Filtros</div>
                {filters.map((filter: any) => <div className={styles.filter}>{filter.text}</div>)}
            </aside>
        );
    }

}