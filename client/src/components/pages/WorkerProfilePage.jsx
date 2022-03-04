import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getOneWorkerFromServer } from '../../redux/action/workersAc'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import socket from '../../socket'
import { sendMessage, getCurrentId } from '../../redux/action/chat';
import AnimatedPage from '../AnimationPage/AnimationPage'

function WorkerProfilePage() {


  const worker = useSelector(state => state.worker)
  const dispatch = useDispatch()
  const params = useParams()
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])


  useEffect(() => {
    console.log(socket);
    socket.onopen = function (e) {
      console.log('OPEN');
      dispatch(getCurrentId(socket))
      socket.onmessage = (data) => {

        const { type, payload } = JSON.parse(data.data)
        console.log('-----', payload.message);
        switch (type) {
          case 'NEW_MESSAGE':
            setMessages((prev) => [payload.message, ...prev])
            break
        }
      }
    };
    dispatch(getOneWorkerFromServer(params.id))
  }, [])

  const handleMessage = (e) => {
    e.preventDefault()
    dispatch(sendMessage({ message, workerId: worker.id, socket }))
    setMessage('')
  }
  return (
    <AnimatedPage>

      <div className='wrap'>
        <Card sx={{ maxWidth: 445, marginLeft: 'auto', marginRight: 'auto', marginTop: '15vh' }}>
          <CardMedia
            component="img"
            height="340"
            image={`http://localhost:3001${worker.img}`}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {worker.firstName} {worker.lastName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {worker.body}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Связаться</Button>
          </CardActions>
        </Card>
        <div className="chat">
          <div className="userList"></div>
          <div className="chatWrap">
            <div className="messages">
              {messages.map(item => <div>{item}</div>)}
            </div>
            <form onSubmit={handleMessage}>
              <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
              <button type="submit">Отправить</button>
            </form>
          </div>
        </div>
      </div>
    </AnimatedPage>
  )
}

export default WorkerProfilePage
