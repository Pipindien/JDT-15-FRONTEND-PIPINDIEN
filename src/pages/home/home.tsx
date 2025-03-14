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
      <section className="flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-10 gap-10 md:gap-14">
        <div className="flex flex-col justify-center text-center md:text-left">
          <h1 className="font-semibold text-2xl md:text-5xl uppercase">
            Welcome To <br /> My Portfolio
          </h1>
          <p className="text-sm md:text-base text-justify mt-4 max-w-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>

        <img
          src={potrait1}
          alt="portrait"
          className="w-[170px] h-[250px] md:w-[350px] md:h-[450px] object-cover rounded-tl-[50px] rounded-br-[50px]"
        />
      </section>

      <section className="flex flex-col items-center px-6 md:px-16 py-10">
        <h1 className="font-semibold text-2xl md:text-5xl uppercase text-center mb-8">
          My Projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
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
