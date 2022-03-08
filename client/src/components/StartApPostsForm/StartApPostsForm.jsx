import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryFromServer } from '../../redux/action/categoryAc';
import { createStartupToServer } from '../../redux/action/postAc';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const theme = createTheme();

function StartApPostsForm() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [categoryId, setCategory] = useState('');
  const [image, setImage] = useState('');
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoryFromServer());
  }, []);

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setBody(e.target.value);
  };
  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleChangeImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', image);
    formData.append('title', title);
    formData.append('body', body);
    formData.append('categoryId', categoryId);
    dispatch(createStartupToServer(formData));
    setTitle('');
    setBody('');
    setCategory('');
    setImage('');
  };

  return (
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
            Создание Стартапа
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              fullWidth
              id="firstName"
              label="Название страртапа"
              name="firstName"
              autoComplete="firstName"
              autoFocus
              value={title}
              onChange={(e) => handleChangeTitle(e)}
            />
            <TextField
              id="outlined-multiline-static"
              multiline
              rows={4}
              margin="normal"
              fullWidth
              name="body"
              label="Описание стартапа"
              value={body}
              onChange={(e) => handleChangeDescription(e)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              type="file"
              name="img"
              onChange={(e) => handleChangeImage(e)}
            />
            <Grid item xs={12} sm={12}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Категория
                </InputLabel>
                <Select 
                  label="Category"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="name"
                  value={category.name}
                  onChange={(e) => handleChangeCategory(e)}
                >
                  {category.map((el) => (
                    <MenuItem key={el.id} value={el.id}>
                      {el.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Добавить Идею
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    // <form className="container-fluid" onSubmit={handleSubmit}>
    //   <input
    //     value={title}
    //     onChange={(e) => handleChangeTitle(e)}
    //     style={{ width: '40vh', height: '3vh', marginTop: '10vh', marginLeft: '75vh' }}
    //     placeholder="Enter your startup idea..."
    //   >
    //   </input>
    //   <div
    //     style={{ width: '40vh', height: '3vh', marginLeft: '88vh' }}
    //   >
    //     Название стартапа
    //   </div>
    //   <textarea
    //     value={body}
    //     onChange={(e) => handleChangeDescription(e)}
    //     style={{ width: '40vh', height: '10vh', marginTop: '10vh', marginLeft: '75vh' }}
    //     placeholder="Enter a description ..."
    //   >
    //   </textarea>
    //   <div
    //     style={{ width: '40vh', height: '3vh', marginLeft: '88vh' }}
    //   >
    //     Описание стартапа
    //   </div>
    //   <select onChange={(e) => handleChangeCategory(e)} style={{ width: '40vh', height: '3vh', marginTop: '10vh', marginLeft: '75vh' }}>
    //     <option defaultValue>Выберите категорию</option>
    //     {category.map(el => <option key={el.id} value={el.id}>{el.name}</option>)}
    //   </select>
    //   <input type="file" onChange={(e) => handleChangeImage(e)} style={{ width: '40vh', height: '3vh', marginTop: '10vh', marginLeft: '81vh' }}></input>
    //   <div style={{ width: '40vh', height: '3vh', marginTop: '10vh', marginLeft: '88vh' }}>
    //     <button type="submit">Добавить Идею</button>
    //   </div>
    // </form>
  );
}

export default StartApPostsForm;
