import React from 'react';
import { FC } from 'react';
import { NavLink, Link } from 'react-router-dom';
import LinkButtonAdj from '../../components/LinkButtonAdj';
import { AiOutlineDownload } from 'react-icons/ai';

export const TreeADT: FC = () => {  
    return (
        <body>
            <div className='slides_wrapper'>
                <iframe 
                    title="Slide" 
                    src="https://docs.google.com/presentation/d/e/2PACX-1vRvX0Jf0VAfnNCzsaS1RB1cEMJm1J-tdmakk0CZtfVPyuT5pNeLHcFn32fu8ncqs0H6O5YfvEKJGXkl/embed?start=false&loop=false&delayms=3000"
                    width="1200" height="675"
                    loading='lazy'>    
                </iframe>
            </div>
        </body>
    )
}