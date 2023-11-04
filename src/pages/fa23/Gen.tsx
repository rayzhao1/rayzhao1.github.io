import React from 'react';
import { FC } from 'react';
import { NavLink, Link } from 'react-router-dom';
import LinkButtonAdj from '../../components/LinkButtonAdj';
import { AiOutlineDownload } from 'react-icons/ai';

export const Gen: FC = () => {  
    return (
        <body>
            <div className='slides_wrapper'>
                <iframe 
                    title="Slide" 
                    src="https://docs.google.com/presentation/d/e/2PACX-1vQJE3nUugsj1I83fl0Akua3yO-u1m_TjxCf3GN3LnxDGp_JRyNG1q7LLWhtiOk__khk-47Ujbp6ovhq/embed?start=false&loop=false&delayms=3000" 
                    width="1200" height="675"
                    loading='lazy'>    
                </iframe>
            </div>
        </body>
    )
}