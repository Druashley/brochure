import { Switch, Route } from "react-router-dom";

import Gallery from "./pages/Gallery";

import NavBar from "./components/NavBar";

import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Gallery />
        </Route>
        <Route path="/color" exact>
          <ProductDetail product={"color"} />
        </Route>
        <Route path="/loft" exact>
          <ProductDetail product={"loft"} />
        </Route>
        <Route path="/deck" exact>
          <ProductDetail product={"deck"} />
        </Route>
        <Route path="/door" exact>
          <ProductDetail product={"door"} />
        </Route>
        <Route path="/skirt" exact>
          <ProductDetail product={"skirt"} />
        </Route>
        <Route path="/siding" exact>
          <ProductDetail product={"siding"} />
        </Route>
        <Route path="/interior" exact>
          <ProductDetail product={"interior"} />
        </Route>
        <Route path="/windows" exact>
          <ProductDetail product={"windows"} />
        </Route>
        <Route path="/shelves" exact>
          <ProductDetail product={"shelves"} />
        </Route>
        <Route path="/ramps" exact>
          <ProductDetail product={"ramps"} />
        </Route>
        <Route path="/flowerboxes" exact>
          <ProductDetail product={"flowerboxes"} />
        </Route>
        <Route path="/pegboard" exact>
          <ProductDetail product={"pegboard"} />
        </Route>
        <Route path="/weathervane" exact>
          <ProductDetail product={"weathervane"} />
        </Route>
        <Route path="/roof" exact>
          <ProductDetail product={"roof"} />
        </Route>
        <Route path="/barn" exact>
          <ProductDetail product={"barns"} />
        </Route>
        <Route path="/shed" exact>
          <ProductDetail product={"sheds"} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
