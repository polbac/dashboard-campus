import * as React from 'react';
import { Post } from 'app/models';

import './style.css';

export interface PostPropsType {
    data: Post;
}

export default class PostComponent extends React.Component<PostPropsType, {}> {

    render(): any {
        const { data: { text } } = this.props;
        return (
            <article className='post'>
                { text ? (
                    <p>
                        { text }
                    </p>
                ) : '' }
            </article>   
        );
    }

}