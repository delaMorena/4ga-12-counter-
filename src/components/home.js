import React from "react";
import { useState, useEffect } from "react";
import { checkPropTypes } from "prop-types";

//create your first component
export function Home() {
	const [task, setTask] = useState(); 
    const [todo, setTodo] = useState([]); // su list mi todo
    const [checked, setChecked] = useState("");
    const [key, setKey] = useState(0);

	//las funciones que maneja el evento se colocan aparte por facilidad de lectura:
    const handleChange = event => setTask(event.target.value);
    
	const handleKeyPress = event => {
		if (event.key === "Enter" && task != "") {
            setTodo([...todo, {"id": key, "chore": task}]);
            setTask ("");
            setKey(key + 1);
		}
        console.log(task, key);
    };
    function deleteTask(id) { 
        let newList = todo.filter((element, index) => {
            return (element.id !== id) // DEVUELVE TODOS LOS ELEMENTOS QUE CUMPLAN ESTE REQUISITO (LO FILTRA)
        })
        setTodo(newList); // DEFINO NUEVO ESTADO DE LA LISTA TODOS
    }
   
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
                    {todo.map((element, index) => {
                        return (
                        <li key={element.id}>
                            {element.id} {element.chore} 
                                {/* <button type="button" 
                                onClick={() => setChecked(" yes")}
                                >
                                    <span aria-hidden="true">
                                        <i className="fas fa-check" ></i> 
                                    </span>
                                    <span className= { "done" + checked } >
                                        {element} 
                                    </span>
                                </button>      */}
                            <button onClick={() => deleteTask(element.id)} type="button" className="close" aria-label="Close"> 
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </li>    
                    )})}
                </ul>
                <br />
            </div>
        </div>
	);
}

// se declara la variable const con un "value" que se cambia al aplicar "setValue", por eso se usa use state
// si la funcion flecha no retorna nada van currybraquet despues de la flecha. Si retorna va con ()
///...operador de destructuring. Saca todos los componentes de un array aparte, tb pasa con objertps. No reescribe sino que añade valores.
