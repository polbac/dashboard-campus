import * as React from 'react';
import * as style from './style.css';


export default class Button extends React.PureComponent<{ text: string }, {}> {

    render(): any {
        const { text } = this.props as any;
        return (
            <button className={style.button}>
                {text}
            </button>    
        );
    }

}