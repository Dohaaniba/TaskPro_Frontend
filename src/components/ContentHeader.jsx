import React, { useState } from 'react';
import { FaCalendarAlt, FaPlus } from 'react-icons/fa';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Modal from 'react-modal';
import axios from 'axios';
import moment from 'moment';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



Modal.setAppElement('#root');

export const ContentHeader = () => {
  const [date, setDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleIconClick = () => {
    setShowCalendar(!showCalendar);
  };

  const closeModal = () => {
    setShowCalendar(false);
  };

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'TODO',
    createdAt: new Date(),
    dueDate: new Date(),
  });
  

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModale = () => {
    setShowModal(false);
  };

  const handleInputChange = (e) => {
  const { name, value } = e.target;
  
  setFormData({
    ...formData,
    [name]: name === 'dueDate' || name === 'createdAt' ? moment(value, 'YYYY-MM-DD').format('YYYY-MM-DD') : value,
  });
};

  
  
  
  // Exemple de configuration Axios de base
const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080', // Remplacez par l'URL de votre serveur Spring Boot
    withCredentials: true,
});


const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post('http://localhost:8080/api/v1/task/saveTask', formData, { withCredentials: true });
        console.log(response.data);
        
        toast.success('Task successfully saved!');
        closeModale();
        
        closeModale(); // Fermer le modal après l'ajout de la tâche
    } catch (error) {
        console.error("Erreur lors de l'ajout de la tâche : ", error);
        toast.error('Error saving task. Please try again.');
    }
};


  
  return (
    <div className='content--header'>
      <h1 className="content--title">Dashboard</h1>
      <ToastContainer />
      <div className="header--activity">
        <div className="calender-box">
          <span onClick={handleIconClick} style={{ position: 'relative', display: 'inline-block' }}>
            {date.toLocaleDateString()} 
            <FaCalendarAlt style={{ marginLeft: '5px', cursor: 'pointer' }} />
          </span>
          <Modal
            isOpen={showCalendar}
            onRequestClose={closeModal}
            contentLabel="Calendar Modal"
            style={{
              overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 2,
              },
              content: {
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '350px',
                height: '350px', 
                padding: '20px',
                borderRadius: '8px',
              },
            }}
          >
            <Calendar onChange={handleDateChange} value={date} calendarType="US" />
            <button onClick={closeModal}>Close</button>
          </Modal>
        </div>
        <div className='button' >
          <button className="add-task" onClick={openModal}>
            <FaPlus style={{ marginRight: '5px' }} />
            Add Task
          </button>
        </div>
        <Modal
          isOpen={showModal}
          onRequestClose={closeModal}
          contentLabel="Task Modal"
          
        >
          <div className="modal-header">
            <h2>Add Task</h2>
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <label>Title:</label>
            <input
                type="text"
                name="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
            />

            <label>Description:</label>
            <textarea
            name="description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            required
            />

            <label>Status:</label>
            <select
            name="status"
            value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
            required
            >
            <option value="TODO">TODO</option>
            <option value="IN_PROGRESS">IN_PROGRESS</option>
            <option value="DONE">DONE</option>
            </select>

            <label>Creation Date:</label>
            <input
            type="date"
            name="createdAt"
            value={formData.createdAt.toISOString().split('T')[0]}
            onChange={(e) => setFormData({ ...formData, createdAt: new Date(e.target.value) })}
            required
            />

            <label>Due Date:</label>
            <input
            type="date"
            name="dueDate"
            value={formData.dueDate.toISOString().split('T')[0]}
            onChange={(e) => setFormData({ ...formData, dueDate: new Date(e.target.value) })}
            required
            />


            <button type="submit">Save Task</button>
          </form>
        </Modal>
      </div>
    </div>
  );
}

export default ContentHeader;
