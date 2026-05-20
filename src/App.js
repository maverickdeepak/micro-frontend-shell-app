import React, { Suspense, lazy, useEffect } from "react";
import ErrorBoundary from "./ErrorBoundary";

const CartApp = lazy(() => import("cartApp/CartPage"));
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
      <ErrorBoundary name="Cart App">
        <Suspense fallback={<div>Loading cart...</div>}>
          <CartPage />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary name="Product App">
        <Suspense fallback={<div>Loading product...</div>}>
          <ProductPage />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default App;
