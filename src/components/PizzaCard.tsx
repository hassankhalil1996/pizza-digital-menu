
import type { Pizza } from "../data/menu";

type Props = {
  pizza: Pizza;
};

export default function PizzaCard({ pizza }: Props) {
  const sizes = [
    { he: "קטן", ar: "صغير", price: pizza.prices.small },
    { he: "משפחתי", ar: "عائلي", price: pizza.prices.family },
    { he: "ענק", ar: "كبير", price: pizza.prices.giant },
  ];

  return (
    <article className="pizza-card">
      <img
        className="pizza-image"
        src={pizza.image}
        alt={pizza.name.he}
      />

      <div className="pizza-info">
        <h3>{pizza.name.he}</h3>
        <h4 lang="ar">{pizza.name.ar}</h4>
        <p>{pizza.description.he}</p>
        <p lang="ar">{pizza.description.ar}</p>
      </div>

      <div className="pizza-prices">
        {sizes.map((size) => (
          <div className="size-box" key={size.he}>
            <span>{size.he}</span>
            <span lang="ar">{size.ar}</span>
            <strong>₪{size.price}</strong>
          </div>
        ))}
      </div>
    </article>
  );
}
