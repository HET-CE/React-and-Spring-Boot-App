import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ListEmployeeComponent from './components/ListEmployeeComponent'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CreateEmployee from './components/CreateEmployee';
import ViewEmployee from './components/ViewEmployee';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Header />
            <div className="container">
              <Switch> 
                <Route path = "/" exact component = {ListEmployeeComponent} ></Route>
                <Route path = "/employees" component = {ListEmployeeComponent} ></Route>
                <Route path = "/add-employee/:id" component = {CreateEmployee} ></Route>
                <Route path = "/view-employee/:id" component = {ViewEmployee} ></Route>
              </Switch>
            </div>
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
