import * as solid from 'solid-js';
import routeList from '@routes/index';
import { Router, useRoutes } from '@solidjs/router';

// import fontsource
import '@fontsource/work-sans';
import '@fontsource/work-sans/700.css';
import '@fontsource/lato';
import '@fontsource/lato/700.css';
import '@fontsource/inter';
import '@fontsource/inter/700.css';

// import stylesheet here
import '@assets/main.less';

export default function App(): solid.JSX.Element {
    const Route = useRoutes(routeList);
    return (<>
        <Router>
            <Route />
        </Router>
    </>);
}
