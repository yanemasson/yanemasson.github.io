import './App.css';
import {HashRouter, Route, Routes} from 'react-router-dom';
import Mezhdurechensk from './pages/Mezhdurechensk.tsx';
import LeninskKuznetskiy from './pages/LeninskKuznetskiy.tsx';
import Novokuznetsk from './pages/Novokuznetsk.tsx';
import MainPage from './pages/MainPage.tsx';

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='' element={<MainPage/>}/>
          <Route path="mezhdurechensk" element={<Mezhdurechensk/>} />
          <Route path="novokuznetsk" element={<Novokuznetsk/>} />
          <Route path='leninsk_kuznetskiy' element={<LeninskKuznetskiy/>}/>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
