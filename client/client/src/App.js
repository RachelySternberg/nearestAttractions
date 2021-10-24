import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from 'react-router';
import Header from './components/header/header';
import HomePage from './pages/homePage/homePage';
import NearestAttractions from './pages/nearestAttractions/nearestAttractions';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Route exact component={HomePage} path="/" />
        <Route exact component={NearestAttractions} path="/attractions" />
      </Router>
    </>
  );
}

export default App;
