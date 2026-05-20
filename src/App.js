import React, { Suspense, lazy, useEffect } from "react";

const CartApp = lazy(() => import("cartApp/CartPageBROKEN"));
const ProductPage = () => {
  useEffect(() => {
    import("productApp/ProductElement");
  }, []);

  return <product-app></product-app>;
};

const App = () => {
  return (
    <div>
      <h1>Shell App</h1>
      <Suspense fallback={<div>Loading Cart Page...</div>}>
        <CartApp />
      </Suspense>
      <ProductPage />
    </div>
  );
};

export default App;
