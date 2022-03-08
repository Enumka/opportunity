import { Container } from '@mui/material'
import AnimatedPage from '../AnimationPage/AnimationPage'
import WorkersList from '../WorkersList/WorkersList'

function Workers() {


  return (
    <AnimatedPage>

      <Container sx={{
        marginY: 15, marginX: 'auto'
      }}>


        <WorkersList />
      </Container >
    </AnimatedPage>


  )
}

export default Workers
