import React from "react";
import { motion } from "framer-motion";

const ProjectTimeline = ({
  projects,
  selectedProject,
  handleProjectClick,
  isMobile,
}) => (
  <div
    className={
      isMobile
        ? "timeline-area"
        : "relative w-[25%] ml-[40%] overflow-y-scroll hide-scrollbar bg-[#3F3124] py-0 timeline-section"
    }
  >
    {isMobile ? (
      <div className="timeline-content">
        <div className="project-timeline-heading-mobile">
          Project
          <br />
          Timeline
          <p className="text-sm mt-1 font-normal">
            Click on any project to get a preview!
          </p>
        </div>
        <div className="project-timeline-list">
          {projects.map((project) => (
            <div className="project-item" key={project.id}>
              <span
                className={`project-number${
                  selectedProject?.id === project.id ? " selected" : ""
                }`}
              >
                {String(project.id).padStart(2, "0")}
              </span>
              <div
                className={`project-details${
                  selectedProject?.id === project.id ? " selected" : ""
                }`}
                onClick={() => handleProjectClick(project)}
              >
                {project.logo && project.logo !== null && (
                  <img src={project.logo} alt={`${project.title} logo`} />
                )}
                <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                <p className="text-xs mb-1">{project.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ) : (
      <>
        <div className="vertical-strip"></div>
        <div className="flex flex-col py-12" style={{ rowGap: "6vw" }}>
          {projects.map((project) => (
            <motion.div
              whileHover={{ scale: 1.02 }}
              key={project.id}
              className="project-item cursor-pointer flex items-start"
              onClick={() => handleProjectClick(project)}
            >
              <div
                className={`project-number ${
                  selectedProject?.id === project.id ? "selected" : ""
                }`}
                style={{ flexShrink: 0 }}
              >
                {String(project.id).padStart(2, "0")}
              </div>
              <div
                className={`project-details ${
                  selectedProject?.id === project.id ? "selected" : ""
                }`}
                style={{ marginLeft: "0.5vw" }}
              >
                {project.logo && project.logo !== null && (
                  <img src={project.logo} alt={`${project.title} logo`} />
                )}
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-sm mb-1">{project.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </>
    )}
  </div>
);

export default ProjectTimeline;
