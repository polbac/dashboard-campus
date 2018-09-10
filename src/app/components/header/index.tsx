import * as React from 'react';
import { connect } from 'react-redux'
import { pluck } from 'app/utils/pluck';
import * as style from './style.css';

@connect(pluck('session'))
export default class Header extends React.Component<{}, {}> {

    render(): any {
        return (
            <header className={style.header}>
                <img src="/assets/images/eduly.png" alt=""/><span>BOARD</span>
            </header>    
        );
    }

}