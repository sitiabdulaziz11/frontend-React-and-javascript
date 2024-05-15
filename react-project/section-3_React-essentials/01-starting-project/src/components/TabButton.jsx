/* we can use one of the 3 way
1
export default function TabButton(props) {
    TabButton is custom component and every custom component will receive props.
    // children prop is special build-in prop set by react.
     "children" will receive whichever content you pass between the opening and closing tags of your component.
    /*  e.g 
    it contain Components b/c b/n <TabButton>. 
    <TabButton>Components</TabButton>//
    children prop simply refers to the content bettween our component text.
    return <li><button>{props.children}</button></li>;
    
} 2
export default function TabButton({label}) {
    return (
        <li>
            <button>{label}</button>
        </li>
    );
}

*/
// below is object destructuring
export default function TabButton({children, onSelect, isSelected}) {
    //isSelected return boolean, if it selected true else false}
    // @10 to set dynamiclly we use {}, which always ues if we need some dynamic or javascript based value.
    /* in react to add event listeners to elements, by adding a special attribute/props to those elements.
   - special onClick prop is to add click event listener
   -the value for onClick or for any event prop is function.
 - we can define this value func inside of component func. that is allowed to do in js.
  we can define function inside of func and the inner func will only be callable inside of this func.*/
  console.log('tabButton component executing');
  
  
  return (
        <li>
            <button /*className="active"this mark all button as active so we set this dynamic value refer @10 */ className={isSelected ? 'active' : ''} onClick={onSelect}/*{handleClick}we should use it as value not as func like handleClick()*/>{children}</button>
        </li>
    );
}
// if we want to add class to the button in jsx, we use className.
 /* in js to add clickble // this is imperative code, 
 document.querySelector('button').addEventListener('click', {} => {
    })
   but not in react in react we write declarative code
    */