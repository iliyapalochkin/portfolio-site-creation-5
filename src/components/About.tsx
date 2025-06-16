import Icon from "@/components/ui/icon";

const About = () => {
  const skills = [
    { name: "React", level: 95, icon: "Code" },
    { name: "TypeScript", level: 90, icon: "FileCode" },
    { name: "UI/UX Design", level: 85, icon: "Palette" },
    { name: "Tailwind CSS", level: 92, icon: "Brush" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 font-montserrat">
            Обо мне
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="bg-gradient-to-br from-primary/10 to-purple-100 rounded-2xl p-8 hover-scale">
                <img
                  src="https://cdn.poehali.dev/files/83b2aa33-adac-4336-9cb0-4ec7c0991b78.jpg"
                  alt="Веб-дизайнер"
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Я - Илья Палочкин, и я создаю современные и функциональные
                сайты.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Каждый проект для меня — это возможность создать что-то
                особенное, что будет работать на цели бизнеса и радовать
                пользователей.
              </p>

              <div className="space-y-4 mt-8">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Icon
                          name={skill.icon as any}
                          size={20}
                          className="text-primary"
                        />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-primary rounded-full h-2 transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
