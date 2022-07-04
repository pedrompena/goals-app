import { Route, Routes } from 'react-router-dom';
import { useContext, useEffect } from 'react';

import './App.css';
import Layout from './components/Layout';
import List from './components/list/List';
import Details from './components/add/Details';
import NotFound from './components/NotFound';
import PopUp from './components/share/PopUp';
import { orderGoals } from './services/Orders';
import { Context } from './services/Memory';

function App() {

  const [,dispatch] = useContext(Context);

  useEffect(() => {
    const order = async () => {
        const goals = await orderGoals();
        dispatch({ type: 'place', goals });
    };
    order();
  },[]);

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
