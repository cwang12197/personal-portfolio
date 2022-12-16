import './App.css';
import Typewriter from "typewriter-effect";
import NavBar from '../NavBar/NavBar';

function App() {
  return (
   
    <div className="App">
        <div className = "heading">
        <NavBar />
        </div>

          <div className="greeting">
            Hey there! I am
            <br />
            <span>
              <p>Christina Wang</p>
            </span>
          </div>
          {/* <div className="subtext">
            <Typewriter
              options={{
                strings: ["Web Developer", ":)", "Cat Lover"],
                autoStart: true,
                loop: true,
                delay: 60
              }}
            />
          </div> */}
        </div>
  );
}

export default App;
