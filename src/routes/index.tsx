import { RouteDefinition } from '@solidjs/router';

// import components
import MainApp from '@pages/Main';
import AboutApp from '@pages/About';

const routes: RouteDefinition[] = [
    {
        path: "/",
        element: <MainApp />,
        children: [
            
        ]
    },
    {
        path:"/about",
        element: <AboutApp/>
    }
]

export default routes;
