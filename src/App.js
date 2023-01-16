// import logo from './logo.svg';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import Welcome from './components/Welcome';
import Color from './components/Color';
import ColorPage from './components/ColorPage';

const colorList = [
  {colorName: "red", colorHex: "#FF0000"},
  {colorName: "green", colorHex: "#008000"},
  {colorName: "blue", colorHex: "#0000FF"}                    
]


function App() {
  return (
    <div className="App">
     <Routes>
     <Route path="/" element={<Welcome colorList={colorList}/>} ></Route>
     <Route path='color' element={<Color colorList={colorList}/>}> </Route>
      <Route path="colorPage/:colorName/:colorHex" element={<ColorPage colorList={colorList}/>}> </Route>
     </Routes>
    </div>
  );
}

export default App;
