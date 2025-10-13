'use client';

import { useEffect, useState } from 'react';
//imports Post compnent and the props I need to store the Post data
import Post, { PostProps } from '@/components/Post';
import { supabase } from '@/lib/client';

export default function PostList() {
  //sets consts
  const [posts, setPosts] = useState<PostProps[]>([]);

  async function fetchPostData() {
    const { data, error } = await supabase.from('Posts').select('*');
    if (error) {
      alert('Error fetching posts: ' + error.message);
    } else if (data) {
      setPosts(data);
    }
  }

  useEffect(() => {
    async function loadPosts() {
      await fetchPostData();
    }
    loadPosts();
  }, []);

  return (
    <div className="flex flex-col items-center gap-4 p-4 bg-gray-50 min-h-screen">
      {posts.length > 0 ? (
        posts.map(post => (
          <Post
            key={post.id}
            id={post.id}
            username={post.username}
            date={post.date}
            image={post.image}
            likeCount={post.likeCount}
            text={post.text}
          />
        ))
      ) : (
        <p className="text-gray-500 text-sm">No posts found.</p>
      )}
    </div>
  );
}
