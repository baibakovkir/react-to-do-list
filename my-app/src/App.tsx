import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import ToDoList from './components/ToDoList';
import { Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './state/store';


const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/login" Component={Login} />
          <Route path="/to-do-list" Component={ToDoList} />
          <Route path="/" element={<Navigate to="/to-do-list" replace />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
