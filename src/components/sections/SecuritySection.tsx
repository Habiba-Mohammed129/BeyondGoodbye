import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lock, Eye, FileCheck } from "lucide-react";

const securityFeatures = [
  {
    icon: Lock,
    title: "تشفير من طرف لطرف",
    description:
      "كل رسالة وفيديو وملف مشفر بنفس التقنية العسكرية المستخدمة من الحكومات والمؤسسات المالية. حتى نحن لا نستطيع الوصول لمحتواك.",
  },
  {
    icon: Eye,
    title: "بياناتك، تحكمك",
    description:
      "أنت تقرر ما تنشئه، من يستلمه، ومتى. يمكنك حذف أو تحديث أو تعديل أي رسالة في أي وقت. حسابك ملكك تماماً.",
  },
  {
    icon: FileCheck,
    title: "سياسات شفافة",
    description:
      "ننشر سياسات خصوصية واضحة. لا نبيع بياناتك، لا نستخدم رسائلك للتسويق، ولا نشارك معلوماتك مع أطراف ثالثة. نقطة.",
  },
];

const SecuritySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block">الأمان</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            الخصوصية، الأمان والثقة
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            نفهم أن رسائلك تحتوي على أخص أفكارك ومعلوماتك الحساسة وذكرياتك الثمينة.
            الأمان والخصوصية ليسا ميزات نضيفها - هما أساس كل ما نبنيه.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-hero flex items-center justify-center mb-6 shadow-glow">
                <feature.icon className="w-10 h-10 text-white" />
              </div>

              <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                {feature.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
