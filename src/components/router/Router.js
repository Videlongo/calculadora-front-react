import Add from "../operations/Add";
import Sub from "../operations/Sub";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
	return (
		<Switch>
			<Route path="/suma" component={Add} />
			<Route path="/resta" component={Sub} />
		</Switch>
	);
}
