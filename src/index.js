import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import {
  BrowserRouter,
  createHashRouter,
  RouterProvider,
} from 'react-router-dom';

// const router = createHashRouter([
//   {
//     path: '/*',
//     element: <App />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
