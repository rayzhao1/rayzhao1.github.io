import React from 'react';
import { FC } from 'react';
import { NavLink, Link } from 'react-router-dom';
import LinkButtonAdj from '../../components/LinkButtonAdj';
import { AiOutlineDownload } from 'react-icons/ai';

export const HOE: FC = () => {  
    return (
        <body>
            <div className='slides_wrapper'>
                <iframe 
                    title="Slide" 
                    src="https://docs.google.com/presentation/d/e/2PACX-1vTaYTJJerK57L30q8vf7t04GOdWZAr_4d_o5bddJ6IPoit7D8jkutEZPOoLy89wdv-WbcTHvk_HsRes/embed?start=false&loop=false&delayms=3000" 
                    width="1200" height="675"
                    loading='lazy'>    
                </iframe>
            </div>
        </body>
    )
}