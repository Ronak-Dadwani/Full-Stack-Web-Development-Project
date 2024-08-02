function Button (props){
    return (
        <button onClick={props.onClick}>
                {props.text}
        </button>
    )
}

//output

<button text = "Click me!" onClick={() => console.log("button clicked")}/>