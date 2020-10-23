import React from "react";

//include images into your bundle
import { useState, useEffect } from "react";
import { checkPropTypes } from "prop-types";

//create your first component
export function Home() {
	const [value, setValue] = useState();
	const [todo, setTodo] = useState([]);

	//las funciones que maneja el evento se colocan aparte por facilidad de lectura:
	const handleChange = event => setValue(event.target.value);
	const handleKeyPress = event => {
		if (event.key === "Enter" && value != "") {
			setTodo([...todo, value]);
            setValue("")
		}
	}
	//cuando presione enter cambio la lista todo y borro el imput
	//cuando haga click en el li que se borre const handleComosellame(click). se coloca en el li

	return (
		<div className="text-center mt-5">
			<div className="row">
				<div className="container-fluid">
					<h1 className="display-2">todos</h1>
					<div className="container">
						<p>Mis tareas son: {value}</p>
						<input
							type="text"
							onChange={handleChange}
							onKeyPress={handleKeyPress}
							
						/>
						<p />
						<ul>
							{todo.map((value, index) => (
								<li key={index}>{value}</li>
							))}
						</ul>
						<br />
					</div>
				</div>
			</div>
		</div>
	);
}

// se declara la variable const con un "value" que se cambia al aplicar "setValue", por eso se usa use state
// si la funcion flecha no retorna nada van currybraquet despues de la flecha. Si retorna va con ()
///...operador de destructuring. Saca todos los componentes de un array aparte, tb pasa con objertps. No reescribe sino que añade valores.
