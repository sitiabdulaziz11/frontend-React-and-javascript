export default function Tabs({children, buttons, buttonContainer }) {
    const ButtonContainer = buttonContainer; //this should start with uppercase character  = buttonsContainer;
    return <>
    <ButtonContainer>
        {buttons}
    </ButtonContainer>
    {children}
    </>
}