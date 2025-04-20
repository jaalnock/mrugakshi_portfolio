import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsPlayCircle, BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { FiInstagram, FiMail, FiPhone } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Import media assets
import spotifyVideo1 from "./assets/videos/spotify-01.mp4";
import spotifyImg1 from "./assets/images/spotify-01.jpeg";
import spotifyImg2 from "./assets/images/spotify-02.jpeg";
import spotifyImg3 from "./assets/images/spotify-03.jpeg";
import spotifyImg4 from "./assets/images/spotify-04.jpeg";
import spotifyImg5 from "./assets/images/spotify-05.jpeg";
import spotifyImg6 from "./assets/images/spotify-06.jpeg";
import spotifyImg7 from "./assets/images/spotify-07.jpeg";
import spotifyImg8 from "./assets/images/spotify-08.jpeg";

const projects = [
  {
    id: 1,
    title: "Bookstore Interior Design",
    date: "Feb 2020",
    location: "Mumbai, India",
  },
  {
    id: 2,
    title: "Apartment Renovation",
    date: "Mar 2020",
    location: "Pune, India",
  },
  {
    id: 3,
    title: "Boutique Store Facade",
    date: "Apr 2020",
    location: "Delhi, India",
  },
  {
    id: 4,
    title: "Art Gallery Lighting Concept",
    date: "Jun 2020",
    location: "Ahmedabad, India",
  },
  {
    id: 5,
    title: "Coastal Café Design",
    date: "Jul 2020",
    location: "Goa, India",
  },
  {
    id: 6,
    title: "Modern Villa Layout",
    date: "Aug 2020",
    location: "Bangalore, India",
  },
  {
    id: 7,
    title: "Resort Landscape Design",
    date: "Sep 2020",
    location: "Kerala, India",
  },
  {
    id: 8,
    title: "Yoga Studio Interior",
    date: "Oct 2020",
    location: "Rishikesh, India",
  },
  {
    id: 9,
    title: "Cultural Center Proposal",
    date: "Nov 2020",
    location: "Chandigarh, India",
  },
  {
    id: 10,
    title: "Children’s Library Concept",
    date: "Dec 2020",
    location: "Lucknow, India",
  },
  {
    id: 11,
    title: "Museum Exhibit Layout",
    date: "Jan 2021",
    location: "Hyderabad, India",
  },
  {
    id: 12,
    title: "Heritage Building Restoration",
    date: "Feb 2021",
    location: "Jaipur, India",
  },
  {
    id: 13,
    title: "Café + Co-working Hybrid Space",
    date: "Mar 2021",
    location: "Chennai, India",
  },
  {
    id: 14,
    title: "Open Air Amphitheatre Design",
    date: "Apr 2021",
    location: "Nagpur, India",
  },
  {
    id: 15,
    title: "Home Office Design",
    date: "May 2021",
    location: "Nashik, India",
  },
];

