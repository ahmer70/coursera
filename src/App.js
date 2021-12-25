import logo from './logo.svg';
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';
function App() {
  return (
    <>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href='/'>ConFusion</NavbarBrand>
        </div>
      </Navbar>
    </>
  );
}

export default App;
