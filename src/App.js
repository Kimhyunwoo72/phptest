import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Main from "./components/pages/Main"
import About from "./components/pages/About"
import Reference from "./components/pages/Reference"
import Script from "./components/pages/Script"
import Contact from "./components/pages/Contact"
import Youtube from "./components/pages/Youtube"
import Portfolio from "./components/pages/Portfolio"
import ReferDetail from "./components/pages/ReferDetail"

// 1. 라우팅이란?
//  - 간단하게 생각 하자면 사용자가 요청한 URL에 따라 해당 URL에 맞는 페이지를 보여주는 것이라고 생각할 수 있다.



function App() {
  return (
    <Router>
      <Route path="/" exact component={Main} />
      <Route path="/about" exact component={About} />
      <Route path="/reference" exact component={Reference} />
      <Route path="/refer-detail" exact component={ReferDetail} />
      <Route path="/script" exact component={Script} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/youtube" exact component={Youtube} />
      <Route path="/portfolio" exact component={Portfolio} />
    </Router>
  );
}

export default App;
