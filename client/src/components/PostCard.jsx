import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
    return (
        <div className='group relative w-full border border-teal-500 hover:border-2 h-[400px] overflow-hidden rounded-lg transition-all'>
            <Link to={`/post/${post.slug}`}>
                <img
                    src={post.image}
                    alt='post cover'
                    className='h-[260px] w-full object-cover group-hover:h-[200px] transition-all duration-300'
                />
            </Link>
            <div className='p-3 flex flex-col gap-2'>
                <p className='text-lg font-semibold line-clamp-2'>{post.title}</p>
                <span className='italic text-sm'>{post.category}</span>
                <Link
                    to={`/post/${post.slug}`}
                    className='absolute bottom-[-80px] left-5 right-5 bg-white text-teal-500 border border-teal-500 text-center py-2 transition-all duration-300 rounded-md group-hover:bottom-4 hover:bg-teal-500 hover:text-white'
                >
                    Read article
                </Link>
            </div>
        </div>
    );
}
