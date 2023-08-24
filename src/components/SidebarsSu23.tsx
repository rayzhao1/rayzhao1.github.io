import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink, Link, useMatch, useResolvedPath} from 'react-router-dom';
import { IconContext } from 'react-icons';
import { AiOutlineMenu, AiFillHome, AiOutlineClose, AiOutlineHome, AiTwotoneFolder, AiTwotoneFolderOpen } from 'react-icons/ai';
import Submenu from './Submenu';
import { SidebarData_Su23 } from './SidebarData_Su23';

// Top Bar

const NavWrapper = styled.div`
    display: flex;
    background-color: black;
    justify-content: space-between;
    
`;

const TopNav = styled.div`
    display: flex;
    justify-content: flex-start
    align-items: center;
    height: 4rem;
    background-color: black;
    align-self: center;
    align-items: center;
    align-content: center;
`;

// Side bar & close icon.
const SidebarNav = styled.div<{ sidebar: boolean }>`
    width: 250px;
    height: 100vh;
    background-color: black;
    position: fixed;
    top: 0;
    z-index: 15;
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

const SidebarsSu23: React.FC = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <IconContext.Provider value ={{ color: 'white' }}>
            <NavWrapper>
                <LeftNav>
                    <TopNav>
                            <NavMenu to='#' onClick={showSidebar}>
                                <AiOutlineMenu />
                            </NavMenu>
                    </TopNav>
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
                        <AiOutlineMenu />
                    </NavMenu>
                    {SidebarData_Su23.map((item, index) => {
                        return <Submenu item={item} key={index} />
                    })}
                </SidebarWrap>
            </SidebarNav>
        </IconContext.Provider>
    );
    }

export default SidebarsSu23;