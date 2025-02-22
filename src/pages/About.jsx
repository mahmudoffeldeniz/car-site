import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import '../assets/styles.css';
import CarListings from './Carlistings';

export default function About() {
  return (
    <Container maxWidth="lg" sx={{ paddingTop: '40px', paddingBottom: '40px' }}>
      <Typography variant="h3" align="center" gutterBottom>
        About Us
      </Typography>
      <Typography variant="h6" align="center" paragraph>
        Welcome to our website! We specialize in offering the best car advertisements. Our team is dedicated to bringing you the most reliable and high-performance cars, providing details about their specifications, features, and pricing. Explore our website and find the perfect car for you.
      </Typography>

      <Grid container spacing={4} sx={{ marginTop: '40px' }}>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="https://giffiles.alphacoders.com/988/98870.gif"
            alt="About Us"
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" paragraph>
            Our team works tirelessly to offer the latest models from reputable car manufacturers. Whether you're looking for sports cars, sedans, or SUVs, we have a wide selection of cars to meet your needs. We pride ourselves on providing in-depth reviews and information to help you make an informed decision.
          </Typography>
          <Typography variant="body1" paragraph>
            Our website is designed to make browsing easy and intuitive, allowing you to filter cars by category, price, and more. We are committed to providing the highest level of customer service and ensuring a smooth experience throughout your car search journey.
          </Typography>
        </Grid>
      </Grid>
      <CarListings/>
    </Container>
  );
}
