import babyYoda from './images/babyyoda.jpg';
import frog from './images/frog.jpg';
import babyYodaAndFrog from './images/babyyodaandfrog.jpg';

import arrowUp from './images/arrow-up.png';
import arrowDown from './images/arrow-down.png';
import arrowLeft from './images/arrow-left.png';
import arrowRight from './images/arrow-right.png';

import './App.scss';
import { useState } from 'react';

function App() {

  const [playerRow, setPlayerRow] = useState(0);
  const [playerCol, setPlayerCol] = useState(0);

  const [goalRow, setGoalRow] = useState(3);
  const [goalCol, setGoalCol] = useState(2);

  const rows = [0, 1, 2, 3];
  const columns = [0, 1, 2, 3];

  /* Using underscore because it's easier for those who don't code to read */
  function move_yoda_up() {
    if(playerRow !== 0) {
      setPlayerRow((prevPlayerRow) => prevPlayerRow - 1);
    }
  }

  function move_yoda_down() {
    if(playerRow !== 3) {
      setPlayerRow((prevPlayerRow) => prevPlayerRow + 1);
    }
  }

  function move_yoda_left() {
    if(playerCol !== 0) {
      setPlayerCol((prevPlayerCol) => prevPlayerCol - 1);
    }
  }

  function move_yoda_right() {
    if(playerCol !== 3) {
      setPlayerCol((prevPlayerCol) => prevPlayerCol + 1);
    }
  }

  /* ---------------------------------------------------------------------------------------
   * TEACHING SECTION: Fill in what you want yoda to do when various buttons are clicked 
   * ---------------------------------------------------------------------------------------
   * options: 
     - move_yoda_up();
     - move_yoda_down();
     - move_yoda_left();
     - move_yoda_right();
  */


  function when_you_press_the_down_button() {
    /* What do you want yoda to do when you press the up button? */
  }
  
  function when_you_press_the_right_button() {
    /* What do you want yoda to do when you press the up button? */
  }

  function when_you_press_the_up_button() {
    /* What do you want yoda to do when you press the up button? */
  }

  function when_you_press_the_left_button() {
    /* What do you want yoda to do when you press the up button? */
    /* There's a problem here, let's fix it */
    move_yoda_down();
  }



  /* ------------------------------------------------------------------------------------------
   * End of Teaching section 
   * ------------------------------------------------------------------------------------------
   */

  return (
    <div className="app">
      <div className="grid">
        {
          rows.map((row) => {
            return (
              <div className="row">
                {
                  columns.map((column) => {
                    return (
                      <div className="cell">
                        {
                          (row === playerRow && column === playerCol && row === goalRow && column === goalCol) ?
                            <img src={babyYodaAndFrog} />
                          :
                            <>
                              {
                                (row === playerRow && column === playerCol) &&
                                <img src={babyYoda} />
                              }

                              {
                                (row === goalRow && column === goalCol) &&
                                <img src={frog} />
                              }
                            </>
                        }
                      </div>
                    );
                  })
                }
              </div>
            );
          })
        }
      </div>
      <div className='controls'>
        <div className='control-grid'>
          <div className='control-row'>
            <div className='control-button-spacer'></div>
            <a onClick={(e) => { e.preventDefault(); when_you_press_the_up_button()} } className='control-button'><img src={arrowUp} /></a>
            <div className='control-button-spacer'></div>
          </div>
          <div className='control-row'>
            <a onClick={(e) => { e.preventDefault(); when_you_press_the_left_button()} } className='control-button'><img src={arrowLeft} /></a>
            <div className='control-button-spacer'></div>
            <a onClick={(e) => { e.preventDefault(); when_you_press_the_right_button()} } className='control-button'><img src={arrowRight} /></a>
          </div>
          <div className='control-row'>
          <div className='control-button-spacer'></div>
            <a onClick={(e) => { e.preventDefault(); when_you_press_the_down_button()} } className='control-button'><img src={arrowDown} /></a>
            <div className='control-button-spacer'></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
