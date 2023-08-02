import { render } from 'solid-js/web';
import App from './App';
import { Router } from '@solidjs/router';

const disposable = render(() => <Router><App/></Router>, document.getElementById("root") as HTMLElement); 

// vite hmr
if(import.meta.hot){
    import.meta.hot.accept();
    import.meta.hot.dispose(disposable);
}