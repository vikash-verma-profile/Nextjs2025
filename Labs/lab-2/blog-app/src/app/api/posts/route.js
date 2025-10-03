const posts = [{
    id: 1, title: "First Post", content: 'This is the first blog post vikash verma'
},
{
    id: 2, title: "Second Post", content: 'This is the Second blog post vikash verma on dynamic routes'
}];

export async function GET() {
    return Response.json(posts);
}

