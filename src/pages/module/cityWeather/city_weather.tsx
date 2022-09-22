import { useState } from 'react';
import React from 'react';
import { GetRequest } from '../../../tool/http';
import { useEffect } from 'react';
import styles from './city_weather.less';

export function CityWeather() {
  const [cityInfo, setCityInfo] = useState(<></>);
  let Info = async function () {
    // 获取城市信息
    let cityInfoRequest: GetRequest = {
      Url: 'https://restapi.amap.com/v3/ip',
      Param: { key: 'd194073788d4f9955037d1ec4b078f3c' },
    };
    let cityInfoRes = await GetRequest(cityInfoRequest);
    if (cityInfoRes.status == 1) {
      // 获取天气信息
      let weatherInfoRequest: GetRequest = {
        Url: 'https://restapi.amap.com/v3/weather/weatherInfo',
        Param: {
          key: 'd194073788d4f9955037d1ec4b078f3c',
          city: cityInfoRes.adcode,
        },
      };
      GetRequest(weatherInfoRequest).then(function (res: any) {
        if (res.code == 400) {
          console.log(res.message);
        } else if (res.status == 0) {
          console.log(res.infocode);
        } else {
          setCityInfo(
            <div style={styles.temp}>
              <h1>
                <img src={require('./img/location.png')} />
                <h3>
                  {cityInfoRes.province}
                  {cityInfoRes.city}
                </h3>
              </h1>
              <h1>
                <img src={require('./img/weather.png')} />
                <h3>{res.lives[0].weather}</h3>
              </h1>
              <h1>
                <img src={require('./img/temperature.png')} />
                <h3>{res.lives[0].temperature}</h3>
              </h1>
              <h1>
                <img src={require('./img/humidity.png')} />
                <h3>{res.lives[0].humidity}</h3>
              </h1>
            </div>,
          );
        }
      });
    }
  };
  useEffect(function () {
    Info();
  }, []);

  return <div>{cityInfo}</div>;
}
