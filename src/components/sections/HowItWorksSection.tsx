import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { PenLine, Users, Send } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: PenLine,
    title: "أنشئ تراثك",
    description:
      "اكتب رسائل من القلب، سجّل رسائل فيديو شخصية، ارفع مستندات مهمة، أو شارك معلومات مالية وحسابات. اختر أي صيغة تناسب رسالتك.",
  },
  {
    number: "02",
    icon: Users,
    title: "حدد المستلمين",
    description:
      "اختر من يتلقى كل رسالة ومتى. يمكن إرسال الرسائل فوراً، أو بعد رحيلك، أو في تواريخ محددة. تحتفظ بالتحكم الكامل.",
  },
  {
    number: "03",
    icon: Send,
    title: "ضمان التسليم",
    description:
      "نظامنا الآمن يتحقق من حالة حسابك ويُخطر المستلمين تلقائياً. كل رسالة تصل بكلماتك سليمة وفيديوهاتك محفوظة.",
  },
];

const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block">كيف تعمل</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            حل Messages Beyond
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            منصة مصممة بعناية تربط الفجوة بين الماضي والمستقبل بتعاطف ووضوح.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-y-1/2" />

          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-gradient-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-500 h-full border border-border/50">
                  {/* Step Number */}
                  <div className="absolute -top-4 right-8 bg-primary text-primary-foreground font-serif text-xl font-bold w-12 h-12 rounded-full flex items-center justify-center shadow-soft">
                    {step.number}
                  </div>

                  <div className="pt-4">
                    <div className="w-16 h-16 rounded-2xl bg-accent/30 flex items-center justify-center mb-6">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                      {step.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
