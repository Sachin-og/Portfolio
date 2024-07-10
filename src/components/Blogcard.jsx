import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './BlogCard.css';

const BlogCard = ({ title, content, onDelete }) => {
  return (
    
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6">{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
            {content}
          </Typography>
          <Button 
            variant="contained" 
            color="secondary" 
            onClick={onDelete}
            style={{ marginTop: '10px' }}
          >
            Delete
          </Button>
        </AccordionDetails>
      </Accordion>
    
  );
};

export default BlogCard;
