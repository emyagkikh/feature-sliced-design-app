import React from 'react';
import { type RouteProps } from 'react-router-dom';
import { AboutPage, MainPage, NotFoundPage } from 'pages';

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NOT_FOUND]: '*',
};

export const RouteConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    'path': RoutePath[AppRoutes.MAIN],
    'element': <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    'path': RoutePath[AppRoutes.ABOUT],
    'element': <AboutPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    'path': RoutePath[AppRoutes.NOT_FOUND],
    'element': <NotFoundPage />,
  },
};
