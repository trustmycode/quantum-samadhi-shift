import { Card, CardContent } from "@/components/ui/card";
import { Video, MessageCircle, Calendar, Smile, Zap, Heart, Brain, FileText } from "lucide-react";

const features = [
  {
    icon: Video,
    title: "16 модулей программы",
    description: "От 15 минут до 2,5 часов практик"
  },
  {
    icon: MessageCircle,
    title: "Чат для вопросов",
    description: "Самарт отвечает голосом или текстом"
  },
  {
    icon: Calendar,
    title: "Прямые эфиры",
    description: "Раз в неделю по выходным с записями"
  },
  {
    icon: Smile,
    title: "Легкая подача",
    description: "Методы работают даже с детьми"
  },
  {
    icon: Zap,
    title: "Быстрый путь",
    description: "Духовные лайфхаки к самому себе"
  },
  {
    icon: Heart,
    title: "Любовь к каждому",
    description: "Внимательное отношение к участникам"
  },
  {
    icon: Brain,
    title: "Без подготовки",
    description: "Практики не требуют опыта"
  },
  {
    icon: FileText,
    title: "Доп. материалы",
    description: "Техники СКС, МПП, 'Крылья бабочки'"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Что вас ждет
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Комплексная поддержка на протяжении всего пути трансформации
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant group animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="mx-auto w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
