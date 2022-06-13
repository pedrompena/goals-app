import { Route, Routes } from 'react-router-dom';

import './App.css';
import Layout from './components/Layout';
import List from './components/list/List';
import Details from './components/add/Details';
import NotFound from './components/NotFound';
import PopUp from './components/share/PopUp';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<List />} />
        <Route path='/list' element={<List />}>
          <Route path='/list/:id' element={
            <PopUp>
              <Details />
            </PopUp>} />
        </Route>
        <Route path='/add' element={<Details />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
