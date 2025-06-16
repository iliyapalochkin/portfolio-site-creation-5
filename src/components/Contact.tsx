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
              <p className="text-purple-100">hello@webdesign.ru</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover-scale">
              <Icon
                name="Phone"
                size={32}
                className="text-white mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-white mb-2">Телефон</h3>
              <p className="text-purple-100">+7 (999) 123-45-67</p>
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
              <p className="text-purple-100">@webdesigner</p>
            </div>
          </div>

          <button className="bg-white text-primary px-8 py-4 rounded-full hover:bg-gray-100 transition-all hover-scale flex items-center gap-2 mx-auto">
            <Icon name="Send" size={20} />
            Написать сообщение
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
