import React from 'react';
import { FC } from 'react';
import { NavLink, Link } from 'react-router-dom';
import LinkButtonAdj from '../../components/LinkButtonAdj';
import { AiOutlineDownload } from 'react-icons/ai';

export const Mutability: FC = () => {  
    return (
        <body>
            <div className='slides_wrapper'>
                <iframe 
                    title="Slide" 
                    src="https://docs.google.com/presentation/d/e/2PACX-1vQWMr6ayQ8AX4dX6RzkJTVbhWW39SPSrMkH65_yLd8IQjQAkyVPEwvwFIFGI0IPOI-Z7hVWelMRW65X/embed?start=false&loop=false&delayms=3000" 
                    width="1200" height="675"
                    loading='lazy'>    
                </iframe>
            </div>
        </body>
    )
}