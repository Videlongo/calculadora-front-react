import Add from "../operations/Add";
import Sub from "../operations/Sub";
import Div from "../operations/Div";
import Mul from "../operations/Mul";
import { Switch, Route } from "react-router-dom";

export default function App() {
	return (
		<Switch>
			<Route path="/suma" component={Add} />
			<Route path="/resta" component={Sub} />
			<Route path="/division" component={Div} />
			<Route path="/multiplicacion" component={Mul} />
		</Switch>
	);
}
