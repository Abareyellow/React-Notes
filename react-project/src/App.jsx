import './App.css'
import chef from "./images/chef.jpg"

//let language = "Katie";
//let sun = "🌞";

let items = ["Brownies", "Cakes", "Cookies", "Brookies"]

const dishObjects = items.map((dish, i) => ({
  id: i,
  title: dish
}));

console.log(dishObjects)

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
    <main>
      <img src={chef} height={200} alt="A photo of a chef"/>
      <ul>
        {menu.map((dish) => (
          <li key={dish.id} style={{listStyleType: "none"}}>{dish.title}</li>
        ))}
      </ul>
    </main>
  );
}

function App() {
  return (
    <div>
      <Header name="Katie" year={2024}/>
      <Main menu={dishObjects}/>
    </div>
  );
}

export default App
