import styles from './two.less';
import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import Img, { ImgInfo } from '../../tool/img';
export default function Two() {
  let memory1: ImgInfo = {
    src: require('../../img/memory01.png'),
    info: (
      <img style={{ width: '500px' }} src={require('../../img/memory01.png')} />
    ),
  };

  let memory2: ImgInfo = {
    src: require('../../img/memory02.png'),
    info: (
      <img style={{ width: '210px' }} src={require('../../img/memory02.png')} />
    ),
  };

  let memory3: ImgInfo = {
    src: require('../../img/memory03.png'),
    info: (
      <img style={{ width: '200px' }} src={require('../../img/memory03.png')} />
    ),
  };

  let memory4: ImgInfo = {
    src: require('../../img/memory04.png'),
    info: (
      <img style={{ width: '150px' }} src={require('../../img/memory04.png')} />
    ),
  };

  let memory5: ImgInfo = {
    src: require('../../img/memory05.png'),
    info: (
      <img style={{ width: '200px' }} src={require('../../img/memory05.png')} />
    ),
  };

  let memory6: ImgInfo = {
    src: require('../../img/memory06.png'),
    info: (
      <img style={{ width: '265px' }} src={require('../../img/memory06.png')} />
    ),
  };

  let memory7: ImgInfo = {
    src: require('../../img/memory07.png'),
    info: (
      <img style={{ width: '192px' }} src={require('../../img/memory07.png')} />
    ),
  };

  let memory8: ImgInfo = {
    src: require('../../img/memory08.png'),
    info: (
      <img style={{ width: '192px' }} src={require('../../img/memory08.png')} />
    ),
  };
  let memory9: ImgInfo = {
    src: require('../../img/memory09.jpeg'),
    info: (
      <img
        style={{ width: '192px' }}
        src={require('../../img/memory09.jpeg')}
      />
    ),
  };
  let memory10: ImgInfo = {
    src: require('../../img/memory10.jpeg'),
    info: (
      <img
        style={{ width: '192px' }}
        src={require('../../img/memory10.jpeg')}
      />
    ),
  };
  let memory11: ImgInfo = {
    src: require('../../img/memory11.jpeg'),
    info: (
      <img
        style={{ width: '192px' }}
        src={require('../../img/memory11.jpeg')}
      />
    ),
  };
  let memory12: ImgInfo = {
    src: require('../../img/memory12.jpeg'),
    info: (
      <img
        style={{ width: '192px' }}
        src={require('../../img/memory12.jpeg')}
      />
    ),
  };

  return (
    <div className={styles.two}>
      <h3>
        今天翻了翻自己的微博历史记录，翻到一条自己2019年发的微博，回忆顿时涌上心头，让我有了强烈的想法决定记录点什么，就记录下这段回忆吧
      </h3>
      {Img([memory1])}
      <h3>
        2018年对于很多人来说都是难忘的一年，我也是从2018年开始在深圳参加工作，去了我软件开发生涯的第一家公司，这家公司位于广东省深圳市龙岗区南新路15号-1983创意小镇
      </h3>
      <div className={styles.img1}>
        {Img([
          memory2,
          memory3,
          memory7,
          memory8,
          memory9,
          memory10,
          memory11,
          memory12,
          memory4,
          memory5,
          memory6,
        ])}
      </div>
      <div className={styles.box}>
        <h3>
          在这里度过了一段非常愉快的时光，认识了一群很“菜”的同事，最重要的是那时候大家都对未来充满希望
          <br />
          （现今大家早已各奔东西，大部分人都已离开深圳）
        </h3>

        <h3>
          在离开那里的后面几年，我都有陆陆续续的节假日抽时间再回到那边看看，看着园区一点点的变大，人一点点的变多。回想起来，那段岁月里的自己是热爱生活、积极向上、对未来充满无限希望的，可惜那些时光再也回不去了
        </h3>

        <h3>
          就在心里种一棵树吧，总有一天我会再次回到那个属于我内心世界里的1983创意小镇
        </h3>
      </div>
    </div>
  );
}
