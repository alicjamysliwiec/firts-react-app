import './App.css';
import Weather from "./Weather"

function App() {
return (
    <body>
      <Weather />
   
        <footer>
          <span>
            <a
              href="https://github.com/alicjamysliwiec/WeatherApp"
              className="source"
              target="_blank"
              rel="noreferrer" 
            >
              Open-source code
            </a>
          </span>
          <span> by </span>
          <span>
            <a
              href="https://www.linkedin.com/in/alicja-my%C5%9Bliwiec-b8b160201/"
              className="author"
              target="_blank"
              rel="noreferrer" 
            >
              Alicja Myśliwiec
            </a>
          </span>
        </footer>
    </body>
  );
}

export default App;
