import React, { useState } from "react";
import { Container, Button, Grid, Card, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const carData = [
  { id: 1, name: "Jeep Wrangler", category: "Jeep", image: "https://www.jeep.co.uk/content/dam/jeep/crossmarket/wrangler-full-model-mca-2024/02-trim-selector/sahara/figurines/uk/JEEP-WRANGLER-SAHARA-MY25-PHEV-BLACK-FIGURINES.png" },
  { id: 2, name: "Toyota Camry", category: "Sedan", image: "https://vehicle-images.dealerinspire.com/stock-images/thumbnails/large/chrome/8e83c48eb7436cc55ffc7384df36f827.png" },
  { id: 3, name: "Ford F-150", category: "Pickup", image: "https://build.ford.com/dig/Ford/F-150%20F-150/2025/HD-TILE/Image%5B%7CFord%7CF-150%20F-150%7C2025%7C1%7C1.%7C801A.W1R.145.PUM.LSC.88R.89B.A56AC.A5GAA.63T.A7BAE.SS5.573.68L.924.435.B3NAB.BB7AD.168.BLBAF.BLDAC.55G.BSBAC.BSHDF.60P.BY1AM.BY3AB.BYPBC.C1CAG.C1UAC.C2TAC.CCAB.CAQAJ.CBGAL.CFFAE.CLFGP.CLMHN.64B.T7R.DAXAC.DBCAY.DEEAB.AWD.998.FBFAF.67T.FMLAX.413.655.GRAAP.GTAAN.GTBAB.GTDAK.HKRAD.HLLAG.HNKAB.HTSAA.HUKAK.IBBAB.588.50M.IEVAQ.IGDAC.J3KAG.JASAC.59S.JBWAC.JCBAD.77R.44G.XL4.LEA.%5D/EXT/1/vehicle.png" },
  { id: 4, name: "Chevrolet Silverado", category: "Pickup", image: "https://crdms.images.consumerreports.org/c_lfill,w_470,q_auto,f_auto/prod/cars/cr/car-versions/23943-2024-chevrolet-silverado-ev-rst" },
  { id: 5, name: "Honda Accord", category: "Sedan", image: "https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2024/accord-sedan/AW/Carshot/carshot_AccordSedan_front_ACCORDHYBRIDTRG_2024_PlatinumWhitePearl_CY2F8RKNW_NH-883P.png" },
  { id: 6, name: "Jeep Grand Cherokee", category: "Jeep", image: "https://di-uploads-pod3.dealerinspire.com/desotochryslerdodgejeepram/uploads/2022/08/Desoto_Jeep_Grand_Cherokee_Colors_Midnight-Sky.png" },
  { id: 7, name: "Bmw M5", category: "Sedan", image: "https://images.dealer.com/ddc/vehicles/2025/BMW/M5/Sedan/still/front-left/front-left-640-en_US.jpg" },
  { id: 8, name: "Mercedes-Benz C180 2016", category: "Sedan", image: "https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_low/v1/cg_vehicle/ds/2016_mercedes-benz_c-class_c180-avantgarde_bztmwlev.png" },
];

const CarCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setShowAll(false); // Kategori değiştiğinde sadece ilk 5 aracı göster
  };

  const filteredCars = selectedCategory === "All" ? carData : carData.filter(car => car.category === selectedCategory);
  const displayedCars = showAll ? filteredCars : filteredCars.slice(0, 5);

  return (
    <Container style={{ textAlign: "center", marginTop: 50 }}>
      <h2>Car Categories</h2>
      <div style={{ marginBottom: 20 }}>
        {["All", "Jeep", "Sedan", "Pickup"].map(category => (
          <Button
            key={category}
            variant={selectedCategory === category ? "contained" : "outlined"}
            onClick={() => handleCategoryChange(category)}
            style={{ margin: 10 }}
          >
            {category}
          </Button>
        ))}
      </div>
      <Grid container spacing={3} justifyContent="center">
        {displayedCars.map(car => (
          <Grid item xs={12} sm={6} md={4} key={car.id}>
            <Link to={`/details/${car.id}`} style={{ textDecoration: "none" }}>
              <Card>
                <CardMedia
                  component="img"
                  style={{ width: "270px", margin: "auto", height: "150px" }}
                  image={car.image}
                  alt={car.name}
                />
                <Typography variant="h6" align="center" style={{ padding: 10 }}>
                  {car.name}
                </Typography>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
      {!showAll && filteredCars.length > 5 && (
        <Button variant="contained" color="primary" style={{ marginTop: 20 }} onClick={() => setShowAll(true)}>
          Show All
        </Button>
      )}
    </Container>
  );
};

export default CarCategories;
