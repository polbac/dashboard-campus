import * as React from 'react';
import { connect } from 'react-redux'
import { pluck } from 'app/utils/pluck';
import * as style from './style.css';

@connect(pluck('session'))
export default class Session extends React.Component<{}, {}> {

    render(): any {
        return (
            <div className={style.session}>
                
            </div>    
        );
    }

}