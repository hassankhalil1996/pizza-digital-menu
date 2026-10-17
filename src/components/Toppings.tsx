
import { toppings } from "../data/menu";

export default function Toppings() {
  return (
    <section className="section toppings-section">
      <h2>תוספות לפיצה | إضافات على البيتزا</h2>

      <div className="toppings-grid">
        {toppings.map((topping) => (
          <article className="topping-card" key={topping.id}>
            <img src={topping.image} alt={topping.name.he} />
            <h3>{topping.name.he}</h3>
            <p lang="ar">{topping.name.ar}</p>
            <span
            className={`price-label ${
              topping.extraPrice === 0 ? "free" : "paid"
            }`}
          >
            {topping.extraPrice === 0
              ? "חינם | مجاني"
              : `+₪${topping.extraPrice}`}
          </span>
          </article>
        ))}
      </div>
    </section>
  );
}
