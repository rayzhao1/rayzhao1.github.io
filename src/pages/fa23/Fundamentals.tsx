import React from 'react';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import LinkButtonAdj from '../../components/LinkButtonAdj';

export const Fundamentals: FC = () => {  
    return (
        <body>
            <div className='slides_wrapper'>
                <iframe 
                    title="Slide" 
                    src="https://docs.google.com/presentation/d/e/2PACX-1vSqO3RsoyVCBnAshe_YpDgNcCgBcGPAzxOOtLhZenlYed9-R0NR0rgzdV_mTyU-FxStDwzAM1jzekdv/embed?start=false&loop=false&delayms=3000"
                    width="1200" height="675"
                    loading='lazy'>    
                </iframe>
            </div>
        </body>
    )
}