import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactList from "./page/ContactList";
import ContactDetail from "./page/ContactDetail";
import "./styles/App.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="/contact/:id" element={<ContactDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
