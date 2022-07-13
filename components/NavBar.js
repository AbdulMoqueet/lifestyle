import React, { useState } from 'react'

import { AppBar, Toolbar, Typography, Stack, Container, Link, styled, Icon } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import Backdrop from './Backdrop';

const StyledLink = styled(Link)({
  color: "#000",
  textDecoration: "none",
  "&:hover": {
    color: "#ff3c3c"
  }
})

const StyledSidebarLink = styled(Link)({
  color: "#fff",
  textDecoration: "none",
  padding: "10px",
  "&:hover": {
    background: "#ff3c3c"
  }
})

const StyledSidebar = styled(Stack)({
  position: "absolute",
  background: "#000",
  width: "250px",
  height: "100vh",
  top: "0",
  left: "0",
  zIndex: "1",
  transform: "translateX(-100%)",
  transition: "all 0.4s"

})

const NavBar = () => {

  const [openNav, setOpenNav] = useState(false)

  const handleSidebar = () => {
    setOpenNav(!openNav)
  }

  return (
    <AppBar position='sticky'>
      <Toolbar sx={{ background: "#fff", color: "#000" }}>
        <Container>
          <Stack justifyContent="space-between" alignItems="center" flexDirection="row">
            <Typography variant='h4'>Logo</Typography>

            <Icon sx={{ display: { xs: "block", md: "none" } }} onClick={handleSidebar}>
              <MenuIcon />
            </Icon>

            <Stack flexDirection="row" gap="24px" sx={{ display: { xs: "none", md: "flex" } }}>
              <StyledLink href="#" fontSize="18px">Home</StyledLink>
              <StyledLink href="#" fontSize="18px">Pages</StyledLink>
              <StyledLink href="#" fontSize="18px">Elements</StyledLink>
              <StyledLink href="#" fontSize="18px">Portfolio</StyledLink>
              <StyledLink href="#" fontSize="18px">Blog</StyledLink>
              <StyledLink href="#" fontSize="18px">Shop</StyledLink>
            </Stack>
          </Stack>
        </Container>

        <StyledSidebar gap="24px" sx={{ transform: openNav ? "translateX(0)" : "translateX(-100%)" }} >
          <StyledSidebarLink href="#" fontSize="18px">Home</StyledSidebarLink>
          <StyledSidebarLink href="#" fontSize="18px">Pages</StyledSidebarLink>
          <StyledSidebarLink href="#" fontSize="18px">Elements</StyledSidebarLink>
          <StyledSidebarLink href="#" fontSize="18px">Portfolio</StyledSidebarLink>
          <StyledSidebarLink href="#" fontSize="18px">Blog</StyledSidebarLink>
          <StyledSidebarLink href="#" fontSize="18px">Shop</StyledSidebarLink>
        </StyledSidebar>

        <Backdrop openNav={openNav} handleSidebar={handleSidebar}/>

      </Toolbar>
    </AppBar>
  )
}

export default NavBar
