import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-primary to-purple-600"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-8 font-montserrat">
            Давайте создадим что-то вместе
          </h2>
          <p className="text-xl text-purple-100 mb-12 max-w-2xl mx-auto">
            Готов обсудить ваш проект и превратить идеи в реальность. Свяжитесь
            со мной любым удобным способом.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover-scale">
              <Icon name="Mail" size={32} className="text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-purple-100">palochkin.ilha@yandex.ru</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover-scale">
              <Icon
                name="Phone"
                size={32}
                className="text-white mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-white mb-2">Телефон</h3>
              <p className="text-purple-100">89684515567</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover-scale">
              <Icon
                name="MessageCircle"
                size={32}
                className="text-white mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-white mb-2">
                Telegram
              </h3>
              <p className="text-purple-100">@Iliha_c</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <button className="bg-white text-primary px-8 py-4 rounded-full hover:bg-gray-100 transition-all hover-scale flex items-center gap-2">
              <Icon name="Send" size={20} />
              Написать сообщение
            </button>

            <a
              href="https://t.me/Iliha_c"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-100 hover:text-white transition-colors underline"
            >
              Telegram: https://t.me/Iliha_c
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
