'use client'
import { useState } from "react"; // Importa useState para o armazenar mudanças no input
// Cria formulário para cadastrar uma nova task
export default function Form({ setNewTask }) { // Pega a função setNewTask dos parâmetros do component
    // Cria value e setValue com useState
    const [value, setValue] = useState(''); // Inicializa o value como vazio
    // Função para lidar com o submit
    function handleSubmit(event) {
       event.preventDefault(); // Previne comportamento padrão
       const newTask = createNewTask(value); // Cria nova tarefa
       setNewTask((prevTask) => [...prevTask, newTask]); // Armazena a nova tarefa junto com as antigas
       setValue(''); // Limpa o input
    }

    function createNewTask(task) { // Cria função que gera novo objeto task
        const newTask = {   // Cria novo objeto task
            'task': task, // Task string
        }; 
        return newTask; // Retorna para utilização
    }
    
    return(
        <div
            className="h-2/6 flex justify-center p-5"
        >
            <form
                onSubmit={ handleSubmit }
            >
                <input 
                    value={ value }
                    onChange={ ({ target }) => setValue(target.value)}
                    placeholder="Type new task"
                    className="border border-red-900 m-1 p-1.5"
                />
                <button
                    className="border border-red-600 m-1 p-1.5 bg-red-500 text-white"
                    type="submit"
                >
                    Add task
                </button>
            </form>
        </div>
    );
};