/* 1
export default function TabButton(props) {
    TabButton is custom component and every custom component will receive props.
    // children prop is special build-in prop set by react.
    /* children prop contains whichever content
    you have between your component text. e.g 
    it contain Components b/c b/n <TabButton>. 
    <TabButton>Components</TabButton>//
    children prop simply refers to the content bettween our component text.
    return <li><button>{props.children}</button></li>;
    
}
we can use one of the 3 way

2
export default function TabButton({label}) {
    return (
        <li>
            <button>{label}</button>
        </li>
    );
}

*/
// below is object destructuring
export default function TabButton({children}) {
    /* in react to add event listeners to elements, by adding a special attribute/props to those elements.
 - special onClick prop is to add click event listener
 -the value for onClick or for any event prop is function.
 - we can define this value func inside of component func. that is allowed to do in js.
  we can define function inside of func and the inner func
  will only be callable inside of this func.*/
  function handleClick() {
    console.log('dd')
  }

    return (
        <li>
            <button onClick={handleClick/*we should use it as value not as func like handleClick()   */}>{children}</button>
        </li>
    );
}
 
 
 /* in js to add clickble // this is imperative code, but not in react
    in react we write declarative code
    document.querySelector('button').addEventListener('click', {} => {
    })*/