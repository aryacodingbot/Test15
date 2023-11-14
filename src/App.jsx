import './App.css';
import { Navbar } from './component/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Sign_in } from './component/Sign_in';
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <br></br>
      <Sign_in></Sign_in>
    </div>
  );
}

export default App;
