import React, { useState, useEffect } from 'react';
import '../css/TaskList.scss';
import axios from 'axios';
import { BiTrashAlt, BiEdit } from 'react-icons/bi';



export const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/task');
        setTasks(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des tâches : ", error);
      }
    };

    fetchData();
  }, []); // Les crochets vides signifient que cet effet ne depend d aucune variable et sexecute une seule fois après le montage du composant

  const todoTasks = tasks.filter(task => task.status === 'TODO');
  const inProgressTasks = tasks.filter(task => task.status === 'IN_PROGRESS');
  const doneTasks = tasks.filter(task => task.status === 'DONE');
  const handleDeleteTask = async (taskId) => {
    try {
      
      await axios.delete(`http://localhost:8080/api/v1/task/${taskId}`);
      setTasks(tasks.filter(task => task.id !== taskId));
    } catch (error) {
      console.error("Erreur lors de la suppression de la tâche : ", error);
    }
  };
  const handleEditTask = async (taskId) => {
    try {
      
      const updatedTaskData = getUpdatedTaskData(); 
      await axios.put(`http://localhost:8080/api/v1/task/${taskId}`, updatedTaskData);
      const updatedTasks = tasks.map(task => (task.id === taskId ? { ...task, ...updatedTaskData } : task));
      setTasks(updatedTasks);
    } catch (error) {
      console.error("Erreur lors de la mise à jour de la tâche : ", error);
    }
  };


  return (
    <div className='task--header'>
      <div className='task--container'>
        <h3 className='titlee'>TODO</h3>
        <div className='title--header'>
          {todoTasks.map(task => (
              
                <div key={task.title} className='tasks--content'>
                  <h2>{task.title}</h2>
                  <p>{task.description}</p>
                  <p>Due Date: {task.dueDate}</p>
                  <p>Created At: {task.createdAt}</p>
                  <BiTrashAlt onClick={() => handleDeleteTask(task.id)} />
                  <BiEdit onClick={() => handleEditTask(task.id)} />
                </div>
              
            ))}

        </div>
        
      </div>
      <div className='task--container'>
        <h3 className='titlee'>IN PROGRESS</h3>
        <div className='title--header'>
          {inProgressTasks.map(task => (
              
                <div key={task.id} className='tasks--content'>
                  <h2>{task.title}</h2>
                  <p>{task.description}</p>
                  <p>Due Date: {task.dueDate}</p>
                  <p>Created At: {task.createdAt}</p>
                  <BiTrashAlt onClick={() => handleDeleteTask(task.id)} />
                  <BiEdit onClick={() => handleEditTask(task.id)} />
                </div>
              
            ))}

        </div>
        
      </div>
      <div className='task--container'>
        <h3 className='titlee'>DONE</h3>
        <div className='title--header'>
        
          {doneTasks.map(task => (
            
              <div key={task.id} className='tasks--content'>
                <h2>{task.title}</h2>
                <p>{task.description}</p>
                <p>Due Date: {task.dueDate}</p>
                <p>Created At: {task.createdAt}</p>
                <BiTrashAlt onClick={() => handleDeleteTask(task.id)} />
                <BiEdit onClick={() => handleEditTask(task.id)} />
              </div>
          
          ))}

        </div>
        
      </div>
      
    </div>
  )
}
