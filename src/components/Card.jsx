import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { styled } from '@mui/system';
const StyledCard = styled(Card)({
  maxWidth: 345,
  margin: '20px',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

const StyledMedia = styled(CardMedia)({
  height: 140,
});

const ProjectCard = ({ imgUrl:image, title, text:description, sourceUrl:link }) => {
  return (
    <StyledCard>
      <CardActionArea href={link} target="_blank">
        <StyledMedia
          image={image}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description.substring(0,100)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  );
};

export default ProjectCard;
