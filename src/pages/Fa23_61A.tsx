import React from 'react';
import { FC } from 'react';
import {Link, Routes, Router} from 'react-router-dom';
import logo from '../images/favicon.png'
import test from 'public/favicon.png'
import PopButton from '../components/PopButton'
import InfoButton from '../components/InfoButton'
import NavButtonAdj from '../components/NavButtonAdj';
import LinkButtonAdj from '../components/LinkButtonAdj';
import PDFButtonAdj from '../components/PDFButtonAdj';
import drive from '../images/drive.png';
import AiOutlineDown from 'react-icons/ai'

import  pdf  from "../types.s";

const sec01_exam = pdf("sec01-exam.pdf");
const sec02_exam = pdf("sec02-exam.pdf");

export const Fa23_61A: FC = () => {

    const sept21 = `

    `

    const sept19 = `
    Sorry for the wait, here are the fixed slides from today: link

    Also here's a link to some list comprehension & dictionary problems i've written in case you want some additional practice with them.
    
    Please check your discussion attendance points everyone! let me know if there are any discrepancies.
    
    Best,
    Raymond
    `

    const sept14 = `
    Here's a compilation of 61A problems I've written. They are around HW level and may be helpful if you want some additional practice. Some were written for assignments while others were just written for fun. Waves will also be on your HW3 so feel free to get a sneak peak. 
    I will be porting all the problems to gitbook in the near future, but I put the recursion problems up first so you can practice. Let me know if any questions come up
    Gitbook link (also linked @ problems tab on website). for some reason requires a refresh before problems visible

    Please click here if you'd like to book an appointment with me to talk about anything related to the midterm, including but not limited to advice moving forward, or working through a specific exam problem. Capped at 1hr.
    
    Here are the slides from today with all the errors fixed:

    Optionally, leave me some feedback! Something as small as "please write neater" might be something that can help a lot.
    Hope everyone is holding up okay after the midterm. Just let me know if you need anything and I'd be happy to help.

    Best,
    Raymond Zhao 
    
    `
    const aug24 = `hi! It was really really great to meet (most) of you all today! After every discussion and lab i'll blast out a quick email to all of my students with just some quick announcements and stuff, so get used to these emails! Feel free to let me know if you'd like to opt out of these emails. anyway, not much to announce, but do fill out this Welcome form by next Tuesday to get attendance credit for today's discussion! my site, with my notes and misc things I'll introduce later on can be found at
    https://rayzhao1.github.io/
    or
    go.cs61a.org/ray 
    that's about it - please bear with me while I try to get used to everyones names. Also if i told you "ill get back to you" on some question today, please email me again so that I will remember. Let me know if there are any other questions, and enjoy the weekend :) reminders
    
    - if you'd like to switch section times, I can swap you immediately as long as you tell me a time that is not at full capacity.
    - we will have lab on Tuesday. you have the option to not attend if you finish everything and email the gradescope link before class. Otherwise, you need to attend to get credit. 
    - Lab00 is due next wednesday!
    
    Best,
    Raymond`

    const aug29 = `hi! Hope lab was helpful today, and sorry if the pacing was a little off  (I'll try to keep mini lectures <20min in the future)

    please note that your autograder will say 0/1, even if all your checks passed.
    but as long as all of your local ok tests all pass, you're guaranteed to receive full score!

    see you all at Wheeler for Thursday's discussion! as a reminder, unlike lab there's unfortunately no way to complete discussions ahead of time :(
    
    please let me know if you have any questions. I'd also love feedback.
    
    Best,
    Raymond`

    const aug31 = `
    hi! hope today was helpful, sorry about not getting to all of the problems.

    not much to announce, but i updated my site with the notes. They can be accessed by clicking on the date on the homepage or navigating through the sidebar or through the google drive link on site


    also again if you'd like to request a video, please be more specific (ex. disc01  #7) :(

    I will reply to this email sometime soon with some advice for the class (my responses to the welcome form).

    Please let me know if you have any questions!

    Best,
    Raymond`

    const sept7 = `
    hi! Last chance to fill out the forms to join a text group chat or discord group chat! I'll make the group chats tomorrow past noon ish (so hopefully yall can form some midterm study groups maybe?)

    I know probably should've moved a bit faster today, so I'll leave:
    video request form (im working on a lab02 vid right now)
    slides from this week: higher-order func / lambdas, higher-order env / currying (definitely step through the currying slides if the discussion question was difficult!)
    In terms of the midterm, please let me know at any point if you are struggling with a problem! I'll be sure to get back to you and try to respond. Also ask on Ed!
    Feel free to leave me general/logistical questions as well. I've graded/proctored/written a problem so I should hopefully be able to provide some info! Best of luck! Expect some more emails soon.

    Best,
    Raymond
    `

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
                                <strong>End of Sem</strong><br/>
                                thanks everyone for a great semester - it was a real honor to teach yall! <br/>My email will always be open if you'd like to talk about anything. farewell and good luck! <br/><br/>
                                <strong>Week of 10/30</strong><br/>
                                If you'd like to chat about anything MT2:
                                - <a href = 'https://calendar.app.google/UBwSAzHwiYTrBHKdA' target="_blank" rel="noopener noreferrer">Book Appointment</a><br/><br></br>
                                <strong>Week of 9/10</strong><br/>
                                Congrats on finishing MT1!<br/> If you'd like to chat about anything:<br/>
                                - <a href = 'https://calendar.app.google/UBwSAzHwiYTrBHKdA' target="_blank" rel="noopener noreferrer">Book Appointment</a><br/><br></br>
                                <strong>Week of 9/3</strong><br/>
                                Fill out to join text/discord gc<br/>
                                - <a href='https://forms.gle/R6wpQQZSKdXYWEWk6' 
                                        target="_blank" rel="noopener noreferrer">
                                        Text<br/>
                                    </a>
                                    - <a href='https://forms.gle/QzCEPnid72h5kCYZ7' 
                                        target="_blank" rel="noopener noreferrer">
                                        Discord<br/><br/>
                                    </a>
                                <strong>Week of 8/27</strong><br/><br/>
                                <strong>Week of 8/20</strong><br/>
                                hello hello<br/>
                                Please fill out! Due by 8/29 midnight<br/>
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
                                            <LinkButtonAdj name = 'Disc. Attend.' link = "https://forms.gle/2bA5SZipebuL3d2T6" color = 'bluish_inv' style= 'btn_med_inv'/>
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
                            <td className = "td_date">11/27<br/></td>
                            <td className = "td_date">11/28<br/>
                                <LinkButtonAdj name = 'Lab13' link='https://cs61a.org/lab/lab13/' color='orish' style='btn_small'></LinkButtonAdj><br/>
                                <NavButtonAdj path='/fa23/sql' name = "Notes" style = 'btn_small' color = 'redish'/> <br/>
                                <PopButton msg = '' color = 'pinkish'>Msg</PopButton>
                            </td>
                            <td className = "td_date">11/29<br/>
                            </td>
                            <td className = "td_date">11/30<br/>
                                <LinkButtonAdj name = 'Disc13' link='https://cs61a.org/disc/disc13/' color='orish' style='btn_small'></LinkButtonAdj><br/>
                                <LinkButtonAdj name = 'Wksht' link='https://drive.google.com/file/d/17G9kKlTBhMmovJYBdN6FhzL1IRY7Q4Jc/view?usp=sharing' color='orish' style='btn_small'></LinkButtonAdj><br/>
                                <NavButtonAdj path='/fa23/sql' name = "Notes" style = 'btn_small' color = 'redish'/> <br/>
                            </td>
                            <td className = "td_date">12/1<br/></td>
                        </tr>
                        <tr>
                            <td className = "td_date">11/20<br/></td>
                            <td className = "td_date">11/21<br/></td>
                            <td className = "td_date">11/22<br/></td>
                            <td className = "td_date">11/23<br/></td>
                            <td className = "td_date">11/24<br/></td>
                        </tr>
                        <tr>
                            <td className = "td_date">11/13<br/></td>
                            <td className = "td_date">11/14<br/>
                                <LinkButtonAdj name = 'Lab12' link='https://cs61a.org/lab/lab12/' color='orish' style='btn_small'></LinkButtonAdj><br/>
                                <NavButtonAdj path='/fa23/pad-macros' name = "Notes" style = 'btn_small' color = 'redish'/> <br/>
                                <PopButton msg = '' color = 'pinkish'>Msg</PopButton>
                            </td>
                            <td className = "td_date">11/15<br/>
                            </td>
                            <td className = "td_date">11/16<br/>
                                <LinkButtonAdj name = 'Disc12' link='https://cs61a.org/disc/disc12/' color='orish' style='btn_small'></LinkButtonAdj><br/>
                                <NavButtonAdj path='/fa23/pad-macros' name = "Notes" style = 'btn_small' color = 'redish'/> <br/>
                                <PopButton msg = '' color = 'pinkish'>Msg</PopButton>
                            </td>
                            <td className = "td_date">11/17<br/></td>
                        </tr>
                        <tr>
                            <td className = "td_date">11/6<br/></td>
                            <td className = "td_date">11/7<br/>
                                <LinkButtonAdj name = 'Lab11' link='https://cs61a.org/lab/lab11/' color='orish' style='btn_small'></LinkButtonAdj><br/>
                                <NavButtonAdj path='/fa23/interpreters' name = "Notes" style = 'btn_small' color = 'redish'/> <br/>
                                <PopButton msg = '' color = 'pinkish'>Msg</PopButton>
                            </td>
                            <td className = "td_date">11/8<br/>
                            </td>
                            <td className = "td_date">11/9<br/>
                                <LinkButtonAdj name = 'Disc11' link='https://cs61a.org/disc/disc11/' color='orish' style='btn_small'></LinkButtonAdj><br/>
                                <NavButtonAdj path='/fa23/interpreters' name = "Notes" style = 'btn_small' color = 'redish'/> <br/>
                                <PopButton msg = '' color = 'pinkish'>Msg</PopButton>
                            </td>
                            <td className = "td_date">11/10<br/></td>
                        </tr>

                        <tr>
                            <td className = "td_date">10/30<br/></td>
                            <td className = "td_date">10/31<br/>
                                <LinkButtonAdj name = 'Lab10' link='https://cs61a.org/lab/lab10/' color='orish' style='btn_small'></LinkButtonAdj><br/>
                                <NavButtonAdj path='/fa23/scheme' name = "Notes" style = 'btn_small' color = 'redish'/> <br/>
                                <PopButton msg = '' color = 'pinkish'>Msg</PopButton>
                            </td>
                            <td className = "td_date">11/1<br/>
                            </td>
                            <td className = "td_date">11/2<br/>
                                <LinkButtonAdj name = 'Disc10' link='https://cs61a.org/disc/disc10/' color='orish' style='btn_small'></LinkButtonAdj><br/>
                                <NavButtonAdj path='/fa23/scheme-lists' name = "Notes" style = 'btn_small' color = 'redish'/> <br/>
                                <PopButton msg = '' color = 'pinkish'>Msg</PopButton>
                            </td>
                            <td className = "td_date">11/3<br/></td>
                        </tr>
                        

                        <tr>
                            <td className = "td_date">10/23<br/></td>
                            <td className = "td_date">10/24<br/>
                                <LinkButtonAdj name = 'Lab09' link='https://cs61a.org/lab/lab08/' color='orish' style='btn_small'></LinkButtonAdj><br/>
                                <NavButtonAdj path='/fa23/trees-links' name = "Notes" style = 'btn_small' color = 'redish'/> <br/>
                                <PopButton msg = '' color = 'pinkish'>Msg</PopButton>
                            </td>
                            <td className = "td_date">10/25<br/>
                            </td>
                            <td className = "td_date">10/26<br/>
                                <LinkButtonAdj name = 'Sec01' link='https://drive.google.com/file/d/11gpNBDUAx9gAgOTfVs6kWMIJPXQaXeYJ/view?usp=sharing' color='orish' style='btn_small'></LinkButtonAdj><br/>
                                <LinkButtonAdj name = 'Sec02' link='https://drive.google.com/file/d/1CGihoLtb1tiuW7NE3X6X7ehwjR67sifl/view?usp=sharing' color='orish' style='btn_small'></LinkButtonAdj><br/>
                                <PopButton msg = '' color = 'pinkish'>Msg</PopButton>
                            </td>
                            <td className = "td_date">10/27<br/></td>
                        </tr>
                        
                        <tr>
                            <td className = "td_date">10/16<br/></td>
                            <td className = "td_date">10/17<br/>
                                <LinkButtonAdj name = 'Lab08' link='https://cs61a.org/lab/lab08/' color='orish' style='btn_small'></LinkButtonAdj><br/>
                                <NavButtonAdj path='/fa23/trees-links' name = "Notes" style = 'btn_small' color = 'redish'/> <br/>
                                <PopButton msg = '' color = 'pinkish'>Msg</PopButton>
                            </td>
                            <td className = "td_date">10/18<br/>
                            </td>
                            <td className = "td_date">10/19<br/>
                                <LinkButtonAdj name = 'Disc08' link='https://cs61a.org/disc/disc08/' color='orish' style='btn_small'></LinkButtonAdj><br/>
                                <NavButtonAdj path='/fa23/trees-links' name = "Links" style = 'btn_small' color = 'redish'/> <br/>
                                <NavButtonAdj path='/fa23/efficiency' name = "Eff." style = 'btn_small' color = 'redish'/> <br/>
                            </td>
                            <td className = "td_date">10/20<br/></td>
                        </tr>

                        <tr>
                            <td className = "td_date">10/9<br/></td>
                            <td className = "td_date">10/10<br/>
                                <LinkButtonAdj name = 'Lab07' link='https://cs61a.org/lab/lab07/' color='orish' style='btn_small'></LinkButtonAdj><br/>
                                <NavButtonAdj path='/fa23/oop' name = "Notes" style = 'btn_small' color = 'redish'/> <br/>
                                <PopButton msg = '' color = 'pinkish'>Msg</PopButton>
                            </td>
                            <td className = "td_date">10/11<br/>
                            </td>
                            <td className = "td_date">10/12<br/>
                                <LinkButtonAdj name = 'Disc07' link='https://cs61a.org/disc/disc07/' color='orish' style='btn_small'></LinkButtonAdj><br/>
                                <NavButtonAdj path='/fa23/oop' name = "Notes" style = 'btn_small' color = 'redish'/> <br/>
                                <PopButton msg = '' color = 'pinkish'>Msg</PopButton>
                            </td>
                            <td className = "td_date">10/13<br/></td>
                        </tr>
                        

                        <tr>
                            <td className = "td_date">10/2<br/></td>
                            <td className = "td_date">10/3<br/>
                                <LinkButtonAdj name = 'Lab06' link='https://cs61a.org/lab/lab06/' color='orish' style='btn_small'></LinkButtonAdj><br/>
                                <NavButtonAdj path='/fa23/mutability' name = "Mut." style = 'btn_small' color = 'redish'/> <br/>
                                <NavButtonAdj path='/fa23/iter' name = "Iter." style = 'btn_small' color = 'redish'/> <br/>
                            </td>
                            <td className = "td_date">10/4<br/>
                            </td>
                            <td className = "td_date">10/5<br/>
                                <LinkButtonAdj name = 'Disc06' link='https://cs61a.org/disc/disc06/' color='orish' style='btn_small'></LinkButtonAdj><br/>
                                <NavButtonAdj path='/fa23/iter' name = "Iter." style = 'btn_small' color = 'redish'/> <br/>
                                <NavButtonAdj path='/fa23/gen' name = "Gen." style = 'btn_small' color = 'redish'/> <br/>
                            </td>
                            <td className = "td_date">10/6<br/></td>
                        </tr>   

                        <tr>
                            <td className = "td_date">9/25<br/></td>
                            <td className = "td_date">9/26<br/>
                                <LinkButtonAdj name = 'Lab05' link='https://cs61a.org/lab/lab05/' color='orish' style='btn_small'></LinkButtonAdj><br/>
                                <NavButtonAdj path='/fa23/tree-adt' name = "Notes" style = 'btn_small' color = 'redish'/> <br/>
                                <PopButton msg = '' color = 'pinkish'>Msg</PopButton>
                            </td>
                            <td className = "td_date">9/27<br/>
                            </td>
                            <td className = "td_date">9/28<br/>
                                <LinkButtonAdj name = 'Disc05' link='https://cs61a.org/disc/disc05/' color='orish' style='btn_small'></LinkButtonAdj><br/>
                                <NavButtonAdj path='/fa23/tree-adt' name = "Notes" style = 'btn_small' color = 'redish'/> <br/>
                                <PopButton msg = '' color = 'pinkish'>Msg</PopButton>
                            </td>
                            <td className = "td_date">9/29<br/></td>
                        </tr>
                        <tr>
                            <td className = "td_date">9/18<br/></td>
                            <td className = "td_date">9/19<br/>
                                <LinkButtonAdj name = 'Lab04' link='https://cs61a.org/lab/lab04/' color='orish' style='btn_small'></LinkButtonAdj><br/>
                                <NavButtonAdj path='/fa23/seq' name = "Notes" style = 'btn_small' color = 'redish'/> <br/>
                                <PopButton msg = { sept19 } color = 'pinkish'>Msg</PopButton>
                            </td>
                            <td className = "td_date">9/20<br/>
                            </td>
                            <td className = "td_date">9/21<br/>
                                <LinkButtonAdj name = 'Disc04' link='https://cs61a.org/disc/disc04/' color='orish' style='btn_small'></LinkButtonAdj><br/>
                                <NavButtonAdj path='/fa23/tree-recursion' name = "Notes" style = 'btn_small' color = 'redish'/> <br/>
                                <PopButton msg = { sept21 } color = 'pinkish'>Msg</PopButton>
                            </td>
                            <td className = "td_date">9/22<br/></td>
                        </tr>
                        <tr>
                            <td className = "td_date">9/11<br/></td>
                            <td className = "td_date">9/12<br/>
                                <strong>Midterm</strong>
                            </td>
                            <td className = "td_date">9/13<br/>
                            </td>
                            <td className = "td_date">9/14<br/>
                                <LinkButtonAdj name = 'Disc03' link='https://cs61a.org/disc/disc03/' color='orish' style='btn_small'></LinkButtonAdj><br/>
                                <NavButtonAdj path='/fa23/recursion' name = "Notes" style = 'btn_small' color = 'redish'/> <br/>
                                <PopButton msg = { sept14 } color = 'pinkish'>Msg</PopButton>
                            </td>
                            <td className = "td_date">9/8<br/></td>
                        </tr>
                        <tr>
                            <td className = "td_date">9/4<br/></td>
                            <td className = "td_date">9/5<br/>
                                <LinkButtonAdj name = 'Lab02' link='https://cs61a.org/lab/lab02/' color='orish' style='btn_small'></LinkButtonAdj><br/>
                                <NavButtonAdj path='/fa23/hof' name = "Notes" style = 'btn_small' color = 'redish'/> <br/>
                                <PopButton msg = 'coming soon' color = 'pinkish'>Msg</PopButton>
                            </td>
                            <td className = "td_date">9/6<br/>
                            </td>
                            <td className = "td_date">9/7<br/>
                                <LinkButtonAdj name = 'Disc02' link='https://cs61a.org/disc/disc02/' color='orish' style='btn_small'></LinkButtonAdj><br/>
                                <NavButtonAdj path='/fa23/hoe' name = "Notes" style = 'btn_small' color = 'redish'/> <br/>
                                <PopButton msg = { sept7 } color = 'pinkish'>Msg</PopButton>
                            </td>
                            <td className = "td_date">9/8<br/></td>
                        </tr>
                        <tr>
                            <td className = "td_date">8/28<br/></td>
                            <td className = "td_date">8/29<br/>
                                <LinkButtonAdj name = 'Lab01' link='https://cs61a.org/lab/lab01/' color='orish' style='btn_small'></LinkButtonAdj><br/>
                                <NavButtonAdj path='/fa23/fundamentals' name = "Notes" style = 'btn_small' color = 'redish'/> <br/>
                                <PopButton msg = {aug29} color = 'pinkish'>Msg</PopButton>
                            </td>
                            <td className = "td_date">8/30
                            </td>
                            <td className = "td_date">8/31<br/>
                                <LinkButtonAdj name = 'Disc01' link='https://cs61a.org/disc/disc01/' color='orish' style='btn_small'></LinkButtonAdj><br/>
                                <NavButtonAdj path='/fa23/env' name = "Notes" style = 'btn_small' color = 'redish'/> <br/>
                                <PopButton msg = {aug31} color = 'pinkish'>Msg</PopButton>
                            </td>
                            <td className = "td_date">9/1<br/></td>
                        </tr>
                        <tr>
                            <td className = "td_date">8/21<br/></td>
                            <td className = "td_date">8/22<br/></td>
                            <td className = "td_date">8/23<br/><br/>
                                <LinkButtonAdj name = 'Lab00' link='https://cs61a.org/lab/lab00/' color='orish' style='btn_small'></LinkButtonAdj>

                            </td>
                            <td className = "td_date">8/24<br/>
                                <LinkButtonAdj name = 'Disc00' link='https://cs61a.org/disc/disc00/' color='orish' style='btn_small'></LinkButtonAdj><br/>
                                <NavButtonAdj path='/fa23/intro' name = "Notes" style = 'btn_small' color = 'redish'/> <br/>
                                <PopButton msg = {aug24} color = 'pinkish'>Msg</PopButton>
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
