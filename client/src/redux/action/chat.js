import axios from 'axios'
export const sendMessage = ({message, workerId, socket}) => async (dispatch) => {
  console.log(message, workerId, socket);
  const newMessage = await axios.post(`/chat/message`, {message, workerId})
  socket.send(JSON.stringify({type:'NEW_MESSAGE',payload:{
    message, workerId, creatorId: newMessage.data.creatorId
  }}))

}
export const getCurrentId = (socket) => async (dispatch) => {
  const user = await axios.get(`/chat/userId`)
  socket.send(JSON.stringify({type:'CONNECTION',payload:{
    creatorId: user.data.id
  }}))
}
