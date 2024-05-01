/* 1
export default function TabButton(props) {
    // children prop is specail build inprop,  set by react.
    /* children prop contains whichever content
    you have between your component text. e.g 
    it contain Components b/c b/n <TabButton>. <TabButton>Components</TabButton>//
    return <li><button>{props.children}</button></li>;
}
we can use one of the 3 way

2
export default function TabButton({children}) {
    return (
        <li>
            <button>{children}</button>
        </li>
    );
}
*/
export default function TabButton({label}) {
    return (
        <li>
            <button>{label}</button>
        </li>
    );
}