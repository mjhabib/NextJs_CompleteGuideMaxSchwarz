export default function PostPage({params}) {
  return (
    <main>
      <h1>Post Page</h1>
      <p>params.post: {params.post}</p>
    </main>
  );
}

// this is called a dynamic route
// the params object will passed automatically by next.js