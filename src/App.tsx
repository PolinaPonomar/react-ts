import React from 'react';
import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom';
import UserPage from './components/UserPage';
import TodosPage from './components/TodosPage';
import UserItemPage from './components/UserItemPage';
import TodoItemPage from './components/TodoItemPage';
import MainPage from './components/MainPage';



function App() {
  return (
    <BrowserRouter>
      <div>
        <div>
          <NavLink to="/users" style={{textDecoration: 'none'}}>Пользователи </NavLink>
          <NavLink to="/todos" style={{textDecoration: 'none'}}>Список дел</NavLink>
        </div>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/users' element={<UserPage/>}/>
          <Route path='/todos' element={<TodosPage/>}/>
          <Route path='/users/:id' element={<UserItemPage/>}/>
          <Route path='/todos/:id' element={<TodoItemPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
};

export default App;
