import * as React from 'react';
import * as style from './style.css';
import Button from 'app/components/button';
import Icon from 'react-icons-kit';
import { ic_add_a_photo } from 'react-icons-kit/md/ic_add_a_photo';
import { ic_file_upload } from 'react-icons-kit/md/ic_file_upload';


export default class NewComponent extends React.Component<{}, {}> {

    render(): any {
        
        return (
            <form className={style.new}>
                <p>NUEVO POST!</p>
                <textarea name="" id="" cols={30} rows={10} />
                <div className={style.type}>
                    <span className={style.iconButton}>
                        <Icon icon={ic_add_a_photo}/> 
                    </span>
                    <span className={style.iconButton}>
                        <Icon icon={ic_file_upload}/> 
                    </span>

                    <span className={style.iconButton} dangerouslySetInnerHTML={{ __html: '{ }' }}>
                        
                    </span>
                </div>
                <Button text='ENVIAR' />
            </form>   
        );
    }

}