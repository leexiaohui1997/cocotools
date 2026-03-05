export default {
  menu: {
    dashboard: "لوحة القيادة",
    tools: "الأدوات",
    crypto: "الأمان",
    devTools: "أدوات المطور",
    cssMinify: "ضاغط CSS",
    fileTreeGenerator: "مولد شجرة الملفات",
    tripleDes: "3DES",
    aes: "تشفير AES",
    graphics: "الرسومات",
    colorConverter: "محول الألوان",
    lightMode: "وضع الضوء",
    darkMode: "الوضع الداكن",
    systemMode: "نظام",
  },
  common: {
    switchLang: "تبديل اللغة",
    loadExample: "تحميل مثال",
    uploadFile: "رفع ملف",
    clear: "مسح",
    cleared: "تم المسح",
    copy: "نسخ",
    copySuccess: "تم النسخ إلى الحافظة",
    copyFail: "فشل النسخ",
    compress: "ضغط",
    compressSuccess: "تم الضغط بنجاح",
    compressFail: "فشل الضغط",
    inputEmpty: "الرجاء إدخال محتوى",
    fileLoaded: "تم تحميل الملف بنجاح",
    fileLoadFail: "فشل قراءة الملف",
    dragTip: "الرجاء سحب ملف هنا",
    autoWrap: "التفاف تلقائي",
    result: "النتيجة",
    size: "الحجم",
    rate: "المعدل",
  },
  tool: {
    crypto: {
      tripleDes: {
        title: "3DES Tool",
        description:
          "Encrypt and decrypt data using 3DES algorithm, supports multiple modes and padding.",
        input: "Input Content",
        key: "Key",
        mode: "Mode",
        padding: "Padding",
        encrypt: "Encrypt",
        decrypt: "Decrypt",
        output: "Output Result",
        copy: "Copy",
        clear: "Clear",
        error: "Process Failed",
        example: "Load Example",
        guide: {
          meaning: {
            title: "Intro to 3DES Encryption",
            desc: "3DES (Triple DES) is an enhancement of the DES encryption algorithm, which encrypts data three times using up to three different keys, significantly improving security. Although being replaced by AES, it is still widely used in legacy systems and specific industries.",
          },
          features: {
            title: "Features",
            modes: {
              title: "Multiple Modes",
              desc: "Supports various modes like ECB, CBC, CFB, OFB, CTR to meet different security requirements.",
            },
            padding: {
              title: "Flexible Padding",
              desc: "Provides options like Pkcs7, ZeroPadding, Iso10126, NoPadding, AnsiX923 to ensure compatibility.",
            },
          },
          usage: {
            title: "Usage Guide",
            step1: {
              title: "Input Data & Key",
              desc: "Enter text to encrypt/decrypt on the left and set the key. The key is core to security, keep it safe.",
            },
            step2: {
              title: "Select Mode",
              desc: "Choose appropriate mode (CBC recommended) and padding (Pkcs7 recommended).",
            },
            step3: {
              title: "Execute",
              desc: "Click Encrypt or Decrypt. Results appear on the right and can be copied.",
            },
          },
        },
      },
      aes: {
        title: "أداة تشفير AES",
        description:
          "تشفير وفك تشفير البيانات باستخدام خوارزمية AES، ودعم أوضاع متعددة وحشو.",
        input: "إدخال المحتوى",
        key: "مفتاح",
        mode: "الوضع",
        padding: "الحشو",
        encrypt: "تشفير",
        decrypt: "فك تشفير",
        output: "النتيجة",
        copy: "نسخ",
        clear: "مسح",
        error: "خطأ",
        example: "مثال",
        guide: {
          meaning: {
            title: "مقدمة لتشفير AES",
            desc: "AES (Advanced Encryption Standard) هو خوارزمية التشفير المتماثل الأكثر شيوعًا، ويستخدم على نطاق واسع لحماية البيانات بسبب أمانه العالي وأدائه ومرونته.",
          },
          features: {
            title: "الميزات",
            modes: {
              title: "دعم أوضاع متعددة",
              desc: "يدعم أوضاعًا مختلفة مثل ECB و CBC و CFB و OFB و CTR لتلبية متطلبات الأمان المختلفة.",
            },
            padding: {
              title: "حشو مرن",
              desc: "يوفر خيارات مثل Pkcs7 و ZeroPadding و Iso10126 و NoPadding و AnsiX923 لضمان التوافق.",
            },
          },
          usage: {
            title: "دليل الاستخدام",
            step1: {
              title: "إدخال البيانات والمفتاح",
              desc: "أدخل النص للتشفير / فك التشفير على اليسار وقم بتعيين المفتاح. يدعم AES مفاتيح 128/192/256 بت.",
            },
            step2: {
              title: "اختر الوضع",
              desc: "اختر الوضع المناسب (يوصى بـ CBC) والحشو (يوصى بـ Pkcs7).",
            },
            step3: {
              title: "تنفيذ",
              desc: "انقر فوق تشفير أو فك تشفير. تظهر النتائج على اليمين ويمكن نسخها.",
            },
          },
        },
      },
    },
    fileTreeGenerator: {
      title: "مولد شجرة الملفات",
      description: "إنشاء هيكل شجري ASCII لدلائل المشروع للتوثيق وعرض الكود.",
      inputTitle: "اختر الدليل",
      outputTitle: "النتيجة المولدة",
      selectDirBtn: "اختر الدليل",
      generateBtn: "إنشاء الشجرة",
      copyBtn: "نسخ النتيجة",
      dragTip: "اسحب الدليل هنا",
      ignorePatterns: "أنماط التجاهل (مفصول بفواصل)",
      guide: {
        meaning: {
          title: "لماذا مولد شجرة الملفات؟",
          desc: "يعد العرض الواضح لهيكل المشروع أمرًا بالغ الأهمية عند كتابة التوثيق الفني، أو README، أو إجراء مراجعات الكود. تُظهر أشجار ملفات ASCII بوضوح تسلسل الدلائل، مما يساعد المطورين على فهم بنية المشروع بسرعة.",
        },
        features: {
          title: "الميزات",
          dragDrop: {
            title: "دعم السحب والإفلات",
            desc: "دعم سحب المجلدات مباشرة إلى الصفحة لتحليل هيكل الدليل تلقائيًا.",
          },
          customIgnore: {
            title: "تجاهل مخصص",
            desc: "دعم ملفات أو مجلدات التجاهل المخصصة (مثل node_modules، .git) للحفاظ على إيجاز الناتج.",
          },
        },
        usage: {
          title: "دليل الاستخدام",
          step1: {
            title: "اختر أو اسحب مجلد",
            desc: "انقر فوق الزر لاختيار مجلد، أو اسحب مجلدًا مباشرة إلى المنطقة المحددة.",
          },
          step2: {
            title: "تكوين التجاهل",
            desc: "قم بتعديل أنماط التجاهل الافتراضية إذا لزم الأمر لتصفية الملفات غير المرغوب فيها.",
          },
          step3: {
            title: "الحصول على النتيجة",
            desc: "سيتم عرض الشجرة المولدة على اليمين. انقر فوق نسخ لاستخدامها.",
          },
        },
      },
    },
    cssMinify: {
      title: "ضاغط CSS",
      description:
        "إزالة المسافات الزائدة والتعليقات والأسطر الجديدة لتقليل حجم ملف CSS للنشر في بيئة الإنتاج.",
      inputTitle: "إدخال CSS",
      outputTitle: "النتيجة المضغوطة",
      uploadBtn: "رفع ملف CSS",
      compressBtn: "ضغط CSS",
      copyBtn: "نسخ النتيجة",
      dragTip: "اسحب ملف CSS هنا",
      guide: {
        meaning: {
          title: "لماذا ضغط CSS؟",
          desc: "يعد ضغط CSS جزءًا أساسيًا من تحسين أداء الويب. عن طريق إزالة المسافات البيضاء والتعليقات والكود الزائد، وتحسين الهيكل (دمج القواعد، واختصار الألوان)، يمكن تقليل حجم الملف بنسبة 20-60%، مما يحسن سرعة تحميل الصفحة بشكل كبير ويقلل تكاليف النطاق الترددي. هذا أمر بالغ الأهمية للنشر في بيئة الإنتاج، والتطوير للأجهزة المحمولة، وتوزيع CDN، مما يؤثر بشكل مباشر على تجربة المستخدم وتصنيفات SEO. يحتفظ CSS المضغوط بكامل وظائفه وهو ممارسة قياسية في هندسة الواجهة الأمامية.",
        },
        features: {
          title: "الميزات",
          editor: {
            title: "محرر + سير عمل الملفات",
            desc: "يدعم لصق CSS، أو سحب ملفات .css، أو تحميل الأمثلة. تقوم الأداة تلقائيًا بقراءة وعرض المحتوى، مع دعم المسح والنسخ بنقرة واحدة لسهولة المقارنة.",
          },
          stats: {
            title: "مقاييس مستوى الإنتاج",
            desc: "إحصائيات فورية عن الحجم الأصلي، والحجم المضغوط، ومعدل الضغط، وتوفير النطاق الترددي المقدر لـ CDN، مما يساعد في تقييم مكاسب الأداء ودعم قرارات التحسين.",
          },
          lossless: {
            title: "ضغط بدون فقدان",
            desc: "إزالة المسافات البيضاء والتعليقات بنقرة واحدة، وتحسين القيمة الصفرية (0px→0)، واختصار الألوان (#ffffff→#fff)، ودمج الخصائص يضمن أن الناتج النهائي لا يغير سلوك CSS على الإطلاق.",
          },
          security: {
            title: "أمان مستوى CI/CD",
            desc: "تعمل جميع العمليات المنطقية في المتصفح؛ لا يتم رفع أي ملفات نمط. نسخ أو تنزيل style.min.css بنقرة واحدة للتكامل الآمن في عمليات البناء.",
          },
        },
        usage: {
          title: "دليل الاستخدام",
          step1: {
            title: "جمع الأنماط",
            desc: "الصق CSS، أو اسحب ملفات .css، أو حمل الأمثلة، مع التأكد من عرض المحتوى الأصلي في المحرر.",
          },
          step2: {
            title: "ضبط الإعدادات",
            desc: 'تحقق من "التفاف تلقائي" لتسهيل العرض. يتم تمكين جميع قواعد تحسين الضغط افتراضيًا، ولا حاجة لتكوين إضافي.',
          },
          step3: {
            title: "إخراج النتيجة",
            desc: 'انقر فوق "ضغط CSS"، وتحقق من النتيجة، وقم بالنسخ أو التنزيل أو استبدال ملف المشروع/الإصدار في أي وقت.',
          },
        },
        tech: {
          title: "مقدمة تقنية",
          principle: {
            title: "مبدأ ضغط CSS",
            desc: "يقلل ضغط CSS من حجم الملف عن طريق إزالة الأحرف الزائدة (المسافات، الأسطر الجديدة، التعليقات)، وتحسين هيكل الكود (دمج القواعد، واختصار الألوان)، وتبسيط بناء الجملة (إزالة الفواصل المنقوطة/علامات الاقتباس غير الضرورية). تضمن العملية بقاء وظائف CSS دون تغيير، وتغيير التمثيل المادي فقط، وتقليل حجم الملف بنسبة 20-60% وتعزيز سرعة التحميل.",
          },
          optimization: {
            title: "تقنيات التحسين",
            desc: "يشمل ضغط CSS تقنيات مختلفة: إزالة المسافات البيضاء، ومسح التعليقات، وتبسيط الألوان (#ffffff→#fff)، وتحسين القيمة الصفرية (0px→0)، ودمج الخصائص (هامش 4 قيم)، وإزالة التكرار في المحددات، وإزالة الكود الميت. يمكن للضغط المتقدم أيضًا دعم ترتيب الخصائص، ودمج استعلامات الوسائط، وتضمين {'@'}import.",
          },
          production: {
            title: "تطبيق الإنتاج",
            desc: "يعد ضغط CSS مفتاحًا لتحسين أداء الواجهة الأمامية، ويستخدم في تدفقات بناء الإنتاج (Webpack، Vite، Gulp)، ونشر CDN (تقليل تكاليف النقل)، وتحسين الصفحة (تحسين درجات PageSpeed)، والتطوير للأجهزة المحمولة (توفير البيانات). يتطلب CSS المضغوط عادةً خرائط المصدر لتصحيح الأخطاء.",
          },
        },
      },
    },
    graphics: {
      colorConverter: {
        title: "محول الألوان",
        description:
          "تحويل الألوان بين التنسيقات (HEX، RGB، HSL، HWB، LCH، CMYK) في الوقت الفعلي مع المعاينة والتوليد العشوائي.",
        input: "إدخال اللون",
        hexPlaceholder: "أدخل لون HEX (مثل #165DFF)",
        random: "لون عشوائي",
        clear: "مسح",
        preview: "معاينة",
        output: "نتائج التحويل",
        copy: "نسخ",
        error: "خطأ في التنسيق",
        example: "تحميل مثال",
        presets: {
          title: "إعدادات مسبقة للألوان",
          material: "ألوان Material",
          flat: "ألوان مسطحة",
          webSafe: "ألوان آمنة للويب",
          gray: "تدرج رمادي",
        },
        guide: {
          meaning: {
            title: "مقدمة محول الألوان",
            desc: "تساعد أداة محول الألوان المطورين والمصممين على التحويل السريع بين تنسيقات الألوان المختلفة (مثل Hex و RGB و HSL و HSV و CMYK) لضمان دقة الألوان عبر بيئات مختلفة.",
          },
          features: {
            title: "الميزات",
            formats: {
              title: "دعم تنسيقات متعددة",
              desc: "يدعم تنسيقات الألوان الشائعة المختلفة بما في ذلك Hex و RGB و HSL و HSV و CMYK.",
            },
            preview: {
              title: "معاينة في الوقت الفعلي",
              desc: "أدخل لونًا، وستظهر المعاينة ونتائج التحويل فورًا على اليمين.",
            },
          },
          usage: {
            title: "دليل الاستخدام",
            step1: {
              title: "إدخال اللون",
              desc: "أدخل قيمة Hex أو قيمة RGB أو اسم اللون في مربع الإدخال.",
            },
            step2: {
              title: "عرض النتائج",
              desc: "تتعرف الأداة تلقائيًا على الإدخال وتحوله إلى تنسيقات أخرى معروضة على اليمين.",
            },
            step3: {
              title: "نسخ واستخدام",
              desc: "انقر فوق زر النسخ بجوار التنسيق المطلوب لنسخ كود اللون إلى الحافظة.",
            },
          },
        },
      },
    },
  },
};
