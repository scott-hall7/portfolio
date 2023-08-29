import { LayoutDiv, PageContainer, PageHeader } from "../GlobalStyle";
import projects from '../data/projects'
import { styled } from 'styled-components'

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;
  @media (max-width: 1600px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
}
`;

const ProjectDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;
  gap: 16px;
  padding: 1rem 2rem;
  border-radius: 10px;
`;

const ProjectH2 = styled.h2`
  font-size: 24px;
  text-decoration: underline;
`;

const ProjectImg = styled.img`
  max-height: 200px;
  width: auto;
  border-radius: 5px;
  box-shadow: 2px 2px 6px grey;
  @media (max-width: 700px) {
    max-height: 150px;
  }
`;

const LinksDiv = styled.div`
  display: flex;
  gap: 2rem;
`;

const ViewLink = styled.a`
  color: white;
  background-color: rgb(43, 42, 76);
  padding: .5rem;
  border-radius: 1rem;
  font-size: 20px;
  &:hover {
    background-color: rgb(179, 19, 18);;
    color: white;
}
`;

interface ProjectType {
  project: {
    name: string,
    image: string,
    github: string,
    deployment: string,
  },
}

const Project = ({project}: ProjectType) => {
  return (
    <ProjectDiv>
      <ProjectH2>{project.name}</ProjectH2>
      <ProjectImg src={project.image} />
      <LinksDiv>
        <ViewLink href={project.github}>View GitHub</ViewLink >
        <ViewLink href={project.deployment}>View Project</ViewLink >
      </LinksDiv>
    </ProjectDiv>
  )
}

const Projects = () => {
    return (
      <LayoutDiv>
        <PageContainer>
          <PageHeader>Projects</PageHeader>
          <ProjectsContainer>
            {projects.map(project => {
              return <Project key={project.name} project={project} />
            })}
          </ProjectsContainer>
        </PageContainer>
      </LayoutDiv>
    );
  };
  
  export default Projects;