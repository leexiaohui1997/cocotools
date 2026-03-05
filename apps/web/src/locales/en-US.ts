export default {
  menu: {
    dashboard: "Dashboard",
    tools: "Tools",
    devTools: "Developer Tools",
    cssMinify: "CSS Minifier",
    fileTreeGenerator: "File Tree Generator",
    lightMode: "Light Mode",
    darkMode: "Dark Mode",
    systemMode: "Auto",
  },
  common: {
    switchLang: "Switch Language",
    loadExample: "Load Example",
    uploadFile: "Upload File",
    clear: "Clear",
    cleared: "Cleared",
    copy: "Copy",
    copySuccess: "Copied to clipboard",
    copyFail: "Copy failed",
    compress: "Compress",
    compressSuccess: "Compression successful",
    compressFail: "Compression failed",
    inputEmpty: "Please enter content",
    fileLoaded: "File loaded successfully",
    fileLoadFail: "File read failed",
    dragTip: "Please drag a file here",
    autoWrap: "Word Wrap",
    result: "Result",
    size: "Size",
    rate: "Rate",
  },
  tool: {
    fileTreeGenerator: {
      title: "File Tree Generator",
      description:
        "Generate ASCII tree structure of project directories for documentation and code display.",
      inputTitle: "Select Directory",
      outputTitle: "Generated Result",
      selectDirBtn: "Select Directory",
      generateBtn: "Generate Tree",
      copyBtn: "Copy Result",
      dragTip: "Drag directory here",
      ignorePatterns: "Ignore Patterns (comma separated)",
      guide: {
        meaning: {
          title: "Why File Tree Generator?",
          desc: "Clear project structure display is crucial when writing technical documentation, READMEs, or conducting code reviews. ASCII file trees intuitively show directory hierarchy, helping developers quickly understand project architecture.",
        },
        features: {
          title: "Features",
          dragDrop: {
            title: "Drag & Drop Support",
            desc: "Support dragging folders directly to the page to automatically parse directory structure.",
          },
          customIgnore: {
            title: "Custom Ignore",
            desc: "Support custom ignore files or folders (e.g., node_modules, .git) to keep output concise.",
          },
        },
        usage: {
          title: "Usage Guide",
          step1: {
            title: "Select or Drag Folder",
            desc: "Click the button to select a folder, or drag a folder directly to the designated area.",
          },
          step2: {
            title: "Configure Ignore",
            desc: "Modify default ignore patterns if needed to filter out unwanted files.",
          },
          step3: {
            title: "Get Result",
            desc: "The generated tree will be displayed on the right. Click copy to use it.",
          },
        },
      },
    },
    cssMinify: {
      title: "CSS Minifier",
      description:
        "Remove extra spaces, comments, and newlines to reduce CSS file size for production deployment.",
      inputTitle: "Input CSS",
      outputTitle: "Compressed Result",
      uploadBtn: "Upload CSS File",
      compressBtn: "Compress CSS",
      copyBtn: "Copy Result",
      dragTip: "Drag CSS file here",
      guide: {
        meaning: {
          title: "Why Minify CSS?",
          desc: "CSS minification is a core part of web performance optimization. By removing whitespace, comments, and redundant code, and optimizing structure (merging rules, shortening colors), file size can be reduced by 20-60%, significantly improving page load speed and reducing bandwidth costs. This is crucial for production deployment, mobile development, and CDN distribution, directly impacting user experience and SEO rankings. Minified CSS retains full functionality and is a standard practice in frontend engineering.",
        },
        features: {
          title: "Features",
          editor: {
            title: "Editor + File Workflow",
            desc: "Supports pasting CSS, dragging .css files, or loading examples. The tool automatically reads and displays content, supporting one-click clear and copy for easy comparison.",
          },
          stats: {
            title: "Production-Grade Metrics",
            desc: "Real-time statistics on original size, compressed size, compression rate, and estimated CDN bandwidth savings help evaluate performance gains and support optimization decisions.",
          },
          lossless: {
            title: "Lossless Compression",
            desc: "One-click removal of whitespace and comments, zero-value optimization (0px→0), color abbreviation (#ffffff→#fff), and property merging ensure the final output does not change CSS behavior at all.",
          },
          security: {
            title: "CI/CD Level Security",
            desc: "All logic runs in the browser; no style files are uploaded. One-click copy or download of style.min.css for safe integration into build processes.",
          },
        },
        usage: {
          title: "Usage Guide",
          step1: {
            title: "Collect Styles",
            desc: "Paste CSS, drag .css files, or load examples, confirming the original content is displayed in the editor.",
          },
          step2: {
            title: "Adjust Settings",
            desc: 'Check "Word Wrap" for easier viewing. All compression optimization rules are enabled by default, no extra configuration needed.',
          },
          step3: {
            title: "Output Result",
            desc: 'Click "Compress CSS", verify the result, and copy, download, or replace the project/release file at any time.',
          },
        },
        tech: {
          title: "Technical Intro",
          principle: {
            title: "CSS Compression Principle",
            desc: "CSS compression reduces file size by removing redundant characters (spaces, newlines, comments), optimizing code structure (merging rules, shortening colors), and simplifying syntax (removing unnecessary semicolons/quotes). The process ensures CSS functionality remains unchanged, only altering physical representation, reducing file size by 20-60% and boosting load speed.",
          },
          optimization: {
            title: "Optimization Techniques",
            desc: "CSS compression includes various techniques: whitespace removal, comment clearing, color simplification (#ffffff→#fff), zero-value optimization (0px→0), property merging (margin 4 values), selector deduplication, and dead code removal. Advanced compression can also support property sorting, media query merging, and {'@'}import inlining.",
          },
          production: {
            title: "Production Application",
            desc: "CSS compression is key to frontend performance optimization, used in production build flows (Webpack, Vite, Gulp), CDN deployment (reducing transfer costs), page optimization (improving PageSpeed scores), and mobile development (saving data). Minified CSS usually requires source maps for debugging.",
          },
        },
      },
    },
  },
};
