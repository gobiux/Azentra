/* ============================================================
   Simple Hash-based Client-side Router
   ============================================================ */

const routes = {};
let currentRoute = null;
let onRouteChange = null;

export function registerRoute(name, handler) {
  routes[name] = handler;
}

export function navigate(routeName) {
  window.location.hash = `#/${routeName}`;
}

export function getCurrentRoute() {
  return currentRoute;
}

export function setOnRouteChange(callback) {
  onRouteChange = callback;
}

function resolveRoute() {
  const hash = window.location.hash.slice(2) || 'login';
  const routeName = hash.split('?')[0];

  if (routes[routeName]) {
    currentRoute = routeName;
    if (onRouteChange) onRouteChange(routeName);
    routes[routeName]();
  } else {
    // Default to login
    currentRoute = 'login';
    if (onRouteChange) onRouteChange('login');
    if (routes['login']) routes['login']();
  }
}

export function initRouter() {
  window.addEventListener('hashchange', resolveRoute);
  resolveRoute();
}
