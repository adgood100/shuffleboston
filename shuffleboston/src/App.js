import React from "react";
import ReactModal from "react-modal";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Header from "./components/Header";

import Game from "./components/Game";

const App = () => 

	<Router>
		<div>

		        <Route exact path="/" component={Home} />
		        <Route exact path="/home" component={Home} />

		</div>
	</Router>;

export default App;
