import React from "react";
import { Container, Grid, Card, CardContent, Typography, Button } from "@mui/material";
import Carusel from '../pages/Carusel'
import CarListings from "./Carlistings";
import CarCategories from "./CarCategories";
import Service from "./Service";
const Home = () => {
  return (
    <>
      <Carusel />
    <div maxWidth="lg" style={{ marginTop: "50px" , background:"blue", padding:"90px"}}> 
      <Grid container spacing={4} alignItems="center">
        {/* Left Section - Car Info */}
        <Grid item xs={12} md={6}>
          <Card elevation={3} style={{ padding: "20px" }}>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                Discover the Power of Performance
              </Typography>
              <Typography variant="body1" color="textSecondary" paragraph>
                Experience the ultimate driving experience with our latest sports car. Engineered for speed, comfort, and cutting-edge technology.
              </Typography>
              <Typography variant="body1" color="textSecondary" paragraph>
                Featuring a turbocharged engine, adaptive suspension, and an aerodynamic design, this car redefines excellence on the road.
              </Typography>
              <Button variant="contained" color="primary">
                Learn More
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Right Section - Car Image */}
        <Grid item xs={12} md={6}>
          <img
            src="https://freepngimg.com/save/58064-utility-sport-car-2018-m40i-vehicle-x3/1712x948" // Replace with the correct path
            alt="Sports Car"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </Grid>
      </Grid>
      </div>
      <CarCategories />
      <Service/>
      <CarListings />
    </>
  );
};

export default Home;
