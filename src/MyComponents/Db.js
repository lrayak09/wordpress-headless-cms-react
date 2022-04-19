import React, { useEffect, useState } from 'react';
import {Typography} from '@mui/material';
import {Grid} from '@mui/material';
import { CardContent } from '@mui/material';
import {Card} from '@mui/material';
    
export default function Posts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function loadPosts() {
            const response = await fetch('https://controlf5.co.in/client-demo/cooldude/wp-json/wp/v2/posts');
            if(!response.ok) {
                // oups! something went wrong
                return;
            }
    
            const posts = await response.json();
            setPosts(posts);
        }
    
        loadPosts();
   }, [])
  return (
    <Grid container spacing={2}>
      {posts.map((post, index) => (
      <Grid item xs={12} key={index}>
        <Card>
           <CardContent>
                <Typography
                    color="textSecondary"
                    gutterBottom
                    dangerouslySetInnerHTML={{__html: post.title.rendered}} />
                <Typography
                    variant="body2"
                    component="p"
                    dangerouslySetInnerHTML={{__html: post.content.rendered}} />
            </CardContent>
        </Card>
      </Grid>
     ))}
    </Grid>
 );
}
