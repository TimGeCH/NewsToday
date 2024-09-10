import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PostCard from '../components/PostCard';  // 引入PostCard组件

export default function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch('/api/post/getPosts');
            const data = await res.json();
            setPosts(data.posts);
        };
        fetchPosts();
    }, []);

    // 函数用于移除HTML标签
    const stripHtmlTags = (html) => {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || "";
    };

    return (
        <div className="max-w-6xl mx-auto p-4">
            <header className="mb-8 flex justify-between items-center">
            </header>

            {/* 保持最新新闻的特殊排布 */}
            {posts.length > 0 && (
                <div className="mb-12">
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/2 aspect-video">
                            <img
                                src={posts[0].image}
                                alt={posts[0].title}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                        <div className="md:w-1/2 flex flex-col justify-between">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold mb-4">{posts[0].title}</h2>
                                <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed mb-4">
                                    {/* 使用 stripHtmlTags 去除HTML标签 */}
                                    {stripHtmlTags(posts[0].content).length > 300
                                        ? `${stripHtmlTags(posts[0].content).substring(0, 300)}...`
                                        : stripHtmlTags(posts[0].content)}
                                </p>
                            </div>
                            <Link to={`/post/${posts[0].slug}`} className="text-teal-500 dark:text-teal-400 hover:underline text-sm md:text-base">
                                Read article
                            </Link>
                        </div>
                    </div>
                </div>
            )}

            {/* 其余新闻按每行三列的网格排布 */}
            {posts.length > 1 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">  {/* 网格布局，每行三个卡片 */}
                    {posts.slice(1).map((post) => (
                        <PostCard key={post._id} post={post} />
                    ))}
                </div>
            )}

            <div className="text-center mb-8">
                <Link
                    to="/search"
                    className="text-teal-500 dark:text-teal-400 hover:underline mt-8 block text-center"
                >
                    View all posts
                </Link>
            </div>
        </div>
    );
}
