import { useState } from "react";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined, // undefinded means doing no thing.
    projects: [],
    tasks: [],
  });


  function handleAddTask(text) {
    setProjectsState(prevState => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        // id: Math.random()
        id: taskId,

        // title:
        // description:
        // dueDate:
      };
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks]
      };
    });
  }

  function handleDeletTask(id) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  function handleSelectProject(id) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id, // to add new project
      };
    });
  }

  function handleStartAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null, // to add new project
      };
    });
  }

  function handleCancelAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined, // to add new project
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectsState(prevState => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        // id: Math.random()
        id: projectId,

        // title:
        // description:
        // dueDate:
      };
      return {
        ...prevState,
        selectedProjectId: undefined, // to hide input fildes when we click save
        // selectedProjectId: projectId,
        projects: [...prevState.projects, newProject]
      };
    });
  }

  // console.log(projectsState);

  function handleDeleteProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined, // to add new project
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId)
      };
    });
  }

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId); // used for finding an element in an array by ID.

  let content = (
  <SelectedProject
  project={selectedProject}
  onDelete={handleDeleteProject}
  onAddTask={handleAddTask}
  onDeleteTask={handleDeletTask}
  tasks={projectsState.tasks}
  />
  );

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }

  return (
    <main className="h-screen my-8 flex gap-8 ">
      <ProjectsSidebar
      onStartAddProject={handleStartAddProject}
      projects={projectsState.projects}
      onSelectProject={handleSelectProject}
      selectedProjectId={projectsState.selectedProjectId}
      />
      {content}

      {/* <NoProjectSelected onStartAddProject={handleStartAddProject}/> */}
      {/* <NewProject />  */}
    </main>
  );
}

export default App;
