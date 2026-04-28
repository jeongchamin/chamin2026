
//공통으로 쓸 사이즈 (최대 너비 등)
const common = {
  maxWidth: '1200px',
  mobilePadding: '0 20px',
  radius:'24px',

  media:{
    mobile: '@media (max-width: 768px)',
    tablet: '@media (max-width: 1024px)',
  },
  fontSize: {
    //16px 기준
    xs:   '0.75rem',    // 12px
    sm:   '0.8125rem',  // 13px
    md:   '0.875rem',   // 14px
    base: '0.9375rem',  // 15px 
    lg:   '1rem',       // 16px
    xl:   '1.125rem',   // 18px
    xxl:  '1.25rem',    // 20px
    xxxl: '1.5rem',     // 24px
    h2:   '2rem',       // 32px
    hero: '3rem',       // 48px
  },
};

//☀️ 라이트 모드
export const lightTheme = {
  ...common, // 공통 사이즈 합치기
  isDark: false,  
  colors: {
    background: '#F5F5F5', // 배경색
    contentsBg : '#ffffff', // 콘텐츠 배경

    primaryBtn: '#ffffff', // 메인 버튼 배경
    primaryBtnBorder: '#E5E5E5', // 메인 버튼 보더
    primaryBtnText: '#3A3838',  // 메인 버튼 컬러

    gradientBtn: 'linear-gradient(90deg, #F8BA4B 0%, #FF908C 100%)', // 그라디언트 버튼 배경
    gradientBtnBorder: '#ffffff', // 메인 버튼 보더
    gradientBtnEffects: 'inset 2px 4px 4px 2px rgba(255, 255, 255, 0.25), 0px 0px 8px 3px rgba(255, 146, 50, 0.30);',

    text: '#3A3838', // 메인 텍스트 컬러
    muted: '#939393', // 흐릿한 컬러
    accent: '#FF5B32', // 포인트 컬러
    accentMuted: '#FFF0ED', 

    primaryBorder : '#e9e9e9', 
    secontaryBorder : '#5E5E5E',
  
    
    primary: '#1a1a1a', // 핀터레스트 시안의 다크한 버튼색
    secondary: '#f1f1f1', // 검색창 배경색

    secondaryBtn: '#f1f1f1', // 📌 보조 버튼 (연회색)
  },

  fontWeight: {
    regular: 400,
  },
};


// 🌙 다크 모드
export const darkTheme = {
  ...common, // 공통 사이즈 합치기
  isDark: true,
  colors: {
    background: '#03081B',  // 배경색 ok
    contentsBg : '#1D2130', // 콘텐츠 배경

    primaryBtn: '#1D2130', // 메인 버튼 배경
    primaryBtnBorder: '#262A45', // 메인 버튼 보더
    primaryBtnText: '#1486CF',  // 메인 버튼 컬러

    gradientBtn: 'linear-gradient(90deg, #10F5DE 0%, #0068D5 100%)', // 그라디언트 버튼 배경
    gradientBtnBorder: '#A4FBFF', // 메인 버튼 보더
    gradientBtnEffects: 'inset 2px 4px 4px 2px rgba(255, 255, 255, 0.25), 0px 0px 8px 3px rgba(105, 218, 255, 0.3);',

    text: '#ffffff', // 메인 텍스트 컬러
    muted: '#939393', // 흐릿한 컬러
    accent: '#0068D5', // 포인트 컬러
    accentMuted: '#03081B', 

    primaryBorder : '#161b27', 
    secontaryBorder : '#DDDDDD',


    primary: '#ffffff',
    secondary: '#2c2c2c',
    secondaryBtn: '#2c2c2c', // 📌 보조 버튼 (진회색)
  },
  fontWeight: {
    regular: 200,
  },
};