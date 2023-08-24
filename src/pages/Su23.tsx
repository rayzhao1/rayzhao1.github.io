import React from 'react';
import { FC } from 'react';
import {Link, Routes, Router} from 'react-router-dom';
import logo from '../images/favicon.png'
import NavButton from '../components/NavButton'
import PopButton from '../components/PopButton'

export const Su23: FC = () => {
    return (
        <main>
            <header>
                <h1 className='h1_su23'>CS 61A Summer 2023</h1> 
                <img src={logo} alt = "hi"></img>
                <p>Lab Interns! Iris Zhou, Kevin Lee, Ruby Yan</p>
            </header>
            <body>
                <div>
                    <div className = "centered">
                        <Link to = "https://drive.google.com/drive/folders/1ZA1e4JD_zRk7sEX3ZLWjC_FCTVxqJw62?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <button className = "bluish center b">Google Drive</button>
                        </Link>
                    </div>
                    <div className = "invis1">
                        i
                    </div>
                    <table className = 'table_calendar'>
                        <tbody className='tbody_calendar'>
                        <tr>
                            <td className = "dtext" width='10px'> 8/7 <br/>
                                <Link to = "https://cs61a.org/lab/lab13/" target="_blank" rel="noopener noreferrer">
                                    <button className = "orish">Lab11</button>
                                </Link>
                                <Link to = "https://drive.google.com/file/d/1xcTwUS_fZw8Q1NOTRQgkccHaSx_A9bYd/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                    <button className = "pinkish">Wksht</button>
                                </Link>
                                <PopButton color = "pinkish" msg = "">
                                    Msg
                                </PopButton>
                                
                            </td>
                            <td className = "dtext" width='10px'> 8/8 <br/>
                            <Link to = "https://cs61a.org/disc/disc12/" target="_blank" rel="noopener noreferrer">
                                    <button className = "orish">Disc10</button>
                                </Link>
                                <Link to = "https://drive.google.com/file/d/1xcTwUS_fZw8Q1NOTRQgkccHaSx_A9bYd/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                    <button className = "pinkish">Wksht</button>
                                </Link>
                                <PopButton color = "pinkish" msg = "">
                                    Msg
                                </PopButton>
                            </td>
                        </tr>
                        <tr>
                            <td className = "dtext" width='10px'> 7/31 <br/>
                                <Link to = "https://cs61a.org/lab/lab11/" target="_blank" rel="noopener noreferrer">
                                    <button className = "orish">Lab11</button>
                                </Link>
                                <br/>
                                <NavButton pathname='/su23/week6/interpreters' children = "Notes" color = 'redish'/> 
                                <br/>
                                <PopButton color = "pinkish" msg = "">
                                    Msg
                                </PopButton>
                                
                            </td>
                            <td className = "dtext" width='10px'> 8/1 <br/>
                            <Link to = "https://cs61a.org/disc/disc10/" target="_blank" rel="noopener noreferrer">
                                    <button className = "orish">Disc10</button>
                                </Link>
                                <br/>
                                <NavButton pathname='/su23/week7/regex' children = "Notes" color = 'redish'/> 
                                <br/>
                                <PopButton color = "pinkish" msg = "">
                                    Msg
                                </PopButton>
                            </td>
                            <td className = "dtext" width='10px'> 8/2 <br/>
                            <Link to = "https://cs61a.org/lab/lab12/" target="_blank" rel="noopener noreferrer">
                                    <button className = "orish">Lab12</button>
                                </Link>
                                <br/>
                                <NavButton pathname='/su23/week7/regex' children = "Notes" color = 'redish'/> 
                                <br/>
                                <PopButton color = "pinkish" msg = "">
                                    Msg
                                </PopButton>
                            </td>
                            <td className = "dtext" width='10px'> 8/3 <br/>
                            <Link to = "https://cs61a.org/lab/disc11/" target="_blank" rel="noopener noreferrer">
                                    <button className = "orish">Disc11</button>
                                </Link>
                                <br/>
                                <NavButton pathname='/su23/week7/SQL' children = "Notes" color = 'redish'/> 
                                <br/>
                                <PopButton color = "pinkish" msg = "">
                                    Msg
                                </PopButton>
                            </td>
                        </tr>
                        <tr>
                            <td className = "dtext" width='10px'> 7/24 <br/>
                                <Link to = "https://cs61a.org/lab/lab09/" target="_blank" rel="noopener noreferrer">
                                    <button className = "orish">Lab09</button>
                                </Link>
                                
                            </td>
                            <td className = "dtext" width='10px'> 7/25 <br/>
                            <Link to = "https://cs61a.org/disc/disc08/" target="_blank" rel="noopener noreferrer">
                                    <button className = "orish">Disc08</button>
                                </Link>
                                <br/>
                                <NavButton pathname='/su23/week6/scheme' children = "Notes" color = 'redish'/> 
                                <br/>
                                <PopButton color = "pinkish" msg = "">
                                    Msg
                                </PopButton>
                            </td>
                            <td className = "dtext" width='10px'> 7/26 <br/>
                            <Link to = "https://cs61a.org/lab/lab10/" target="_blank" rel="noopener noreferrer">
                                    <button className = "orish">Lab10</button>
                                </Link>
                                <br/>
                                <NavButton pathname='/su23/week6/scheme' children = "Notes" color = 'redish'/> 
                                <br/>
                                <PopButton color = "pinkish" msg = "">
                                    Msg
                                </PopButton>
                            </td>
                            <td className = "dtext" width='10px'> 7/27 <br/>
                            <Link to = "https://cs61a.org/lab/disc09/" target="_blank" rel="noopener noreferrer">
                                    <button className = "orish">Disc09</button>
                                </Link>
                                <br/>
                                <NavButton pathname='/su23/week6/interpreters' children = "Notes" color = 'redish'/> 
                                <br/>
                                <PopButton color = "pinkish" msg = "">
                                    Msg
                                </PopButton>
                            </td>
                        </tr>
                        <tr>
                            <td className = "dtext" width='10px'> 7/17 <br/>
                                <Link to = "https://cs61a.org/lab/lab07/" target="_blank" rel="noopener noreferrer">
                                    <button className = "orish">Lab07</button>
                                </Link>
                                <br/>
                                <NavButton pathname='/su23/week4/itergen' children = "Notes" color = 'redish'/> 
                                <br/>
                                <Link to = "https://drive.google.com/file/d/1bPhDOfk_xUiGWnY2PMvjMp3vSvd4o4xB/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                    <button className = "pinkish">Wksht</button>
                                </Link>
                                
                            </td>
                            <td className = "dtext" width='10px'> 7/18 <br/>
                            <Link to = "https://cs61a.org/disc/disc06/" target="_blank" rel="noopener noreferrer">
                                    <button className = "orish">Disc06</button>
                                </Link>
                                <br/>
                                <NavButton pathname='/su23/week5/oop' children = "Notes" color = 'redish'/> 
                                <br/>
                                <PopButton color = "pinkish" msg = "">
                                    Msg
                                </PopButton>
                            </td>
                            <td className = "dtext" width='10px'> 7/19 <br/>
                            <Link to = "https://cs61a.org/lab/lab08/" target="_blank" rel="noopener noreferrer">
                                    <button className = "orish">Lab08</button>
                                </Link>
                                <br/>
                                <NavButton pathname='/su23/week5/oop' children = "Notes" color = 'redish'/> 
                                <br/>
                                <PopButton color = "pinkish" msg = "">
                                    Msg
                                </PopButton>
                            </td>
                            <td className = "dtext" width='10px'> 7/20 <br/>
                            <Link to = "https://cs61a.org/lab/disc07/" target="_blank" rel="noopener noreferrer">
                                    <button className = "orish">Disc07</button>
                                </Link>
                                <br/>
                                <NavButton pathname='/su23/week5/trees-linked-lists' children = "Notes" color = 'redish'/> 
                                <br/>
                                <PopButton color = "pinkish" msg = "">
                                    Msg
                                </PopButton>
                            </td>
                        </tr>
                            <tr>
                            <td className = "dtext" width='10px'> 7/10 <br/>
                                <Link to = "https://cs61a.org/lab/lab05/" target="_blank" rel="noopener noreferrer">
                                    <button className = "orish">Lab05</button>
                                </Link>
                                <br/>
                                <NavButton pathname='/su23/week3/treeadt' children = "Notes" color = 'redish'/> 
                                <br/>
                                <Link to = "https://drive.google.com/file/d/1awq9SCXcQwjjFZXD6o-6uv4XNI8gfw1a/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                    <button className = "pinkish">Wksht</button>
                                </Link>
                                
                            </td>
                            <td className = "dtext" width='10px'> 7/11 <br/>
                            <Link to = "https://cs61a.org/disc/disc05/" target="_blank" rel="noopener noreferrer">
                                    <button className = "orish">Disc05</button>
                                </Link>
                                <br/>
                                <NavButton pathname='/su23/week4/itergen' children = "Notes" color = 'redish'/> 
                                <br/>
                                <PopButton color = "pinkish" msg = "">
                                    Msg
                                </PopButton>
                            </td>
                            <td className = "dtext" width='10px'> 7/12 <br/>
                            <Link to = "https://cs61a.org/lab/lab06/" target="_blank" rel="noopener noreferrer">
                                    <button className = "orish">Lab06</button>
                                </Link>
                                <br/>
                                <NavButton pathname='/su23/week4/efficiency' children = "Notes" color = 'redish'/> 
                                <br/>
                                <PopButton color = "pinkish" msg = "">
                                    Msg
                                </PopButton>
                                </td>
                            <td className = "dtext" width='10px'><br/>
                            </td>
                        </tr>
                        <tr>
                            <td className = "dtext" width='10px'> 7/3 <br/>
                                <Link to = "https://cs61a.org/disc/lab03/" target="_blank" rel="noopener noreferrer">
                                    <button className = "orish">Lab03</button>
                                </Link>
                                <br/>
                                <NavButton pathname='/su23/week2/rec' children = "Notes" color = 'redish'/> 
                                <br/>
                                <PopButton color = "pinkish" msg = "">
                                    Msg
                                </PopButton>
                                
                            </td>
                            <td className = "dtext" width='10px'>  <br/>
                            </td>
                            <td className = "dtext" width='10px'> 7/5 <br/>
                            <Link to = "https://cs61a.org/lab/lab04/" target="_blank" rel="noopener noreferrer">
                                    <button className = "orish">Lab04</button>
                                </Link>
                                <br/>
                                <NavButton pathname='/su23/week3/sequences' children = "Notes" color = 'redish'/> 
                                <br/>
                                <PopButton color = "pinkish" msg = "">
                                    Msg
                                </PopButton>
                            </td>
                            <td className = "dtext" width='10px'> 7/6 <br/>
                            <Link to = "https://cs61a.org/disc/disc04/" target="_blank" rel="noopener noreferrer">
                                    <button className = "orish">Disc04</button>
                                </Link>
                                <br/>
                                <NavButton pathname='/su23/week3/treeadt' children = "Notes" color = 'redish'/> 
                                <br/>
                                <PopButton color = "pinkish" msg = "">
                                    Msg
                                </PopButton>
                                </td>
                        </tr>
                        <tr>
                            <td className = "dtext" width='10px'> 6/26 <br/>
                                <Link to = "https://cs61a.org/disc/lab01/" target="_blank" rel="noopener noreferrer">
                                    <button className = "orish">Lab01</button>
                                </Link>
                                <br/>
                                <NavButton pathname='/su23/week1/control' children = "Notes" color = 'redish'/> 
                                <br/>
                                <PopButton color = "pinkish" msg = "">
                                    Msg
                                </PopButton>
                                
                            </td>
                            <td className = "dtext" width='10px'> 6/27 <br/>
                            <Link to = "https://cs61a.org/disc/disc02/" target="_blank" rel="noopener noreferrer">
                                    <button className = "orish">Disc02</button>
                                </Link>
                                <br/>
                                <NavButton pathname='/su23/week2/hofs' children = "Notes" color = 'redish'/> 
                                <br/>
                                <PopButton color = "pinkish" msg = "">
                                    Msg
                                </PopButton>
                            </td>
                            <td className = "dtext" width='10px'> 6/28 <br/>
                            <Link to = "https://cs61a.org/lab/lab02/" target="_blank" rel="noopener noreferrer">
                                    <button className = "orish">Lab02</button>
                                </Link>
                                <br/>
                                <NavButton pathname='/su23/week2/hofs' children = "Notes" color = 'redish'/> 
                                <br/>
                                <PopButton color = "pinkish" msg = "">
                                    Msg
                                </PopButton>
                            </td>
                            <td className = "dtext" width='10px'> 6/29 <br/>
                            <Link to = "https://cs61a.org/disc/disc03/" target="_blank" rel="noopener noreferrer">
                                    <button className = "orish">Disc03</button>
                                </Link>
                                <br/>
                                <NavButton pathname='/su23/week2/rec' children = "Notes" color = 'redish'/> 
                                <br/>
                                <PopButton color = "pinkish" msg = "">
                                    Msg
                                </PopButton>
                                </td>
                        </tr>
                        <tr>
                            <td className = "dtext" width='10px'> 6/20 <br/>
                                <Link to = "https://cs61a.org/disc/disc00/" target="_blank" rel="noopener noreferrer">
                                    <button className = "orish">Disc00</button>
                                </Link>
                                <br/>
                                <NavButton pathname='/su23/week1/intro' children = "Notes" color = 'redish'/> 
                                <br/>
                                <PopButton color = "pinkish" msg = "Hi, it was really nice to meet you all today! Here are some quick reminders: Please fill out... (sign in thru Berkeley account) Attendance form Welcome Form (Ideally complete before 6/21 @ midnight;">
                                    Msg
                                </PopButton>
                                
                            </td>
                            <td className = "dtext" width='10px'> 6/21 <br/>
                            <Link to = "https://cs61a.org/lab/lab00/" target="_blank" rel="noopener noreferrer">
                                    <button className = "orish">Lab00</button>
                                </Link>
                                <br/>
                                <NavButton pathname='/su23/week1/intro' children = "Notes" color = 'redish'/> 
                                <br/>
                                <PopButton color = "pinkish" msg = "Hi, it was really nice to meet you all today! Here are some quick reminders: Please fill out... (sign in thru Berkeley account) Attendance form Welcome Form (Ideally complete before 6/21 @ midnight;">
                                    Msg
                                </PopButton>
                            </td>
                            <td className = "dtext" width='10px'> 6/22 <br/>
                            <Link to = "https://cs61a.org/disc/disc01/" target="_blank" rel="noopener noreferrer">
                                    <button className = "orish">Disc01</button>
                                </Link>
                                <br/>
                                <NavButton pathname='/su23/week1/intro' children = "Notes" color = 'redish'/> 
                                <br/>
                                <PopButton color = "pinkish" msg = "Hi, it was really nice to meet you all today! Here are some quick reminders: Please fill out... (sign in thru Berkeley account) Attendance form Welcome Form (Ideally complete before 6/21 @ midnight;">
                                    Msg
                                </PopButton>
                            </td>
                            <td className = "dtext" width='10px'><br/></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <h2>Quick Links</h2>
                    <div className = "invis2">
                        i
                    </div>
                    <div className = "centered">
                        <Link to = "https://forms.gle/Cw6i9kQ3QN82TTeF7" target="_blank" rel="noopener noreferrer">
                            <button className = "b bluish center b">Temperature Check</button>
                        </Link>
                    </div>
                    <div className = "invis">
                        i
                    </div>
                    <div>
                        <Link to = "https://forms.gle/NNAa2TrNXsTHwxEq7" target="_blank" rel="noopener noreferrer">
                            <button className = "b bluish center b">Discussion Attendance</button>
                        </Link>
                    </div>
                    <div className = "invis">
                        i
                    </div>
                    <div className = "centered">
                        <Link to = "https://forms.gle/C5ct6siFZKosNhhs7" target="_blank" rel="noopener noreferrer">
                            <button className = "b bluish center b">Anonymous Feedback</button>
                        </Link>
                    </div>
                    <div className = "invis">
                        i
                    </div>
                    <div className = "centered">
                        <Link to = "https://docs.google.com/document/d/1J6NNiwpULPLYJ2YR7Xn6NJofVFQPdD4SGuIGkd_itVw/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <button className = "b bluish center b">Video Explanations</button>
                        </Link>
                    </div>
                    <div className = "invis">
                        i
                    </div>
                    <div className = "centered">
                        <Link to = "https://forms.gle/zWp5n8DLzzUU7RZC6" target="_blank" rel="noopener noreferrer">
                            <button className = "b bluish center b">Request a Video</button>
                        </Link>
                    </div>
                    <div className = "invis">
                        i
                    </div>
                    <div className = "centered">
                        <Link to = "https://docs.google.com/document/d/11mHWdkKLVm57a25xS5Z1tQX53fcd5LhQz9z88HTpefg/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <button className = "b bluish center b">Lab Questions</button>
                        </Link>
                    </div>
                    <div className = "invis">
                        i
                    </div>
                    <p className = "body">
                        <ul>
                            <li>Fill out this form to be added to the class Group Chat!</li>
                            <li>Please take this <a href="https://docs.google.com/forms/d/e/1FAIpQLScyf6vY3BBewF592sHMC45FfLtb-M1Z7E-J1HNtljxX-bMMuA/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">Welcome survey!</a></li>
                        </ul>
                    </p>
                <h2>Site Change Log</h2>
                    <p className = "body">
                        <ul>
                            <li>Additions</li>
                                <ul>
                                    <li>added slides button, increased slide embed size</li>
                                    <li>Temperature check/attendance form buttons</li>
                                    <li>Calendar</li>
                                    <li>Change log</li>
                                </ul>
                            <li>Need to do</li>
                                <ul>
                                    <li>anon form button</li>
                                    <li>Make notes on slides page persist</li>
                                    <li>Add link to Google drive</li>
                                    <li>Separate slides into Animated/unanimated, solutions/no solutions</li>
                                    <li>Extra class info - Section date, location, OH times</li>
                                    <li>Add announcements to msg button</li>
                                </ul>
                        </ul>
                    </p>
            </body>
        </main>
    )
};
