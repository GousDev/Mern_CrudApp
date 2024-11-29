import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Update from "./components/Update";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Header />}/>
          <Route path="/edit/:id" element={<Update />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
