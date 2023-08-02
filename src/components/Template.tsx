import * as solid from 'solid-js';
import { A, useNavigate } from '@solidjs/router';

export interface TemplateProps {
    children: solid.JSXElement
}

export default function TempalteApp(props: TemplateProps): solid.JSX.Element {
    const navigate = useNavigate();
    (window.document as any).navigate = navigate;
    // render views
    return (
        <div class="w-screen h-screen flex bg-gray-100">
            <div class="w-full">
                <nav class="bg-white shadow-md px-20 py-5 flex flex-row justify-between self-center">
                    <div class="flex flex-row gap-4 self-center">
                        <A href="/about" class="flex flex-row gap-4">
                            <img src="/logo.png" class="h-6" />
                            Solid Notes
                        </A>
                    </div>
                    <div class="flex flex-row gap-4">
                        <button>
                            <i class="uil uil-file-plus mr-2 text-lg"></i>
                            Create Notes
                        </button>
                        <button>
                            <i class="uil uil-ellipsis-v text-lg"></i>
                        </button>
                    </div>
                </nav>
                <main class="px-6 py-12 md:px-24">
                    {props.children}
                </main>
            </div>
        </div>
    )
}