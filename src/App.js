import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Welcome from './components/Welcome';
import Color from './components/Color';
import ColorPage from './components/ColorPage';

const colorLists = [
  {colorName: "red", colorHex: "#FF0000"},
  {colorName: "green", colorHex: "#008000"},
  {colorName: "blue", colorHex: "#0000FF"}                    
];

function App() {
  const[colorList, setColorList] = useState(colorLists);
  const [search, setSearch] = useState("");
  const [selectColor, setSelectColor] = useState("");
    
  const navigate = useNavigate();

    const getInput = (e) => {
      setSearch(e.target.value);         
    }

    const getSelectedColor = (e) => {    
      setSelectColor(e.target.value);    
    } 

    const setAddColor = (e) =>{
      e.preventDefault()
      const entries = [{colorName: search, colorHex: selectColor}];
      const records = entries.concat(colorList);
      setColorList(records);
      navigate('/')
    };

  return (
    <div className="App">
     <Routes>
     <Route path="/" element={<Welcome colorList={colorList}/>} ></Route>
     <Route path='color' element={<Color colorList={colorList} getInput={getInput} getSelectedColor={getSelectedColor} setAddColor={setAddColor}/>}> </Route>
      <Route path="colorPage/:colorName/:colorHex" element={<ColorPage colorList={colorList}/>}> </Route>
     </Routes>
    </div>
  );

};

export default App;
