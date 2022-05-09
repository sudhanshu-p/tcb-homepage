import logo from './logo.jpg';
import Burger from './burger.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span className="sl">
          <span className="signup">Sign Up</span>
          <span className="login">Login</span>
        </span>
        <h1>The CodeBreakers</h1>
        <button className='Menu-button'>
        <img src={Burger} className="Menu-icon" alt="Menu-icon" width="50vh" height="50vh"/>
        </button>
      </header>
      <div className="App-body">
        <div className="logo">
          <img src={logo} className="body-logo" alt="The CodeBreakers Logo"/>
        </div>
        <div className="body-text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ex itaque consequuntur aliquam voluptatem, assumenda distinctio eligendi accusamus perferendis. Dicta minus voluptatem ex fugit, saepe maxime aut qui nulla consequatur.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;