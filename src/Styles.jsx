import React from "react";

const Styles = () => (
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
        top: 4vh;
        height: calc(100vh - 12vh);
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

      @media (max-width: 768px) {
        body, .h-screen, .font-sans, .text-gray-800, .bg-[#3F3124] {
          background: #fff !important;
          color: #222 !important;
          min-height: 100vh;
          height: auto !important;
          font-size: 16px;
        }

        header, .fixed.w-full.top-0.z-50 {
          position: static !important;
          flex-direction: column !important;
          align-items: flex-start !important;
          padding: 18px 16px 10px 16px !important;
          border-bottom: 1.5px solid #E45310 !important;
          background: #fff !important;
          z-index: 100 !important;
        }
        header h1, .text-3xl {
          font-size: 1.25rem !important;
          margin-bottom: 0.1rem;
          letter-spacing: 0.01em;
          line-height: 1.1;
        }
        header p, .text-2xl {
          font-size: 0.95rem !important;
          margin-bottom: 0.5rem;
          font-weight: 400;
          letter-spacing: 0.01em;
        }
        .flex.flex-col.items-center.gap-4.text-orange-500.text-xl.mt-1.pr-10 {
          flex-direction: row !important;
          gap: 18px !important;
          margin: 0 !important;
          padding: 0 !important;
          align-items: center !important;
          position: absolute;
          right: 18px;
          top: 22px;
        }
        .flex.flex-col.items-center.gap-4.text-orange-500.text-xl.mt-1.pr-10 a svg {
          font-size: 1rem !important;
        }

        .w-[40%].bg-white.p-[2vh].fixed {
          position: static !important;
          width: 100% !important;
          padding: 24px 10px 10px 10px !important;
          background: #fff !important;
          box-shadow: none !important;
          min-height: unset !important;
          display: block !important;
          border-radius: 0 !important;
          margin: 0 !important;
        }
        .mt-[7vh], .mb-6, .font-poppins {
          margin-top: 0 !important;
          margin-bottom: 1.1rem !important;
          font-size: 1.08rem !important;
          text-align: center !important;
          font-weight: 600 !important;
        }
        .text-gray-700.font-medium.text-l.leading-relaxed.px-10.pt-0.pb-4.font-poppins {
          padding: 0 0.5rem !important;
          font-size: 0.98rem !important;
          text-align: center !important;
          line-height: 1.5 !important;
          color: #444 !important;
        }
        .contact-info.ml-8 {
          align-items: flex-start !important;
          text-align: left !important;
          color: #444444 !important;
          margin: 1.5rem 0 0 8px !important;
          gap: 12px !important;
          display: flex !important;
          flex-direction: column !important;
          margin-left: 8px !important;
        }
        .contact-item {
          color: #444444 !important;
          font-size: 1.05rem !important;
          justify-content: flex-start !important;
          gap: 10px !important;
          font-weight: 500;
          text-align: left !important;
        }
        .contact-item svg {
          font-size: 1.2rem !important;
          color: #444444 !important;
        }

        .w-[25%].ml-[40%].overflow-y-scroll {
          width: 100% !important;
          margin-left: 0 !important;
          position: static !important;
          background: #3F3124 !important;
          padding: 0 !important;
          box-shadow: none !important;
          min-height: 400px !important;
          height: auto !important;
          overflow-y: auto !important;
          z-index: 1 !important;
        }
        .project-timeline-heading, .w-[35%].fixed.right-[5vw] {
          display: none !important;
        }
        .flex.flex-col.py-12 {
          row-gap: 6vw !important;
          padding: 12px 0 !important;
          margin: 0 !important;
        }
        .project-item {
          flex-direction: row !important;
          align-items: flex-start !important;
          padding: 12px 0 !important;
          margin: 0 12px !important;
          background: transparent !important;
          border-radius: 0 !important;
        }
        .project-number {
          color: #FF554B !important;
          font-size: 2rem !important;
          font-weight: 700 !important;
          text-align: center !important;
          width: 4rem !important;
          height: auto !important;
          border-radius: 0 !important;
          margin-right: 8px !important;
          display: block !important;
          box-shadow: none !important;
          position: relative;
          z-index: 2;
        }
        .project-number.selected {
          color: white !important;
        }
        .project-details {
          padding-left: 0 !important;
          color: #F5F5F5 !important;
          font-size: 1.01rem !important;
          font-weight: 500 !important;
          position: relative;
          z-index: 2;
        }
        .project-details.selected {
          color: white !important;
        }
        .project-details h3 {
          font-size: 1.13rem !important;
          margin-bottom: 0.18rem !important;
          font-weight: 600 !important;
        }
        .project-details p {
          font-size: 0.97rem !important;
          margin-bottom: 0 !important;
          color: #ccc !important;
        }
        .project-details img {
          width: 2.5rem !important;
          height: 1.5rem !important;
          margin-bottom: 0.2rem !important;
          object-fit: contain !important;
        }

        .w-full.h-full.overflow-y-scroll.hide-scrollbar.p-4 {
          position: static !important;
          width: 100% !important;
          height: auto !important;
          max-height: 500px !important;
          overflow-y: auto !important;
          background: #fff !important;
          z-index: 200 !important;
          padding: 16px 6px 24px 6px !important;
          border-radius: 0 !important;
          box-shadow: none !important;
        }
        .mb-6.mt-6.text-left {
          margin: 0 0 1.1rem 0 !important;
          text-align: left !important;
        }
        .flex.items-center.gap-4 {
          gap: 10px !important;
        }
        .bg-[#E45310].text-white.rounded-full.p-2 {
          width: 36px !important;
          height: 36px !important;
          font-size: 1.2rem !important;
          padding: 0 !important;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .text-[#E45310].text-2xl.font-bold {
          font-size: 1.15rem !important;
        }
        .grid.grid-cols-2.gap-4 {
          grid-template-columns: 1fr !important;
          gap: 10px !important;
        }
        .col-span-2.aspect-video.mb-4, .h-[25vh] {
          height: 180px !important;
          min-height: 120px !important;
          max-height: 220px !important;
          width: 100% !important;
          margin-bottom: 10px !important;
        }
        .w-full.h-full.rounded-lg.shadow-lg.object-cover {
          border-radius: 0.7rem !important;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04) !important;
        }

        .fixed.inset-0.z-50.flex.items-center.justify-center {
          align-items: flex-end !important;
          justify-content: center !important;
          padding: 0 !important;
          z-index: 300 !important;
        }
        .relative.w-[80vw].max-w-4xl.z-10 {
          width: 100vw !important;
          max-width: 100vw !important;
          border-radius: 0 !important;
          margin: 0 !important;
          background: #fff !important;
          box-shadow: none !important;
        }
        .nav-button {
          width: 40px !important;
          height: 40px !important;
          font-size: 1.2rem !important;
          top: 50% !important;
          left: 10px !important;
          right: 10px !important;
          background: #E45310 !important;
          color: #fff !important;
          border-radius: 50% !important;
          z-index: 10 !important;
        }
        .absolute.-top-[5vh].right-0.text-white.text-2xl {
          top: 10px !important;
          right: 10px !important;
          font-size: 1.5rem !important;
          color: #E45310 !important;
          background: #fff !important;
          border-radius: 50% !important;
          width: 36px !important;
          height: 36px !important;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 20 !important;
        }

        .about-row {
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          width: 100% !important;
          background: #fff !important;
          padding: 24px 10px 10px 10px !important;
          z-index: 2;
          position: relative;
          min-height: 300px !important;
        }
        .about-text {
          width: 100%;
          text-align: center;
        }
        .about-text h2 {
          font-size: 1.3rem !important;
          margin-top: 12px !important;
          margin-bottom: 0.5rem !important;
          padding: 0 !important;
          font-weight: bold !important;
          text-align: center !important;
        }
        .contact-info.ml-8 {
          align-items: center !important;
          margin: 1.5rem 0 0 0 !important;
        }
        .timeline-area {
          display: flex !important;
          flex-direction: column !important;
          width: 100% !important;
          align-items: stretch !important;
          margin: 0 !important;
          padding: 0 !important;
          background: #3F3124 !important;
          height: 400px !important;
          border-radius: 0 0 18px 18px;
          position: relative;
          z-index: 1;
        }
        .timeline-content {
          background: #3F3124 !important;
          color: #F5F5F5 !important;
          flex: 1 1 0%;
          padding: 18px 12px 24px 12px !important;
          display: flex;
          flex-direction: column;
          height: 400px !important;
          border-radius: 0 0 18px 0;
          position: relative;
        }
        .project-timeline-heading-mobile {
          color: #E45310 !important;
          font-size: 1.2rem !important;
          font-weight: 800 !important;
          margin-bottom: 18px !important;
          text-align: left !important;
          display: block !important;
          padding-left: 2px;
          padding-top: 2px;
          position: relative;
          z-index: 2;
        }
        .project-timeline-list {
          overflow-y: auto !important;
          max-height: 300px !important;
          padding-right: 2px;
          display: flex;
          flex-direction: column;
          gap: 0;
          position: relative;
          z-index: 2;
        }
      }
    `}
  </style>
);

export default Styles;
