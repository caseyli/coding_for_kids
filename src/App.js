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

  function moveUp() {
    if(playerRow !== 0) {
      setPlayerRow((prevPlayerRow) => prevPlayerRow - 1);
    }
  }

  function moveDown() {
    if(playerRow !== 3) {
      setPlayerRow((prevPlayerRow) => prevPlayerRow + 1);
    }
  }

  function moveLeft() {
    if(playerCol !== 0) {
      setPlayerCol((prevPlayerCol) => prevPlayerCol - 1);
    }
  }

  function moveRight() {
    if(playerCol !== 3) {
      setPlayerCol((prevPlayerCol) => prevPlayerCol + 1);
    }
  }

  function handleUpClick(e) {
    e.preventDefault();
    moveUp();
  }

  function handleDownClick(e) {
    e.preventDefault();
    moveDown();
  }

  function handleLeftClick(e) {
    e.preventDefault();
    moveLeft();
  }

  function handleRightClick(e) {
    e.preventDefault();
    moveRight();
  }

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
            <a onClick={handleUpClick} className='control-button'><img src={arrowUp} /></a>
            <div className='control-button-spacer'></div>
          </div>
          <div className='control-row'>
            <a onClick={handleLeftClick} className='control-button'><img src={arrowLeft} /></a>
            <div className='control-button-spacer'></div>
            <a onClick={handleRightClick} className='control-button'><img src={arrowRight} /></a>
          </div>
          <div className='control-row'>
          <div className='control-button-spacer'></div>
            <a onClick={handleDownClick} className='control-button'><img src={arrowDown} /></a>
            <div className='control-button-spacer'></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
