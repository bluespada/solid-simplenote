import { render } from 'solid-js/web';
import App from './App';

const disposable = render(() => <App/>, document.getElementById("root") as HTMLElement); 

// vite hmr
if(import.meta.hot){
    import.meta.hot.accept();
    import.meta.hot.dispose(disposable);
}