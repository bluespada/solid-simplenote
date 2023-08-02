import * as solid from 'solid-js';

export default function MainApp(): solid.JSX.Element {
    solid.createEffect(() => {
        console.log("mount")
        return () => {
            console.log("dispose")
        }
    }, [])
    return (<>
        <div>
            <h1>Hello World</h1>
        </div>
    </>)
}
