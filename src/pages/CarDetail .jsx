import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Card, CardMedia, Typography, Button, Box } from "@mui/material";
import CarListings from "./Carlistings";
import carData from "./carData"; // Arabaların verisini ayrı bir dosyadan al

const CarDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = carData.find((car) => car.id === Number(id)); // Sayısal ID kontrolü

  useEffect(() => {
    window.scrollTo(0, 0); // Sayfa açıldığında yukarı kaydır
  }, [id]);

  if (!car) {
    return (
      <Typography variant="h5" sx={{ padding: 2, textAlign: "center", color: "red" }}>
        Car not found!
      </Typography>
    );
  }

  return (
    <Container sx={{ marginTop: 4 }}>
      <Button 
        variant="contained" 
        onClick={() => navigate(-1)} 
        sx={{ marginBottom: 2 }}
      >
        Go Back
      </Button>
      <Card sx={{ padding: 3, boxShadow: 3, borderRadius: 2 }}>
        <CardMedia
          component="img"
          image={car.image}
          alt={car.name}
          sx={{ width: "100%", height: "auto", maxHeight: 300, objectFit: "contain", marginBottom: 2 }}
        />
        <Typography variant="h4" sx={{ paddingY: 2, fontWeight: "bold", color: "#333" }}>
          {car.name}
        </Typography>
        <Box sx={{ padding: "0 20px" }}>
          <Typography variant="h6" sx={{ marginBottom: 1, color: "#555" }}>
            Category: {car.category}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 1, color: "#777" }}>
            Year: {car.year}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 1, color: "#777" }}>
            Mileage: {car.mileage}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 2, color: "#777" }}>
            Engine Power: {car.enginePower}
          </Typography>
          <Typography variant="body1" sx={{ paddingBottom: 2, lineHeight: 1.6, color: "#444" }}>
            {car.description}
          </Typography>
        </Box>
      </Card>
      <CarListings />
    </Container>
  );
};

export default CarDetail;
