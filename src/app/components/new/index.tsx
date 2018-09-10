import * as React from 'react';
import * as style from './style.css';

export default class NewComponent extends React.Component<{}, {}> {

    render(): any {
        
        return (
            <form className={style.new}>
                <p>NUEVO POST!</p>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </form>   
        );
    }

}