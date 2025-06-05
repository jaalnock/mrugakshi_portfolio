import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsPlayCircle } from "react-icons/bs";
import { FiInstagram, FiMail, FiPhone } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import projectTimelineIcon from "./assets/images/project_timeline.svg";

import defaultLogo from "./assets/logos/04.png";

// Import media assets for 01. ctrl-alt-believe project
import vid0101c from "./assets/videos/01/1c.mp4";
import img0101l from "./assets/images/01/1l.webp";
import img0101r from "./assets/images/01/1r.webp";
import img0102l from "./assets/images/01/2l.webp";
import img0102r from "./assets/images/01/2r.webp";
import img0103l from "./assets/images/01/3l.webp";
import img0103r from "./assets/images/01/3r.webp";
// import logo01 from "./assets/logos/01.png";

// Import media assets for 02. Superdry Denim
import vid0201c from "./assets/videos/02/1c.mp4";
import img0201l from "./assets/images/02/1l.webp";
import img0201r from "./assets/images/02/1r.webp";
import img0202l from "./assets/images/02/2l.webp";
import img0202r from "./assets/images/02/2r.webp";
import img0203l from "./assets/images/02/3l.webp";
import img0203r from "./assets/images/02/3r.webp";
import img0204l from "./assets/images/02/4l.webp";
import img0204r from "./assets/images/02/4r.webp";
import img0205l from "./assets/images/02/5l.webp";
import img0205r from "./assets/images/02/5r.webp";
import img0206c from "./assets/images/02/6c.webp";
import logo02 from "./assets/logos/02.png";

// Import media assets for 03. Volkswagen
import vid0301c from "./assets/videos/03/1c.mp4";
import vid0302c from "./assets/videos/03/2c.mp4";
import vid0303c from "./assets/videos/03/3c.mp4";
import img0301l from "./assets/images/03/1l.webp";
import img0301r from "./assets/images/03/1r.webp";
import img0302l from "./assets/images/03/2l.webp";
import img0302r from "./assets/images/03/2r.webp";
import logo03 from "./assets/logos/03.png";

// Import media assets for 04. Spotify project
import vid0401c from "./assets/videos/04/1c.mp4";
import img0401l from "./assets/images/04/1l.webp";
import img0401r from "./assets/images/04/1r.webp";
import img0402l from "./assets/images/04/2l.webp";
import img0402r from "./assets/images/04/2r.webp";
import img0403l from "./assets/images/04/3l.webp";
import img0403r from "./assets/images/04/3r.webp";
import img0404l from "./assets/images/04/4l.webp";
import img0404r from "./assets/images/04/4r.webp";
import logo04 from "./assets/logos/04.png";

// Import media assets for 05. Mothers recipe
import vid0501c from "./assets/videos/05/1c.mp4";
import img0501l from "./assets/images/05/1l.webp";
import img0501r from "./assets/images/05/1r.webp";
import img0502l from "./assets/images/05/2l.webp";
import img0502r from "./assets/images/05/2r.webp";
import img0503l from "./assets/images/05/3l.webp";
import img0503r from "./assets/images/05/3r.webp";
// import logo05 from "./assets/logos/05.png";

// Import media assets for 06. Sansui AC
import vid0601c from "./assets/videos/06/1c.mp4";
import img0601l from "./assets/images/06/1l.webp";
import img0601r from "./assets/images/06/1r.webp";
import img0602l from "./assets/images/06/2l.webp";
import img0602r from "./assets/images/06/2r.webp";
import img0603l from "./assets/images/06/3l.webp";
import img0603r from "./assets/images/06/3r.webp";
import logo06 from "./assets/logos/06.png";

// Import media assets for 07. Jio
import img0701l from "./assets/images/07/1l.webp";
import img0701r from "./assets/images/07/1r.webp";
import img0702l from "./assets/images/07/2l.webp";
import img0702r from "./assets/images/07/2r.webp";
import img0703l from "./assets/images/07/3l.webp";
import img0703r from "./assets/images/07/3r.webp";
import img0704l from "./assets/images/07/4l.webp";
import img0704r from "./assets/images/07/4r.webp";
// import logo07 from "./assets/logos/07.png";

