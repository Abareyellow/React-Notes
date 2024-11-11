import './App.css'

//let language = "Katie";
//let sun = "🌞";

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
      <p>Copyright {props.year}</p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header name="Katie" year={2024}/>
      <main>
        <h2>We serve the most delicious food around!</h2>
      </main>
    </div>
  );
}

export default App
