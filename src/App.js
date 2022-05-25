import { BrowserRouter, Routes, Route } from "react-router-dom";

import routes from "./routes/routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>{GenerateRoutes(routes)}</Routes>
    </BrowserRouter>
  );
}

export default App;

const GenerateRoutes = (routes) => {
  return (
    <>
      {routes.map((route) =>
        route.nestedPath ? (
          <Route key={route.path} path={route.path} element={<route.element />}>
            {GenerateRoutes(route.nestedPath)}
          </Route>
        ) : (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          />
        )
      )}
    </>
  );
};
