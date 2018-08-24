import * as React from 'react';
import { Post } from 'app/models';

import * as style from './style.css';
import Avatar from 'app/components/avatar';

export interface PostPropsType {
    data: Post;
}

export default class PostComponent extends React.Component<PostPropsType, {}> {

    render(): any {
        const { data } = this.props;
        return (
            <article className={style.post}>
                { data.text ? (
                    <p className={style.title}>
                        { data.text }
                    </p>
                ) : '' }
                <Avatar user={data.author}/>
            </article>   
        );
    }

}