import React from 'react';
import { FC } from 'react';
import {Link, Routes, Router} from 'react-router-dom';
import logo from '../images/favicon.png'
import test from 'public/favicon.png'
import PopButton from '../components/PopButton'
import InfoButton from '../components/InfoButton'
import NavButtonAdj from '../components/NavButtonAdj';
import LinkButtonAdj from '../components/LinkButtonAdj';
import drive from '../images/drive.png';
import AiOutlineDown from 'react-icons/ai'

export const Fa23_61A: FC = () => {
    return (
        <main>
            <header>
                <h1>CS 61A</h1> 
                <h4>Fall 2023</h4>
            </header>
            <body>
                <div className='center margin_bot'>  
                    <InfoButton color = "pinkish">
                        Info
                    </InfoButton>
                </div>
                <div style={{height:2.5+'rem'}}></div>
                <div className='off_wrapper'>
                        <div className="off_left">
                            <img src={logo} alt = "hi"></img>
                        </div>
                        <div className="off_right">
                            <strong>Whiteboard</strong>
                            <div className='whiteboard'>
                                <strong>Week of 8/20</strong><br/>
                                hello hello<br/>
                                Please fill out!<br/>
                                - <a href='https://forms.gle/hZLGKQkN7Fdp5UQq6' 
                                        target="_blank" rel="noopener noreferrer">
                                        Welcome Survey
                                </a>
                            </div>
                            <div className='off_wrapper_small'>
                                <div className='subbox'>
                                    <strong>Discussion</strong>
                                        <div className = 'btns'>
                                            <LinkButtonAdj name = 'Temp. Check' link = "" color = 'bluish_inv' style= 'btn_med_inv'/>
                                            <LinkButtonAdj name = 'Disc. Attend.' link = "https://forms.gle/HkAMYfw9q1WoQjHs6" color = 'bluish_inv' style= 'btn_med_inv'/>
                                        </div>
                                </div>
                                <div className='subbox'>
                                    <strong>Lab</strong>
                                        <div className = 'btns'>
                                            <LinkButtonAdj name = 'Lab Q`s' link = "https://docs.google.com/document/d/11mHWdkKLVm57a25xS5Z1tQX53fcd5LhQz9z88HTpefg/edit?usp=sharing" color = 'bluish_inv' style= 'btn_med_inv'/>
                                            <LinkButtonAdj name = 'Lab Attend.' link = "https://forms.gle/aQtcNFRwzrxgtgvK8" color = 'bluish_inv' style= 'btn_med_inv'/>
                                        </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>    
                    <div className = 'button_drive center_table'>
                        <Link to = "https://drive.google.com/drive/folders/1--DcM6P0iFkoW_1RX_S6Y-o2NahxlANb?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <button className='button_drive'><img src= { drive } alt="my image"/></button>
                        </Link>
                    </div>
                <h4>Calendar</h4>
                <table className='center_table table_calendar'>
                    <tbody className='tbody_calendar'>
                        <tr>
                            <td className = "td_date">8/21</td>
                            <td className = "td_date">8/22</td>
                            <td className = "td_date">8/23<br/>
                                <LinkButtonAdj name = 'Lab00' link='https://cs61a.org/lab/lab00/' color='orish' style='btn_small'></LinkButtonAdj>

                            </td>
                            <td className = "td_date">8/24<br/>
                                <LinkButtonAdj name = 'Disc00' link='https://cs61a.org/disc/disc00/' color='orish' style='btn_small'></LinkButtonAdj><br/>
                                <NavButtonAdj path='/fa23/intro' name = "Notes" style = 'btn_small' color = 'redish'/> <br/>
                                <PopButton msg = 'test' color = 'pinkish'>Msg</PopButton>
                            </td>
                            <td className = "td_date">8/25</td>
                        </tr>
                    </tbody>
                </table>
                <div className='pad_10rem'></div>
            </body>
        </main>
    )
};
