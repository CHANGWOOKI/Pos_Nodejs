import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import Root from "./router/root";
import Loading from "./pages/loading";

function App() {
  return (
    <Suspense fallback={(<Loading />)}>
      <RouterProvider router={Root} />
    </Suspense>
  );
}

export default App;