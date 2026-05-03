import * as S from './Weather.style';
import { useState, useEffect } from 'react';
import { LuMapPin, } from 'react-icons/lu';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

function getWeatherDesc(id) {
  if (id >= 200 && id < 300) return '천둥번개';
  if (id >= 300 && id < 400) return '이슬비';
  if (id >= 500 && id < 510) return '비';
  if (id === 511)             return '진눈깨비';
  if (id >= 511 && id < 600) return '소나기';
  if (id >= 600 && id < 700) return '눈';
  if (id >= 700 && id < 800) return '안개';
  if (id === 800)             return '맑음';
  if (id === 801)             return '구름 조금';
  if (id === 802)             return '구름 많음';
  if (id >= 803)              return '흐림';
  return '알 수 없음';
}

function getWindDirection(deg) {
  const dirs = ['북', '북동', '동', '남동', '남', '남서', '서', '북서'];
  return dirs[Math.round(deg / 45) % 8];
}

function Weather() {
  const [weather, setWeather] = useState(null); // Data
  const [isLoading, setIsLoading] = useState(true); // loadign
  const [error, setError] = useState(null); // Error


  async function fetchWeather(coords) {
    try{
      const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${API_KEY}&units=metric&lang=kr`
      );
      if (!res.ok) throw new Error('날씨 정보를 가져올 수 없어요');
      const data = await res.json();
      setWeather(data);
    }catch(err){
      setError(err.message); 
    }finally{
      setIsLoading(false);
    }
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => fetchWeather(position.coords),
      () => fetchWeather({ latitude: 37.5665, longitude: 126.9780 })
    );
    
  }, []); 

  if (isLoading) return <WeatherSkeleton/>; 
  if (error) return <div>{error}</div>; 
  if (!weather) return null; 

  return (
    <S.WeatherWrapper>
      <S.WeatherCard>
        <p className="city"><LuMapPin size={16} /><span>{weather.name}</span></p>
        <p className="temp">{Math.round(weather.main.temp)}°C</p>
        <p className="desc">{getWeatherDesc(weather.weather[0].id)}</p>
        <div className="detail">
          <div className='detail-humidi'>
            <span>습도</span>
            <strong>{weather.main.humidity}%</strong>
          </div>
          <div className='detail-wind'>
            <span>바람</span>
            <strong>{getWindDirection(weather.wind.deg)} {weather.wind.speed.toFixed(1)}m/s</strong>
          </div>
          <div className='detail-feels'>
            <span>체감온도</span>
            <strong>{Math.round(weather.main.feels_like)}°C</strong>
          </div>
        </div>
      </S.WeatherCard>
    </S.WeatherWrapper>
  );

  function WeatherSkeleton() {
    return (
      <S.WeatherWrapper>
        <S.WeatherCard>
          <S.Skeleton style={{ width: '80px', height: '21px' }} />
          <S.Skeleton style={{ width: '100px', height: '45px', margin: '29px auto 0' }} />
          <S.Skeleton style={{ width: '50px', height: '18px', margin: '10px auto 20px' }} />

          <div className="detail">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', flex: 1 }}>
              <S.Skeleton style={{ width: '28px', height: '14px' }} />  
              <S.Skeleton style={{ width: '36px', height: '16px' }} /> 
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', flex: 1 }}>
              <S.Skeleton style={{ width: '28px', height: '14px' }} />
              <S.Skeleton style={{ width: '52px', height: '16px' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', flex: 1 }}>
              <S.Skeleton style={{ width: '40px', height: '14px' }} />
              <S.Skeleton style={{ width: '36px', height: '16px' }} />
            </div>
          </div>

        </S.WeatherCard>
      </S.WeatherWrapper>
    );
  }

}


export default Weather;