

import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Projects = () => {
  const researchProjects = [
    {
      title: "VibroView",
      lab: "Wave & Vibrational Engineering Lab | IIT Bombay",
      duration: "July 2023 - Present",
      description: "Implemented Phase Based Motion Amplification Algorithms (Laplacian & Reisz Pyramids) for revealing Micro Vibrations to predict Machine Health & possible damage",
      achievements: [
        "Implemented Phase Based Motion Amplification Algorithms (Laplacian & Reisz Pyramids) for revealing Micro Vibrations in to predict Machine Health & possible damage based on identifying undesirable vibrations in shearing parts, loose joints, ineffective damping systems, misalignment of motor shafts & bearings",
        "Developed an object tracker for ascertaining movement of objects capable of handling variations in scale, pose & non rigid deformations. Resilient to erroneous occlusions by other components & processing artifacts. Capable of tracking object's centroid displacement (50 microns) & frequency decomposition (99% accuracy)",
        "Parallelized the architecture for processing of Laplacian Pyramids on MATLAB & interfaced the calculation of Reisz Pyramids through Numpy & openCV improving speed by 30% for live computation & display",
        "Successfully tested the software at Tata Power's Thermal Power Plant for stability of blast furnaces alongside Matins Healthcare & Eastern Healthcare's manufacturing facilities for alignment of motors",
        "Conducted a comprehensive survey of videographic measurement techniques, validating complex-valued Image Pyramids with 16,500 fps NOVA fast cameras to capture motion with nanometer precision",
        "Enhanced computational efficiency for real-time predictive maintenance by leveraging CUDA parallelization and MATLAB Parallelization, significantly accelerating processing speeds"
      ],
      images: [
        "/lovable-uploads/eb1717cc-5141-4fa9-a42d-90592ae79fe7.png",
        "/lovable-uploads/b98bd090-b42c-40aa-b6ad-8cf95c264042.png",
        "/lovable-uploads/84fa92a7-9ced-4f92-88f6-8a39dbb1d449.png"
      ],
      githubUrl: "https://github.com/MaximusStupidus/VibroView"
    },
    {
      title: "3D Glass Marking with Femtosecond Lasers",
      lab: "LAMP Lab | IIT Bombay",
      duration: "July 2024 - December 2024",
      description: "Deployed Layer Processing framework for converting 3D models into 2D layers, implemented Python-based modeling software for glass marking",
      achievements: [
        "Deployed a Layer Processing framework for converting 3D model (STL files) into 2D layers (SVG), applied Gaussian blurring to downsize images, performed Grayscaling & Segmentation into 2 intensity levels",
        "Implemented a Python based Modelling software which writes G-Codes to mark glass specimens with 3D structures using Femtosecond Laser (1030 nm, 200 KHz) & delay stages capable of unidirectional movement",
        "Measured voxel dimensions for various laser-printed shapes and optimized shade mapping by adjusting speed, laser power, and scan count across 15+ parameter combinations to enhance control over glass shading",
        "Implemented a DFS Path Planning Scheme to enhance laser efficiency by minimizing redundant scans, ensuring coverage of only traversable areas, and excluding white regions for precise multi-layer engraving",
        "Scaled down the results of my research to nanometer level for creation of nano structure on plastic based specimens using Ultrafast Lasers for potential application in Aesthetics and Design"
      ],
      images: [
        "/lovable-uploads/415c3308-4fad-4665-828a-a3c9d61cf53b.png",
        "/lovable-uploads/62500dba-e3e0-434c-98bd-a19ba9d5364f.png",
        "/lovable-uploads/d4e8eff7-09c9-4d0c-939f-53214abf6ffe.png",
        "/lovable-uploads/ea58c070-8fdf-4fe7-86e7-8395937b3e52.png"
      ],
      githubUrl: "https://github.com/MaximusStupidus/FemtosecondLaserMarking"
    },
    {
      title: "Femto-second Pulse Measurement",
      lab: "Vibrational Spectroscopy Lab | IIT Bombay",
      duration: "July 2022 - August 2024",
      description: "Built a femtosecond pulse Auto-Correlator with micrometer resolution, reducing cost by minimizing components",
      achievements: [
        "Underwent 6 months of training to handle sensitive optical equipment (Silver enhanced mirrors, BBO crystals, BG-40 Filters) to assemble setup for Temporal Profile measurement of a Femtosecond Pulse",
        "Programmed & deployed software for integration of Delay Stage (1 micron resolution) & Photodiode for measurement & subsequent conversion to Frequency Resolved Optical Gating (FROG) using CCD array",
        "Achieved a significant cost reduction compared to existing Auto-Correlator models by reducing the number of mirrors used | Validated by India's foremost laser lab - RRCAT | Raised $7100 in grants from SINE, IITB",
        "Presented research at IIT Bombay's Research Conclave event Rescon Achaar 2023 — Won a cash prize of $500"
      ],
      images: [
        "/lovable-uploads/a175dda4-535d-468b-969a-eb74f189e433.png",
        "/lovable-uploads/dcf36cd2-3951-44c5-879b-29226e69d8ea.png",
        "/lovable-uploads/efc62955-8069-4b15-acb6-bcce98f670a8.png"
      ],
      githubUrl: "https://github.com/MaximusStupidus/VibSpecLab"
    },
    {
      title: "Controls Subsystem Engineer, Team AeRoVe",
      lab: "IIT Bombay (Team UMIC – UAV Control)",
      duration: "January 2022 - January 2024",
      description: "Developed & tested control algorithms on IRIS Drone in Gazebo, integrating MAVProxy Protocol for real-time simulation",
      achievements: [
        "Developed & tested control algorithms on the IRIS Drone in Gazebo, integrating the MAVProxy Protocol (MAVROS) for real-time simulation, enabling noiseless communication between ground control & UAV",
        "Designed and implemented a Robust Fixed-Time Sliding Mode Control for Quadrotor UAV for accurate trajectory tracking & enhanced stability during flight testing, based on Lyapunov Criterion",
        "Optimized agility and tracking by developing time-optimal Min-Snap Trajectories using OSQP's augmented Lagrangian algorithm, ensuring smooth & stable paths; successfully tested for X & + configurations"
      ],
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&h=400&fit=crop",
      githubUrl: "https://github.com/MaximusStupidus/SMC_Aerove"
    }
  ];

  const academicProjects = [
    {
      title: "Truck Scheduling Optimization",
      lab: "IE501 Project | IIT Bombay",
      duration: "July 2024 - December 2024",
      description: "Developed Mixed-Integer Linear Programming (MILP) model in Gurobi to optimize truck allocation and scheduling",
      achievements: [
        "Developed a Mixed-Integer Linear Programming (MILP) model in Gurobi to optimize truck allocation and scheduling, minimizing operational costs while considering fleet age, route demand, and delivery constraints",
        "Implemented a dynamic route optimization framework, incorporating real-time fuel consumption, traffic delays, and weather conditions, ensuring adaptive cost minimization and efficient truck assignments",
        "Benchmarked the model against SOTA research, integrating greedy algorithms and genetic optimization for improved efficiency, reducing solution time from 7 minutes (MILP) to 0.5 minutes (Genetic Algorithm).",
        "Validated the scheduling framework by analyzing fleet-wide performance across 30-day simulations, ensuring adherence to revenue-maximization objectives while reducing route assignment inefficiencies by 20%."
      ],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
      githubUrl: null
    },
    {
      title: "Analysis of Non-Circular Members under Torsional Loading",
      lab: "ME202 Project | IIT Bombay", 
      duration: "July 2024 - December 2024",
      description: "Developed FEM-based computational framework to analyze torsional stresses and deformations in non-circular cross-sections",
      achievements: [
        "Developed an FEM-based computational framework to analyze torsional stresses and deformations in non-circular cross-sections, validating results against St. Venant's Torsion Theory and numerical methods",
        "Derived Prandtl Stress Functions and solved Poisson's equation using Finite Difference Method (FDM) to model shear stress distribution across circular, square, elliptical, and airfoil geometries",
        "Implemented MATLAB-based numerical solvers to iteratively compute torsional deformations and compared analytical solutions with FEM simulations in ANSYS for real-world validation",
        "Achieved 68% correlation between FEM and analytical models for airfoils, revealing critical deviations in warping behavior, with potential applications in aircraft wing design and aeroelastic analysis"
      ],
      images: [
        "/lovable-uploads/a851aa0c-2108-4e50-8d35-b5c2a1ecd213.png",
        "/lovable-uploads/6d66ec76-e153-4372-9bdd-7c4d1c6fc4e0.png",
        "/lovable-uploads/4f73b768-8963-42be-993e-e2ef8c9e6a4a.png"
      ],
      githubUrl: "https://drive.google.com/file/d/1-iWimmO2z-8ijT9plUJGHOZCZEKnLULx/view"
    }
  ];

  const competitions = [
    {
      category: "Business Competitions",
      achievements: [
        "Nationbuilding Case (2025): Finalist (35000+) for solutions on India's Olympic Policy",
        "FAME 3.0 (2024): Won $1,200 for Road Safety Business case organized by IDFC FirstBank",
        "Indian Case Challenge (2024): National Winner, organised by Business Club, IIT Kharagpur"
      ]
    },
    {
      category: "Robotics and Technology",
      achievements: [
        "UAS Challenge (2023): Won 3 awards for drone design, scrutineering & promise in the UK",
        "IARC Mission 9 (2022): World Champions of the Simulation Round for drone design",
        "Institute Technical Summer Project (2022): Special Mention for Auto-Agricultural Robot"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-light mb-6">Projects</h1>
          <p className="text-xl text-gray-600 font-light">
            Research, academic projects, and innovation initiatives
          </p>
        </div>

        {/* Research Projects */}
        <section className="mb-20">
          <h2 className="text-3xl font-light mb-12">Research Experience</h2>
          <div className="grid gap-12">
            {researchProjects.map((project, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
                <div className={index % 2 === 0 ? 'order-1' : 'order-2'}>
                  {project.images ? (
                    <Carousel className="w-full max-w-lg mx-auto">
                      <CarouselContent>
                        {project.images.map((img, imgIndex) => (
                          <CarouselItem key={imgIndex}>
                            <div className="p-1">
                              <img
                                src={img}
                                alt={`${project.title} - Image ${imgIndex + 1}`}
                                className="w-full h-auto object-contain rounded-lg shadow-lg"
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious />
                      <CarouselNext />
                    </Carousel>
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                  )}
                </div>
                <div className={index % 2 === 0 ? 'order-2' : 'order-1'}>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-medium">{project.title}</h3>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-black transition-colors"
                      >
                        <Github size={24} />
                      </a>
                    )}
                  </div>
                  <p className="text-gray-600 mb-2">{project.lab}</p>
                  <p className="text-gray-500 mb-4 font-medium">{project.duration}</p>
                  <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-gray-600 flex items-start">
                        <span className="text-black mr-3 mt-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Academic Projects */}
        <section className="mb-20">
          <h2 className="text-3xl font-light mb-12">Academic Projects</h2>
          <div className="grid gap-12">
            {academicProjects.map((project, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
                <div className={index % 2 === 0 ? 'order-1' : 'order-2'}>
                  {project.images ? (
                    <Carousel className="w-full max-w-lg mx-auto">
                      <CarouselContent>
                        {project.images.map((img, imgIndex) => (
                          <CarouselItem key={imgIndex}>
                            <div className="p-1">
                              <img
                                src={img}
                                alt={`${project.title} - Image ${imgIndex + 1}`}
                                className="w-full h-auto object-contain rounded-lg shadow-lg"
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious />
                      <CarouselNext />
                    </Carousel>
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                  )}
                </div>
                <div className={index % 2 === 0 ? 'order-2' : 'order-1'}>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-medium">{project.title}</h3>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-black transition-colors"
                      >
                        {project.githubUrl.includes('drive.google.com') ? (
                          <ExternalLink size={24} />
                        ) : (
                          <Github size={24} />
                        )}
                      </a>
                    )}
                  </div>
                  <p className="text-gray-600 mb-2">{project.lab}</p>
                  <p className="text-gray-500 mb-4 font-medium">{project.duration}</p>
                  <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-gray-600 flex items-start">
                        <span className="text-black mr-3 mt-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Competitions */}
        <section>
          <h2 className="text-3xl font-light mb-12">Extracurriculars & Achievements</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {competitions.map((comp, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-medium mb-6">{comp.category}</h3>
                <ul className="space-y-4">
                  {comp.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-gray-600 flex items-start">
                      <span className="text-black mr-3 mt-1">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
