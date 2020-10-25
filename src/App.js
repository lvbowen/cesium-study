import logo from './logo.svg';
import './App.css';
import "cesium/Build/Cesium/Widgets/widgets.css";
// import HuiZhiDiQiu from './cesium/HuiZhiDiQiu'
import HuiZhiDiQiu from './resium/HuiZhiDiQiu'

window.CESIUM_BASE_URL = '/static/cesium/';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <HuiZhiDiQiu />
    </div>
  );
}

export default App;
