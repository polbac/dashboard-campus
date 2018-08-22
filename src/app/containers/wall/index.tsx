import * as React from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux'
import { wallFetch } from 'app/actions';

interface WallComponentPropTypes {
    dispatch: any;
}

@connect()
export default class WallComponent extends React.Component<WallComponentPropTypes, {}> {

    componentDidMount(){
        const { dispatch } = this.props;

        dispatch(
            wallFetch([])
        );
    }

    render(): any {
        return (
            <div>
                Board
            </div>    
        );
    }

}