import React from "react";
import { Container, Grid, Typography, Card } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination"; 
import "swiper/css/autoplay";

const carBrands = [
  { name: "Toyoto", image: "https://logowik.com/content/uploads/images/647_toyota.jpg" },
  { name: "BMW", image: "https://logowik.com/content/uploads/images/398_bmw.jpg" },
  { name: "Mercedes", image: "https://logolook.net/wp-content/uploads/2022/05/Mercedes-Benz-Logo.png" },
  { name: "Audi", image: "https://1000logos.net/wp-content/uploads/2018/05/Color-Audi-logo.jpg" },
  { name: "Ford", image: "https://lezebre.lu/images/detailed/27/Ford_Logo.png" },
  { name: "Jeep", image: "https://logos-world.net/wp-content/uploads/2021/09/Jeep-Logo.png" },
  { name: "Chevrolet", image: "https://www.carlogos.org/logo/Chevrolet-logo-2013-2560x1440.png" },
  { name: "Honda", image: "https://logos-world.net/wp-content/uploads/2021/03/Honda-Logo.png" },
];

const CarListings = () => {
  return (
    <Container>
      <div style={{ position: "relative", height: "50px", borderRadius: "12px" }}>
        <Swiper
          spaceBetween={20}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
          style={{ paddingBottom: "40px", height: "370px", marginTop: "50px" }}
          breakpoints={{
            320: { slidesPerView: 1 }, // Mobilde 1 kart
            768: { slidesPerView: 2 }, // Tabletlerde 2 kart
            1024: { slidesPerView: 3 }, // Büyük ekranlarda 3 kart
          }}
        >
          {carBrands.map((brand, index) => (
            <SwiperSlide key={index}>
              <Card sx={{ maxWidth: 300, textAlign: "center", height: 200, zIndex: "2" }}>
                <img
                  src={brand.image}
                  style={{
                    width: "100%",
                    height: "240px",
                    objectFit: "cover",
                    display: "block",
                    marginLeft: "-20%",
                  }}
                  alt={brand.name}
                />
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default CarListings;
