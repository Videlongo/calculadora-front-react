import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";

const reqDic = "/calculadora";
export { reqDic };

export default function FormComponent({route}) {
	const [data, setData] = useState({
		number1: "",
		number2: "",
		status: "",
		result: "",
	});

	const handleInputChange = (event) => {
		setData({ ...data, [event.target.name]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(data, "---> enviando data");
		axios
			.get(
				`${reqDic}/${route}?num1=${data.number1}&num2=${data.number2}`
			)
			.then((response) => {
				console.log(response);
				setData({
					...data,
					result: response.data.result,
					status: response.data.status,
				});
			});
	};

	return (
		<div>
			<Form className="container" onSubmit={handleSubmit}>
				<div className="row">
					<FormGroup className="col-md-6 col-sm-12">
						<Label for="number1">Número 1</Label>
						<Input
							type="number"
							name="number1"
							id="number1"
							placeholder="Ingrese el número 1"
							onChange={handleInputChange}
						/>
					</FormGroup>
					<FormGroup className="col-md-6 col-sm-12">
						<Label for="number2">Número 2</Label>
						<Input
							type="number"
							name="number2"
							id="number2"
							placeholder="Ingrese el número 2"
							onChange={handleInputChange}
						/>
					</FormGroup>
				</div>

				<FormGroup className="col-12">
					<Button color="primary" size="lg" block type="submit">
						Calcular
					</Button>
				</FormGroup>
			</Form>
			<div>
				<h3>Restultado: {data.result}</h3>
				<p>{data.status}</p>
			</div>
		</div>
	);
}
