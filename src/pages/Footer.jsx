import React from "react";
import { Container, Grid, Typography, Link, Box, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer    style={{
      background: "blue",
      color: "white",
      MinHeight: "300px",
      padding: "120px",
      marginTop: "550px",
      position: "relative",
    }}>
      <Container>
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          
          {/* Company Info */}
          <Grid item xs={12} md={4} textAlign={{ xs: "center", md: "left" }}>
            <img 
              style={{
                width: "160px",
                filter: "drop-shadow(12px 12px 12px rgb(4, 4, 4))"
              }} 
              src="https://www.freepnglogos.com/uploads/zent-logo-png-car-22.png" 
              alt="Vintage Sports Car Logo" 
            />
            <Typography variant="body2" color="white" mt={1}>
              Offering the best cars at the best prices. Contact us today!
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4} textAlign="center" display="block ">
            <Typography variant="h6" fontWeight="bold" mb={1}>
              Quick Links
            </Typography>
            <Link href="/" color="inherit" underline="none" margin={1} display="block" sx={{ "&:hover": { color: "#f4a261" } }}>
              Home
            </Link>
            <Link href="/about" color="inherit" underline="none" display="block" sx={{ "&:hover": { color: "#f4a261" } }}>
              About Us
            </Link>
            <Link href="/contact" color="inherit" margin={1} underline="none" display="block" sx={{ "&:hover": { color: "#f4a261" } }}>
              Contact
            </Link>
          </Grid>

          {/* Social Media */}
          <Grid item xs={12} md={4} textAlign={{ xs: "center", md: "right" }}>
            <Typography variant="h6" fontWeight="bold" mb={1}>
              Follow Us
            </Typography>
            <Box display="flex" justifyContent={{ xs: "center", md: "right" }} gap={1}>
              <IconButton href="https://facebook.com" color="inherit">
                <Facebook fontSize="large" />
              </IconButton>
              <IconButton href="https://twitter.com" color="inherit">
                <Twitter fontSize="large" />
              </IconButton>
              <IconButton href="https://instagram.com" color="inherit">
                <Instagram fontSize="large" />
              </IconButton>
            </Box>
          </Grid>

        </Grid>

        {/* Copyright */}
        <hr style={{marginTop:"100px"}}/>
        <Typography variant="body2" align="center" color="white" mt={4}>
          © {new Date().getFullYear()} MyCarShop. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
