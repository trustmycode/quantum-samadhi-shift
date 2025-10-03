import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const modules = [
  {
    title: "Как формируются внутренние установки",
    description: "Единственный источник проблем в настоящем и будущем. Как сильные впечатления из детства запускают повторяющиеся сценарии во взрослой жизни",
    module: 1
  },
  {
    title: "Удаление негатива из бессознательного",
    description: "Как вспоминать и стирать первые эпизоды детской эмоциональной боли, которые влияют на восприятие жизни, но чаще всего не осознаются",
    module: 2
  },
  {
    title: "Практика 'Жизнь как сон'",
    description: "Представьте, что Вам все снится: мир, события, ваши мысли и вы сами. Вы почувствуете, как снижается значимость происходящего и появляется больше внутреннего покоя и созерцания",
    module: 3
  },
  {
    title: "Стирание кармических следов - СКС",
    description: "Пошаговый метод удаления психических впечатлений, которые запускают механизм кармы. Бонус: выход в состояние 'здесь и сейчас'",
    module: 4
  },
  {
    title: "Двойственность восприятия",
    description: "Как работает майя - иллюзия разделяющего ума. Почему все вещи существуют одновременно со своим отсутствием и как это осознать",
    module: 5
  },
  {
    title: "Принятие Высшей Воли: метод 'Да - всему'",
    description: "Как принять даже то, что не нравится, и обрести покой ума. Что такое 'я' или 'эго'. Почему возникает ощущение 'делателя' и желание что-то менять",
    module: 6
  },
  {
    title: "Практика осознавания пустоты",
    description: "Вы направите внимание на разные аспекты восприятия и переживете опыт осознавания пустоты, из которой состоит вся Вселенная",
    module: 7
  },
  {
    title: "Упражнение 'Паттерн в пустоте'",
    description: "Вы увидите, что любые мысли и идеи - это проекции в пустоте. Бежать от них или хотеть достичь - то же самое, что воевать с ветряными мельницами",
    module: 8
  },
  {
    title: "Практика осознавания осознавания",
    description: "Из осознавания пустоты вы направите внимание на фон, на котором все происходит. И затем - на то, чем являетесь на самом деле",
    module: 9
  },
  {
    title: "Двунаправленное внимание",
    description: "Как остановить ум. Как возникают страдания, мысли и эмоции. Как одновременно воспринимать себя телом и осознаванием",
    module: 10
  },
  {
    title: "Как распознать иллюзию 'себя'",
    description: "Люди путают себя с вымышленными персонажами, которые хотят чего-то достичь. Но желания персонажа - просто компенсация боли. Бонус: быстрый переход из ума в сердце",
    module: 11
  },
  {
    title: "Нюансы осознавания осознавания",
    description: "Быстрое проживание желаний в полной удовлетворенности. Когда мысли и эмоции теряют всякий смысл? Как осознать единство жизни",
    module: 12
  },
  {
    title: "Принятие происходящего",
    description: "Триллионы факторов влияют на то, что происходит. В жизни нет ошибок - есть то, что есть. Все остальное - просто идеи и мысли, как должно или не должно быть",
    module: 13
  },
  {
    title: "Практика самоисследования",
    description: "Как появляется 'чувство себя'. Кто является 'автором' мыслей и поступков. О ком говорят, произнося 'я', 'мне', 'меня', 'моё'",
    module: 14
  },
  {
    title: "Исследование эго-паттерна",
    description: "Четыре составляющих эго. Как чувство себя отождествляется с ложными идеями о себе, которые вызывают эмоции и страдания",
    module: 15
  },
  {
    title: "Естественное 'возвращение' к себе",
    description: "Вы ищете не счастье, а самого себя. Но вы никогда не терялись, а просто перестали себя осознавать. Как осознавать себя, чувствовать радость и наслаждаться жизнью",
    module: 16
  }
];

const ProgramModules = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-quantum bg-clip-text text-transparent">
              Программа трансформации
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            16 модулей глубоких практик от базовых техник до продвинутых методов осознавания
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <Card 
              key={index}
              className="group bg-gradient-card border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-quantum animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardHeader>
                <Badge className="w-fit mb-2 bg-primary/20 text-primary border-primary/30">
                  Модуль {module.module}
                </Badge>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {module.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {module.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramModules;
