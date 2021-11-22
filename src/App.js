import logo from './logo.svg';
import './App.css';

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

  // Functions to check if there is any winner 
  function checkForWinner() {
    return new Promise(() => {
      setTimeout(() => {
        
    if (topleft && topcenter && topright && (topleft === topcenter) && (topcenter === topright)) {
      setDisableButtons(true);
      setWinner(topleft + ' wins');
    } else if (centerleft && centercenter && centerright && (centerleft === centercenter) && (centercenter === centerright)) {
      setDisableButtons(true);
      setWinner(centerleft + ' wins');
    } else if (bottomleft && bottomcenter && bottomright && (bottomleft === bottomcenter) && (bottomcenter === bottomright)) {
      setDisableButtons(true);
      setWinner(bottomleft + ' wins');
    } else if (topleft && centerleft && bottomleft && (bottomleft === centerleft) && (centerleft === bottomleft)) {
      setDisableButtons(true);
      setWinner(topleft + ' wins');
    } else if (topcenter && centercenter && bottomcenter && (topcenter === centercenter) && (centercenter === bottomcenter)) {
      setDisableButtons(true);
      setWinner(topcenter + ' wins');
    } else if (topright && centerright && bottomright && (topright === centerright) && (centerright === bottomright)) {
      setDisableButtons(true);
      setWinner(topright + ' wins');
    } else if (topleft && centercenter && bottomright && (topleft === centercenter) && (centercenter === bottomright)) {
      setDisableButtons(true);
      setWinner(topleft + ' wins');
    } else if (bottomleft && centercenter && topright && (bottomleft === centercenter) && (centercenter === topright)) {
      setDisableButtons(true);
      setWinner(bottomleft + ' wins');
    } 
      }, 1000);
    });
}

async function pick(mark, position) {  
  markGrid(mark, position);
  await checkForWinner();
}

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

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
