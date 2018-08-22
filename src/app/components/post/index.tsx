import * as React from 'react';
import { Button } from 'reactstrap';
import { Post } from 'app/models';

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