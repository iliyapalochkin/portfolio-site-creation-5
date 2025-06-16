import Icon from "@/components/ui/icon";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Сайт артиста",
      description:
        "Персональный сайт музыканта с интерактивной галереей и аудиоплеером",
      image:
        "https://cdn.poehali.dev/files/4f31070e-01a1-48c4-91fa-bb4372daa147.jpg",
      technologies: ["React", "TypeScript", "Framer Motion"],
      link: "https://iliapalochkin.ru/",
    },
    {
      id: 2,
      title: "Рыболовная база КЕНГУРИБА",
      description: "Сайт рыболовной базы с бронированием и галереей природы",
      image:
        "https://cdn.poehali.dev/files/9ca7f042-f1dd-4f09-8763-47a1d00b2079.jpg",
      technologies: ["React", "Tailwind CSS", "React Router"],
      link: "https://kenguriba.ru/",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16 font-montserrat">
          Портфолио
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden block"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/0 hover:bg-primary/20 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                  <Icon name="ExternalLink" size={32} className="text-white" />
                </div>
              </a>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 font-montserrat">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors story-link"
                >
                  <span>Подробнее</span>
                  <Icon name="ArrowRight" size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
