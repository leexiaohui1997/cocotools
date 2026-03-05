export default {
  menu: {
    dashboard: "儀表板",
    tools: "工具分類",
    crypto: "安全加密",
    devTools: "開發者工具",
    cssMinify: "CSS 壓縮工具",
    fileTreeGenerator: "檔案樹生成器",
    tripleDes: "3DES 加解密工具",
    aes: "AES 加解密工具",
    lightMode: "亮色模式",
    darkMode: "暗色模式",
    systemMode: "跟隨系統",
  },
  common: {
    switchLang: "切換語言",
    loadExample: "載入範例",
    uploadFile: "上傳檔案",
    clear: "清空",
    cleared: "已清空",
    copy: "複製",
    copySuccess: "已複製到剪貼簿",
    copyFail: "複製失敗",
    compress: "壓縮",
    compressSuccess: "壓縮成功",
    compressFail: "壓縮過程出錯",
    inputEmpty: "請輸入內容",
    fileLoaded: "檔案載入成功",
    fileLoadFail: "檔案讀取失敗",
    dragTip: "請拖曳檔案",
    autoWrap: "自動換行",
    result: "結果",
    size: "體積",
    rate: "壓縮率",
  },
  tool: {
    crypto: {
      tripleDes: {
        title: "3DES 加解密工具",
        description:
          "使用 3DES 演算法進行資料加密和解密，支援多種模式和填充方式。",
        input: "輸入內容",
        key: "金鑰",
        mode: "加密模式",
        padding: "填充方式",
        encrypt: "加密",
        decrypt: "解密",
        output: "輸出結果",
        copy: "複製",
        clear: "清空",
        error: "處理失敗",
        example: "載入範例",
      },
      aes: {
        title: "AES 加解密工具",
        description:
          "使用 AES 演算法進行資料加密和解密，支援多種模式和填充方式。",
        input: "輸入內容",
        key: "金鑰",
        mode: "加密模式",
        padding: "填充方式",
        encrypt: "加密",
        decrypt: "解密",
        output: "輸出結果",
        copy: "複製",
        clear: "清空",
        error: "處理失敗",
        example: "載入範例",
        guide: {
          meaning: {
            title: "AES 加密簡介",
            desc: "AES (Advanced Encryption Standard) 是目前最流行的對稱加密演算法，以其高安全性、高效能和靈活性被廣泛應用於各種資料保護場景。",
          },
          features: {
            title: "功能特點",
            modes: {
              title: "多種模式支援",
              desc: "支援 ECB, CBC, CFB, OFB, CTR 等多種加密模式，滿足不同場景下的安全需求。",
            },
            padding: {
              title: "靈活的填充方式",
              desc: "提供 Pkcs7, ZeroPadding, Iso10126, NoPadding, AnsiX923 等多種填充選項，確保資料處理的相容性。",
            },
          },
          usage: {
            title: "使用指南",
            step1: {
              title: "輸入資料與金鑰",
              desc: "在左側輸入需要加密或解密的文字，並設定金鑰。AES 支援 128/192/256 位元金鑰。",
            },
            step2: {
              title: "選擇模式",
              desc: "根據需求選擇合適的加密模式（推薦 CBC）和填充方式（推薦 Pkcs7）。",
            },
            step3: {
              title: "執行操作",
              desc: "點擊加密或解密按鈕，結果將即時顯示在右側輸出框中，支援一鍵複製。",
            },
          },
        },
      },
    },
    fileTreeGenerator: {
      title: "檔案樹生成器",
      description: "生成專案目錄的 ASCII 樹狀結構，適用於文件和程式碼展示。",
      inputTitle: "選擇目錄",
      outputTitle: "生成結果",
      selectDirBtn: "選擇目錄",
      generateBtn: "生成樹狀圖",
      copyBtn: "複製結果",
      dragTip: "拖曳目錄到此處",
      ignorePatterns: "忽略模式 (以逗號分隔)",
      guide: {
        meaning: {
          title: "為什麼需要檔案樹生成器？",
          desc: "在編寫技術文件、README 或進行程式碼審查時，清晰的專案結構展示至關重要。ASCII 檔案樹直觀地顯示目錄層級，幫助開發者快速理解專案架構。",
        },
        features: {
          title: "功能特點",
          dragDrop: {
            title: "拖放支援",
            desc: "支援直接將資料夾拖曳到頁面，自動解析目錄結構。",
          },
          customIgnore: {
            title: "自定義忽略",
            desc: "支援自定義忽略檔案或資料夾（如 node_modules, .git），保持輸出簡潔。",
          },
        },
        usage: {
          title: "使用指南",
          step1: {
            title: "選擇或拖曳資料夾",
            desc: "點擊按鈕選擇資料夾，或直接將資料夾拖曳到指定區域。",
          },
          step2: {
            title: "配置忽略項",
            desc: "如有需要，修改預設的忽略模式以過濾掉不需要的檔案。",
          },
          step3: {
            title: "獲取結果",
            desc: "生成的樹狀圖將顯示在右側。點擊複製即可使用。",
          },
        },
      },
    },
    cssMinify: {
      title: "CSS 壓縮工具",
      description:
        "移除多餘的空格、註釋和換行符，精簡 CSS 程式碼體積，使其更適合生產環境部署。",
      inputTitle: "輸入 CSS",
      outputTitle: "壓縮結果",
      uploadBtn: "上傳 CSS 檔案",
      compressBtn: "壓縮 CSS",
      copyBtn: "複製結果",
      dragTip: "請拖曳 CSS 檔案",
      guide: {
        meaning: {
          title: "CSS 壓縮的意義",
          desc: "CSS 壓縮是網頁效能最佳化的核心環節。透過移除空白、註釋和冗餘程式碼，最佳化程式碼結構（合併規則、縮短顏色值），可將檔案體積減小 20-60%，顯著提升頁面載入速度，降低頻寬成本。這對生產環境部署、行動端開發、CDN 分發至關重要，直接影響使用者體驗和 SEO 排名。壓縮後的 CSS 保持功能完全不變，是前端工程化的標準實踐。",
        },
        features: {
          title: "功能特點",
          editor: {
            title: "編輯器 + 檔案雙流程",
            desc: "支援貼上 CSS、拖曳 .css 檔案或載入範例，工具會自動讀取並展示，支援一鍵清空和複製，方便隨時對比。",
          },
          stats: {
            title: "生產級指標看板",
            desc: "即時統計原始體積、壓縮後體積、壓縮率和預計 CDN 頻寬節省，幫助評估效能收益和支撐最佳化決策。",
          },
          lossless: {
            title: "無損壓縮規則",
            desc: "一鍵完成空白符與註釋刪除、零值最佳化 (0px→0)、顏色縮寫 (#ffffff→#fff)、屬性合併，確保最終呈現，完全不改變 CSS 行為。",
          },
          security: {
            title: "CI/CD 級別安全",
            desc: "全部邏輯在瀏覽器端完成，不上傳任何樣式檔案。一鍵複製或下載 style.min.css，即可安全接入建置流程。",
          },
        },
        usage: {
          title: "使用指南",
          step1: {
            title: "收集樣式",
            desc: "貼上 CSS，拖放 .css 檔案或載入範例，確認編輯器中顯示原始內容。",
          },
          step2: {
            title: "調整設定",
            desc: "選取「自動換行」方便檢視，預設開啟所有壓縮最佳化規則，無需額外配置。",
          },
          step3: {
            title: "輸出結果",
            desc: "點擊「壓縮 CSS」，核對無誤後，隨時複製、下載或直接替換專案中的/發佈檔案。",
          },
        },
        tech: {
          title: "技術介紹",
          principle: {
            title: "CSS 壓縮原理",
            desc: "CSS 壓縮透過去除冗餘字元（空格、換行、註釋）、最佳化程式碼結構（合併規則、縮短顏色值）、簡化語法（移除非必要分號、引號）來減小檔案大小，壓縮過程確保 CSS 功能完全不變，僅改變程式碼的物理表現，可將檔案減小 20-60%，顯著提升網頁載入速度。",
          },
          optimization: {
            title: "壓縮最佳化技術",
            desc: "CSS 壓縮包括多種最佳化技術：空白前移除（刪除空格、換行、縮排）、註釋清除、顏色值簡化 (#ffffff→#fff)、零值最佳化 (0px→0)、屬性合併 (margin 四個值合併)、選擇器去重、無用程式碼移除。進階壓縮還能支援屬性排序、媒體查詢合併、{'@'}import 內聯等，進一步減小體積。",
          },
          production: {
            title: "生產環境應用",
            desc: "CSS 壓縮是前端效能最佳化的關鍵環節，應用於生產建置流程 (Webpack、Vite、Gulp)、CDN 部署 (減少傳輸成本)、頁面最佳化 (提升 PageSpeed 評分)、行動端開發 (節省流量)。壓縮後的 CSS 通常需要保留原始碼版本用於偵錯，並使用 SourceMap 映射方便問題定位。",
          },
        },
      },
    },
  },
};
