import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-loading";
import Landing from './pages/landing';
import PageUC from './pages/pageUC'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} loading />
          <Route path="/discover" element={<PageUC />} loading />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
