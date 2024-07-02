import { RouteObject } from 'react-router-dom';

export interface NavLink {
    path: string;
    label: string;
}

export const createNavLinksFromRouter = (routerConfig: RouteObject[]): NavLink[] => {
    const mainRoute = routerConfig[0];

    if (!mainRoute.children) {
        return [];
    }

    return mainRoute.children.map(route => ({
        path: route.path ?? '/',
        label: route.path === '/' ? 'Home' : route.path ? route.path.charAt(1).toUpperCase() + route.path.slice(2) : 'Unknown'
    }));
};