import React from 'react';
import Navbar from './Components/common/Navbar';
import SubNavbar from './Components/common/Subnavbar';
import HomePage from './Pages/Home';
import Footer from './Components/common/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
<SubNavbar/>
<HomePage/>
<Footer/>
      </div>
  );
}

export default App;
