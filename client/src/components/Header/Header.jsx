import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/action/userAC';


export const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const clickNav = (e) => {
    if(e.target.innerText === 'ГЛАВНАЯ') {
      navigate('/')
    } else if (e.target.innerText === 'ИДЕИ') {
      navigate('/startappage')
    }else if (e.target.innerText === 'ИСПОЛНИТЕЛИ') {
      navigate('/workers')
      
    }if (e.target.innerText === 'ДОБАВИТЬ СТАРТАП') {
      navigate('/startapposts')
      
    }else if (e.target.innerText === 'ПРОФИЛЬ') {
      navigate('/userprofile')
    }else if (e.target.innerText === 'РЕГИСТРАЦИЯ') {
      navigate('/register')
    }else if (e.target.innerText === 'ВОЙТИ') {
      navigate('/login')
    }
  }

  const clickOut = () => {
    dispatch(logout())
    navigate('/login')
  }
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
      {/* <Link to={`/main`}><Button>Primary</Button></Link> */}
      
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            OPPORTYNITY
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Button onClick={ clickNav} sx={{ my: 2, color: 'white', display: 'block' }}>Главная</Button>
          <Button onClick={ clickNav} sx={{ my: 2, color: 'white', display: 'block' }}>Идеи</Button>
          <Button onClick={ clickNav} sx={{ my: 2, color: 'white', display: 'block' }}>Исполнители</Button>
          <Button onClick={ clickNav} sx={{ my: 2, color: 'white', display: 'block' }}>Добавить Стартап</Button>

          </Box>
          <Button onClick={ clickNav} sx={{ my: 2, color: 'white', display: 'block' }}>Профиль</Button>
          
          <Button onClick={ clickNav} sx={{ my: 2, color: 'white', display: 'block' }}>Регистрация</Button>
          <Button onClick={ clickNav} sx={{ my: 2, color: 'white', display: 'block' }}>Войти</Button>
          <Button  onClick={clickOut} sx={{ my: 2, color: 'white', display: 'block' }}>Выйти</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

