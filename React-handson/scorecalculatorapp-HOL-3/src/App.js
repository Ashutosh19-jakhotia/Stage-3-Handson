import logo from './logo.svg';
import './App.css';
import {CalculateScore} from '../src/Components/CalculateScore';

function App() {
  return (
    <div className="App">
      <CalculateScore Name={"Akhil"} School={"Dr.SRK EM School"}
       total={490}
       goal={6}/>
    </div>
  );
}

export default App;
