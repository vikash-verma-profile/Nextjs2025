export default async function Post({ params }) {
    const post = await getPost(params.id);
    if (!post) return <h1>Post not found</h1>
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>

    );
}

async function getPost(id) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, { cache: 'no-store' });
    const posts = await res.json();
    return posts.find(p => p.id.toString() === id)
}
