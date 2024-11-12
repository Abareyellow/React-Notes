import './App.css'

//let language = "Katie";
//let sun = "🌞";

let items = ["Brownies", "Cakes", "Cookies"]

function Header({name, year}) {
  return (
    <header>
      <h1>{name}'s Kitchen</h1>
      <p>Copyright {year}</p>
    </header>
  );
}

function Main({menu}) {
  return (
    <ul>
      {menu.map((dish) => (
        <li>{dish}</li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <div>
      <Header name="Katie" year={2024}/>
      <Main menu={items}/>
    </div>
  );
}

export default App
