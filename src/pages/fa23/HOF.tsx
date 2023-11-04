import React from 'react';
import { FC } from 'react';
import { NavLink, Link } from 'react-router-dom';
import LinkButtonAdj from '../../components/LinkButtonAdj';
import { AiOutlineDownload } from 'react-icons/ai';

export const HOF: FC = () => {  
    return (
        <body>
            <div className='slides_wrapper'>
                <iframe 
                    title="Slide" 
                    src="https://docs.google.com/presentation/d/e/2PACX-1vRx2dhCxai5D3UDapO9cs_zP1TSwrFGTEximoel-4nk_05jHN4NlMKZEBVJttkCIdwXIA7IqwcnQUcU/embed?start=false&loop=false&delayms=3000" 
                    width="1200" height="675"
                    loading='lazy'>    
                </iframe>
            </div>
        </body>
    )
}