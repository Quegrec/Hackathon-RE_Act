'use client'
import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';

type Post = {
  id: number;
  title: string;
  image: string;
  description: string;
};

const PostsPage: NextPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/data/posts.json');
      const data = await res.json();
      setPosts(data);
    };

    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Liste de Postes</h1>
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="break-inside-avoid bg-white shadow-md rounded-lg overflow-hidden"
          >
            <Image src={post.image} alt={post.title} className="w-full object-cover" />
            <div className="p-4">
              <h2 className="font-semibold text-xl mb-2">{post.title}</h2>
              <p className="text-gray-600">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
