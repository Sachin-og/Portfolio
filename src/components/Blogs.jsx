import React, { useState } from 'react';
import BlogCard from './Blogcard';
import Blogs from "../blogs"
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Button,
  Typography,
 
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './BlogPage.css';

function BlogPage(){
  const [blogs, setBlogs] = useState(Blogs);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  function addBlog(){
    if (title && content) {
      setBlogs([...blogs, { title, content }]);
      setTitle('');
      setContent('');
    }
  };

  function deleteBlog(index) {
    const newBlogs = blogs.filter((_, i) => i !== index);
    setBlogs(newBlogs);
  };

  return (
    <div className="blog-container">
      <header className="header">
        <h1 className="title">My Blogs</h1>
      </header>
      <section className="blog-input">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Add New Blog</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="blog-input-fields">
              <TextField
                label="Blog Title"
                variant="outlined"
                fullWidth
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                margin="normal"
              />
              <TextField
                label="Blog Content"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                margin="normal"
              />
              <Button
                variant="contained"
                color="primary"
                onClick={addBlog}
                style={{ marginTop: '10px' }}
              >
                Add Blog
              </Button>
            </div>
          </AccordionDetails>
        </Accordion>
      </section>
      <section className="blog-list">
      <div className="blog-card">
        {blogs.map((blog, index) => (
          <div className='my-5'>
          <BlogCard
            key={index}
            title={blog.title}
            content={blog.content}
            onDelete={() => deleteBlog(index)}
          />
          </div>
        ))}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
