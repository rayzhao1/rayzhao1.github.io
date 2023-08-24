import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink, Link, useMatch, useResolvedPath} from 'react-router-dom';
import { IconContext } from 'react-icons';
import { AiOutlineMenu, AiFillHome, AiOutlineClose, AiTwotoneFolder, AiTwotoneFolderOpen } from 'react-icons/ai';
import { SidebarData_Fa23 } from './SidebarData_Fa23';
import Submenu from './Submenu';

// Top Bar

const NavWrapper = styled.div`
    display: flex;
    background-color: black;
    justify-content: space-between;
    
`;
const LeftNav = styled.div`
    display: flex;
    justify-content: flex-end
    align-items: center;
    height: 4rem;
    align-self: center;
    align-items: center;
    align-content: center;
`;

const RightNav = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 4rem;
    height: 4rem;
    align-self: center;
    align-items: center;
    align-content: center;
`;

// Side bar & close icon.
const SidebarNav = styled.div<{ sidebar: boolean }>`
    z-index:20;
    width: 310px;
    height: 100vh;
    background-color: black;
    color: black;
    position: fixed;
    top: 0;
    overflow-y: scroll;
    left: ${({sidebar}) => (sidebar ? '0' : '-100%')};
`;

// Menu Icon
const NavMenu = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 3.8rem;
    font-size: 1.5rem;
    margin-left: 2rem;
`;

const NavHome = styled(Link)`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 3.8rem;
    font-size: 1.5rem;
    color: white;
    margin-right: 2rem;
`;

const SidebarWrap = styled.div`
`;

const SidebarsFa23: React.FC = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <IconContext.Provider value ={{ color: 'white' }}>
            <NavWrapper>
                <LeftNav>
                    <NavMenu to='#' onClick={showSidebar}>
                        <AiTwotoneFolder />
                    </NavMenu>
                    <div id = 'in_line'>
                        <ul>
                        <NavLink
                            to="/"  
                            style={({ isActive, isPending }) => {
                                return {
                                fontWeight: isActive ? "bold" : "",
                                color: isPending ? "red" : "white",
                                };
                            }}
                            >
                                Home
                        </NavLink>
                        <NavLink
                            to="/61/fa23/problems"  
                            style={({ isActive, isPending }) => {
                                return {
                                fontWeight: isActive ? "bold" : "",
                                color: isPending ? "red" : "white",
                                };
                            }}
                            >
                                Problems
                        </NavLink>
                        <NavLink
                            to="/61a/fa23/videos"  
                            style={({ isActive, isPending }) => {
                                return {
                                fontWeight: isActive ? "bold" : "",
                                color: isPending ? "red" : "white",
                                };
                            }}
                            >
                                Videos
                        </NavLink>
                        <NavLink
                            to="https://forms.gle/fAhNjZNsg3TgnRJZ7"  
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={({ isActive, isPending }) => {
                                return {
                                fontWeight: isActive ? "bold" : "",
                                color: isPending ? "red" : "white",
                                };
                            }}
                            >
                                Feedback
                        </NavLink>
                        </ul>
                    </div>
                </LeftNav>
                <RightNav>
                    <NavHome to='/home'>
                        <AiFillHome/>
                    </NavHome>
                </RightNav>
            </NavWrapper>
            <SidebarNav sidebar = {sidebar}>
                <SidebarWrap>
                    <NavMenu to='#' onClick={showSidebar}>
                        <AiOutlineClose />
                    </NavMenu>
                    {SidebarData_Fa23.map((item, index) => {
                        return <Submenu item={item} key={index} />
                    })}
                </SidebarWrap>
            </SidebarNav>
        </IconContext.Provider>
    );
    }

export default SidebarsFa23;