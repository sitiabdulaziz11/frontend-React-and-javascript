export default function Tabs({children, buttons, ButtonContainer = 'menu' }) {
    //or const ButtonContainer this should start with uppercase character  = buttonsContainer;
    return <>
    {/*being able to set multipl slots in component is a crucial concept in react. */}
    <ButtonContainer>
        {buttons}
    </ButtonContainer>
    {children}
    </>
} // receiving a component identifier as a value for a prop: 2 thing to remember:
// 1 the prop must be usable as a custom component in the receiving component, in this case tabes component
// 2 it must start with uppercase character or remapped to a constant that start with uppercase character.