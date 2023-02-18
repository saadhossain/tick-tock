import React from 'react';
import { TodoModel } from '../Models/TodoModel';
import toast from 'react-hot-toast'

interface desProp {
    description: string,
    setDescription: React.Dispatch<React.SetStateAction<string>>
}

const TodoForm = ({ description, setDescription }: desProp) => {
    const tasks: TodoModel = {
        description,
        isDone: false,
        addedBy: 'mshsarkar@gmil.com',
        addedOn: new Date()
    }
    const handleAddTask = (e: React.FormEvent) => {
        e.preventDefault()
        fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(tasks)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setDescription('')
                    toast.success('Task Added Successfully...')
                }
            })
    }
    return (
        <div>
            <form onSubmit={handleAddTask}>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className='py-1 px-2 w-72 border-2 border-primary rounded' />
                <button type='submit' className='bg-primary px-5 py-2 rounded text-white font-semibold ml-5'>Add Task</button>
            </form>
        </div>
    );
};

export default TodoForm;