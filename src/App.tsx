import React from 'react';
import './css/app.css';
import Header from './components/header';
import MainContent from './components/mainContent';
import SideContentList from './components/sideContentList';

function App() {
  return (
    <>
      <Header />
      <section id="contents">
        <MainContent />
        <SideContentList />
      </section>
    </>
  );
}

export default App;
