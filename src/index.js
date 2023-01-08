import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import Login from './login';
import RegisterForm from './register';
import CreateBook from './createbook';

const rootElement = document.getElementById('reactapp');
const root = createRoot(rootElement);

root.render(
  <>
    <App />
    <RegisterForm/>
    <Login/>
    <CreateBook/>
  </>
);
