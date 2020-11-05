import React from "react";
import { useState, useEffect } from "react";
import { checkPropTypes } from "prop-types";

//create your first component
export function Home() {
	const [task, setTask] = useState();
    const [todo, setTodo] = useState([]);
    const [checked, setChecked] = useState("");

	//las funciones que maneja el evento se colocan aparte por facilidad de lectura:
    const handleChange = event => setTask(event.target.value);
    //ta
	const handleKeyPress = event => {
		if (event.key === "Enter" && task != "") {
            setTodo([...todo, task]);
            setTask ("");
		}
    };
   
	return (
        <div className="container-fluid">
            <h2>todos mis ToDos</h2>
            <div className="container">
                <input
                    type="text"
                    onChange={handleChange}
                    onKeyPress={handleKeyPress}
                    placeholder="próxima tarea"
                    value={task}>
                </input>
                
                <h5>Mis tareas son: {task}</h5>
                <ul>
                    {todo.map((element, index) => (
                        <li key={index}>
                                <button type="button" 
                                onClick={() => setChecked(" yes")}
                                >
                                    <span aria-hidden="true">
                                        <i className="fas fa-check" ></i> 
                                    </span>
                                    <span className= { "done" + checked } >
                                        {element} 
                                    </span>
                                </button>     
                        </li>    
                    ))}
                </ul>
                <br />
            </div>
        </div>
	);
}

// se declara la variable const con un "value" que se cambia al aplicar "setValue", por eso se usa use state
// si la funcion flecha no retorna nada van currybraquet despues de la flecha. Si retorna va con ()
///...operador de destructuring. Saca todos los componentes de un array aparte, tb pasa con objertps. No reescribe sino que añade valores.
