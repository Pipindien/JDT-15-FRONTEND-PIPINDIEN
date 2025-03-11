import React from "react";
import potrait1 from "../../assets/potrait1.jpg";
import Card from "../../component/card/card";

const projects = [
  {
    imgSrc: potrait1,
    title: "Sipodang",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
  },
  {
    imgSrc: potrait1,
    title: "PerpusDigital",
    description:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    imgSrc: potrait1,
    title: "Layanan Posyandu",
    description:
      "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
  },
];

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <section className="flex flex-row justify-center px-6 md:px-16 py-10 gap-14">
        <div className="flex flex-row justify-center px-6 md:px-16 py-10 gap-1">
          <div className="flex flex-col justify-center">
            <h1 className="font-semibold text-xl md:text-5xl uppercase">
              Welcome To <br />
              My Portofolio
            </h1>
            <p className="text-xs md:text-base text-justify pr-5 md:pr-25">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
          </div>

          <img
            src={potrait1}
            alt="potrait"
            className="w-[170px] h-[250px] md:w-[350px] md:h-[450px] object-cover rounded-tl-[50px] rounded-br-[50px]"
          />
        </div>
      </section>

      <section className="flex flex-col">
        <h1 className="font-semibold text-xl md:text-5xl uppercase text-center">
          My Projects
        </h1>

        <div className="grid grid-cols-3 gap-5 p-6 md:p-16 ">
          {projects.map((project, index) => (
            <Card
              key={index}
              imgSrc={project.imgSrc}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
