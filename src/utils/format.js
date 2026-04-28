/**
 * 숫자를 3자리마다 콤마가 찍힌 문자열로 변환합니다.
 * @param {number | string} price 
 * @returns {string}
 */
export const priceComma = (price) => {
  if (!price && price !== 0) return "0"; // 데이터가 없을 때 방어 코드
  
  // 숫자로 변환 후 정규식 적용
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};