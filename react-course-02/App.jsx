import logo from './logo.svg';
import './App.css';


//FirstCompenent isminde bir yapı oluşturuyoruz.
function FirstCompenent() {
  return(
    <div>
      <span>FirstCompenent</span>
    </div>
    
  )
}


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Muhammet Bulut
        </p>
        //Oluşturduğumuz bu yapıyı burada çağırarak "FirstCompenent" yazısını yazdırmamıza yaradı.
        <FirstCompenent />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Kursumuz
        </a>
      </header>
    </div>
  );
}

export default App;
