
import { drinks } from "../data/menu";

export default function Drinks() {
  return (
    <section id="drinks" className="section">
      <h2>שתייה | مشروبات</h2>

      <div className="drinks-grid">
        {drinks.map((drink) => (
          <article className="drink-card" key={drink.id}>
            <img src={drink.image} alt={drink.name.he} />
            <h3>{drink.name.he}</h3>
            <p lang="ar">{drink.name.ar}</p>
            <strong>₪{drink.price}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}
