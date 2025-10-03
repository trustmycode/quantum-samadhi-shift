import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Sparkles, Crown, Star } from "lucide-react";

const plans = [
  {
    name: "БАЗОВЫЙ",
    price: "29 900",
    currency: "₽",
    icon: Sparkles,
    features: [
      "16 модулей программы",
      "Чат в Skype для вопросов",
      "Дополнительные материалы",
      "Сопровождение после программы",
      "Обучение технике СКС"
    ],
    highlighted: false
  },
  {
    name: "ПРЕМИУМ",
    price: "36 900",
    currency: "₽",
    icon: Crown,
    features: [
      "Все из 'Базового'",
      "1 личная сессия",
      "Обучение технике 'Крылья бабочки'",
      "Обучение технике МПП",
      "Программа по отношениям",
      "Программа по финансам",
      "Вебинар по удалению ложных идей"
    ],
    highlighted: true
  },
  {
    name: "ПРЕМИУМ +",
    price: "99 900",
    currency: "₽",
    icon: Star,
    features: [
      "Все из 'Премиум'",
      "2 дополнительные сессии",
      "Личная сессия с Самартом",
      "Бесплатное участие в ретрите 2024",
      "(без перелета и проживания)"
    ],
    highlighted: false
  }
];

const PricingSection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-quantum bg-clip-text text-transparent">
              Выберите свой путь
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Три варианта участия в программе с разной глубиной погружения
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <Card 
                key={index}
                className={`relative bg-gradient-card border-primary/20 transition-all duration-300 animate-fade-in-up ${
                  plan.highlighted 
                    ? 'md:scale-105 shadow-quantum border-primary/50' 
                    : 'hover:border-primary/40 hover:shadow-elegant'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-accent rounded-full text-sm font-semibold text-accent-foreground">
                    Популярный
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 w-fit">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="pt-4">
                    <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-xl text-muted-foreground ml-2">{plan.currency}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4 pb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </CardContent>

                <CardFooter>
                  <Button 
                    className={`w-full ${
                      plan.highlighted 
                        ? 'bg-gradient-quantum hover:shadow-quantum' 
                        : 'bg-primary/20 hover:bg-primary/30'
                    }`}
                    size="lg"
                  >
                    Выбрать тариф
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
