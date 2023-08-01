import { RouteDefinition } from '@solidjs/router';

import MainApp from '@pages/Main';


const routes: RouteDefinition[] = [
    {
        path: "/",
        element: <MainApp />
    }
]

export default routes;
