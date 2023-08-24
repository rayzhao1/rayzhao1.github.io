import React from 'react';
import { FC } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../images/favicon.png'
import PopButton from '../components/PopButton'
import NavButtonAdj from '../components/NavButtonAdj';
import LinkButtonAdj from '../components/LinkButtonAdj';
import  pdf  from "../types.s";
//import parrot from '../resources/C3_Parrot.pdf'

const parrotPDF = pdf("C3_Parrot.pdf");

export const Home: FC = () => {
    return (
        <div className = 'background_black crane'>
            <div className = 'homepage'>
                <h5>Teaching</h5>
                <ul>
                    <li><h6 style={{color: '#E31493'}}>CS 61A</h6></li>
                    <ul>
                        <li>
                            <a href='/'>Fall 2023</a>
                        </li>
                        <li>
                            <NavLink to="/su23">Summer 2023 Archive</NavLink>
                        </li>
                        <li>
                            <a href='https://drive.google.com/drive/folders/1SISj6qJ_haI-p3CUCEL19DQf-RpeWdt1?usp=sharing' 
                            target="_blank" rel="noopener noreferrer">
                            CSMentors Spring 2023 Archive
                            </a>
                        </li>
                        </ul>
                    <li><h6 style={{color: '#E74E4C'}}>CS 61B</h6></li>
                    <li>
                        <h6 style={{color: '#E99549'}}>Origami</h6>
                        </li>
                    <ul>
                        <li>
                            <a href='https://youtu.be/N-mN296iUok' target='_blank'>Learn to fold a falcon</a>
                        </li>
                        <li>
                            <a href={parrotPDF} target="_blank">Learn to fold a flapping parrot</a>
                        </li>
                        <li>
                            <a href='https://docs.google.com/presentation/d/e/2PACX-1vRj3PH3jiLHjraEc4h1_Zu9THo87LPz07ThNBJfhddua7NvkFQB00eH-wgT1QmXtKkTAVm5Q-sw_c9S/pub?start=false&loop=false&delayms=3000' target="_blank">Intro Presentation from HS</a>
                        </li>
                    </ul>
                </ul>
                <h5>Random</h5>
                <ul>
                    <li><h6><a href='https://scratch.mit.edu/projects/393338631/' target="_blank" rel="noopener noreferrer">Destress</a></h6></li>
                </ul>
                <h5>About</h5>
                <div style = {{color:'white'}}>
                    <ul>
                        <li><h6>Sophomore @ Berkeley</h6></li>
                        <ul> 
                            <li> Interests - CS education, Bioinformatics</li>
                        </ul>
                        <li><h6>Contact</h6></li>
                        <ul>
                            <li>raymondzhao@berkeley.edu</li>
                            <li><a href='https://www.linkedin.com/in/raymondzhao304/' target="_blank">LinkedIn</a></li>
                        </ul>
                    </ul>
                </div>
            </div>
        </div>
    )
};
