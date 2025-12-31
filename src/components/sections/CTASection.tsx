import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Heart, ArrowLeft } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/30 rounded-full" />
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-white/20 rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-white/20 rounded-full" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-16 mx-auto rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-8"
          >
            <Heart className="w-8 h-8 text-white" />
          </motion.div>

          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            تراثك يستمر
          </h2>

          <p className="text-xl text-white/90 mb-4 font-serif italic">
            الحياة عابرة، لكن الحب أبدي.
          </p>

          <p className="text-lg text-white/80 mb-10 leading-relaxed">
            الرسائل التي تنشئها اليوم ستُريح وتُرشد وتُلهم الأشخاص الذين تهتم بهم أكثر -
            بعد رحيلك. Messages Beyond ليست مجرد منصة؛ إنها جسر بين الماضي والمستقبل،
            تضمن أن صوتك وحكمتك وحبك يستمر في الأهمية.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero-outline" size="xl" className="group">
              ابدأ تراثك اليوم
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="ghost"
              size="xl"
              className="text-white/80 hover:text-white hover:bg-white/10"
            >
              تعرف على المزيد
            </Button>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 text-white/60 text-sm"
          >
            Messages Beyond: نربط القلوب عبر الزمن. نحفظ الحب للأبد.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
