import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, BookX, HeartCrack } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "65%",
    label: "من البالغين",
    description: "ليس لديهم خطة لأصولهم الرقمية أو رسائل التراث",
  },
  {
    icon: BookX,
    value: "آلاف",
    label: "الذكريات غير المشاركة",
    description: "رسائل لم تُرسل، قصص لم تُروى، وحكمة ضائعة للأبد",
  },
  {
    icon: HeartCrack,
    value: "عبء عاطفي",
    label: "على الأحباء",
    description: "يتساءلون ماذا كنت تريد أن تقول لهم",
  },
];

const StatsSection = () => {
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
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            لماذا التراث الرقمي مهم؟
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            في عالمنا المتصل، نترك وراءنا أكثر من مجرد ذكريات - نترك بصمات رقمية
            ورسائل شخصية عميقة. لكن معظم الناس لا يأخذون الوقت لتنظيم شؤونهم الرقمية.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-500 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="text-3xl font-serif font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-foreground mb-2">
                {stat.label}
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12 text-lg text-foreground max-w-3xl mx-auto"
        >
          <span className="font-semibold text-primary">Messages Beyond</span>{" "}
          تغيّر طريقة حفاظ العائلات على أهم روابطها ومشاركتها.
          بدلاً من ترك الرسائل المهمة تتلاشى، يمكنك ضمان استمرار صوتك
          في الإرشاد والراحة وإلهام من تحب.
        </motion.p>
      </div>
    </section>
  );
};

export default StatsSection;
