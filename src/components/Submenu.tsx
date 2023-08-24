import React, { FC, useState } from 'react'
import { SidebarItem } from '../models/SidebarItem';
import styled from 'styled-components';
import { Link, useMatch, useResolvedPath} from 'react-router-dom';

type SidebarLinkProps = {
    item: SidebarItem;
}

// Sidebar menu items (weeks)
const SidebarLink = styled(Link)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3.75rem;
    font-size: 1.1rem;
    padding: 2rem;
    padding-bottom: 2.5rem;
    text-decoration: none;
    font-weight: 900;
    color: #ffffff;

    &:hover{
        background-color: #1e1f21;
        border-radius: 5px;
        border-left: 4px solid #d11141
    }
`;

const SidebarLabel = styled.span`
    margin-left: rem
`;

const Active = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3.75rem;
    font-size: 1.125rem;
    padding: 2rem;
    text-decoration: none;
    color: #ffffff;
    background-color: gray;
    border-radius: 5px;
    border-left: 4px solid #FFFFF
`;

// Submenu dropdown items
const DropdownLink = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 3rem;
    font-size: 0.875rem;
    padding-left: 3rem;
    text-decoration: none;
    color: #ffffff;

    &:hover {
        background-color: #d11141;
    }

`;

const Submenu: FC<SidebarLinkProps> = ({item}) => {
    const [subnav, setSubnav] = useState(false);
    const showSubnav = () => setSubnav(!subnav);
    const resolvedPath = useResolvedPath(item.path);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})
    return (
        <>
            <SidebarLink to={item.path} onClick={showSubnav}>
                <div>
                    {item.icon}
                    <SidebarLabel>
                        {item.title}
                    </SidebarLabel>
                </div>
            </SidebarLink>
            {subnav && 
                item?.subnav?.map((subnavItem, index) => {
                    return (
                        <DropdownLink to={subnavItem.path} key={index}>
                            <SidebarLabel>{subnavItem.title}</SidebarLabel>
                        </DropdownLink>
                    );
            })}
        </>
    );
};

export default Submenu;