// Import media assets for 08. Fit Bit
import vid0801c from "./assets/videos/08/1c.mp4";
import img0801l from "./assets/images/08/1l.webp";
import img0801r from "./assets/images/08/1r.webp";
import img0802l from "./assets/images/08/2l.webp";
import img0802r from "./assets/images/08/2r.webp";
import logo08 from "./assets/logos/08.png";

// Import media assets for 09. 3M science
import vid0901c from "./assets/videos/09/1c.mp4";
import img0901c from "./assets/images/09/1c.webp";
import img0902l from "./assets/images/09/2l.webp";
import img0902r from "./assets/images/09/2r.webp";
import img0903c from "./assets/images/09/3c.webp";
import logo09 from "./assets/logos/09.png";

// Import media assets for 10. 19 years in Versova
import img1001l from "./assets/images/10/1l.webp";
import img1001r from "./assets/images/10/1r.webp";
import img1002l from "./assets/images/10/2l.webp";
import img1002r from "./assets/images/10/2r.webp";
import img1003l from "./assets/images/10/3l.webp";
import img1003r from "./assets/images/10/3r.webp";
import img1004l from "./assets/images/10/4l.webp";
import img1004r from "./assets/images/10/4r.webp";
import img1005l from "./assets/images/10/5l.webp";
import img1005r from "./assets/images/10/5r.webp";
// import logo10 from "./assets/logos/10.png";

// Import media assets for 11. Aisi woh Barish
import vid1101c from "./assets/videos/11/1c.mp4";
import img1102l from "./assets/images/11/2l.webp";
import img1102r from "./assets/images/11/2r.webp";
import img1103l from "./assets/images/11/3l.webp";
import img1103r from "./assets/images/11/3r.webp";
import img1104l from "./assets/images/11/4l.webp";
import img1104r from "./assets/images/11/4r.webp";
import img1105l from "./assets/images/11/5l.webp";
import img1105r from "./assets/images/11/5r.webp";
import img1106c from "./assets/images/11/6c.webp";
// import logo11 from "./assets/logos/11.png";

// Import media assets for 12. How not to deal with grief
import vid1201c from "./assets/videos/12/1c.mp4";
import img1201l from "./assets/images/12/1l.webp";
import img1201r from "./assets/images/12/1r.webp";
import img1202l from "./assets/images/12/2l.webp";
import img1202r from "./assets/images/12/2r.webp";
import img1203l from "./assets/images/12/3l.webp";
import img1203r from "./assets/images/12/3r.webp";
import img1204l from "./assets/images/12/4l.webp";
import img1204r from "./assets/images/12/4r.webp";
import img1205l from "./assets/images/12/5l.webp";
import img1205r from "./assets/images/12/5r.webp";
// import logo12 from "./assets/logos/12.png";

// Define project data array
const projects = [
  {
    id: 1,
    title: "ctrl + alt + believe (Mother’s Day)",
    date: "08.11.2024",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    logo: defaultLogo,
    productionHouse: "",
    director: "",
    Cinematographer: "",
    designation: "",
  },
  {
    id: 2,
    title: "Superdry Denim",
    date: "04.03.2024",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    logo: logo02,
    productionHouse: "",
    director: "",
    Cinematographer: "",
    designation: "",
  },
  {
    id: 3,
    title: "Volkswagen ",
    date: "01.01.2024",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    logo: logo03,
    productionHouse: "Method",
    director: "Sapna Singh",
    Cinematographer: "Aadi Iyer",
    designation: "Production Designer",
  },
  {
    id: 4,
    title: "Spotify",
    date: "27.09.2024",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    logo: logo04,
    productionHouse: "",
    director: "",
    Cinematographer: "",
    designation: "",
  },
  {
    id: 5,
    title: "Mothers recipe",
    date: "24.07.2024",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    logo: defaultLogo,
    productionHouse: "Happy Crew Films",
    director: "Manav Malhotra",
    Cinematographer: "Aadi Iyer",
    designation: "Production Designer",
  },
  {
    id: 6,
    title: "Sansui AC",
    date: "03.02.2024",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    logo: logo06,
    productionHouse: "Happy Crew Films / Ghost Note Media",
    director: "Nandini Godara",
    Cinematographer: "Mahadev Thakur",
    designation: "Production Designer",
  },
  {
    id: 7,
    title: "Jio",
    date: "03.3.2024",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    logo: defaultLogo,
    productionHouse: "Jugaad Motion Pictures",
    director: "Aadi Iyer",
    Cinematographer: "Rajiv Malu",
    designation: "Production Designer",
  },
  {
    id: 8,
    title: "Fit Bit",
    date: "18.02.2024",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    logo: logo08,
    productionHouse: "SGDM",
    director: "Dhananjay Gandotra",
    Cinematographer: "Kartik Parmar",
    designation: "Production Designer",
  },
  {
    id: 9,
    title: "3M science",
    date: "05.01.2024",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    logo: logo09,
    productionHouse: "Red carpet Moving Pictures",
    director: "Lorenzo",
    Cinematographer: "",
    designation: "Production Designer",
  },
  {
    id: 10,
    title: "19 years in Versova (short film)",
    date: "21.06.2024",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    logo: defaultLogo,
    productionHouse: "",
    director: "Ashwin Karthikeyan",
    Cinematographer: "Aditya Verma",
    designation: "Production Designer",
  },
  {
    id: 11,
    title: "Aisi woh Barish (music video)",
    date: "21.06.2024",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    logo: defaultLogo,
    productionHouse: "Sunshine Motion Pictures",
    director: "Heem Verma",
    Cinematographer: "Vishnu Dev",
    designation: "Production Designer",
  },
  {
    id: 12,
    title: "How not to deal with grief (short film)",
    date: "21.06.2024",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    logo: defaultLogo,
    productionHouse: "",
    director: "Ashwin Karthikeyan",
    Cinematographer: "Vaibhav Sanghvi",
    designation: "Production Designer",
  },
];

