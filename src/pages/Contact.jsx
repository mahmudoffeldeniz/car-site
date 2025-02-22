import React, { useState } from "react";
import { Container, Grid, Paper, Typography, TextField, Button, Box, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import "../assets/styles.css";
import CarListings from './Carlistings';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form gönderme işlemini buraya ekleyin
    console.log(formData);
    alert("Message sent!");
  };

  return (
    <Container maxWidth="md" sx={{ paddingTop: "50px", paddingBottom: "50px" }}>
      <Typography
        variant="h3"
        sx={{ marginBottom: "20px", textAlign: "center", fontWeight: "bold", color: "#333" }}
      >
        Contact Us
      </Typography>
      <Paper
        sx={{
          padding: "30px",
          boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
          borderRadius: "8px",
        }}
      >
        <Grid container spacing={4}>
          {/* Sol Taraf: Resim */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://purepng.com/public/uploads/large/businessman-uq0.png"
              alt="Contact Visual"
              sx={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
          </Grid>
          {/* Sağ Taraf: Form */}
          <Grid item xs={12} md={6}>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Name"
                name="name"
                variant="outlined"
                fullWidth
                margin="normal"
                value={formData.name}
                onChange={handleChange}
              />
              <TextField
                label="Email"
                name="email"
                type="email"
                variant="outlined"
                fullWidth
                margin="normal"
                value={formData.email}
                onChange={handleChange}
              />
              <TextField
                label="Message"
                name="message"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                margin="normal"
                value={formData.message}
                onChange={handleChange}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ marginTop: "20px", padding: "10px 20px" }}
              >
                Send Message
              </Button>
            </form>
          </Grid>
        </Grid>
        <Box sx={{ marginTop: "30px", textAlign: "center" }}>
          <Typography variant="body2" color="textSecondary">
            Follow Us
          </Typography>
          <Box sx={{ marginTop: "10px", display: "flex", justifyContent: "center", gap: "15px" }}>
            <IconButton color="primary" href="https://facebook.com" target="_blank">
              <Facebook />
            </IconButton>
            <IconButton color="primary" href="https://twitter.com" target="_blank">
              <Twitter />
            </IconButton>
            <IconButton color="primary" href="https://instagram.com" target="_blank">
              <Instagram />
            </IconButton>
            <IconButton color="primary" href="https://linkedin.com" target="_blank">
              <LinkedIn />
            </IconButton>
          </Box>
        </Box>
      </Paper>
      <CarListings/>
    </Container>
  );
}
