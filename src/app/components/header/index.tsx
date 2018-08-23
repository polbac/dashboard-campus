import * as React from 'react';
import { connect } from 'react-redux'
import { pluck } from 'app/utils/pluck';


@connect(pluck('session'))
export default class Header extends React.Component<{}, {}> {

    render(): any {
        return (
            <div>
                Header
            </div>    
        );
    }

}