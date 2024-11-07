import Link from 'next/link';

const blogPosts = [
    {
        id: '20241106',
        title: '2024 Life Update',
        date: new Date('11-06-2024'),
    },
    {
        id: '20231206',
        title: 'Some initial blog ideas',
        date: new Date('12-06-2023'),
    },
    {
        id: '20231205',
        title: 'The inaugural post',
        date: new Date('12-05-2023'),
    },
];

const Blog = () => {
    return (
        <main className='flex min-h-screen flex-col items-center justify-center p-24 gap-8'>
            <span>This is the blog</span>
            <div className='flex flex-col items-center gap-2'>
                {blogPosts.map(post => (
                    <Link
                        className='px-2 py-1 border-2 rounded border-black'
                        key={post.id}
                        href={`/blog/${post.id}`}
                    >
                        {post.title}
                    </Link>
                ))}
            </div>
        </main>
    );
};

export default Blog;