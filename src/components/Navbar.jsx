import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // Navegação
  const goToHome = () => navigate("/home");
  const goToBooks = () => navigate("/getbooks");
  const goToAuthors = () => navigate("/authors");
  const goToAdmin = () => navigate("/admin");
  const goToProfile = () => navigate("/profile");

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  // Menu Desktop (do Avatar)
  const renderProfileMenu = (
    <Menu
      anchorEl={anchorEl}
      id="profile-menu"
      open={isMenuOpen}
      onClose={handleMenuClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      sx={{
        "& .MuiPaper-root": {
          backgroundColor: "#fffaf0",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        }
      }}
    >
      <MenuItem 
        onClick={goToProfile}
        sx={{
          fontWeight: 600,
          color: "#5a3e1b",
          "&:hover": { backgroundColor: "#f4c430", color: "#5a3e1b" }
        }}
      >
        Meu Perfil
      </MenuItem>
    </Menu>
  );

  // MENU MOBILE
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      id="mobile-menu"
      open={isMobileMenuOpen}
      onClose={handleMenuClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      sx={{
        "& .MuiPaper-root": {
          backgroundColor: "#fffaf0",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        }
      }}
    >
      <MenuItem 
        onClick={goToHome}
        sx={{ fontWeight: 600, color: "#5a3e1b",
        "&:hover": { backgroundColor: "#f4c430", color: "#5a3e1b" }}}>
        Home
      </MenuItem>

      <MenuItem 
        onClick={goToBooks}
        sx={{ fontWeight: 600, color: "#5a3e1b",
        "&:hover": { backgroundColor: "#f4c430", color: "#5a3e1b" }}}>
        Livros
      </MenuItem>

      <MenuItem 
        onClick={goToAuthors}
        sx={{ fontWeight: 600, color: "#5a3e1b",
        "&:hover": { backgroundColor: "#f4c430", color: "#5a3e1b" }}}>
        Autores
      </MenuItem>

      <MenuItem 
        onClick={goToAdmin}
        sx={{ fontWeight: 600, color: "#5a3e1b",
        "&:hover": { backgroundColor: "#f4c430", color: "#5a3e1b" }}}>
        Administração
      </MenuItem>

      <MenuItem 
        onClick={goToProfile}
        sx={{ fontWeight: 600, color: "#5a3e1b",
        "&:hover": { backgroundColor: "#f4c430", color: "#5a3e1b" }}}
      >
        <IconButton size="large" color="inherit">
          <AccountCircle sx={{ color: "#5a3e1b" }} />
        </IconButton>
        Meu Perfil
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#b5651d",
          boxShadow: "0 4px 10px rgba(0,0,0,0.25)"
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

          {/* HAMBURGER MOBILE */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              color="inherit"
              onClick={handleMobileMenuOpen}
              sx={{ "&:hover": { color: "#f4c430" } }}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* LOGO */}
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              fontWeight: 700,
              fontFamily: "Segoe UI",
              letterSpacing: "1px",
              color: "#fffaf0"
            }}
          >
            Biblioteca Municipal
          </Typography>

          {/* BOTÕES (DESKTOP) */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1.5 }}>
            {[ 
              { label: "Home", action: goToHome },
              { label: "Livros", action: goToBooks },
              { label: "Autores", action: goToAuthors },
              { label: "Administração", action: goToAdmin }
            ].map((item, idx) => (
              <Button
                key={idx}
                onClick={item.action}
                sx={{
                  color: "#fffaf0",
                  fontWeight: 600,
                  fontFamily: "Segoe UI",
                  textTransform: "none",
                  borderRadius: "8px",
                  padding: "6px 14px",
                  transition: "0.3s",
                  "&:hover": {
                    backgroundColor: "#f4c430",
                    color: "#5a3e1b"
                  }
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* AVATAR (DESKTOP) */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <IconButton
              size="large"
              onClick={handleProfileMenuOpen}
              sx={{ color: "#fffaf0", "&:hover": { color: "#f4c430" } }}
            >
              <AccountCircle />
            </IconButton>
          </Box>

        </Toolbar>
      </AppBar>

      {renderMobileMenu}
      {renderProfileMenu}
    </Box>
  );
}
