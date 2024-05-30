import ProjectCard from "../../common/ProjectCard";
import styles from "./ProjectsStyles.module.css";
import portfolio from "../../assets/tintol-portfolio.png";
import coffee from "../../assets/coffee-app.png";
import kr8tv from "../../assets/kr8tv.png";

function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={coffee}
          link={"https://github.com/T1ntol/37-Coffee-App"}
          h3='37 Degrees Coffee'
          p='Coffe Deliver App'
        />
        <ProjectCard
          src={portfolio}
          link={"https://kusogramig.wixsite.com/tintol"}
          h3='Tintol'
          p='Portfolio Website'
        />
        <ProjectCard
          src={kr8tv}
          link={"https://kr8tvshots.wixsite.com/portfolio"}
          h3='Kr8tv Shots'
          p='Freelance Filmmakers'
        />
      </div>
    </section>
  );
}

export default Projects;
