import useFetch from "../hooks/useFetch";

function FetchExample() {
  const {
    data: posts,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/posts"); 

  return (
    <section>
      <h2>Custom Hook Example</h2>

      {loading && <p>Loading posts...</p>}

      {error && <p>{error}</p>}

      {posts && 
        posts.slice(0, 10).map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <hr />
          </div> 
        ))}
    </section>
  );
}

export default FetchExample;