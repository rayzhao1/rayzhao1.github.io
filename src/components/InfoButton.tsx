import { useState } from 'react'

export type ButtonProps = {
  children?: React.ReactNode;
  color:string,
};

export const PopButton: React.FC<ButtonProps> = ({
  children,
  color,
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
              <div className = "pop-info">
                <h4>Section Info</h4>
                  <div className='center_text'>I have two sections. Make sure you attend the right one (<a href='https://sections.cs61a.org/' target="_blank" rel="noopener noreferrer">check here</a>)!</div>
                    <div className='center_table_btwn'>
                      <table style={{display: 'inline-block'}}>
                        <tbody>
                          <tr>
                            <td>(E)</td><td><strong>Time</strong></td><td><strong>Place</strong></td>
                          </tr>
                          <tr>
                            <td><strong>Lab (Tue)</strong></td> <td>4:00-5:30</td> <td>Soda 275</td>
                          </tr>
                          <tr>
                            <td><strong>Disc (Thu)</strong></td> <td>3:30-5:00</td> <td>Wheeler 224</td>               
                          </tr>
                        </tbody>
                      </table>
          
                      <table style={{display: 'inline-block'}}>
                        <tbody>
                          <tr>
                            <td>(L)</td><td><strong>Time</strong></td><td><strong>Place</strong></td>
                          </tr>
                          <tr>
                            <td><strong>Lab (Tue)</strong></td> <td>5:30-7:00</td> <td>Soda 275</td>
                          </tr>
                          <tr>
                            <td><strong>Disc (Thu)</strong></td> <td>5:00-6:30</td> <td>Wheeler 200</td>               
                          </tr>
                        </tbody>
                      </table>
                  </div>
                  <h4 className = 'rem_h4'>Lab Interns</h4>
                <div className='off_wrapper' style={{columnGap: 10 + 'rem'}}>         
                  <div>
                      <ul>
                        <li>Lydia Liu</li>
                        <li>Aamani Gurajada</li>
                        <li>Toben Main</li>
                      </ul>
                  </div>
                  <div>
                      <ul>
                        <li>Aimee Yu</li>
                        <li>Justin Yoon</li>
                        <li>Harry Lu</li>
                      </ul>
                  </div>
                </div>
                <h4 className = 'rem_h4'>Contact</h4>
                  <div className='center_text'>raymondzhao@berkeley.edu</div>
              </div>
          </div>
        )}
    </>
  );
};

export default PopButton;