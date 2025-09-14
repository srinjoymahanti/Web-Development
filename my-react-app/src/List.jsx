function List(props){
    
    const category=props.category;
    const fruits=props.items;

    // fruits.sort((a,b)=>a.name.localeCompare(b.name));//Alphabatical
    // fruits.sort((a,b)=>b.name.localeCompare(a.name));//Reverse Alphabatical
    // fruits.sort((a,b)=>a.calories-b.calories);//Numerical
    // fruits.sort((a,b)=>b.calories-a.calories);//Reverse Numerical

    // const lowCalFruits=fruits.filter(fruits => fruits.calories < 90);

    const listItems=fruits.map(fruit=><li key={fruit.id}>{fruit.name}:{fruit.calories}</li>);
    // const listItems=lowCalFruits.map(fruit=><li key={fruit.id}>{fruit.name}:{fruit.calories}</li>);

    return(
        <>
        <h3>{category}</h3>
        <ol>{listItems}</ol>
        </>
    );
};
List.defaultProps={
    category:"Category",
};

export default List;