import './App.css';
import Home from './pages/Home';
import ImageGeneration from './pages/ImageGeneration';
import DaVinci from './pages/DaVinci';
import VanGogh from './pages/VanGogh';
import Munch from './pages/Munch';
import Vermeer from './pages/Vermeer';
import Hokusai from './pages/Hokusai';
import Picasso from './pages/Picasso';
import PoemGeneration from './pages/PoemGeneration';
import Shakespeare from './pages/Shakespeare';
import Frost from './pages/Frost';
import Whitman from './pages/Whitman';
import MajnuBhai from './pages/MajnuBhai';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/imagegeneration' element={<ImageGeneration />}/>
          <Route path='/imagegeneration/davinci' element={<DaVinci />}/>
          <Route path='/imagegeneration/vangogh' element={<VanGogh />}/>
          <Route path='/imagegeneration/munch' element={<Munch />}/>
          <Route path='/imagegeneration/vermeer' element={<Vermeer />}/>
          <Route path='/imagegeneration/hokusai' element={<Hokusai />}/>
          <Route path='/imagegeneration/picasso' element={<Picasso />}/>
          <Route path='/imagegeneration/majnubhai' element={<MajnuBhai />}/>
          <Route path='/poemgeneration' element = {<PoemGeneration />}/>
          <Route path='/poemgeneration/shakespeare' element={<Shakespeare />} />
          <Route path='/poemgeneration/frost' element={<Frost />} />
          <Route path='/poemgeneration/whitman' element={<Whitman />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
