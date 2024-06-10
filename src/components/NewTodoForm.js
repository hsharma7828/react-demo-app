import { useState } from "react";

function NewTodoForm(props) {

    const [description, setDescription] = useState('');
    const [assigned, setAssigned] = useState('');

    const submitTodo = () => {
        if(description !== '' && assigned !== "") {
            props.addTodo(description, assigned);
            setDescription("");
            setAssigned("");
        }
    }

    const descriptionChange = (event) => {
        console.log(event.target.value);
        setDescription(event.target.value);
    };

    const assignedChange = (event) => {
        console.log(event.target.value);
        setAssigned(event.target.value);
    }

    return (
        <div className="mt-5 ">
            <form>
                <div className="mb-3">
                    <label className="form-label">Assigned</label>
                    <input type="text" className="form-control" required onChange={assignedChange} value={assigned}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea row={3} className="form-control" required onChange={descriptionChange} value={description}></textarea>
                </div>
                    <button type="button" className="btn btn-primary mt-3" onClick={submitTodo}>Add Todo</button>
            </form>
        </div>
    )
}

export default NewTodoForm;