import styles from './index.less';
import List from './record/list/list';
import React from 'react';
import One from './record/one/one';
import { NavLink } from 'umi';
import { GetRequest } from '../tool/http';
import { useState } from 'react';
import NbaSeason from './module/nbaSeason/nba_season';
import { useEffect } from 'react';
import Two from './record/two/two';
import fetchJsonp from 'fetch-jsonp';
import { CityWeather } from './module/cityWeather/city_weather';
interface PublicPageParam {
  Body?: React.FC;
  Left?: React.FC;
  Right?: React.FC;
  Bottom?: React.FC;
}

export default function IndexPage(props: any) {
  let page = props.location.query.page;
  let pageParam: PublicPageParam = {
    Bottom: PublicBottom,
    Left: CityWeather,
  };
  switch (page) {
    case 'one':
      pageParam.Body = One;
      break;

    case 'two':
      pageParam.Body = Two;
      break;
    default:
      pageParam.Body = List;
      break;
  }

  return <PublicPage {...pageParam}></PublicPage>;
}

function PublicBottom() {
  let wechat = <img src={require('../img/wechat.png')} />;
  let qq = <img src={require('../img/qq.png')} />;
  let github = (
    <a href="https://github.com/GrumpyOmer">
      <img src={require('../img/github.png')} />
      <h3>My GitHub</h3>
    </a>
  );
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <div>
        {wechat} <h3>GrumpyOmer</h3>
      </div>
      <div>{github}</div>
      <div>
        {qq} <h3>353286116</h3>
      </div>
    </div>
  );
}

function PublicPage(props: PublicPageParam) {
  return (
    <div style={{ height: '100%', backgroundColor: 'rgb(241, 236, 228)' }}>
      <Title>
        <NavLink
          to="/"
          activeStyle={{
            color: 'rgb(68, 149, 211)',
          }}
        >
          Omer's Life Record
        </NavLink>
      </Title>
      <div className={styles.document}>
        <Left>{props.Left ? <props.Left /> : null}</Left>
        <Body>{props.Body ? <props.Body /> : null}</Body>
        <Right>{props.Right ? <props.Right /> : null}</Right>
      </div>
      <Bottom>{props.Bottom ? <props.Bottom /> : null}</Bottom>
    </div>
  );
}

function Title(props: any) {
  return (
    <div className={styles.title}>
      <h1 style={{ color: '#6861ca' }}>{props.children}</h1>
    </div>
  );
}

function Left(props: any) {
  return <div className={styles.left}>{props.children}</div>;
}

function Right(props: any) {
  return <div className={styles.right}>{props.children}</div>;
}

function Body(props: any) {
  return <div className={styles.body}>{props.children}</div>;
}

function Bottom(props: any) {
  return <div className={styles.bottom}>{props.children}</div>;
}
