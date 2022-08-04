function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Portfolio</li>
      </ul>
    </nav>
  )
}

function MainContent() {
  return (
    <div>
      <h1 className="title">Bul jerde content</h1>
    </div>
  )
}

function App() {
  return (
    <div className="container">
      <Navbar />
      <MainContent/>
    </div>
  );
}

export default App;
