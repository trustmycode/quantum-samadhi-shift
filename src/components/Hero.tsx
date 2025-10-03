import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-cosmic">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary-glow/15 rounded-full blur-3xl animate-glow" />
      </div>

      <div className="container relative z-10 px-6 mx-auto text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-accent animate-pulse" />
            <span className="text-sm text-foreground/80">108 дней трансформации</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="bg-gradient-quantum bg-clip-text text-transparent">
              Квантовый переход
            </span>
            <br />
            <span className="text-foreground">за 108 дней</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Глубокая трансформация сознания. Переход от состояния борьбы и ограничений к легкости, радости и изобилию. 
            Синтез древней мудрости раджа-йоги и квантовой физики.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="group bg-gradient-quantum hover:shadow-quantum transition-all duration-300 text-lg px-8 py-6"
            >
              Начать трансформацию
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/30 hover:bg-primary/10 text-lg px-8 py-6"
            >
              Узнать больше
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent">16</div>
              <div className="text-sm text-muted-foreground">модулей программы</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent">108</div>
              <div className="text-sm text-muted-foreground">дней пути</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent">20+</div>
              <div className="text-sm text-muted-foreground">лет опыта</div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
