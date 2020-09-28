"use strict";

const { HashRouter, Switch, Route } = ReactRouterDOM;

const App = () => {
  return (
    <DataProvider>
      <HashRouter>
        <div className="content">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/experience" component={Experience} />
            <Route path="/education" component={Education} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </HashRouter>
    </DataProvider>
  );
};

ReactDOM.render(<App />, document.querySelector("#app"));
