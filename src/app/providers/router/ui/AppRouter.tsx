import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {RouteConfig} from "shared/config/routeConfig/routeConfig";

export const AppRouter = () => {
    return (
        <Suspense fallback={<div>loading</div>}>
            <Routes>
                {
                    Object.values(RouteConfig).map(({element, path}) => (
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
