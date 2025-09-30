'use client'
// importa componentes filho
import { useEffect, useState } from "react";
import Form from "./Form";
import List from "./List";


// cria componente container para gerir os componentes filhos
export default function TaskManager() {
    const [tasks, setNewTask] = useState([]); // usa o hook react para criar um estado para armarzenar as novas tasks

    useEffect(() => {
        if(localStorage.getItem('tasks')) {
            const taskList = localStorage.getItem('tasks');
            setNewTask(JSON.parse(taskList));
        }
    },[]) // recupera se existir tasks salvas previamente na montagem do componente

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    },[tasks]) // ao alterar a lista de tasks salva no local storage a nova lista;
    function removeTask(taskToRemove) {
        const newList = tasks.filter((_, index) => index != taskToRemove); // filtra as tasks e remove pelo indice
        setNewTask(newList); // Seta a nova lista sem a task desejada
    }
    return(
        <div 
            className="h-dvh w-dvw flex flex-col justify-end"
        >
            <List tasks={ tasks /* hidrata a list com as tasks*/ } removeTask={ removeTask } /> 
            <Form setNewTask={ setNewTask /* passa a função setNewTask para o formulario poder alterar o estado das tasks */ } /> 
        </div>
    )
}