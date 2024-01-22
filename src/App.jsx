import React, { useEffect, useState } from 'react'

import Header from './components/Header.jsx'
import './App.css'
import LeftBox from './components/LeftBox.jsx'
import RightBox from './components/RightBox.jsx'


import Modal from 'react-modal';



const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};



export default function App() {

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);




  const [todoTitle, setTodoTitle] = useState('')
  const [todoContent, setTodoContent] = useState('')
  const [todoes, setTodoes] = useState([])


  const [loading, setLoading] = useState(true)

  const todoTitleHandler = (e) => setTodoTitle(e.target.value)
  const todoContentHandler = (e) => setTodoContent(e.target.value)


  const saveTodo = (todoTitle, todoContent) => {
    let data = JSON.parse(JSON.stringify(localStorage.getItem('todoes')))

    data.push({ 'title': todoTitle, 'body': todoContent })
    localStorage.setItem('todoes', JSON.stringify(data))



  }


  useEffect(() => {
    console.log(import.meta.env.VITE_KEY)
    if (!localStorage.getItem('todoes')) {
      localStorage.setItem('todoes', [])
    } else {
      setTodoes(JSON.parse(JSON.stringify(localStorage.getItem('todoes'))))
    }
  }, [])


  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#33a547';
  }

  function closeModal() {
    saveTodo(todoTitle, todoContent)
    setIsOpen(false);
  }



  return (
    <>
      <Modal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>ADD TODO</h2>
        <div className='my-4 flex flex-col space-y-2'>
          <input className='border-black' type="text" name="todoTitle" onChange={todoTitleHandler} id="" placeholder='Enter todo title' />
          <input className='border-black' type="text" name="todoContnet" onChange={todoContentHandler} id="" placeholder='Enter todo content' />
          <button className='btn bg-gray-300 text-black p-1 rounded-sm mt-2' onClick={closeModal}>Save Todo</button>
        </div>
      </Modal>


      <Header />
      <main className='flex justify-between space-x-6 flex-nowrap'>
        <LeftBox openModel={openModal} />
        <RightBox todoes={[
          {'title': 'go to the marcket', 'content': 'go to the market and buy some vegitable'}
        ]} loading={loading} setLoading={setLoading} />

      </main>
    </>
  )
}
