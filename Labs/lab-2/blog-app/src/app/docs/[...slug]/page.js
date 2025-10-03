export default function Docs({ params }) {
    const { slug } = params

    return (
        <div>
            <h1>
                Docs Page
            </h1>
            <p>Slug: {slug?.join('/')}</p>
        </div>
    )
}