import * as S from './Weather.style';
import { useState, useEffect } from 'react';
import { LuMapPin, } from 'react-icons/lu';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

function Weather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchWeather = () => {
    setLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      async ({ coords }) => {
        try {
          const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${API_KEY}&units=metric&lang=kr`
          );
          if (!res.ok) throw new Error('날씨 정보를 가져올 수 없어요');
          const data = await res.json();
          setWeather(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      },
      () => {
        setError('위치 접근 권한이 필요합니다');
        setLoading(false);
      }
    );
  };

  // 마운트될 때 실행
  useEffect(() => {
    fetchWeather();
  }, []);

  // 1. 로딩 중일 때
  if (loading) return <WeatherSkeleton />;

  // 2. 에러 났을 때 (여기에 다시 시도 버튼 배치)
  if (error) {
    return (
      <S.WeatherWrapper>
        <S.ErrorCard>
          <p>{error}</p>
          <p style={{ fontSize: '12px', color: '#888' }}>
          브라우저 주소창 왼쪽의 <b>[자물쇠]</b> 아이콘을 눌러<br />
          위치 권한을 '허용'으로 바꾼 후 새로고침 해주세요.
        </p>
          <button onClick={fetchWeather}>날씨 갱신</button>
          <button onClick={() => window.location.reload()}>페이지 새로고침</button>
        </S.ErrorCard>
      </S.WeatherWrapper>
    );
  }

  // 3. 데이터가 성공적으로 로드되었을 때
  return (
    <S.WeatherWrapper>
      <S.WeatherCard>
        <p className="city"><LuMapPin size={16} /><span>{weather.name}</span></p>
        <p className="temp">{Math.round(weather.main.temp)}°C</p>
        <p className="desc">{weather.weather[0].description}</p>
        <div className="detail">
          <div className='detail-humidi'>
            <span>습도</span>
            <strong>{weather.main.humidity}%</strong>
          </div>
          <div className='detail-feels'>
            <span>체감온도</span>
            <strong>{Math.round(weather.main.feels_like)}°C</strong>
          </div>
        </div>
      </S.WeatherCard>
    </S.WeatherWrapper>
  );
}

function WeatherSkeleton() {
   return (

    <S.WeatherWrapper>
      <S.WeatherCard className='skeleton'>
        <p className="city"><LuMapPin size={16} /></p>
        <p className="temp"></p>
        <p className="desc"></p>
        <div className="detail">
          <div className='detail-humidi'>
            <span>습도</span>
            <strong></strong>
          </div>
          <div className='detail-feels'>
            <span>체감온도</span>
            <strong></strong>
          </div>
        </div>
      </S.WeatherCard>
    </S.WeatherWrapper>

  );
}

export default Weather;