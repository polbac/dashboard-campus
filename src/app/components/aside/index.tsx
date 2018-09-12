import * as React from 'react';
import * as styles from './styles.css';
import { connect } from 'react-redux';
import { Filter } from 'app/models';
import { filtersFetch } from 'app/actions';

export type AsidePropTypes = {
    filters?: Filter[]
}

@connect(store => store)
export default class Aside extends React.PureComponent<AsidePropTypes, {}> {

    componentWillMount = () => {
        const { dispatch } = this.props as any;

        dispatch(filtersFetch());
    }

    render(): any {
        const { filters } = this.props;

        return (
            <aside className={styles.aside}>
                <div className={styles.title}>Filtros</div>
                {filters && filters.map((filter: any) => <div style={{ color: filter.color }} className={styles.filter}>{filter.text}</div>)}
            </aside>
        );
    }

}