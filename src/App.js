import React, { Suspense, lazy, useEffect } from "react";
import ErrorBoundary from "./ErrorBoundary";

const CartApp = lazy(() => import("cartApp/CartPageBROKEN"));
const ProductApp = () => {
  useEffect(() => {
    import("productApp/ProductElement");
  }, []);

  return <product-app></product-app>;
};

const App = () => {
  return (
    <div>
      <h1>Shell App</h1>
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
