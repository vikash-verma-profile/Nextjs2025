export default function Home() {
  return (
    <div className="container mt-5">
      <h1 className="text-success"> Home</h1>
      <p>This is my home page</p>
      <nav>
        <a className="btn btn-outline-primary me-2" href="/about">
          About
        </a>
        <a className="btn btn-outline-info" href="/contact">
          Contact
        </a>
      </nav>
    </div>
  );
}
