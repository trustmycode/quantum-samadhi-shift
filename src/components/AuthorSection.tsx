import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const AuthorSection = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm">
              <Quote className="w-4 h-4 text-accent" />
              <span className="text-sm text-foreground/80">Автор программы</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Самарт Саммасати
              </span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Двадцать лет назад я занимался бизнесом, общался с влиятельными людьми и мечтал о яхте, 
                как все в моем кругу. Одна семья, вторая, серьезные капиталы, спорткары, глянцевая жизнь — 
                у меня были все атрибуты успеха. Кроме счастья.
              </p>
              <p>
                Внутри я страдал. И мой успешный образ был просто компенсацией детской боли, как у многих 
                богатых людей. Но увидел я это уже потом. А тогда именно с внутренней боли и начался поиск 
                долгожданного счастья.
              </p>
              <p>
                В течение 20 лет я ездил на тренинги самых популярных западных спикеров. Проходил лучшие 
                психологические программы, которые не решали моих проблем. Получал инициации в духовные 
                традиции Востока. Объездил всю Индию, и в одном из ашрамов мой поиск, наконец, завершился.
              </p>
            </div>
          </div>

          <div className="space-y-6 animate-slide-in-right">
            <Card className="bg-gradient-card border-primary/20 shadow-elegant">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-start gap-4">
                  <Quote className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                  <p className="text-foreground/90 italic leading-relaxed">
                    Высшая йога — это не асаны и фитнес, а методы успокоения ума и практики изменения 
                    жизни к лучшему. Сокровенные знания йоги веками передаются от Мастера к ученику.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-primary/20 shadow-elegant">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-primary">Опыт и квалификация</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>20-летний опыт изучения психологии, квантовой физики и духовных традиций</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>Мастер раджа-йоги - методов успокоения ума и контроля эмоций</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>Продолжает традицию передачи сокровенных знаний йоги от Мастера к ученику</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>Передает методы из прямого опыта простым и понятным языком</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
