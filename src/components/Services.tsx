import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Monitor",
      title: "Веб-дизайн",
      description:
        "Создание современных и привлекательных дизайнов сайтов, которые конвертируют посетителей в клиентов",
    },
    {
      icon: "Code",
      title: "Веб-разработка",
      description:
        "Разработка быстрых и адаптивных сайтов на React, TypeScript с современным стеком технологий",
    },
    {
      icon: "Smartphone",
      title: "Мобильная адаптация",
      description:
        "Создание отзывчивого дизайна, который идеально выглядит на всех устройствах и экранах",
    },
    {
      icon: "Zap",
      title: "Оптимизация сайтов",
      description:
        "Повышение скорости загрузки, SEO-оптимизация и улучшение пользовательского опыта",
    },
    {
      icon: "Palette",
      title: "UI/UX дизайн",
      description:
        "Проектирование удобных интерфейсов с фокусом на пользовательский опыт и конверсию",
    },
    {
      icon: "Settings",
      title: "Техподдержка",
      description:
        "Сопровождение и обновление сайтов, исправление ошибок и добавление нового функционала",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 font-montserrat">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-slate-900">
              Мои услуги
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Полный цикл создания веб-сайтов от идеи до запуска
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 bg-slate-900">
                <Icon
                  name={service.icon as any}
                  size={24}
                  className="text-white"
                />
              </div>

              <h3 className="text-xl font-bold mb-4 text-gray-900">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
