export default {
  menu: {
    dashboard: "대시보드",
    tools: "도구",
    crypto: "보안 및 암호화",
    devTools: "개발자 도구",
    cssMinify: "CSS 압축기",
    fileTreeGenerator: "파일 트리 생성기",
    tripleDes: "3DES 도구",
    aes: "AES 암호화",
    lightMode: "라이트 모드",
    darkMode: "다크 모드",
    systemMode: "시스템",
  },
  common: {
    switchLang: "언어 변경",
    loadExample: "예제 불러오기",
    uploadFile: "파일 업로드",
    clear: "지우기",
    cleared: "지워짐",
    copy: "복사",
    copySuccess: "클립보드에 복사됨",
    copyFail: "복사 실패",
    compress: "압축",
    compressSuccess: "압축 성공",
    compressFail: "압축 실패",
    inputEmpty: "내용을 입력하세요",
    fileLoaded: "파일 로드 성공",
    fileLoadFail: "파일 읽기 실패",
    dragTip: "파일을 여기에 드래그하세요",
    autoWrap: "자동 줄바꿈",
    result: "결과",
    size: "크기",
    rate: "비율",
  },
  tool: {
    crypto: {
      tripleDes: {
        title: "3DES 암호화 도구",
        description:
          "3DES 알고리즘을 사용하여 데이터를 암호화 및 복호화합니다. 다양한 모드와 패딩을 지원합니다.",
        input: "입력 내용",
        key: "키",
        mode: "암호화 모드",
        padding: "패딩 방식",
        encrypt: "암호화",
        decrypt: "복호화",
        output: "출력 결과",
        copy: "복사",
        clear: "지우기",
        error: "처리 실패",
        example: "예제 불러오기",
      },
      aes: {
        title: "AES 암호화 도구",
        description:
          "AES 알고리즘을 사용하여 데이터를 암호화 및 복호화합니다. 다양한 모드와 패딩을 지원합니다.",
        input: "입력 내용",
        key: "키",
        mode: "암호화 모드",
        padding: "패딩 방식",
        encrypt: "암호화",
        decrypt: "복호화",
        output: "출력 결과",
        copy: "복사",
        clear: "지우기",
        error: "처리 실패",
        example: "예제 불러오기",
        guide: {
          meaning: {
            title: "AES 암호화 소개",
            desc: "AES (Advanced Encryption Standard)는 현재 가장 널리 사용되는 대칭 암호화 알고리즘으로, 높은 보안성, 성능 및 유연성으로 인해 다양한 데이터 보호 시나리오에 널리 사용됩니다.",
          },
          features: {
            title: "기능",
            modes: {
              title: "다양한 모드 지원",
              desc: "ECB, CBC, CFB, OFB, CTR 등 다양한 암호화 모드를 지원하여 다양한 시나리오의 보안 요구 사항을 충족합니다.",
            },
            padding: {
              title: "유연한 패딩 방식",
              desc: "Pkcs7, ZeroPadding, Iso10126, NoPadding, AnsiX923 등 다양한 패딩 옵션을 제공하여 데이터 처리의 호환성을 보장합니다.",
            },
          },
          usage: {
            title: "사용 가이드",
            step1: {
              title: "데이터 및 키 입력",
              desc: "왼쪽에 암호화 또는 복호화할 텍스트를 입력하고 키를 설정하십시오. AES는 128/192/256 비트 키를 지원합니다.",
            },
            step2: {
              title: "모드 선택",
              desc: "필요에 따라 적절한 암호화 모드(CBC 권장)와 패딩 방식(Pkcs7 권장)을 선택하십시오.",
            },
            step3: {
              title: "실행",
              desc: "암호화 또는 복호화 버튼을 클릭하면 결과가 오른쪽 출력 상자에 실시간으로 표시되며 원클릭으로 복사할 수 있습니다.",
            },
          },
        },
      },
    },
    fileTreeGenerator: {
      title: "파일 트리 생성기",
      description:
        "프로젝트 디렉토리의 ASCII 트리 구조를 생성하여 문서 작성 및 코드 공유를 돕습니다.",
      inputTitle: "디렉토리 선택",
      outputTitle: "생성 결과",
      selectDirBtn: "디렉토리 선택",
      generateBtn: "트리 생성",
      copyBtn: "결과 복사",
      dragTip: "여기로 디렉토리를 드래그하세요",
      ignorePatterns: "무시할 패턴 (쉼표로 구분)",
      guide: {
        meaning: {
          title: "파일 트리 생성기의 의미",
          desc: "기술 문서나 README 작성, 코드 리뷰 시 프로젝트 구조를 명확하게 보여주는 것은 매우 중요합니다. ASCII 파일 트리는 디렉토리 계층 구조를 직관적으로 보여주어 개발자가 프로젝트 아키텍처를 빠르게 이해하도록 돕습니다.",
        },
        features: {
          title: "기능",
          dragDrop: {
            title: "드래그 앤 드롭 지원",
            desc: "폴더를 페이지로 직접 드래그하여 디렉토리 구조를 자동으로 파싱할 수 있습니다.",
          },
          customIgnore: {
            title: "사용자 정의 무시",
            desc: "출력을 간결하게 유지하기 위해 node_modules, .git 등 무시할 파일이나 폴더를 사용자 정의할 수 있습니다.",
          },
        },
        usage: {
          title: "사용 가이드",
          step1: {
            title: "폴더 선택 또는 드래그",
            desc: "버튼을 클릭하여 폴더를 선택하거나 지정된 영역으로 폴더를 직접 드래그하세요.",
          },
          step2: {
            title: "무시 패턴 설정",
            desc: "필요한 경우 기본 무시 패턴을 수정하여 원하지 않는 파일을 필터링하세요.",
          },
          step3: {
            title: "결과 확인",
            desc: "생성된 트리 구조가 오른쪽에 표시됩니다. 복사 버튼을 클릭하여 사용하세요.",
          },
        },
      },
    },
    cssMinify: {
      title: "CSS 압축기",
      description:
        "불필요한 공백, 주석 및 개행 문자를 제거하여 프로덕션 배포를 위해 CSS 파일 크기를 줄입니다.",
      inputTitle: "입력 CSS",
      outputTitle: "압축 결과",
      uploadBtn: "CSS 파일 업로드",
      compressBtn: "CSS 압축",
      copyBtn: "결과 복사",
      dragTip: "CSS 파일을 여기에 드래그",
      guide: {
        meaning: {
          title: "왜 CSS를 압축하나요?",
          desc: "CSS 압축은 웹 성능 최적화의 핵심 부분입니다. 공백, 주석 및 중복 코드를 제거하고 구조를 최적화(규칙 병합, 색상 단축)함으로써 파일 크기를 20-60% 줄일 수 있어 페이지 로드 속도를 크게 향상시키고 대역폭 비용을 줄일 수 있습니다. 이는 프로덕션 배포, 모바일 개발 및 CDN 배포에 중요하며 사용자 경험과 SEO 순위에 직접적인 영향을 미칩니다. 압축된 CSS는 전체 기능을 유지하며 프론트엔드 엔지니어링의 표준 관행입니다.",
        },
        features: {
          title: "기능",
          editor: {
            title: "에디터 + 파일 워크플로우",
            desc: "CSS 붙여넣기, .css 파일 드래그 또는 예제 불러오기를 지원합니다. 도구가 자동으로 내용을 읽고 표시하며, 쉬운 비교를 위해 원클릭 지우기 및 복사를 지원합니다.",
          },
          stats: {
            title: "프로덕션급 지표",
            desc: "원본 크기, 압축된 크기, 압축률 및 예상 CDN 대역폭 절감에 대한 실시간 통계는 성능 이점을 평가하고 최적화 결정을 지원하는 데 도움이 됩니다.",
          },
          lossless: {
            title: "무손실 압축",
            desc: "원클릭 공백 및 주석 제거, 0값 최적화(0px→0), 색상 축약(#ffffff→#fff) 및 속성 병합은 최종 출력이 CSS 동작을 전혀 변경하지 않도록 보장합니다.",
          },
          security: {
            title: "CI/CD 수준 보안",
            desc: "모든 로직은 브라우저에서 실행됩니다. 스타일 파일은 업로드되지 않습니다. 빌드 프로세스에 안전하게 통합하기 위해 원클릭으로 style.min.css를 복사하거나 다운로드하세요.",
          },
        },
        usage: {
          title: "사용 가이드",
          step1: {
            title: "스타일 수집",
            desc: "CSS를 붙여넣거나 .css 파일을 드래그하거나 예제를 불러와 에디터에 원본 내용이 표시되는지 확인하세요.",
          },
          step2: {
            title: "설정 조정",
            desc: '더 쉽게 보기 위해 "자동 줄바꿈"을 체크하세요. 모든 압축 최적화 규칙은 기본적으로 활성화되어 있으며 추가 구성이 필요하지 않습니다.',
          },
          step3: {
            title: "결과 출력",
            desc: '"CSS 압축"을 클릭하고 결과를 확인한 다음 언제든지 복사, 다운로드하거나 프로젝트/배포 파일을 직접 교체하세요.',
          },
        },
        tech: {
          title: "기술 소개",
          principle: {
            title: "CSS 압축 원리",
            desc: "CSS 압축은 중복 문자(공백, 개행, 주석)를 제거하고 코드 구조를 최적화(규칙 병합, 색상 단축)하며 구문을 단순화(불필요한 세미콜론/따옴표 제거)하여 파일 크기를 줄입니다. 이 과정은 CSS 기능이 변경되지 않도록 보장하고 물리적 표현만 변경하여 파일 크기를 20-60% 줄이고 로드 속도를 높입니다.",
          },
          optimization: {
            title: "최적화 기술",
            desc: "CSS 압축에는 공백 제거, 주석 지우기, 색상 단순화(#ffffff→#fff), 0값 최적화(0px→0), 속성 병합(마진 4값), 선택자 중복 제거 및 죽은 코드 제거 등 다양한 기술이 포함됩니다. 고급 압축은 속성 정렬, 미디어 쿼리 병합 및 {'@'}import 인라인화도 지원할 수 있습니다.",
          },
          production: {
            title: "프로덕션 적용",
            desc: "CSS 압축은 프론트엔드 성능 최적화의 핵심이며 프로덕션 빌드 흐름(Webpack, Vite, Gulp), CDN 배포(전송 비용 절감), 페이지 최적화(PageSpeed 점수 향상) 및 모바일 개발(데이터 절약)에 사용됩니다. 압축된 CSS는 디버깅을 위해 소스 맵이 필요한 경우가 많습니다.",
          },
        },
      },
    },
  },
};
