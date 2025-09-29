'use client'
import { useState } from "react"; // importa useState para o armazenar mudanças no input
// cria formulário para cadastrar uma nova task
export default function Form() {
    // cria value e setValue com useState
    const [value, setValue] = useState(''); // inicializa o value como vazio
    // função para lidar com o submit
    function handleSubmit(event) {
       event.preventDefault(); // previne comportamento padrão
       setValue(''); // clear input
    }
    
    return(
        <div
            className="h-2/6 flex justify-center"
        >
            <form
                onSubmit={ handleSubmit }
                className="h-12"
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