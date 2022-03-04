import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { getSkillThank } from '../../redux/action/skillAC';
import { useState, useEffect } from 'react';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import { putWorkerFromThunk } from '../../redux/action/workersAc';
import AnimatedPage from '../AnimationPage/AnimationPage';

const theme = createTheme();

export default function UserProfile() {
  const user = useSelector(state => state.user)
  const skill = useSelector(state => state.skill)

  const [inputs, setInputs] = useState({})
  const dispatch = useDispatch()




  useEffect(() => {
    dispatch(getSkillThank())
  }, [])

  const submitHandler = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('firstName', inputs.firstName);
    formData.append('lastName', inputs.lastName);
    formData.append('telephone', inputs.telephone);
    formData.append('body', inputs.body);
    formData.append('name', inputs.name);
    formData.append('file', inputs.file);
    dispatch(putWorkerFromThunk(formData, user.id))
  }

  const handleSubmit = (e) => {
    if (e.target.files) {
      setInputs(prev => ({ ...prev, [e.target.name]: e.target.value, file: e.target.files[0] }))
    } else {
      setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
  };


  return (
    <AnimatedPage>


      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <AccessibilityIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Резюме
            </Typography>
            <Box component="form" onSubmit={submitHandler} noValidate sx={{ mt: 1 }}>

              <TextField
                margin="normal"
                fullWidth
                id="firstName"
                label="Имя"
                name="firstName"
                autoComplete="firstName"
                autoFocus
                onChange={handleSubmit}
                value={inputs.firstName || ""}
              />
              <TextField
                margin="normal"
                fullWidth
                name="lastName"
                label="Фамилия"
                type="text"
                id="lastName"
                autoComplete="lastName"
                onChange={handleSubmit}
                value={inputs.lastName || ""}
              />
              <TextField
                margin="normal"
                fullWidth
                name="telephone"
                label="Телефон"
                type="text"
                id="phone"
                autoComplete="telephone"
                onChange={handleSubmit}
                value={inputs.telephone || ""}
              />
              <TextField
                id="outlined-multiline-static"
                multiline
                rows={4}
                margin="normal"
                fullWidth
                name="body"
                label="О себе"

                onChange={handleSubmit}
                value={inputs.body || ""}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                type="file"
                name="img"
                value={inputs.img || ""}
                onChange={handleSubmit}

              />
              <Grid item xs={12} sm={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Скилы
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="name"
                    value={inputs.name}
                    onChange={handleSubmit}
                  >
                    {skill.map(el => <MenuItem key={el.id} value={el.id} >{el.name}</MenuItem>)}
                  </Select>
                </FormControl>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Добавить
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </AnimatedPage>
  );
}
