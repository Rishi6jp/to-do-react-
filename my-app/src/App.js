import './App.css';
import React, { useState } from 'react';

export default function ToDo() {
  const [inputValue, setInputValue] = useState('');
  const [inputDescription, setInputDescription] = useState('');
  const [taskList, setTaskList] = useState([]);

  const handleNew = () => {
    if (inputValue.trim()) {
      const newTask = { text: inputValue, description: inputDescription, isDone: false, showDescription: false };
      setTaskList([...taskList, newTask]);
      setInputValue('');
      setInputDescription('');
    }
  };

  const toggleDone = (index) => {
    const updatedTasks = [...taskList];
    updatedTasks[index].isDone = !updatedTasks[index].isDone;
    setTaskList(updatedTasks);
  };

  const toggleDescription = (index) => {
    const updatedTasks = [...taskList];
    updatedTasks[index].showDescription = !updatedTasks[index].showDescription;
    setTaskList(updatedTasks);
  };

  return (
    <div className="min-h-screen bg-gradient-to-bl from-teal-400 to-indigo-600 p-5">
      <div className="flex justify-between p-4 bg-indigo-300 rounded-2xl w-4/5 mx-auto">
        <div>
          <h1 className="text-2xl font-serif font-bold">Todo</h1>
        </div>
        <div className="flex gap-7 items-center">
          <div className="text-xl font-mono">Usernaam</div>
        </div>
        <div>
          <button className="bg-purple-400 p-2 rounded-md text-purple-950">Logout</button>
        </div>
      </div>
    </div>
  //   <div className="min-h-screen bg-gradient-to-bl from-teal-400 to-indigo-600 flex items-center justify-center">
  //     <div className="text-3xl font-bold">
  //       <p>To-do</p>
  //     </div>
  //     <div className="gif-layout">
  //       <img src="https://media.tenor.com/4IBs3iyvmfEAAAAM/you-can-do-it-james.gif" alt="to-do" />
  //     </div>
  //     <div className="input-box">
  //       <input
  //         type="text"
  //         value={inputValue}
  //         placeholder="Type task"
  //         onChange={(e) => setInputValue(e.target.value)}
  //       />
  //       <textarea
  //         value={inputDescription}
  //         onChange={(e) => setInputDescription(e.target.value)}
  //         placeholder="Description..."
  //       />
  //       <button type="button" onClick={handleNew}>
  //         Submit
  //       </button>
  //     </div>
  //     <div className="task-box">
  //       {taskList.map((task, index) => (
  //         <div key={index} className={`task ${task.isDone ? 'done' : ''}`}>
  //           <p>
  //             {task.text}
  //             <button onClick={() => toggleDone(index)} className="done-btn">
  //               {task.isDone ? 'Undo' : 'Done'}
  //             </button>
  //           </p>
  //           <button onClick={() => toggleDescription(index)} className="toggle-desc-btn">
  //             {task.showDescription ? 'Hide Description' : 'Show Description'}
  //           </button>
  //           {task.showDescription && <p className="description">{task.description}</p>}
  //         </div>
  //       ))}
  //     </div>
  //   </div>
   );
}
