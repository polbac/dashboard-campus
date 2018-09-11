import * as React from 'react';
import { connect } from 'react-redux'
import { wallFetch } from 'app/actions';
import PostComponent from 'app/components/post';
import { pluck } from 'app/utils/pluck';
import { Post } from 'app/models';
import NewComponent from 'app/components/new';
import * as style from './style.css';
import Aside from 'app/components/aside';

type WallComponentPropTypes = {
    wall?: Post[],
}

@connect(pluck('wall'))
export default class WallComponent extends React.Component<WallComponentPropTypes, {}> {

    componentDidMount(){
        const { dispatch } = this.props as any;

        dispatch(wallFetch([]));
    }

    render(): any {
        const { wall } = this.props;
        return (
            <main>
            <section className={style.wall}>
                <NewComponent />
                { wall ? wall.map( post => <PostComponent data={post} />) : null } 
            </section>    
            <Aside />
            </main>
        );
    }

}