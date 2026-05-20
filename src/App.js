import React, { Suspense, lazy, useEffect, useState } from "react";
import ErrorBoundary from "./ErrorBoundary";
import eventBus from "./eventBus";

const CartApp = lazy(() => import("cartApp/CartPage"));

const ProductApp = () => {
  useEffect(() => {
    import("productApp/ProductElement");
  }, []);

  return <product-app></product-app>;
};

const App = () => {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // listen for cart events
    eventBus.on("cart:item-added", (product) => {
      setCartCount((prev) => prev + 1);
      setCartItems((prev) => [...prev, product]);
    });
  }, []);

  return (
    <div>
      {/* Header with cart count */}
      <div
        style={{
          padding: "1rem 2rem",
          background: "#1976d2",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ margin: 0 }}>My Shop</h1>
        <div
          style={{
            background: "white",
            color: "#1976d2",
            padding: "8px 16px",
            borderRadius: "20px",
            fontWeight: "bold",
          }}
        >
          🛒 Cart: {cartCount} items
        </div>
      </div>

      {/* Cart items list */}
      {cartItems.length > 0 && (
        <div
          style={{
            padding: "1rem 2rem",
            background: "#fff3e0",
            borderBottom: "1px solid #ffe0b2",
          }}
        >
          <strong>Items in cart:</strong>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Remote apps */}
      <ErrorBoundary name="Cart App">
        <Suspense fallback={<div>Loading cart...</div>}>
          <CartApp />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary name="Product App">
        <Suspense fallback={<div>Loading product...</div>}>
          <ProductApp />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default App;
