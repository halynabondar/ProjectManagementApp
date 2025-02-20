import ProjectsSidebar from './components/ProjectsSidebar';
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import {useState} from "react";

function App() {
    const [projects, setProjects] = useState({
        selectedProjectId: undefined,
        projects: [],
    });

    function handleAddProject() {
        setProjects(prevState => {
            return {
                ...prevState,
                selectedProjectId: null,
            }
        });
    }

    let content;

    if (projects.selectedProjectId === null) {
        content = <NewProject />
    } else if (projects.selectedProjectId === undefined) {
        content = <NoProjectSelected onStartAddProject={handleAddProject}/>;
    }

  return (
    <main className="h-screen my-8 flex gap-8">
        <ProjectsSidebar onStartAddProject={handleAddProject} />
        {content}
    </main>
  );
}

export default App;
