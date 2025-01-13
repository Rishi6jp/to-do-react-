import './App.css';
import React, {useState} from 'react';

export default function ToDo() {
  const [inputValue, setInputValue]  = useState("");
  const [taskList, setTaskList] = useState([]);
  const [inputDescription, setInputDescription] = useState("");
  const [desStatus, setDesStatus] = useState(false)

  const handleNew = () => {
    if(inputValue){
      const newTask = {text: inputValue,description: inputDescription, isDone: false};
      setTaskList([...taskList,newTask]);
      setInputValue('');
    }
  }
  const toggleDone = (index) => {
    const updatedTasks = [...taskList];
    updatedTasks[index].isDone = !updatedTasks[index].isDone;
    setTaskList(updatedTasks);
  }

  return(
    <div className="something">
      To-Do
      <div className="gif-layout">
        <img src='https://media.tenor.com/4IBs3iyvmfEAAAAM/you-can-do-it-james.gif' alt='to-do'></img>
      </div>
      <div className="input-box">
        <input type="text" value={inputValue} placeholder="Type task" onChange={(e)=>setInputValue(e.target.value)} />
        <button type="submit" onClick={handleNew}> submit</button>
        <div>
          <textarea type="text" value={inputDescription} onChange={(e)=>setInputDescription(e.target.value)} placeholder='Description....'/>
          
        </div>
      </div>
        
      <div className="task-box">
        {taskList.map((task, index) => (
          <div key={index} className={task.isDone ? "done" : ""}>
            <p>{task.text} 
            {
              desStatus? <p>{task.description}</p>: null
            }
            <button onClick={() => setDesStatus(desStatus)}>Show Description</button>
            <button onClick={() => toggleDone(index)}>Done</button></p>
          </div>
        ))}
      </div>
    </div>
  )
}