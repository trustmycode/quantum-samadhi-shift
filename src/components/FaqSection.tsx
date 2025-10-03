import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Для кого эта программа?",
    answer: "Для тех, кто стремится к покою, радости и любви, но сталкивается с трудностями: чувствует стресс и неприятные эмоции, хочет глубже познать себя, залипает в навязчивых мыслях, ищет духовный опыт."
  },
  {
    question: "Это духовная программа?",
    answer: "Это программа для обычных людей. Здесь собраны методы для работы с мышлением, которые подходят современному человеку, поэтому в программе нет ритуалов, пения мантр и монашеских практик."
  },
  {
    question: "Кому программа вряд ли подойдет?",
    answer: "Тем, кто коллекционирует духовные знания или живет в мире эзотерики. Программа показывает практические шаги выхода из негатива, а не абстрактные идеи и теории."
  },
  {
    question: "Что такое сопровождение после окончания программы?",
    answer: "Это поддержка участников даже после завершения основных модулей - доступ к чату, дополнительным материалам и возможность задавать вопросы Самарту."
  },
  {
    question: "Можно ли смотреть с мобильных устройств?",
    answer: "Просмотр модулей программы возможен только с ПК или ноутбука. С мобильных устройств программа не работает. Участие в прямых эфирах с Самартом по субботам возможно с любого устройства."
  },
  {
    question: "Что я смогу благодаря методам программы?",
    answer: "Избавиться от неприятных эмоций, понять как возникают желания, перестать зависеть от мнения окружающих, успокоить ум, ощущать покой и радость как фон жизни, понять чем вы являетесь на самом деле."
  }
];

const FaqSection = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-quantum bg-clip-text text-transparent">
              Часто задаваемые вопросы
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Ответы на важные вопросы о программе
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-gradient-card border border-primary/20 rounded-lg px-6 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <AccordionTrigger className="text-lg font-semibold hover:text-primary transition-colors text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
