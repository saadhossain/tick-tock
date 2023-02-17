import { useState } from 'react';
import TodoForm from '../Components/TodoForm';

function Activity() {
  const [description, setDescription] = useState<string>('')
  return (
    <div className='w-10/12 mx-auto my-5'>
      <TodoForm
        description={description}
        setDescription={setDescription}
      />
    </div>
  );
}

export default Activity;