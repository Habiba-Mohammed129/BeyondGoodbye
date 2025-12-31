import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-secondary py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="font-serif text-xl font-bold text-white">
                Messages Beyond
              </span>
            </a>
            <p className="text-secondary/70 leading-relaxed max-w-md">
              نربط القلوب عبر الزمن. نحفظ الحب للأبد.
              منصة تضمن وصول أهم كلماتك إلى من تحب.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">روابط سريعة</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-secondary/70 hover:text-white transition-colors">
                  كيف تعمل
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary/70 hover:text-white transition-colors">
                  الميزات
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary/70 hover:text-white transition-colors">
                  الأمان
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary/70 hover:text-white transition-colors">
                  التسعير
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">قانوني</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-secondary/70 hover:text-white transition-colors">
                  سياسة الخصوصية
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary/70 hover:text-white transition-colors">
                  شروط الخدمة
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary/70 hover:text-white transition-colors">
                  تواصل معنا
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-secondary/20 text-center">
          <p className="text-secondary/60 text-sm">
            © {new Date().getFullYear()} Messages Beyond. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
