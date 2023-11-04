import React from 'react';
import { FC } from 'react';
import { NavLink, Link } from 'react-router-dom';
import LinkButtonAdj from '../../components/LinkButtonAdj';
import { AiOutlineDownload } from 'react-icons/ai';

export const OOP_Fa23: FC = () => {  
    return (
        <body>
            <div className='slides_wrapper'>
                <iframe 
                    title="Slide" 
                    src="https://docs.google.com/presentation/d/e/2PACX-1vT_SaYiKTkKc63O8uXKomwFp1cf4EV6fsiILa_nMbzXqR70XWCTq3Hpv8U3-wRJU_Iuh292MtagYrGK/embed?start=false&loop=false&delayms=3000"
                    width="1200" height="675"
                    loading='lazy'>    
                </iframe>
            </div>
        </body>
    )
}