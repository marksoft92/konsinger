import React, { ComponentType, ReactElement } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import NewsList from './features/news/news';
import './App.scss'
import LanguageWrapper from './features/languages/LanguageWraper';


interface RouteProps {
  element?: ReactElement;
}

function App() {
  return (
    <LanguageWrapper>
      <Routes>
        <Route path="/" element={<Layout><NewsList /></Layout>} />
        <Route path="/country/:id" element={<Layout><NewsList /></Layout>} />
      </Routes>
    </LanguageWrapper>
  );
}

export default App;
