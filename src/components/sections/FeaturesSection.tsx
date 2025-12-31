import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FileText,
  Video,
  Clock,
  Shield,
  FolderHeart,
  Mic,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "رسائل مكتوبة",
    description: "اكتب رسائل من القلب ستُقرأ تماماً كما كتبتها.",
  },
  {
    icon: Video,
    title: "رسائل فيديو",
    description: "سجّل صوتك ووجهك، دع أحبائك يسمعون كلماتك ويرون تعبيراتك.",
  },
  {
    icon: Mic,
    title: "رسائل صوتية",
    description: "شارك القصص والحكمة بصوتك الحقيقي.",
  },
  {
    icon: Clock,
    title: "توقيت مرن للتسليم",
    description: "حدد اللحظة الدقيقة لوصول كل رسالة لكل مستلم.",
  },
  {
    icon: Shield,
    title: "أمان بمستوى عسكري",
    description: "تشفير كامل يحمي كل رسالة. خصوصيتك مقدسة عندنا.",
  },
  {
    icon: FolderHeart,
    title: "أدوات تخطيط التراث",
    description: "نظّم تركتك الرقمية مع جرد الحسابات وإدارة كلمات المرور.",
  },
];

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block">الميزات</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            ميزات مهمة حقاً
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Messages Beyond تجمع بين البساطة والحماية المتطورة لتكريم ما يهم أكثر: تراثك.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-6 h-full border border-border/50 hover:border-primary/30 hover:shadow-card transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                </div>

                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
