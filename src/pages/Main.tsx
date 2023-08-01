import * as solid from 'solid-js';
import { createStore } from 'solid-js/store';

interface NoteProps {
    id: number
    note: string
}

export default function MainApp(): solid.JSX.Element {
    const [noteList, addNote] = createStore<NoteProps[]>([])
    const [value, setValue] = solid.createSignal("");

    solid.createEffect(() => {
        addNote(JSON.parse(localStorage.getItem("note")??"[]"));
    }, []);

    const handleForm = (e: any) => {
        e.preventDefault();
        addNote([...noteList, {id: noteList.length+1, note: value()}]);
        localStorage.setItem("note", JSON.stringify(noteList));
        // reset the value
        setValue("");
    }

    const removeItem = (item: NoteProps) => {
        console.log(noteList.includes(item))
        if(noteList.includes(item)){
            addNote(noteList.filter((items) => items != item));
            localStorage.setItem("note", JSON.stringify(noteList));
        }
    }

    const reset = () => {
        localStorage.removeItem("note");
        addNote([]);
    }


    return (<>
        <div class="flex flex-col h-full w-full mx-4 mt-4">
            <form onSubmit={handleForm}>
                <div class="flex flex-row h-full gap-3">
                    <input class="shadow border rounded-md" value={value()} onChange={(e) => setValue(e.target.value)} />
                    <button class="bg-teal-500 shadow text-white rounded-md py-2 px-4">Add Note</button>
                    <button type="button" onClick={() => reset()} class="bg-pink-500 shadow text-white rounded-md py-2 px-4">Remove All Note</button>
                </div>
            </form>
            <ul>
                {noteList.map((v) => (
                    <li>
                        <div class="flex flex-row gap-4 py-4">
                            {v.note}
                            <button onClick={() => removeItem(v)} class="py-1 px-4 rounded-md bg-red-500 text-white">Remove</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </>)
}
