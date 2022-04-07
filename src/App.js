import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import StartPage from './Components/StartPage';
import PlantList from './Components/PlantList';
import SelectedPlant from './Components/SelectedPlant';
import MyPlants from './Components/MyPlants';

function App() {
  return (
    
    <Router>
    

      <main className='start'>
        <Routes>

          <Route exakt path='/' element={<StartPage />} />
          <Route exakt path='/Plants' element={<PlantList />} />
          <Route path='/selectedPlants/:id' element={<SelectedPlant />} />
          <Route path='/MyPlants' element={<MyPlants/>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

