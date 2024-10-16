// lift the state up to the closest ancestor component that has access to all components that need to work with that state.

// ancestor passes a function that eventualy changes the state via props to the child component. this allows the child component to initiate the state changes.

// the ancestor passes the state value via props to the child component.

function Parent() {
  const [sharedState, setSharedState] = useState("");

  return (
    <div>
      <ChildA sharedState={sharedState} setSharedState={setSharedState} />
      <ChildB sharedState={sharedState} />
    </div>
  );
}

function ChildA({ sharedState, setSharedState }) {
  return (
    <input
      value={sharedState}
      onChange={(e) => setSharedState(e.target.value)}
    />
  );
}

function ChildB({ sharedState }) {
  return <p>{sharedState}</p>;
}
