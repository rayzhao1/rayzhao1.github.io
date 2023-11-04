import React from 'react';
import { FC } from 'react';
import LinkButtonAdj from '../components/LinkButtonAdj';

export const QNA: FC = () => {
    const style = {
        marginTop: '38rem'
    };

    return (
        <main>
            <div className='center' style={ style }>
                <iframe 
                    title="Slide" 
                    loading = 'lazy'
                    src="https://docs.google.com/document/d/e/2PACX-1vTVEsFMqbGSl9wXCHnid10tOe1JIliMYPvQ4YSpICnESCvOaOjwqWLQr5uC1bVkxjnI0ZrP9Zmz7JYo/pub?embedded=true" allowFullScreen 
                    width="800px" height="1200px">

                </iframe>
            </div>   
        </main>
    )
};
