import React from 'react';
import { Container, Typography, Button, Card, CardMedia, CardContent, Box } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';

const blogPosts = [
  {
    slug: 'future-of-electric-cars',
    title: 'The Future of Electric Cars',
    date: 'February 20, 2025',
    image: 'https://i.gifer.com/2ZOc.gif',
    content: `Electric cars are the future of the automotive industry. In this article, we dive into the latest advancements in battery technology, charging infrastructure, and government policies that are shaping the future of mobility. Detailed insights and expert opinions help illustrate how electric vehicles are set to transform our transportation landscape.`,
  },
  {
    slug: 'top-10-cars-2025',
    title: 'Top 10 Cars of 2025',
    date: 'January 10, 2025',
    image: 'https://wallpapers-clan.com/wp-content/uploads/2024/04/bmw-on-street-in-rain-gif-desktop-wallpaper-cover.gif',
    content: `2025 brings a new wave of innovation to the car market. From cutting-edge electric models to high-performance sports cars, this comprehensive guide reviews the top 10 cars, analyzing their design, performance, and technological features that set them apart from the competition.`,
  },
  {
    slug: 'how-to-choose-the-right-car',
    title: 'How to Choose the Right Car',
    date: 'December 15, 2024',
    image: 'https://i.pinimg.com/originals/8c/29/a1/8c29a1259e474797951af54901b25139.gif',
    content: `Choosing the right car can be challenging with so many options available. This article provides practical advice on evaluating fuel efficiency, performance, safety features, and overall design to help you make an informed decision that best suits your needs and lifestyle.`,
  },
  {
    slug: 'evolution-of-car-design',
    title: 'The Evolution of Car Design',
    date: 'October 5, 2024',
    image: 'https://i.pinimg.com/originals/cd/55/4b/cd554bde302b302b1aad12181cba8efe.gif',
    content: `Car design has undergone significant changes over the past decades. In this blog post, we explore how technological advancements, consumer preferences, and environmental concerns have influenced the evolution of automotive design, leading to the sleek, efficient vehicles of today.`,
  },
  {
    slug: 'best-sports-cars-2025',
    title: 'Best Sports Cars of 2025',
    date: 'August 22, 2024',
    image: 'https://i.gifer.com/embedded/download/1oy9.gif',
    content: `2025 is proving to be an exciting year for sports cars. This article reviews the best high-performance sports cars of the year, highlighting their design, speed, and innovative features that make them stand out in the competitive world of luxury automobiles.`,
  },
  {
    slug: 'impact-of-autonomous-cars',
    title: 'The Impact of Autonomous Cars',
    date: 'July 18, 2024',
    image: 'https://64.media.tumblr.com/db45f31bc70e63d89ce646cc01a459c5/tumblr_mesldxuuzb1rkfvqno1_500.gif',
    content: `Autonomous vehicles are rapidly becoming a reality. In this post, we examine the technological breakthroughs that have enabled self-driving cars, along with their potential societal and economic impacts as they begin to reshape urban mobility and transportation infrastructure.`,
  },
];

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return (
      <Container sx={{ paddingTop: '40px', paddingBottom: '40px', textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          Blog post not found!
        </Typography>
        <Button variant="contained" color="primary" onClick={() => navigate(-1)}>
          Go Back
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ paddingTop: '40px', paddingBottom: '40px' }}>
      <Button variant="contained" color="primary" onClick={() => navigate(-1)} sx={{ marginBottom: 2 }}>
        Go Back
      </Button>
      <Card sx={{ boxShadow: 3, borderRadius: 2, padding: 3 }}>
        <CardMedia
          component="img"
          image={post.image}
          alt={post.title}
          sx={{
            width: '100%',
            height: 'auto',
            maxHeight: 400,
            objectFit: 'cover',
            borderRadius: 2,
            marginBottom: 2,
          }}
        />
        <CardContent>
          <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 2, color: '#333' }}>
            {post.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 2 }}>
            Published on: {post.date}
          </Typography>
          <Box sx={{ lineHeight: 1.6 }}>
            <Typography variant="body1" sx={{ marginBottom: 2, color: '#555' }}>
              {post.content}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default BlogDetail;
