import './App.css';
import React, { useState } from 'react';

function App() {

  // Variables 
  const [topleft, setTopleft] = useState('');
  const [topcenter, setTopcenter] = useState('');
  const [topright, setTopright] = useState('');
  const [centerleft, setCenterleft] = useState('');
  const [centercenter, setCentercenter] = useState('');
  const [centerright, setCenterright] = useState('');
  const [bottomleft, setBottomleft] = useState('');
  const [bottomcenter, setBottomcenter] = useState('');
  const [bottomright, setBottomright] = useState('');
  const grid = [topleft, topcenter, topright];
  const grid2 = [centerleft, centercenter, centerright];
  const grid3 = [bottomleft, bottomcenter, bottomright];
  const [winner, setWinner] = useState('No winner... Game is going on');
  const [disableButtons, setDisableButtons] = useState(false);
  const [winningPositions, setWinningPositions] = useState(['']);

  // Functions to check if there is any winner 
  function checkForWinner() {
    return new Promise(() => {
      setTimeout(() => {        
        if (topleft && topcenter && topright && (topleft === topcenter) && (topcenter === topright)) {
          setDisableButtons(true);
          setWinner(topleft + ' wins');
          setWinningPositions([0,1,2]);
        } else if (centerleft && centercenter && centerright && (centerleft === centercenter) && (centercenter === centerright)) {
          setDisableButtons(true);
          setWinner(centerleft + ' wins');
          setWinningPositions([3,4,5]);
        } else if (bottomleft && bottomcenter && bottomright && (bottomleft === bottomcenter) && (bottomcenter === bottomright)) {
          setDisableButtons(true);
          setWinner(bottomleft + ' wins');
          setWinningPositions([6,7,8]);
        } else if (topleft && centerleft && bottomleft && (bottomleft === centerleft) && (centerleft === bottomleft)) {
          setDisableButtons(true);
          setWinner(topleft + ' wins');
          setWinningPositions([0,4,8]);
        } else if (topcenter && centercenter && bottomcenter && (topcenter === centercenter) && (centercenter === bottomcenter)) {
          setDisableButtons(true);
          setWinner(topcenter + ' wins');
          setWinningPositions([1,4,7]);
        } else if (topright && centerright && bottomright && (topright === centerright) && (centerright === bottomright)) {
          setDisableButtons(true);
          setWinner(topright + ' wins');
          setWinningPositions([2,5,8]);
        } else if (topleft && centercenter && bottomright && (topleft === centercenter) && (centercenter === bottomright)) {
          setDisableButtons(true);
          setWinner(topleft + ' wins');
          setWinningPositions([0,4,8]);
        } else if (bottomleft && centercenter && topright && (bottomleft === centercenter) && (centercenter === topright)) {
          setDisableButtons(true);
          setWinner(bottomleft + ' wins');
          setWinningPositions([6,4,2]);
        } 
      }, 50);
    });
  }

  // Pick asynchronously a mark on the board
  async function pick(mark, position) {  
    markGrid(mark, position);
    await checkForWinner();
  }

  // Marking the grid upon case selected by player
  function markGrid(mark, position) {
    switch (position) {
      case 0: 
        setTopleft(mark);
        break;
      case 1: 
        setTopcenter(mark);
        break;
      case 2: 
      setTopright(mark);
        break;
      case 3: 
        setCenterleft(mark);
        break;
      case 4: 
        setCentercenter(mark);
        break;
      case 5: 
      setCenterright(mark);
        break;
      case 6: 
        setBottomleft(mark);
        break;
      case 7: 
        setBottomcenter(mark);
        break;
      case 8: 
        setBottomright(mark);
        break;
      default:
        break;
    }
  }

  // Reset the whole game
  function reset() {
    setTopleft('');
    setTopcenter('');
    setTopright('');
    setCenterleft('');
    setCentercenter('');
    setCenterright('');
    setBottomleft('');
    setBottomcenter('');
    setBottomright('');
    setWinner('No winner... Game is going on');
    setDisableButtons(false);
    setWinningPositions(['']);
  }

  return (
    <div className="App App-header" onMouseOver={checkForWinner}>
      <div className={"board " + (winner !== 'No winner... Game is going on' ? "finished" : "")}>
        <span> {winner}  </span>
        <button onClick={() => reset()}>reset</button>
      </div>
    <div className="wrapper">
      {(grid.map((item, i) =>         
        <li className={(winningPositions.includes(i) ? 'winning' : '')}>
        <h1>
        {grid[i] || '...'} 
        </h1>
        <div className="marks">
        <hr/>
        <button disabled={disableButtons} onClick={() => pick('x', i)}>X</button>
        <button disabled={disableButtons} onClick={() => pick('o', i)}>O</button> 
        </div>
        </li>
      ))}
      
      {(grid2.map((item, i) =>         
        <li className={(winningPositions.includes(i+3) ? 'winning' : '')}>
        <h1>
        {grid2[i] ||  '...'}
        </h1>
        <hr/>
        <button disabled={disableButtons} onClick={() => pick('x', i+3)}>X</button>
        <button disabled={disableButtons} onClick={() => pick('o', i+3)}>O</button> 
        </li>     
      ))}

      {(grid3.map((item, i) =>         
        <li className={(winningPositions.includes(i+6) ? 'winning' : '')}>
        <h1>
        {grid3[i] ||  '...'}
        </h1>
        <hr/>
        <button disabled={disableButtons} onClick={() => pick('x', i+6)}>X</button>
        <button disabled={disableButtons} onClick={() => pick('o', i+6)}>O</button> 
        </li>
      ))}

      </div>
  </div>
  );
}

export default App;
