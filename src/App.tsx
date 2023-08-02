import * as solid from 'solid-js';
import routeList from '@routes/index';
import { Router, useNavigate, useRoutes } from '@solidjs/router';
import TempalteApp from '@components/Template';

// import fontsource
import '@fontsource/work-sans';
import '@fontsource/work-sans/700.css';
import '@fontsource/lato';
import '@fontsource/lato/700.css';
import '@fontsource/inter';
import '@fontsource/inter/700.css';
import '@iconscout/unicons/css/line.css';
import '@iconscout/unicons/css/solid.css';
import '@iconscout/unicons/css/thinline.css';

// import stylesheet here
import '@assets/main.less';
import RouterProvider from '@utils/router_provider';

export default function App(): solid.JSX.Element {
    const navigate = useNavigate();
    const Route = useRoutes(routeList);
    (window.document as any).navigate = navigate;
    return (
        <TempalteApp>
            <Route />
        </TempalteApp>
    );
}
