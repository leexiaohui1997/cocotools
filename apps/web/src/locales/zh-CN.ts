export default {
  menu: {
    dashboard: "仪表盘",
    tools: "工具分类",
    crypto: "安全加密",
    devTools: "开发者工具",
    cssMinify: "CSS 压缩工具",
    fileTreeGenerator: "文件树生成器",
    tripleDes: "3DES 加解密",
    aes: "AES 加解密",
    graphics: "图形视觉",
    colorConverter: "颜色转换器",
    lightMode: "亮色模式",
    darkMode: "暗色模式",
    systemMode: "跟随系统",
  },
  common: {
    switchLang: "切换语言",
    loadExample: "载入示例",
    uploadFile: "上传文件",
    clear: "清空",
    cleared: "已清空",
    copy: "复制",
    copySuccess: "已复制到剪贴板",
    copyFail: "复制失败",
    compress: "压缩",
    compressSuccess: "压缩成功",
    compressFail: "压缩过程出错",
    inputEmpty: "请输入内容",
    fileLoaded: "文件加载成功",
    fileLoadFail: "文件读取失败",
    dragTip: "请拖拽文件",
    autoWrap: "自动换行",
    result: "结果",
    size: "体积",
    rate: "压缩率",
  },
  tool: {
    graphics: {
      colorConverter: {
        title: "颜色转换器",
        description:
          "在 Hex, RGB, HSL 等多种颜色格式之间进行实时转换，方便开发与设计。",
        input: "输入颜色",
        hexPlaceholder: "请输入 HEX 颜色值 (例如 #165DFF)",
        random: "随机颜色",
        preview: "颜色预览",
        output: "转换结果",
        copy: "复制",
        clear: "清空",
        error: "格式错误",
        example: "载入示例",
        presets: {
          title: "颜色预设",
          material: "Material 颜色",
          flat: "扁平化颜色",
          webSafe: "网页安全色",
          gray: "灰度色",
        },
        guide: {
          meaning: {
            title: "颜色转换简介",
            desc: "颜色转换工具可以帮助开发者和设计师在不同的颜色表示格式（如 Hex, RGB, HSL, HSV, CMYK）之间进行快速转换，确保颜色在不同环境下的准确性。",
          },
          features: {
            title: "功能特点",
            formats: {
              title: "多格式支持",
              desc: "支持 Hex, RGB, HSL, HSV, CMYK 等多种常用颜色格式。",
            },
            preview: {
              title: "实时预览",
              desc: "输入颜色后，右侧会实时显示颜色预览和各种格式的转换结果。",
            },
          },
          usage: {
            title: "使用指南",
            step1: {
              title: "输入颜色",
              desc: "在输入框中输入颜色的 Hex 值、RGB 值或颜色名称。",
            },
            step2: {
              title: "查看结果",
              desc: "工具会自动识别输入并转换为其他格式，结果显示在右侧。",
            },
            step3: {
              title: "复制使用",
              desc: "点击对应格式后的复制按钮，即可将颜色代码复制到剪贴板。",
            },
          },
        },
      },
    },
    crypto: {
      tripleDes: {
        title: "3DES 加解密工具",
        description:
          "使用 3DES 算法进行数据加密和解密，支持多种模式和填充方式。",
        input: "输入内容",
        key: "密钥",
        mode: "加密模式",
        padding: "填充方式",
        encrypt: "加密",
        decrypt: "解密",
        output: "输出结果",
        copy: "复制",
        clear: "清空",
        error: "处理失败",
        example: "载入示例",
        guide: {
          meaning: {
            title: "3DES 加密简介",
            desc: "3DES (Triple DES) 是 DES 加密算法的改进版本，通过使用三个不同的密钥对数据进行三次加密，极大地提高了安全性。尽管目前已被 AES 逐步取代，但在某些遗留系统和特定领域中仍被广泛使用。",
          },
          features: {
            title: "功能特点",
            modes: {
              title: "多种模式支持",
              desc: "支持 ECB, CBC, CFB, OFB, CTR 等多种加密模式，满足不同场景下的安全需求。",
            },
            padding: {
              title: "灵活的填充方式",
              desc: "提供 Pkcs7, ZeroPadding, Iso10126, NoPadding, AnsiX923 等多种填充选项，确保数据处理的兼容性。",
            },
          },
          usage: {
            title: "使用指南",
            step1: {
              title: "输入数据与密钥",
              desc: "在左侧输入需要加密或解密的文本，并设置密钥。密钥是加解密的核心，请妥善保管。",
            },
            step2: {
              title: "选择模式",
              desc: "根据需求选择合适的加密模式（推荐 CBC）和填充方式（推荐 Pkcs7）。",
            },
            step3: {
              title: "执行操作",
              desc: "点击加密或解密按钮，结果将实时显示在右侧输出框中，支持一键复制。",
            },
          },
        },
      },
      aes: {
        title: "AES 加解密工具",
        description:
          "使用 AES 算法进行数据加密和解密，支持多种模式和填充方式。",
        input: "输入内容",
        key: "密钥",
        mode: "加密模式",
        padding: "填充方式",
        encrypt: "加密",
        decrypt: "解密",
        output: "输出结果",
        copy: "复制",
        clear: "清空",
        error: "处理失败",
        example: "载入示例",
        guide: {
          meaning: {
            title: "AES 加密简介",
            desc: "AES (Advanced Encryption Standard) 是目前最流行的对称加密算法，以其高安全性、高性能和灵活性被广泛应用于各种数据保护场景。",
          },
          features: {
            title: "功能特点",
            modes: {
              title: "多种模式支持",
              desc: "支持 ECB, CBC, CFB, OFB, CTR 等多种加密模式，满足不同场景下的安全需求。",
            },
            padding: {
              title: "灵活的填充方式",
              desc: "提供 Pkcs7, ZeroPadding, Iso10126, NoPadding, AnsiX923 等多种填充选项，确保数据处理的兼容性。",
            },
          },
          usage: {
            title: "使用指南",
            step1: {
              title: "输入数据与密钥",
              desc: "在左侧输入需要加密或解密的文本，并设置密钥。AES 支持 128/192/256 位密钥。",
            },
            step2: {
              title: "选择模式",
              desc: "根据需求选择合适的加密模式（推荐 CBC）和填充方式（推荐 Pkcs7）。",
            },
            step3: {
              title: "执行操作",
              desc: "点击加密或解密按钮，结果将实时显示在右侧输出框中，支持一键复制。",
            },
          },
        },
      },
    },
    fileTreeGenerator: {
      title: "文件树生成器",
      description: "生成文件夹的 ASCII 树形结构，方便文档编写和沟通。",
      inputTitle: "选择文件夹",
      outputTitle: "生成结果",
      selectDirBtn: "选择文件夹",
      generateBtn: "生成树形图",
      copyBtn: "复制结果",
      dragTip: "拖拽文件夹到此处",
      ignorePatterns: "忽略模式",
      guide: {
        meaning: {
          title: "文件树生成器的意义",
          desc: "在编写技术文档、README 或进行代码审查时，清晰的项目结构展示至关重要。ASCII 文件树能直观地展示目录层级，帮助开发者快速理解项目架构。",
        },
        features: {
          title: "功能特点",
          dragDrop: {
            title: "拖拽支持",
            desc: "支持直接拖拽文件夹到页面，自动解析目录结构。",
          },
          customIgnore: {
            title: "自定义忽略",
            desc: "支持自定义忽略文件或文件夹（如 node_modules, .git 等），让输出更简洁。",
          },
        },
        usage: {
          title: "使用指南",
          step1: {
            title: "选择或拖拽文件夹",
            desc: "点击按钮选择文件夹，或直接将文件夹拖拽到指定区域。",
          },
          step2: {
            title: "配置忽略项",
            desc: "如有需要，可以修改默认的忽略模式，过滤掉不需要显示的文件。",
          },
          step3: {
            title: "获取结果",
            desc: "生成的树形图将显示在右侧，点击复制按钮即可使用。",
          },
        },
      },
    },
    cssMinify: {
      title: "CSS 压缩工具",
      description:
        "移除多余的空格、注释和换行符，精简 CSS 代码体积，使其更适合生产环境部署。",
      inputTitle: "输入 CSS",
      outputTitle: "压缩结果",
      uploadBtn: "上传 CSS 文件",
      compressBtn: "压缩 CSS",
      copyBtn: "复制结果",
      dragTip: "请拖拽 CSS 文件",
      guide: {
        meaning: {
          title: "CSS 压缩的意义",
          desc: "CSS 压缩是网页性能优化的核心环节。通过移除空白、注释和冗余代码，优化代码结构（合并规则、缩短颜色值），可将文件体积减小 20-60%，显著提升页面加载速度，降低带宽成本。这对生产环境部署、移动端开发、CDN 分发至关重要，直接影响用户体验和 SEO 排名。压缩后的 CSS 保持功能完全不变，是前端工程化的标准实践。",
        },
        features: {
          title: "功能特点",
          editor: {
            title: "编辑器 + 文件双流程",
            desc: "支持粘贴 CSS、拖拽 .css 文件或载入示例，工具会自动读取并展示，支持一键清空和复制，方便随时对比。",
          },
          stats: {
            title: "生产级指标看板",
            desc: "实时统计原始体积、压缩后体积、压缩率和预计 CDN 带宽节省，帮助评估性能收益和支撑优化决策。",
          },
          lossless: {
            title: "无损压缩规则",
            desc: "一键完成空白符与注释删除、零值优化 (0px→0)、颜色缩写 (#ffffff→#fff)、属性合并，确保最终呈现，完全不改变 CSS 行为。",
          },
          security: {
            title: "CI/CD 级别安全",
            desc: "全部逻辑在浏览器端完成，不上传任何样式文件。一键复制或下载 style.min.css，即可安全接入构建流程。",
          },
        },
        usage: {
          title: "使用指南",
          step1: {
            title: "收集样式",
            desc: "粘贴 CSS，拖放 .css 文件或加载示例，确认编辑器中显示原始内容。",
          },
          step2: {
            title: "调整设置",
            desc: "选中“自动换行”方便查看，默认开启所有压缩优化规则，无需额外配置。",
          },
          step3: {
            title: "输出结果",
            desc: "点击“压缩 CSS”，核对无误后，随时复制、下载或直接替换项目中的/发布文件。",
          },
        },
        tech: {
          title: "技术介绍",
          principle: {
            title: "CSS 压缩原理",
            desc: "CSS 压缩通过去除冗余字符（空格、换行、注释）、优化代码结构（合并规则、缩短颜色值）、简化语法（移除非必要分号、引号）来减小文件大小，压缩过程确保 CSS 功能完全不变，仅改变代码的物理表现，可将文件减小 20-60%，显著提升网页加载速度。",
          },
          optimization: {
            title: "压缩优化技术",
            desc: "CSS 压缩包括多种优化技术：空白前移除（删除空格、换行、缩进）、注释清除、颜色值简化 (#ffffff→#fff)、零值优化 (0px→0)、属性合并 (margin 四个值合并)、选择器去重、无用代码移除。高级压缩还能支持属性排序、媒体查询合并、{'@'}import 内联等，进一步减小体积。",
          },
          production: {
            title: "生产环境应用",
            desc: "CSS 压缩是前端性能优化的关键环节，应用于生产构建流程 (Webpack、Vite、Gulp)、CDN 部署 (减少传输成本)、页面优化 (提升 PageSpeed 评分)、移动端开发 (节省流量)。压缩后的 CSS 通常需要保留源码版本用于调试，并使用 SourceMap 映射方便问题定位。",
          },
        },
      },
    },
  },
};
