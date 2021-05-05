import logo from './logo.svg';
import {ToastContainer,toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  const inputChange=()=>{
    toast('🦄 Wow so easy!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
      });
  }
  return (
    <div className="App">
      <button onClick={inputChange}>
        click
      </button>
        <ToastContainer/>
    </div>
    
  );
}

export default App;
