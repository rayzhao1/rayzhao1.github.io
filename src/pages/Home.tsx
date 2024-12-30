import React from 'react';
import { FC } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../images/favicon.png'
import PopButton from '../components/PopButton'
import NavButtonAdj from '../components/NavButtonAdj';
import LinkButtonAdj from '../components/LinkButtonAdj';
import  pdf  from "../types.s";

const parrotPDF = pdf("C3_Parrot.pdf");

export const Home: FC = () => {
    return (
        <div className = 'background_black crane'>
            <div className = 'homepage'>
                <h5>Teaching</h5>
                <ul>
                    <li><h6 style={{color: '#E31493'}}>CS 61A</h6></li>
                    <ul style={{color: '#FFFFFF'}}>
                        <li style={{color: '#FFFFFF'}}>
                            Fall 2024
                        </li>
                        <li>
                        <NavLink to="/fa23">Fall 2023</NavLink>
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
                    <ul style={{color: '#FFFFFF'}}>
                        <li style={{color: '#FFFFFF'}}>
                            Dijkstra's Demo
                        </li>
                    </ul>
                    <li>
                        <h6 style={{color: '#E99549'}}>Origami</h6>
                        </li>
                    <ul style={{color: '#FFFFFF'}}>
                        <li>
                            <a href='https://youtu.be/N-mN296iUok' target='_blank'>Learn to fold a falcon</a>
                        </li>
                        <li>
                            <a href={parrotPDF} target="_blank">Learn to fold a flapping parrot</a>
                        </li>
                        <li>
                            <a href='https://docs.google.com/presentation/d/e/2PACX-1vRj3PH3jiLHjraEc4h1_Zu9THo87LPz07ThNBJfhddua7NvkFQB00eH-wgT1QmXtKkTAVm5Q-sw_c9S/pub?start=false&loop=false&delayms=3000' target="_blank">Origami Intro</a>
                        </li>
                    </ul>
                </ul>
                <h5>Links</h5>
                <ul>
                    <li><a href='https://github.com/rayzhao1/' target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    <li><a href='https://scratch.mit.edu/projects/393338631/' target="_blank" rel="noopener noreferrer">Scratch Game</a></li>
                </ul>
                <h5>About</h5>
                <div style = {{color:'white'}}>
                    <ul>
                        <li><h6>Junior @ Berkeley</h6></li>
                        <ul> 
                            <li> Major - EECS</li>
                            <li> Interests - Bioinformatics</li>
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
