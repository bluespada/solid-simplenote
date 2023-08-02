import * as solid from 'solid-js';

export default function AboutApp() {
    const handleRedirect = () => {
        (window.document as any).navigate("/", { replace: true });
    }
    return (<>
        <div>
            <a class="cursor-pointer underline" onClick={handleRedirect}>
                Home 
            </a>
        </div>
    </>)
}