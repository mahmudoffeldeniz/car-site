import React from 'react';
import { Container, Grid, Typography, Box, Card, CardContent, CardMedia, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import '../assets/styles.css';
import CarListings from './Carlistings';

export default function Blog() {
  const blogPosts = [
    {
      title: 'The Future of Electric Cars',
      date: 'February 20, 2025',
      image: 'https://i.gifer.com/2ZOc.gif',
      excerpt: 'Electric cars are the future of the automotive industry. In this article, we will explore how they are changing the way we think about transportation...',
      link: '/blog/future-of-electric-cars',
    },
    {
      title: 'Top 10 Cars of 2025',
      date: 'January 10, 2025',
      image: 'https://wallpapers-clan.com/wp-content/uploads/2024/04/bmw-on-street-in-rain-gif-desktop-wallpaper-cover.gif',
      excerpt: '2025 brings a new wave of innovation to the car market. From electric models to high-performance sports cars, here are the top 10 cars that you should know about...',
      link: '/blog/top-10-cars-2025',
    },
    {
      title: 'How to Choose the Right Car ',
      date: 'December 15, 2024',
      image: 'https://i.pinimg.com/originals/8c/29/a1/8c29a1259e474797951af54901b25139.gif',
      excerpt: 'Choosing the right car can be a challenge. Factors like fuel efficiency, performance, and design play a major role in your decision. Here are some tips to help you choose...',
      link: '/blog/how-to-choose-the-right-car',
    },    {
      title: 'The Evolution of Car Design',
      date: 'October 5, 2024',
      image: 'https://i.pinimg.com/originals/cd/55/4b/cd554bde302b302b1aad12181cba8efe.gif',
      excerpt: 'Car design has evolved significantly over the past few decades. In this blog, we explore how the aesthetics of cars have changed and the factors that influenced these changes...',
      link: '/blog/evolution-of-car-design',
    },
    {
      title: 'Best Sports Cars of 2025',
      date: 'August 22, 2024',
      image: 'https://i.gifer.com/embedded/download/1oy9.gif',
      excerpt: '2025 is shaping up to be a great year for sports cars. In this post, we’ll take a look at some of the best high-performance sports cars to hit the market...',
      link: '/blog/best-sports-cars-2025',
    },
    {
      title: 'The Impact of Autonomous Cars',
      date: 'July 18, 2024',
      image: 'https://64.media.tumblr.com/db45f31bc70e63d89ce646cc01a459c5/tumblr_mesldxuuzb1rkfvqno1_500.gif',
      excerpt: 'Autonomous vehicles are no longer a thing of the future; they’re already becoming a reality. In this blog, we dive into the impact these self-driving cars will have on our society...',
      link: '/blog/impact-of-autonomous-cars',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ paddingTop: '40px', paddingBottom: '40px' }}>
      <Typography variant="h3" align="center" gutterBottom>
        Blog
      </Typography>

      <Grid container spacing={4}>
        {blogPosts.map((post, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ boxShadow: 3, height: '100%' }}>
              <CardMedia
                component="img"
                height="250"
                image={post.image}
                alt={post.title}
                sx={{ borderRadius: '8px 8px 0 0' }}
              />
              <CardContent sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <Typography variant="h6" gutterBottom>
                  {post.title}
                </Typography>
                <Typography variant="body2" height={120} color="textSecondary" paragraph>
                  {post.excerpt}
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                  <strong>Published on:</strong> {post.date}
                </Typography>
                <Link to={post.link} style={{ textDecoration: 'none' }}>
                  <Button variant="contained" color="primary" sx={{ marginTop: 'auto' }}>
                    Read More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <CarListings/>
    </Container>
  );
}
