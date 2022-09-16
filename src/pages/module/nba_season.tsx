import React from 'react';
import { GetRequest } from '../../tool/http';
import { useState } from 'react';
import { useEffect } from 'react';
import styles from './nba_season.less';

export default function NbaSeason() {
  const [gameList, setGameList] = useState(<div></div>);
  enum gameStatusMap {
    '未开赛' = 1,
    '进行中',
    '完赛',
    '延期',
  }
  const requestData = async function () {
    // 获取nba赛事信息
    let nabSeasonRequest: GetRequest = {
      Url: 'https://homepage-server-production.up.railway.app/fetchNbaSeason',
    };
    let res = await GetRequest(nabSeasonRequest);
    if (res.code == 200 && res.data != null) {
      let data = res.data.Result.Matchs.map(function (
        v: any,
        k: any,
      ): Object | undefined {
        // 过滤今天之前的比赛
        if (new Date(v.Date) >= new Date()) {
          var game = v.List.map(function (v1: any, k1: any): any {
            let status: string = gameStatusMap[v1.Status];
            return (
              <div key={k1} className={styles.record}>
                <h3 className={styles.team}>{v1.Team1}</h3> Vs{' '}
                <h3 className={styles.team}>{v1.Team2}</h3>
                <br />
                <div>
                  开始时间:{' '}
                  <h3 className={styles.status}>
                    {v1.TimeStart == '' ? '-' : v1.TimeStart}
                  </h3>
                </div>
                <div>
                  比分:{' '}
                  <h3 className={styles.status}>
                    {v1.Team1Score}-{v1.Team2Score}
                  </h3>
                </div>
                <div>
                  比赛状态:{' '}
                  <h3 className={styles.status}>
                    {status == '' ? '未知' : status}
                  </h3>
                </div>
              </div>
            );
          });

          return (
            <div key={k}>
              <h1 className={styles.week}>{v.Week}</h1>
              &nbsp; &nbsp; &nbsp;
              <h3 className={styles.date}>{v.Date}</h3>
              {game}
            </div>
          );
        }
      });
      setGameList(data);
    }
  };
  // useEffect(() => {
  //   requestData();
  // }, []);
  return (
    <div>
      {/* <h1 className={styles.title}>近期关注赛事</h1> */}

      {/* {gameList} */}
    </div>
  );
}
