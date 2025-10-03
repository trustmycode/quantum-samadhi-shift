import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-quantum opacity-10" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="bg-gradient-card border border-primary/30 rounded-3xl p-12 md:p-16 text-center space-y-8 shadow-quantum animate-scale-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-accent animate-pulse" />
            <span className="text-sm">Начните свой путь сегодня</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Просто попробуйте —<br />
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              дайте жизни шанс ⭐
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Древние практики йоги избавят вас от боли, страха и чувства одиночества. 
            Помогут сбалансировать отношения, финансы и другие сферы. Вы улучшите свою 
            жизнь и сможете помогать другим.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="group bg-gradient-quantum hover:shadow-quantum transition-all duration-300 text-lg px-8 py-6"
            >
              Записаться на программу
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/30 hover:bg-primary/10 text-lg px-8 py-6"
            >
              Задать вопрос
            </Button>
          </div>

          <p className="text-sm text-muted-foreground pt-8">
            Все это — в привычном ритме, без отрыва от социума
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
