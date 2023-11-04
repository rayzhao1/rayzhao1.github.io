import React from 'react'
import { useNavigate } from 'react-router-dom'

export type ButtonProps = {
  name?: React.ReactNode;
  style: string;
  pdf: any;
  color: string;
};

export const NavButtonAdj: React.FC<ButtonProps> = ({
  name,
  pdf, 
  style,
  color
  }) => {
    const s = color + " " + style;
  return (
      <a href={pdf} target="_blank" className = {s}>{name}</a>
  );
};

export default NavButtonAdj;