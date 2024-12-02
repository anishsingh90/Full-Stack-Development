import './App.css';
import Navbar from './Components/props & types/Navbar';
import TextForm from './Components/UseState & state/TextForm';

function App() {
  return (
    <>
   
   <Navbar title="TextUtils" aboutText="About TextUtils"/>
   {/* <Navbar/> */}
  
  <div className="container my-3">
    <TextForm heading="Enter the text to analyze"/>
  </div>
    </>
  );
}

export default App;