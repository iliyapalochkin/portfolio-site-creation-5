import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">ПалочкинДизайн</div>

          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-gray-700 hover:text-primary transition-colors story-link"
            >
              Главная
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-primary transition-colors story-link"
            >
              Обо мне
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-gray-700 hover:text-primary transition-colors story-link"
            >
              Кейсы
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-primary transition-colors story-link"
            >
              Контакты
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </nav>

        {/* Мобильное меню */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg rounded-lg mt-2 p-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => {
                  scrollToSection("hero");
                  setIsMobileMenuOpen(false);
                }}
                className="text-gray-700 hover:text-primary transition-colors text-left"
              >
                Главная
              </button>
              <button
                onClick={() => {
                  scrollToSection("about");
                  setIsMobileMenuOpen(false);
                }}
                className="text-gray-700 hover:text-primary transition-colors text-left"
              >
                Обо мне
              </button>
              <button
                onClick={() => {
                  scrollToSection("portfolio");
                  setIsMobileMenuOpen(false);
                }}
                className="text-gray-700 hover:text-primary transition-colors text-left"
              >
                Кейсы
              </button>
              <button
                onClick={() => {
                  scrollToSection("contact");
                  setIsMobileMenuOpen(false);
                }}
                className="text-gray-700 hover:text-primary transition-colors text-left"
              >
                Контакты
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
