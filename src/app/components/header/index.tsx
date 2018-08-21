import * as React from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux'
import { pluck } from 'app/utils/pluck';


@connect(pluck('session'))
export default class Header extends React.Component<{}, {}> {

    render(): any {
        return (
            <div>
                <Button color="danger">Danger!</Button>
            </div>    
        );
    }

}