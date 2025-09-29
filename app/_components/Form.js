
// cria formulário para cadastrar uma nova task
export default function Form() {
    return(
        <div
            className="h-2/6 flex justify-center"
        >
            <form
                className="h-12"
            >
                <input 
                    placeholder="Type new task"
                    className="border border-red-900 m-1 p-1.5"
                />
                <button
                    className="border border-red-600 m-1 p-1.5 bg-red-500 text-white"
                >
                    Add task
                </button>
            </form>
        </div>
    );
};