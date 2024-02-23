import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import IndividualForm from './components/IndividualForm';
import BusinessForm from './components/BusinessForm';
import ContactPage from './components/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="individual" element={<IndividualForm />} />
          <Route path='contactPage' element={<ContactPage />} />
          <Route path="business" element={<BusinessForm />} />
          <Route path="verification" element={<BusinessForm />} />
          </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
