import React from 'react';
import { FC } from 'react';
import { NavLink, Link } from 'react-router-dom';
import LinkButtonAdj from '../../components/LinkButtonAdj';
import { AiOutlineDownload } from 'react-icons/ai';

export const TreesLinks: FC = () => {  
    return (
        <body>
            <div className='slides_wrapper'>
                <iframe 
                    title="Slide" 
                    src="https://docs.google.com/presentation/d/e/2PACX-1vTR6huHdBXF5aBTW_0AuwVI0dJY7UU8bo_8dUTVkSm1MFvccC8flVD-8lxwfUj4pAdGG46aFRJ9ykfr/embed?start=false&loop=false&delayms=3000"
                    width="1200" height="675"
                    loading='lazy'>    
                </iframe>
            </div>
        </body>
    )
}