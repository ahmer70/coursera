
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';
import MenuComponent from './components/MenuComponent';
function App() {
  return (
    <>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href='/'>ConFusion</NavbarBrand>
        </div>
      </Navbar>
      <MenuComponent/>
    </>
  );
}

export default App;
