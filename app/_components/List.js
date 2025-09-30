// cria e exporta component List
export default function List({ tasks, removeTask }) { // pega as tasks e a função para remover uma task

    return(
        <div
            className="h-4/6 flex justify-center p-12 overflow-scroll"
        >
            <ul>
                { tasks.length > 0 ? tasks.map((task, i) => {
                   return(
                            <li 
                                key={ i }
                                className="list-decimal text-2xl text-mono"
                            >
                                {task.task}
                                <button
                                    onClick={ () => removeTask(i)}
                                >
                                    <img 
                                        src="/removeIcon.png" 
                                        alt="Remove icon"
                                        className="h-5"
                                    />
                                </button>
                            </li>
                    )
                }) : <h1 className="text-green-500">Everything is clear! No tasks</h1>}
            </ul>
        </div>
    )
}