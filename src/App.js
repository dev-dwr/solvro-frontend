import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import PostDetails from "./pages/PostDetails/PostDetails";

function App() {
  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Switch>
          <Route path="/" exact component={() => <Redirect to="/posts?favourites=0&_start=1" />} />
          <Route path="/posts" exact component={HomePage} />
          <Route path="/posts/:id" exact component={PostDetails} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
