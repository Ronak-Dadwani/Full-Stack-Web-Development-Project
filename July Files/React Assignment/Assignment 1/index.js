import react from 'react'

function Person (props){
    return (
        <p>
            {props.name} is {props.age} years old.
        </p>
    )
}

export default Person;