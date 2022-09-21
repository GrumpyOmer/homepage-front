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
                当前所在地 <br />
                <h5>
                  {cityInfoRes.province}
                  {cityInfoRes.city}
                </h5>
              </h1>
              <h1>
                天气 <br />
                <h5>{res.lives[0].weather}</h5>
              </h1>
              <h1>
                温度 <br />
                <h5>{res.lives[0].temperature}</h5>
              </h1>
              <h1>
                空气湿度 <br />
                <h5>{res.lives[0].humidity}</h5>
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
