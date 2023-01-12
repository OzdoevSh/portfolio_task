import styles from './AddControl.module.scss'
import Input from "../ui/Input/Input";
import Popup from "../ui/Popup/Popup";
import TextArea from "../ui/TextArea/TextArea";
import Button from '../ui/Button/Button';
import { useCreateProjectMutation } from '../../store/portfolio/portfolio.api';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddControl({ show, onClose }) {
  const [createProject, { }] = useCreateProjectMutation()

  const [formValues, setFormValues] = useState({
    title: '',
    type: '',
    description: '',
    stack: ''
  })

  const handleFormChange = (ev) => {
    const { name, value } = ev.target;
    setFormValues((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }


  const saveProject = (ev) => {
    ev.preventDefault()
    /// Тут стоило написать хорошую валидаци, но сроки не позволили к сожалению(
 
    if (formValues.title.length < 5 || formValues.type.length < 5 || formValues.description.length < 15 || formValues.stack.length < 15) {
      toast.error('Заполните все поля корректно!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      createProject(formValues)
      toast.success('Проект добавлен!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      onClose()
    }

  }

  return (
    <>
      <Popup
        show={show}
        onClose={onClose}
      >
        <form className={styles.addControl} onSubmit={saveProject}>
          <div className={styles.title}>Добавление проекта</div>
          <Input
            placeholder="Название"
            name="title"
            onChange={handleFormChange}
          />
          <Input
            placeholder="Тип"
            name="type"
            onChange={handleFormChange}
          />
          <TextArea
            placeholder="Описание"
            name="description"
            onChange={handleFormChange}
          />
          <TextArea
            placeholder="Стэк использованных технологий"
            name="stack"
            onChange={handleFormChange}
          />
          <Button text="Сохранить" black />
        </form>

      </Popup>
      <ToastContainer />
    </>

  )
}