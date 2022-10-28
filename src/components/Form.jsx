import { useRef } from 'react';
function Form(props) {
    const inputElement = useRef();
    const handleClick = () => {
        props.searchNewGif(inputElement.current.value);
        inputElement.current.value = '';
    }
    return (
        <div className="mt-5">
            <input type="text" placeholder="type of giphy" ref={inputElement}/>
            <button onClick={handleClick}>Submit</button>
        </div>
    );
}
export default Form;