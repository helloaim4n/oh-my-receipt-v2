import { lazy, Suspense, useMemo } from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import routes from "./config";
import { Styles } from "../styles/styles";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NotFound from "../pages/NotFound";

const Router = () => {
  const { pathname } = useLocation();
  const isNotFoundPage = useMemo(() => pathname === "/404", [pathname]);
  
  const routeComponents = useMemo(() => routes.map((routeItem) => {
    const PageComponent = lazy(() => import(`../pages/${routeItem.component}`));
    const paths = Array.isArray(routeItem.path) ? routeItem.path : [routeItem.path];

    return paths.map((path) => (
      <Route key={`${routeItem.component}${path}`} path={path} element={<PageComponent />} />
    ));
  }), []);

  return (
    isNotFoundPage ? 
    <NotFound /> :
    <Suspense fallback={null}>
      <Styles />
      <Header />
        <Routes>
          <Route path="*" element={<Navigate to="/404" />} /> {/* Redirect to 404 page when user enter wrong URL */}
          {routeComponents}
        </Routes>
      <Footer />
    </Suspense>
  );
};

export default Router;




