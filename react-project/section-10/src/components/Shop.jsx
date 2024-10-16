import { DUMMY_PRODUCTS } from '../dummy-products.js';

// export default function Shop({ onAddItemToCart }) remove probe b/c we not rendet here {
  export default function Shop({ children }) {
  return (
    <section id="shop">
      <h2>Elegant Clothing For Everyone</h2>

      <ul id="products">
        {children}
      </ul>
    </section>
  );
}
