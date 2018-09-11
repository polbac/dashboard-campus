import * as React from 'react';
import { connect } from 'react-redux'
import { pluck } from 'app/utils/pluck';
import * as style from './style.css';

@connect(pluck('session'))
export default class Session extends React.Component<{ session: Session }, {}> {

    render(): any {
        const { avatar, username } = (this.props as any).session;

        return (
            <div className={style.session}>
                <img className={style.image} src={avatar} />
                <p className={style.username}>{username}</p>
            </div>    
        );
    }

}