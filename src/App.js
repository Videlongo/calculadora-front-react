import "./App.css";
import NavbarComponent from "./components/navbar/NavbarComponent";
import { BrowserRouter } from "react-router-dom";
import Router from "./components/router/Router";
function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<NavbarComponent />
				<Router />
			</BrowserRouter>
		</div>
	);
}

export default App;
