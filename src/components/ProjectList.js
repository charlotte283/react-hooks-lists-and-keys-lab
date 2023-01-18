import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const ProjectItems = projects.map((projects) => {
    return (
      <ProjectItem key={projects.id} name={projects.name} about={projects.about} technologies={projects.technologies} />
    )
  })

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
      <ProjectItem/>
        </div>
    </div>
  );
}
	