// Main App component
const App = () => {
  // State for managing selected project, modals, and media index
  const [selectedProject, setSelectedProject] = useState(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  // Handler for navigating to previous media in modal
  const handlePreviousMedia = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? mediaContent.length - 1 : prevIndex - 1
    );
  };

  // Handler for navigating to next media in modal
  const handleNextMedia = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === mediaContent.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Effect to handle keyboard navigation (left/right arrows) for media modals
  React.useEffect(() => {
    const handleKeyPress = (event) => {
      if (isVideoModalOpen || isImageModalOpen) {
        if (event.key === "ArrowLeft") {
          handlePreviousMedia();
        } else if (event.key === "ArrowRight") {
          handleNextMedia();
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isVideoModalOpen, isImageModalOpen]);

  // Sort projects by ID in descending order (newest first)
  const sortedProjects = [...projects].sort((a, b) => b.id - a.id);

  // Handler for selecting a project
  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  // Handler to reset view to home/about section
  const resetView = () => {
    setSelectedProject(null);
  };

  // Project-specific media content
  const projectSpecificContent = {
    1: [
      { type: "video", src: vid0101c, span: true },
      { type: "image", src: img0101l, span: false },
      { type: "image", src: img0101r, span: false },
      { type: "image", src: img0102l, span: false },
      { type: "image", src: img0102r, span: false },
      { type: "image", src: img0103l, span: false },
      { type: "image", src: img0103r, span: false },
    ],
    2: [
      { type: "video", src: vid0201c, span: true },
      { type: "image", src: img0201l, span: false },
      { type: "image", src: img0201r, span: false },
      { type: "image", src: img0202l, span: false },
      { type: "image", src: img0202r, span: false },
      { type: "image", src: img0203l, span: false },
      { type: "image", src: img0203r, span: false },
      { type: "image", src: img0204l, span: false },
      { type: "image", src: img0204r, span: false },
      { type: "image", src: img0205l, span: false },
      { type: "image", src: img0205r, span: false },
      { type: "image", src: img0206c, span: false },
    ],
    3: [
      { type: "video", src: vid0301c, span: true },
      { type: "image", src: img0301l, span: false },
      { type: "image", src: img0301r, span: false },
      { type: "video", src: vid0302c, span: true },
      { type: "image", src: img0302l, span: false },
      { type: "image", src: img0302r, span: false },
      { type: "video", src: vid0303c, span: true },
    ],
    4: [
      { type: "video", src: vid0401c, span: true },
      { type: "image", src: img0401l, span: false },
      { type: "image", src: img0401r, span: false },
      { type: "image", src: img0402l, span: false },
      { type: "image", src: img0402r, span: false },
      { type: "image", src: img0403l, span: false },
      { type: "image", src: img0403r, span: false },
      { type: "image", src: img0404l, span: false },
      { type: "image", src: img0404r, span: false },
    ],
    5: [
      { type: "video", src: vid0501c, span: true },
      { type: "image", src: img0501l, span: false },
      { type: "image", src: img0501r, span: false },
      { type: "image", src: img0502l, span: false },
      { type: "image", src: img0502r, span: false },
      { type: "image", src: img0503l, span: false },
      { type: "image", src: img0503r, span: false },
    ],
    6: [
      { type: "video", src: vid0601c, span: true },
      { type: "image", src: img0601l, span: false },
      { type: "image", src: img0601r, span: false },
      { type: "image", src: img0602l, span: false },
      { type: "image", src: img0602r, span: false },
      { type: "image", src: img0603l, span: false },
      { type: "image", src: img0603r, span: false },
    ],
    7: [
      { type: "image", src: img0701l, span: false },
      { type: "image", src: img0701r, span: false },
      { type: "image", src: img0702l, span: false },
      { type: "image", src: img0702r, span: false },
      { type: "image", src: img0703l, span: false },
      { type: "image", src: img0703r, span: false },
      { type: "image", src: img0704l, span: false },
      { type: "image", src: img0704r, span: false },
    ],
    8: [
      { type: "video", src: vid0801c, span: true },
      { type: "image", src: img0801l, span: false },
      { type: "image", src: img0801r, span: false },
      { type: "image", src: img0802l, span: false },
      { type: "image", src: img0802r, span: false },
    ],
    9: [
      { type: "video", src: vid0901c, span: true },
      { type: "image", src: img0901c, span: false },
      { type: "image", src: img0902l, span: false },
      { type: "image", src: img0902r, span: false },
      { type: "image", src: img0903c, span: false },
    ],
    10: [
      { type: "image", src: img1001l, span: false },
      { type: "image", src: img1001r, span: false },
      { type: "image", src: img1002l, span: false },
      { type: "image", src: img1002r, span: false },
      { type: "image", src: img1003l, span: false },
      { type: "image", src: img1003r, span: false },
      { type: "image", src: img1004l, span: false },
      { type: "image", src: img1004r, span: false },
      { type: "image", src: img1005l, span: false },
      { type: "image", src: img1005r, span: false },
    ],
    11: [
      { type: "video", src: vid1101c, span: true },
      { type: "image", src: img1102l, span: false },
      { type: "image", src: img1102r, span: false },
      { type: "image", src: img1103l, span: false },
      { type: "image", src: img1103r, span: false },
      { type: "image", src: img1104l, span: false },
      { type: "image", src: img1104r, span: false },
      { type: "image", src: img1105l, span: false },
      { type: "image", src: img1105r, span: false },
      { type: "image", src: img1106c, span: false },
    ],
    12: [
      { type: "video", src: vid1201c, span: true },
      { type: "image", src: img1201l, span: false },
      { type: "image", src: img1201r, span: false },
      { type: "image", src: img1202l, span: false },
      { type: "image", src: img1202r, span: false },
      { type: "image", src: img1203l, span: false },
      { type: "image", src: img1203r, span: false },
      { type: "image", src: img1204l, span: false },
      { type: "image", src: img1204r, span: false },
      { type: "image", src: img1205l, span: false },
      { type: "image", src: img1205r, span: false },
    ],
  };

  // Determine which media content to display based on selected project
  const mediaContent =
    selectedProject && projectSpecificContent[selectedProject.id]
      ? projectSpecificContent[selectedProject.id]
      : {};

  const [mediaLoadStates, setMediaLoadStates] = useState(
    new Array(mediaContent.length).fill(false)
  );

  const handleMediaLoad = (index) => {
    setMediaLoadStates((prev) => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
  };

  return (
    <>
      {/* Inline styles for custom CSS */}
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
            top: 7vh;
          }

          .vertical-strip {
            position: fixed;
            left: 43.2%;
            top: 0;
            bottom: 0;
            width: 6.5vw;
            height: 100%;
            background-color: #E45310;
            z-index: 0;
            transform: translateX(-50%);
          }

          @keyframes stripColorChange {
            from {
              background-color: #fff;
            }
            to {
              background-color: #E45310;
            }
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
            margin-left: 1vw;
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
            width: 4vw;
            height: 4vw;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: background-color 0.3s ease;
            z-index: 10;
            font-weight: bold;
            font-size: 2.4vw;
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
            font-size: 34px;
          }

          .skeleton {
            background: linear-gradient(
              90deg,
              #fdf3ed 25%,      
              #fde7da 50%,     
              #fdf3ed 75%      
            );
            background-size: 200% 100%;
            animation: shimmer 1.2s ease-in-out infinite;
            border-radius: 0.5rem;
          }

          @keyframes shimmer {
            0% {
              background-position: 200% 0;
            }
            100% {
              background-position: -200% 0;
            }
          }
        `}
      </style>

      {/* Main container */}
      <div className="h-screen overflow-hidden font-sans text-gray-800">
        {/* Header section with animation */}
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          onClick={resetView}
          className="flex justify-between items-start p-6 bg-white border-b-2 border-[#E45310] fixed w-full top-0 z-50 cursor-pointer"
        >
          <div className="pl-7 pt-4">
            <h1 className="text-3xl font-bold text-[#E45310]">
              {Array.from("Mrugakshi Nadkarni").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: index * 0.1,
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </h1>
            <p className="text-2xl font-thin text-[#E45310]">
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
        </motion.header>

        {/* Main content layout */}
        <div className="flex pt-[12vh] h-full bg-[#3F3124]">
          {/* Left section with animation */}
          <motion.section
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-[40%] bg-white p-[2vh] fixed top-[12vh] bottom-0 flex items-center justify-center text-center overflow-hidden hide-scrollbar pt-[6vh]"
          >
            <AnimatePresence initial={false} mode="wait">
              {selectedProject ? (
                <motion.div
                  key="project"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full overflow-y-scroll hide-scrollbar p-4"
                >
                  <div className="mb-6 mt-6 text-left">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={resetView}
                        className="bg-[#E45310] text-white rounded-full p-2 hover:bg-[#e44d00] transition-colors"
                      >
                        <FaChevronLeft size={20} />
                      </button>
                      <h2 className="text-[#E45310] text-2xl font-bold">
                        {selectedProject.title}
                      </h2>
                    </div>
                    <p className="text-[#E45310] text-md mb-4 mt-2">
                      {selectedProject.details}
                    </p>
                    <div className="flex flex-wrap gap-x-10 gap-y-2 text-sm text-gray-700 font-poppins mt-4">
                      {selectedProject.productionHouse && (
                        <div className="min-w-[180px]">
                          <span className="font-semibold">
                            Production House
                          </span>{" "}
                          | {selectedProject.productionHouse}
                        </div>
                      )}
                      {selectedProject.director && (
                        <div className="min-w-[180px]">
                          <span className="font-semibold">Director</span> |{" "}
                          {selectedProject.director}
                        </div>
                      )}
                      {selectedProject.Cinematographer && (
                        <div className="min-w-[180px]">
                          <span className="font-semibold">Cinematographer</span>{" "}
                          | {selectedProject.Cinematographer}
                        </div>
                      )}
                      {selectedProject.designation && (
                        <div className="min-w-[180px]">
                          <span className="font-semibold">Designation</span> |{" "}
                          {selectedProject.designation}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {mediaContent.map((media, index) => (
                      <motion.div
                        key={index}
                        className={`relative w-full ${
                          media.span
                            ? "col-span-2 aspect-video mb-4"
                            : "h-[25vh]"
                        }`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {/* Skeleton Loader */}
                        {!mediaLoadStates[index] && (
                          <div className="absolute inset-0 z-10 w-full h-full rounded-lg skeleton" />
                        )}

                        {media.type === "video" ? (
                          <div className="relative w-full h-full">
                            {/* Skeleton shimmer shown until the video loads */}
                            {!mediaLoadStates[index] && (
                              <div className="absolute inset-0 rounded-lg skeleton z-10" />
                            )}

                            {/* Video element */}
                            <video
                              src={media.src}
                              onLoadedData={() => handleMediaLoad(index)}
                              className={`w-full h-full rounded-lg shadow-lg object-cover transition-opacity duration-300 ${
                                mediaLoadStates[index]
                                  ? "opacity-100"
                                  : "opacity-0"
                              }`}
                            />

                            {/* Play icon overlay */}
                            <div
                              className="absolute inset-0 flex items-center justify-center cursor-pointer z-20"
                              onClick={() => {
                                setSelectedImageIndex(index);
                                setIsVideoModalOpen(true);
                                setIsImageModalOpen(false);
                              }}
                            >
                              <BsPlayCircle className="text-white text-6xl hover:text-orange-500 transition-colors" />
                            </div>
                          </div>
                        ) : (
                          <img
                            src={media.src}
                            alt={`Project media ${index + 1}`}
                            onLoad={() => handleMediaLoad(index)}
                            className={`w-full h-full rounded-lg shadow-lg object-cover cursor-pointer transition-opacity duration-300 ${
                              mediaLoadStates[index]
                                ? "opacity-100"
                                : "opacity-0"
                            }`}
                            onClick={() => {
                              setSelectedImageIndex(index);
                              setIsImageModalOpen(true);
                              setIsVideoModalOpen(false);
                            }}
                          />
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="about"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* About Section  */}
                  <h2 className="mt-[7vh] text-2xl font-bold text-[#E45310] mb-6 font-poppins">
                    Hi! A little about myself,
                  </h2>
                  <p className="text-gray-700 font-medium text-sm leading-relaxed px-10 pt-0 pb-4 font-poppins">
                    (Based in the heart of architectural wonders) Having an
                    extensive knowledge and education in architecture I dedicate
                    my passion to crafting stories through the attention to
                    spatial detail and understanding of the character narrative.
                    From concept to completion, I'd like to say I drive the
                    visual identity of design and space creation. With a
                    combination of problem-solving balance, technical expertise
                    and artistic vision I achieve to bring to the table a unique
                    and captivating visual design stratum.
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
                </motion.div>
              )}
            </AnimatePresence>
          </motion.section>

          {/* Middle section without animation */}
          <section className="relative w-[25%] ml-[40%] overflow-y-scroll hide-scrollbar bg-[#3F3124] py-0 timeline-section">
            <div className="vertical-strip"></div>
            <div className="flex flex-col py-12" style={{ rowGap: "6vw" }}>
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
                    <h3 className="text-xl font-semibold mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm mb-1">{project.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Right section with animation */}
          <motion.section
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-[35%] fixed right-[5vw] top-[0px] bottom-0 text-white px-6 py-0 relative"
          >
            <div className="flex flex-col items-center gap-8">
              <div className="project-timeline-heading text-center">
                Project
                <br />
                Timeline
                <p className="text-sm text-white mt-[1vh] font-normal px-[0.5vw]">
                  Click on any project to get a preview!
                </p>
              </div>
              <img
                src={projectTimelineIcon}
                alt="Project Timeline"
                className="pb-35 ml-75 w-300 h-300 opacity-10"
              />
            </div>
          </motion.section>
        </div>
      </div>

      {/* Video Modal with pop-out animation */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
          >
            <div
              className="absolute inset-0 bg-[#1A0D00] opacity-90"
              onClick={() => setIsVideoModalOpen(false)}
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-[80vw] max-w-4xl z-10"
            >
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
              {mediaContent[selectedImageIndex].type === "video" ? (
                <video
                  src={mediaContent[selectedImageIndex].src}
                  controls
                  autoPlay
                  className="w-full rounded-lg shadow-lg"
                />
              ) : (
                <img
                  src={mediaContent[selectedImageIndex].src}
                  alt={`Selected project media`}
                  className="w-full rounded-lg shadow-lg"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image Modal with pop-out animation */}
      <AnimatePresence>
        {isImageModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
          >
            <div
              className="absolute inset-0 bg-[#1A0D00] opacity-90"
              onClick={() => setIsImageModalOpen(false)}
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-[80vw] max-w-4xl z-10"
            >
              <button
                className="absolute -top-[5vh] right-0 text-white text-2xl hover:text-orange-500 transition-colors"
                onClick={() => setIsImageModalOpen(false)}
              >
                <AiOutlineClose />
              </button>
              <button className="nav-button left" onClick={handlePreviousMedia}>
                <FaChevronLeft />
              </button>
              <button className="nav-button right" onClick={handleNextMedia}>
                <FaChevronRight />
              </button>
              {mediaContent[selectedImageIndex].type === "video" ? (
                <video
                  src={mediaContent[selectedImageIndex].src}
                  controls
                  autoPlay
                  className="w-full rounded-lg shadow-lg"
                />
              ) : (
                <img
                  src={mediaContent[selectedImageIndex].src}
                  alt="Selected project media"
                  className="w-full rounded-lg shadow-lg"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default App;
