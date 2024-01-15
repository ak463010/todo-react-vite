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

  


  const [todoTitle, setTodoTitle ] = useState('')
  const [todoContent, setTodoContent ] = useState('')

  const [data, setData] = useState()

  const todoTitleHandler = (e) => {
    setTodoTitle(e.target.value)
  }
  const todoContentHandler = (e) => {
    setTodoContent(e.target.value)
  }

  const saveTodo = (todoTitle, todoContent) => {
    let todoes = JSON.parse(JSON.stringify(localStorage.getItem('todoes')))
    todoes.push({'title': todoTitle, 'body': todoContent})
    localStorage.setItem('todoes', JSON.stringify(todoes))


  }


  useEffect(() => {
    if (!localStorage.getItem('todoes')) {
      localStorage.setItem('todoes', [])
    }
  }, [0])



  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#33a547';
  }

  function closeModal() {
    setIsOpen(false);
  }



  return (
    <>

      <div>
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
      </div>

      <Header />
      <main className='flex justify-between space-x-6'>
        <LeftBox openModel={openModal} />
        <RightBox />

      </main>
    </>
  )
}
