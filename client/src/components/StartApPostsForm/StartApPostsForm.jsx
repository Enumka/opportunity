import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createStartupToServer, getCategoryFromServer, } from '../../redux/action/postAc'

function StartApPostsForm() {

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [categoryId, setCategory] = useState('')
  const [image, setImage] = useState('')
  const dispatch = useDispatch()
  const category = useSelector(state => state.category)
  // console.log(category)


  useEffect(() => {
    dispatch(getCategoryFromServer())
  }, [])

  const handleChangeTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleChangeDescription = (e) => {
    setBody(e.target.value)
  }
  // console.log(categoryId);
  const handleChangeCategory = (e) => {
    setCategory(e.target.value)

  }

  const handleChangeImage = (e) => {
    setImage(e.target.files[0])
  }
// console.log(image);

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('file', image);
    formData.append('title', title);
    formData.append('body', body);
    formData.append('categoryId', categoryId);
    dispatch(createStartupToServer(formData))
    setTitle('')
    setBody('')
    setCategory('')
    setImage('')
  }


  return (
    <form className="container-fluid" onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => handleChangeTitle(e)}
        style={{ width: '40vh', height: '3vh', marginTop: '10vh', marginLeft: '75vh' }}
        placeholder="Enter your startup idea..."
      >
      </input>
      <div
        style={{ width: '40vh', height: '3vh', marginLeft: '88vh' }}
      >
        Название стартапа
      </div>
      <textarea
        value={body}
        onChange={(e) => handleChangeDescription(e)}
        style={{ width: '40vh', height: '10vh', marginTop: '10vh', marginLeft: '75vh' }}
        placeholder="Enter a description ..."
      >
      </textarea>
      <div
        style={{ width: '40vh', height: '3vh', marginLeft: '88vh' }}
      >
        Описание стартапа
      </div>
      <select onChange={(e) => handleChangeCategory(e)} style={{ width: '40vh', height: '3vh', marginTop: '10vh', marginLeft: '75vh' }}>
        <option defaultValue>Выберите категорию</option>
        {category.map(el => <option key={el.id} value={el.id}>{el.name}</option>)}
      </select>
      <input type="file" onChange={(e) => handleChangeImage(e)} style={{ width: '40vh', height: '3vh', marginTop: '10vh', marginLeft: '81vh' }}></input>
      <div style={{ width: '40vh', height: '3vh', marginTop: '10vh', marginLeft: '88vh' }}>
        <button type="submit">Добавить Идею</button>
      </div>
    </form>
  )
}

export default StartApPostsForm
