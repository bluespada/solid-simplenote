import { useContext, createContext, JSXElement, createSignal } from 'solid-js';
import { useNavigate, Navigator } from '@solidjs/router';

const RouterContextProvider = createContext();

export interface RouterProviderProps {
    children: JSXElement
    navigate: Navigator
}

export default function RouterProvider(props: RouterProviderProps) {
    const [navigate, setNavigate] = createSignal<number>(0);
    const navigator = useNavigate();
    setNavigate(1);
    return (<RouterContextProvider.Provider value={[navigate]}>
        {props.children}
    </RouterContextProvider.Provider>)
}

export function useNavigation(){ return useContext(RouterContextProvider); }