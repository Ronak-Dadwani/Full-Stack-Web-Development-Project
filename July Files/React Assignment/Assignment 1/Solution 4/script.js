function List(props){
    const listItems = props.items.map((items)=>
        <li key={item}>{item}</li>
    )

    return <ul>{listItems}</ul>


}

//output 
<List items = {['apple' , 'banana', 'mango']} />