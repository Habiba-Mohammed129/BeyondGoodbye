import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import { Heart, MessageSquareHeart } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Cherry blossoms and candles"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/20" />
      </div>

      {/* Floating Petals Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-accent/40 rounded-full blur-sm"
            style={{
              left: `${10 + i * 15}%`,
              top: `-5%`,
            }}
            animate={{
              y: ["0vh", "110vh"],
              x: [0, Math.sin(i) * 50],
              rotate: [0, 360],
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 text-primary font-medium mb-4">
              <Heart className="w-4 h-4" />
              منصة التراث الرقمي
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight"
          >
            Messages
            <span className="block text-primary">Beyond</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-4 font-serif italic"
          >
            تراثك، يُسلَّم بعناية
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-muted-foreground mb-8 leading-relaxed"
          >
            الحياة ثمينة. اللحظات التي نتشاركها، الحكمة التي اكتسبناها، والحب الذي نحمله
            يستحق أن يُذكر ولا يُنسى. Messages Beyond هي منصة تضمن وصول
            أهم كلماتك إلى الأشخاص الذين يهمونك أكثر، في الوقت الذي يحتاجون فيه لسماعها.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Button variant="hero" size="xl">
              <MessageSquareHeart className="w-5 h-5" />
              ابدأ تراثك الآن
            </Button>
            <Button variant="outline" size="xl">
              اعرف المزيد
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