const App = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const handlePreviousMedia = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? mediaContent.images.length - 1 : prevIndex - 1
    );
  };

  const handleNextMedia = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === mediaContent.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const sortedProjects = [...projects].sort((a, b) => b.id - a.id);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const resetView = () => {
    setSelectedProject(null);
  };

  const mediaContent = {
    video: spotifyVideo1,
    images: [
      spotifyImg1,
      spotifyImg2,
      spotifyImg3,
      spotifyImg4,
      spotifyImg5,
      spotifyImg6,
      spotifyImg7,
      spotifyImg8,
    ],
  };

  return (
    <>
      <style>
        {`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      
        .project-timeline-heading {
          position: absolute;
          top: 15vh;
          right: 2vw;
          color: #E45310;
          font-size: 4vw;
          font-weight: 800;
          line-height: 1.4;
          letter-spacing: 0.01vw;
          font-family: 'Poppins', sans-serif;
          text-align: left;
        }
      
        .timeline-section {
          position: relative;
        }
      
        .vertical-strip {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 7vw;
          height: 282vh;
          background-color: #E45310;
          z-index: 1;
        }
      
        .project-number {
          color: #FF554B;
          font-size: 3.5vw;
          font-weight: bold;
          width: 7vw;
          text-align: center;
          position: relative;
          z-index: 2;
          transition: color 0.3s ease;
        }
      
        .project-number.selected {
          color: white;
        }
      
        .project-details {
          padding-left: 1.5vw;
          transition: transform 0.3s ease;
          color: #F5F5F5;
        }
      
        .project-details.selected {
          color: white;
        }
      
        .project-item {
          display: flex;
          align-items: flex-start;
          position: relative;
        }
      
        .project-item:hover .project-details {
          transform: scale(1.02);
        }
      
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 20vh;
          margin-left: 3vw;
        }
      
        .contact-item {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #000000;
          font-size: 14px;
          text-decoration: none;
        }
      
        .contact-item svg {
          font-size: 18px;
          color: #E45310;
        }

        .nav-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: #E45310;
          color: white;
          border: none;
          border-radius: 50%;
          width: 6vw;
          height: 6vw;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background-color 0.3s ease;
          z-index: 10;
          font-weight: bold;
          font-size: 3.4vw;
        }

        .nav-button:hover {
          background-color: #e44d00;
        }

        .nav-button.left {
          left: -100px;
        }

        .nav-button.right {
          right: -100px;
        }

        .nav-button svg {
          font-size: 34px; /* Adjusted to match the button's text size for consistency */
        }
      `}
      </style>

      <div className="h-screen overflow-hidden font-sans text-gray-800">
        {/* Header */}
        <header
          onClick={resetView}
          className="flex justify-between items-start p-6 bg-white border-b border-orange-200 fixed w-full top-0 z-50 cursor-pointer"
        >
          <div className="pl-7 pt-4">
            <h1 className="text-3xl font-bold text-[#E45310]">
              Mrugakshi Nadkarni
            </h1>
            <p className="text-2xl font-thin f text-[#E45310]">
              Design | Space | Creation | Balance
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 text-orange-500 text-xl mt-1 pr-10">
            <a
              href="https://instagram.com/mrugakshi18"
              target="_blank"
              rel="noreferrer"
            >
              <FiInstagram />
            </a>
            <a href="mailto:mrugakshi18@gmail.com">
              <FiMail />
            </a>
            <a href="tel:9820408075">
              <FiPhone />
            </a>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex pt-[12vh] h-full bg-[#3F3124]">
          {/* Left Section */}
          <section className="w-[40%] bg-white p-[2vh] fixed top-[12vh] bottom-0 flex items-center justify-center text-center overflow-hidden">
            {selectedProject ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-full h-full flex flex-col gap-4 p-4"
              >
                <div className="relative w-full aspect-video mb-4">
                  <video
                    src={mediaContent.video}
                    className="w-full h-full rounded-lg shadow-lg object-cover"
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                    onClick={() => setIsVideoModalOpen(true)}
                  >
                    <BsPlayCircle className="text-white text-6xl hover:text-orange-500 transition-colors" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 overflow-y-auto hide-scrollbar">
                  {mediaContent.images.map((img, index) => (
                    <motion.img
                      key={index}
                      src={img}
                      alt={`Project image ${index + 1}`}
                      className="w-full h-[25vh] object-cover rounded-lg shadow-lg cursor-pointer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => {
                        setSelectedImageIndex(index);
                        setIsImageModalOpen(true);
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            ) : (
              <div>
                <h2 className="text-2xl font-bold text-[#E45310] mb-6 font-poppins">
                  Hi! A little about myself,
                </h2>
                <p className="text-gray-700 font-medium text-sm leading-relaxed px-10 pt-0 pb-4 font-poppins">
                  (Based in the heart of architectural wonders) Having an
                  extensive knowledge and education in architecture I dedicate
                  my passion to crafting stories through the attention to
                  spatial detail and understanding of the character narrative.
                  From concept to completion, I'd like to say I drive the visual
                  identity of design and space creation. With a combination of
                  problem-solving balance, technical expertise and artistic
                  vision I achieve to bring to the table a unique and
                  captivating visual design stratum.
                </p>
                <div className="contact-info ml-8">
                  <a
                    href="https://instagram.com/mrugakshi18"
                    className="contact-item hover:text-orange-500 transition-colors"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiInstagram /> mrugakshi18
                  </a>
                  <a
                    href="mailto:mrugakshi18@gmail.com"
                    className="contact-item hover:text-orange-500 transition-colors"
                  >
                    <FiMail /> mrugakshi18@gmail.com
                  </a>
                  <a
                    href="tel:9820408075"
                    className="contact-item hover:text-orange-500 transition-colors"
                  >
                    <FiPhone /> 9820408075
                  </a>
                </div>
              </div>
            )}
          </section>

          {/* Middle Section - Timeline */}
          <section className="w-[25%] ml-[40%] h-full overflow-y-scroll hide-scrollbar bg-[#3F3124] py-12 timeline-section">
            <div className="vertical-strip"></div>
            <div className="flex flex-col gap-16">
              {sortedProjects.map((project) => (
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  key={project.id}
                  className="project-item cursor-pointer"
                  onClick={() => handleProjectClick(project)}
                >
                  <div
                    className={`project-number ${
                      selectedProject?.id === project.id ? "selected" : ""
                    }`}
                  >
                    {String(project.id).padStart(2, "0")}
                  </div>
                  <div
                    className={`project-details ${
                      selectedProject?.id === project.id ? "selected" : ""
                    }`}
                  >
                    <p className="text-sm mb-1">{project.date}</p>
                    <h3 className="text-xl font-semibold mb-1">
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <p className="text-sm">{project.subtitle}</p>
                    )}
                    {project.location && (
                      <p className="text-sm">{project.location}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Right Section - Heading */}
          <section className="w-[35%] fixed right-[5vw] top-[0px] bottom-0 text-white px-6 py-0 relative">
            <div
              className="project-timeline-heading"
              onClick={resetView}
              style={{ cursor: "pointer" }}
            >
              Project
              <br />
              Timeline
              <p className="text-sm text-white mt-[1vh] font-normal px-[0.5vw]">
                Click on any project to get a preview!
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-[#1A0D00] opacity-90"
            onClick={() => setIsVideoModalOpen(false)}
          />
          <div className="relative w-[80vw] max-w-4xl z-10">
            <button
              className="absolute -top-[5vh] right-0 text-white text-2xl hover:text-orange-500 transition-colors"
              onClick={() => setIsVideoModalOpen(false)}
            >
              <AiOutlineClose />
            </button>
            <button className="nav-button left" onClick={handlePreviousMedia}>
              <FaChevronLeft />
            </button>
            <button className="nav-button right" onClick={handleNextMedia}>
              <FaChevronRight />
            </button>
            <video
              src={mediaContent.video}
              controls
              autoPlay
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}

      {/* Image Modal */}
      {isImageModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-[#1A0D00] opacity-90"
            onClick={() => setIsImageModalOpen(false)}
          />
          <div className="relative w-[80vw] max-w-4xl z-10">
            <button
              className="absolute -top-[5vh] right-0 text-white text-2xl hover:text-orange-500 transition-colors"
              onClick={() => setIsImageModalOpen(false)}
            >
              <AiOutlineClose />
            </button>
            <button className="nav-button left" onClick={handlePreviousMedia}>
              <BsArrowLeft />
            </button>
            <button className="nav-button right" onClick={handleNextMedia}>
              <BsArrowRight />
            </button>
            <img
              src={mediaContent.images[selectedImageIndex]}
              alt="Selected project image"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default App;
