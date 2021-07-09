import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "../pages/about/about";
import Books from "../pages/books/books";
import Godfather from "../pages/godfather/godfather";
import Home from '../pages/home/home'

function Routes() {
   return (
   <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/books" component={Books} />
            <Route path="/godfather" component={Godfather} />
            <Route path="/about" component={About} />
        </Switch>
    </Router>
    )
}

export default Routes