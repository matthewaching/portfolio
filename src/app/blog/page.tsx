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
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <span>This is the blog</span>
            {blogPosts.map(post => (
                <div key={post.id}>
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </div>
            ))}
        </main>
    );
};

export default Blog;