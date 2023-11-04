import { useState } from 'react'

export type ButtonProps = {
  children?: React.ReactNode;
  color:string,
  msg: string;
};

export const PopButton: React.FC<ButtonProps> = ({
  children,
  color,
  msg
  }) => {
    const [pop, setPop] = useState(false)
    const togglePop = () => {
        setPop(!pop)
    }

    if(pop) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

  return (
    <>
        <button onClick= {togglePop} className={color}>
          {children}
        </button>
        {pop && (
          <div className="pop">
              <div onClick = {togglePop} className = "overlay"></div>
              <div className = "pop-content">
                  <p>
                      {msg}
                  </p>
              </div>
          </div>
        )}
    </>
  );
};

export default PopButton;