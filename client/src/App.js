import AllUsers from './Component/AllUsers';
import AddUser from './Component/AddUser';
import EditUser from './Component/EditUser';
import NavBar from './Component/NavBar';
 import AddCategory from './Component/AddCategory'

import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/all" component={AllUsers} />
        <Route exact path="/add" component={AddUser} />
        <Route exact path="/add/category" component={AddCategory} />
        <Route exact path="/edit/:id" component={EditUser} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
