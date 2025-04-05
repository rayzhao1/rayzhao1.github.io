import React, { FC } from 'react';
import { Su23 } from './pages/Su23';
import { VarFun } from './pages/su23/VarFun'
import { IntroSu23 } from './pages/su23/IntroSu23'
import { IntroFa23 } from './pages/fa23/IntroFa23'
//16:04
import './styles.css';
import SidebarsFa23 from './components/SidebarsFa23';
import SidebarsSu23 from './components/SidebarsSu23';
import {Routes, Route, useLocation} from 'react-router-dom';
import { Control } from './pages/su23/Control';
import { Env } from './pages/su23/Env';
import { Practice } from './pages/su23/Practice'
import { Hof } from './pages/su23/Hof'
import { Rec } from './pages/su23/Rec'
import { TreeADT } from './pages/su23/TreeADT'
import { Lists } from './pages/su23/Lists'
import { IterGen } from './pages/su23/IterGen';
import { Nonplussed } from './pages/su23/Nonplussed'
import { Eff } from './pages/su23/Eff';
import { PathYielder } from './pages/su23/PathYielder'
import { OOP } from './pages/su23/OOP';
import { LinkedLists } from './pages/su23/LinkedLists';
import { Tail } from './pages/su23/Tail';
import { Interpreters } from './pages/su23/Interpreters';
import { Scheme } from './pages/su23/Scheme';
import { SQL } from './pages/su23/SQL';
import { Regex } from './pages/su23/Regex';
import { Fa23_61A } from './pages/Fa23_61A';
import { Sp25_61A } from './pages/Sp25_61A';
import { Home } from './pages/Home';
import { Videos } from './pages/Videos';
import { Problems } from './pages/fa23/Problems';
	
import ReactMarkdown from "react-markdown";

// Firebase
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { getAuth } from "firebase/auth";
import { Fundamentals } from './pages/fa23/Fundamentals';
import { Environments } from './pages/fa23/Environments';
import { HOF } from './pages/fa23/HOF';
import { HOE } from './pages/fa23/HOE';
import { QNA } from './pages/QNA';
import { Recursion } from './pages/fa23/Recursion';
import { TreeRecursion } from './pages/fa23/TreeRecursion';
import { Sequences } from './pages/fa23/Sequences';
import { Iter } from './pages/fa23/Iter';
import { Mutability } from './pages/fa23/Mutability';
import { Gen } from './pages/fa23/Gen';
import { OOP_Fa23 } from './pages/fa23/OOP';
import { TreesLinks } from './pages/fa23/TreesLinks';
import { Efficiency } from './pages/fa23/Efficiency';
import { SchemeLists } from './pages/fa23/SchemeLists';
import { Scheme_Fa23 } from './pages/fa23/Scheme';
import { Interpreters_Fa23 } from './pages/fa23/Interpreters';
import { PadMacros } from './pages/fa23/pad-macros';
import { SQL_Fa23 } from './pages/fa23/SQL_Fa23';

const App: FC = () => {
  const location = useLocation();

  const selectSidebar = () => {
    const path = location.pathname;
    if (path.includes('su23')) {
      return <SidebarsSu23/>;
    } else if (path.includes('fa23')) {
      return <SidebarsFa23/>;
    } else {
      return;
    }
  };
  
  const sel = selectSidebar();
  const sidebar = selectSidebar();
  return (
    <>
      {sidebar}
          <Routes>
            <Route path='/' element={<Home/>}/>

            <Route path='/sp25' element={<Sp25_61A/>}/>
            
            <Route path='/fa23' element={<Fa23_61A/>}/>
            <Route path='/fa23/intro' element ={<IntroFa23/>}/>
            <Route path='/fa23/videos' element={<Videos/>}/>
            <Route path='/fa23/problems' element={<Problems/>}/>
            <Route path='/fa23/fundamentals' element={<Fundamentals/>}/>
            <Route path='/fa23/env' element={<Environments/>}/>
            <Route path='/fa23/hof' element={<HOF/>}/>
            <Route path='/fa23/hoe' element={<HOE/>}/>
            <Route path='/fa23/recursion' element={<Recursion/>}/>
            <Route path='/fa23/tree-recursion' element={<TreeRecursion/>}/>
            <Route path='/fa23/seq' element={<Sequences/>}/>
            <Route path='/fa23/tree-adt' element={<TreeADT/>}/>
            <Route path='/fa23/iter' element={<Iter/>}/>
            <Route path='/fa23/mutability' element={<Mutability/>}/>
            <Route path='/fa23/gen' element={<Gen/>}/>
            <Route path='/fa23/oop' element={<OOP_Fa23/>}/>
            <Route path='/fa23/trees-links' element={<TreesLinks/>}/>
            <Route path='/fa23/efficiency' element={<Efficiency/>}/>
            <Route path='/fa23/scheme' element={<Scheme_Fa23/>}/>
            <Route path='/fa23/scheme-lists' element={<SchemeLists/>}/>
            <Route path='/fa23/interpreters' element={<Interpreters_Fa23/>}/>
            <Route path='/fa23/pad-macros' element={<PadMacros/>}/>
            <Route path='/fa23/sql' element={<SQL_Fa23/>}/>

            <Route path='/su23' element={<Su23/>}/>
            <Route path='/su23/week1/intro' element={<IntroSu23/>}/>
            <Route path='/su23/week1/basics' element={<VarFun/>}/>
            <Route path='/su23/week1/control' element={<Control/>}/>
            <Route path='/su23/week2/hofs' element={<Hof/>}/>
            <Route path='/su23/demo/env' element={<Env/>}/>
            <Route path='/su23/demo/nonplussed' element={<Nonplussed/>}/>
            <Route path='/su23/demo/pathyielder' element={<PathYielder/>}/>
            <Route path='/su23/practice' element={<Practice/>}/>
            <Route path='/su23/week2/rec' element={<Rec/>}/>
            <Route path='/su23/week3/treeadt' element={<TreeADT/>}/>
            <Route path='/su23/week3/sequences' element={<Lists/>}/>
            <Route path='/su23/week4/itergen' element={<IterGen/>}/>
            <Route path='/su23/week4/efficiency' element={<Eff/>}/>
            <Route path='/su23/week5/oop' element={<OOP/>}/>
            <Route path='/su23/week5/trees-linked-lists' element={<LinkedLists/>}/>
            <Route path='/su23/week6/scheme' element={<Scheme/>}/>
            <Route path='/su23/week6/interpreters' element={<Interpreters/>}/>
            <Route path='/su23/week6/tail' element={<Tail/>}/>
            <Route path='/su23/week7/SQL' element={<SQL/>}/>
            <Route path='/su23/week7/regex' element={<Regex/>}/>
          </Routes>
    </>
  );
}
export default App