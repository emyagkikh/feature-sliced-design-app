import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouteConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets';

export const AppRouter = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {
          Object.values(RouteConfig).map(({ element, path }) => (
            <Route
              key={path}
              element={element}
              path={path}
            />
          ))
        }
      </Routes>
    </Suspense>
  );
};
