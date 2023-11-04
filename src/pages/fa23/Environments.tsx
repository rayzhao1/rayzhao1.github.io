import React from 'react';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import LinkButtonAdj from '../../components/LinkButtonAdj';

export const Environments: FC = () => {  
    return (
        <body>
            <div className='slides_wrapper'>
                <iframe 
                    title="Slide" 
                    src="https://docs.google.com/presentation/d/e/2PACX-1vTcXYZyyeLdLqGmi_bgal6xHUIGvX7zLa2LzwOcvMHc2FdCk_pHAOx9Co5OVGBluFMil5pgVUcqbCKt/embed?start=false&loop=false&delayms=3000" 
                    width="1200" height="675"
                    loading='lazy'>    
                </iframe>
            </div>
        </body>
    )
}