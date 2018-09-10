import * as React from 'react';
import { User } from 'app/models';
import * as styles from './styles.css';

export type AvatarPropTypes = {
    user?: User
}

export default class Avatar extends React.PureComponent<AvatarPropTypes, {}> {

    render(): any {
        const { user } = this.props;
        return (
            <div>
                {user && <div className={styles.image} style={{ background: `url(${user.avatar})` }} />}
            </div>
        );
    }

}