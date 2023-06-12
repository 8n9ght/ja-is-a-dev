/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import { Octokit } from "octokit";
import dataProject from "./projectData.json";

export default function Project(props) {
  const activeProject = useRef(null)
  const [project, setProject] = useState([]);

  const octokit = new Octokit({
    auth: process.env.OCTOKIT,
  });

  const setActiveRobot = props.setActiveRobot

  useEffect(() => {
    octokit
      .request("GET /users/8n9ght/repos?page=1&per_page=20&sort=updated")
      .then((response) => {
        const data = response.data;
        setProject(data);
        return response;
      });
  }, []);

  function scroll(offset){
    const container = document.querySelector('.projectsContent');
    container.scrollLeft += 1200 * offset;
    setActiveRobot(true)
  }

  return (
    <div className="projectsContainer">
      <h2>Some projects I've built</h2>
      <div className="projectsContent">
        {project.slice(0, 5).map((projectItem, pIndex) => {
          const projectDataItem = dataProject.find(item => item.projectId === projectItem.id);
          return (
            <div id={pIndex} key={projectItem.id} className="project" ref={activeProject}>
              {projectDataItem ? (
                <article key={projectDataItem.projectId} className="projectDisplay">
                  {projectDataItem.img ? (<img alt={projectDataItem.projectName} src={projectDataItem.img} ></img>) : (<p>test</p>)}
                </article>
              ) : (
                <article className="projectDisplay noImg">
                  <p>Oops ! Looks like I'm picture free !</p>
                </article>
              )}

              <article className="projectContent">
                <h3>{projectItem.name}</h3>
                <p>
                  Dernière mise à jour :{" "}
                  {new Date(
                    Date.parse(projectItem.updated_at)
                  ).toLocaleDateString("fr")}
                </p>

                {dataProject.map((projectTech) => {
                  if (projectTech.projectId === projectItem.id) {
                    return (
                      <article
                        className="techsContent"
                        key={projectTech.projectId}
                      >
                        {projectTech.techs.map((item, itIndex) => {
                          return (
                            <p key={itIndex} className="techsItem">
                              {item}
                            </p>
                          );
                        })}
                      </article>
                    );
                  }
                })}
                <article className="links">
                  <a
                    href={projectItem.html_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <article className="gitImage"></article>
                  </a>
                  {projectItem.homepage && (
                    <a
                      href={`https://${projectItem.homepage}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <article className="webImage"></article>
                    </a>
                  )}
                </article>
                {pIndex !== 0 && pIndex !== 4 && 
                <article className="projectBtns">
                    <button className="btnItem left" onClick={() => scroll(- 1)}></button>
                    <button className="btnItem right" onClick={() => scroll(1)}></button>
                </article>}
                {pIndex === 0 && 
                <article className="projectBtns">
                    <button onClick={() => scroll(pIndex + 1)} className="btnItem right"></button>
                </article>}
                {pIndex === 4 && 
                <article className="projectBtns">
                    <button className="btnItem left" onClick={() => scroll(- 1)}></button>
                </article>}
              </article>

              <article className="projectDescription">
                <p>{projectItem.description}</p>
              </article>

              
            </div>
          );
        })}
      </div>
    </div>
  );
}
