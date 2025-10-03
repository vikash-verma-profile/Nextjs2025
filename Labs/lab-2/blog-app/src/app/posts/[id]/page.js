export default function Post({ params }) {
    const { id } = params
    return (
        <div>
            <h1>Blog Post: {id}</h1>
            <p>This is the content for blog post {id}.</p>
        </div>

    );
}