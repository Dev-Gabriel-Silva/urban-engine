
// cria formulário para cadastrar uma nova task
export default function Form() {
    // função para lidar com o submit
    function handleSubmit(event) {
        const { preventDefault, target } = event;
        preventDefault();
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