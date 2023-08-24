import { AiFillCaretDown, AiFillCaretUp, AiOutlineHome } from "react-icons/ai";
import { SidebarItem } from "../models/SidebarItem";

export const SidebarData_Su23: SidebarItem[] = [
    {
        title: 'Home',
        path: '/su23',
        icon: AiOutlineHome,
        iconClosed: <AiFillCaretDown />,
        iconOpened: <AiFillCaretUp />
    },
    {
        title: 'Practice',
        path: '/su23/practice'
    },
    {
        title: 'Demos',
        path: '/su23/demo',
        subnav: [
            {
                title: 'Environment Diagrams',
                path: '/su23/demo/env'
            },
            {
                title: 'Tree Recursion',
                path: '/su23/demo/nonplussed'
            },
            {
                title: 'Generators',
                path: '/su23/demo/pathyielder'
            }
        ]
    },
    {
        title: 'Week 1',
        path: '/su23/week1',
        subnav: [
            {
                title: 'Introduction',
                path: '/su23/week1/intro'
            },
            {
                title: 'Variables and Functions',
                path: '/su23/week1/basics'
            },
            {
                title: 'Control & Environment Diagrams',
                path: '/su23/week1/control'
            }
        ]
    },
    {
        title: 'Week 2',
        path: '/su23/week2',
        subnav: [
            {           
                title: 'Higher-Order Functions',
                path: '/su23/week2/hofs'
            },
            {
                title: 'Recursion, Tree Recursion',
                path: '/su23/week2/rec'
            }
        ]
    },
    {
        title: 'Week 3',
        path: '/su23/week3',
        subnav: [
            {           
                title: 'Sequences',
                path: '/su23/week3/sequences'
            },
            {
                title: 'ADTs and Trees',
                path: '/su23/week3/treeadt'
            }
        ]
    },
    {
        title: 'Week 4',
        path: '/su23/week4',
        subnav: [
            {           
                title: 'Iterators, Generators',
                path: '/su23/week4/itergen'
            },
            {
                title: 'Efficiency',
                path: '/su23/week4/efficiency'
            }
        ]
    },
    {
        title: 'Week 5',
        path: '/su23/week5',
        subnav: [
            {           
                title: 'OOP, Inheritance, Repr/Str',
                path: '/su23/week5/oop'
            },
            {           
                title: 'Trees and Linked Lists',
                path: '/su23/week5/trees-linked-lists'
            }
        ]
    },
    {
        title: 'Week 6',
        path: '/su23/week6',
        subnav: [
            {           
                title: 'Scheme',
                path: '/su23/week6/scheme'
            },
            {           
                title: 'Tail Recursion',
                path: '/su23/week6/tail'
            },
            {
                title: 'Interpreters',
                path: '/su23/week6/interpreters'
            }
        ]
    },
    {
        title: 'Week 7',
        path: '/su23/week7',
        subnav: [
            {           
                title: 'SQL',
                path: '/su23/week7/SQL'
            },
            {
                title: 'Regular Expressions',
                path: '/su23/week7/regex'
            }
        ]
        
    }
];
