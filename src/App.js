import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Route';

function App() {
  return (
    <div className="App bg-gradient-to-r from-[#2d6a4f] from-10% bg-[#40916c] via-30% to-emerald-500 to-90%">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
