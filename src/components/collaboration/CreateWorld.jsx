import { useForm } from "react-hook-form";

function CreateWorld() {
    return (
        <div>
            <form>
                <label>Description</label>
                <textarea />
                <label>Tags</label>
                <label>References Art</label>
                <label>Reference Music</label>
            </form>
        </div>
    );
}

export default CreateWorld;