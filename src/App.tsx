
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Toppings from "./components/Toppings";
import PizzaCard from "./components/PizzaCard";
import Drinks from "./components/Drinks";
import { pizzas } from "./data/menu";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />

      <main>
        

        <section id="pizza" className="section">
          <h2>הפיצות שלנו | البيتزا عنا</h2>

          <div className="pizza-list">
            {pizzas.map((pizza) => (
              <PizzaCard key={pizza.id} pizza={pizza} />
            ))}
          </div>
        </section>

        <Toppings />
        
        <Drinks />
      </main>

      <footer className="footer">
        <strong>Pizza Napoli</strong>
        <p>תודה שבחרתם בנו | شكراً لاختياركم إلنا</p>
      </footer>
    </div>
  );
}

export default App;
