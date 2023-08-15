import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import routes from "./config";
import { Styles } from "../styles/styles";

const Router = () => {
  return (
    <Suspense fallback={null}>
      <Styles />
      <Header />
      <Routes>
        {routes.map((routeItem) => {
          const PageComponent = lazy(() => import(`../pages/${routeItem.component}`));

          // Handle both single string path and array of strings
          const paths = Array.isArray(routeItem.path) ? routeItem.path : [routeItem.path];
          
          return paths.map((path) => (
            <Route
              key={routeItem.component + path}
              path={path}
              element={<PageComponent />}
            />
          ));
        })}
      </Routes>
      <Footer />
    </Suspense>
  );
};

export default Router;