import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-loading";
import Landing from './pages/landing';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} loading />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
