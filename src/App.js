import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router';
// import Postlist from './components/Postlist';
function App() {
  return (
    <>
      <Header />
      {/* <Routes>
        <Route path="/" element={<Postlist />} />
      </Routes> */}
    </>
  );
}

export default App;
