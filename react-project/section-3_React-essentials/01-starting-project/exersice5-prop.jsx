const TITLE_DESCRIPTION = [
  {
      title:'Alhemdulilah',
      description: 'Allah help me to know react and all others'
  },
  
  {
      title:"Learn React",
      description:"In-depth",
  },
      
  ];

  /* this is for B export function CourseGoal(props) {
    return (
      <li>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </li>
    );
  }*/

  export function CourseGoal({title, description}) {
  return (
    <li>
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
}
function App() {
    return (
      <div id="app" data-testid="app">
        <h1>Time to Practice</h1>
        <p>One course, many goals!</p>
        <ul>
          {/* B <CourseGoal
          title="Learn React"
          description="In-depth"
          /> */}
          
          <CourseGoal {...TITLE_DESCRIPTION[0]}
          />
          <CourseGoal {...TITLE_DESCRIPTION[1]}
          />
        </ul>
      </div>
      );
  }
  export default App;