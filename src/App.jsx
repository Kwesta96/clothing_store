import styled from 'styled-components'
import { Cart } from './pages/Cart';
import Home from "./pages/Home";
import { Login } from './pages/Login';
import { Product } from "./pages/Product";
import { ProductList } from "./pages/ProductList";
import { Register } from './pages/Register';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const Container = styled.div`
  max-width: 1700px;
`

const App = () => {
  return (

    <Router>
      <Container>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </Container>
    </Router>
  )
};

export default App;