import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';
import './App.scss';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
