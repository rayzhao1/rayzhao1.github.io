import React from 'react';
import { FC } from 'react';
import LinkButtonAdj from '../components/LinkButtonAdj';

export const Videos: FC = () => {
    const style = {
        marginTop: '7rem'
    };
    const style1 = {
        marginTop: '47rem'
    };
    return (
        <main>
            <div className='center' style={ style }>
                <LinkButtonAdj name = 'Request Walkthrough' link = "https://forms.gle/NNAa2TrNXsTHwxEq7" color = 'bluish' style= 'button_large'/>
            </div>
            <div className='center' style={ style1 }>
                <iframe 
                    title="Slide" 
                    loading = 'lazy'
                    src="https://docs.google.com/document/d/e/2PACX-1vRBiNIRbqs4hGB7rwPgmjs5JqUUUXI7zjYCNFr9zJEmZ3b15-45V6S9Sxt2ZYqwWMCIV9hyVllOyhKx/pub?embedded=true" allowFullScreen 
                    width="800px" height="1200px">

                </iframe>
            </div>   
        </main>
    )
};
