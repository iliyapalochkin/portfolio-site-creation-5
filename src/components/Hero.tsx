import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-50 to-white"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div
          className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"
          style={{
            left: `${mousePosition.x * 0.5}%`,
            top: `${mousePosition.y * 0.5}%`,
            transform: "translate(-50%, -50%)",
          }}
        />
        <div
          className="absolute w-64 h-64 bg-purple-300/20 rounded-full blur-2xl animate-pulse"
          style={{
            left: `${100 - mousePosition.x * 0.3}%`,
            top: `${100 - mousePosition.y * 0.3}%`,
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-6 font-montserrat">
            Веб-дизайнер
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Создаю современные и функциональные веб-сайты, которые работают на
            результат
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => {
                const element = document.getElementById("portfolio");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-primary text-white px-8 py-4 rounded-full hover:bg-primary/90 transition-all hover-scale flex items-center gap-2"
            >
              <Icon name="Eye" size={20} />
              Посмотреть работы
            </button>
            <a
              href="https://t.me/Iliha_c"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-primary text-primary px-8 py-4 rounded-full hover:bg-primary hover:text-white transition-all hover-scale flex items-center gap-2"
            >
              <Icon name="MessageCircle" size={20} />
              Обсудить проект
            </a>
          </div>

          {/* Социальные иконки убраны */}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;
