import React from 'react';
import { FC } from 'react';
import { NavLink, Link } from 'react-router-dom';
import LinkButtonAdj from '../../components/LinkButtonAdj';
import { AiOutlineDownload } from 'react-icons/ai';

export const Recursion: FC = () => {  
    return (
        <body>
            <div className='slides_wrapper'>
                <iframe 
                    title="Slide" 
                    src="https://docs.google.com/presentation/d/e/2PACX-1vQt-xpz41dWRZpc-3_P7jwRJWAabvhBfV6-eJmsjHWruNxqyyjw_oB6o9fzY91I08Oe7aDbybhzGGwt/embed?start=false&loop=false&delayms=3000"
                    width="1200" height="675"
                    loading='lazy'>    
                </iframe>
            </div>
        </body>
    )
}