import Img, { ImgInfo } from '@/tool/img';
import styles from './three.less';

export default function Three() {
  let img1: ImgInfo = {
    src: require('./img/img1.jpg'),
    info: <img style={{ width: '500px' }} src={require('./img/img1.jpg')} />,
  };
  let img2: ImgInfo = {
    src: require('./img/img2.jpg'),
    info: <img style={{ width: '500px' }} src={require('./img/img2.jpg')} />,
  };
  let img3: ImgInfo = {
    src: require('./img/img3.jpg'),
    info: <img style={{ width: '500px' }} src={require('./img/img3.jpg')} />,
  };
  return (
    <div className={styles.three}>
      <div className={styles.box}>
        <h3>
          2022年国庆假期没有像过往几年一样回到老家，因为老家从九月底开始受疫情影响截止现在已经封城了十多天了。
        </h3>
        <h3>希望那边能少点折腾快点好起来吧，泰和加油</h3>
      </div>
      {Img([img3])}
      <div className={styles.box}>
        <h3>
          苟在深圳休那么多天的假也确实让人觉得无聊，所以跟一位同样假期呆在深圳的朋友一拍即合，一起去办了各自人生中的第一张健身卡
        </h3>
      </div>
      {Img([img1])}
      <div className={styles.box}>
        <h3>
          说说我对健身的看法吧。毕竟我是一名码农，码农的职业病在当今这个内卷盛世下尤为常见：尿酸高、虚胖、脂肪肝。。。归根究底还是由于工作的时间过于饱和，特别是在一线城市为了工作大部分人日常都是早出晚归，长时间的精神压抑和得不到锻炼所导致的。庆幸的是我早几年就已经意识到了这点，晚上加班后回到家哪怕已经10点只要有精力就会去夜跑个几公里。
        </h3>
      </div>
      {Img([img2])}
      <div className={styles.box}>
        <h3>
          但是这种情况在今年发生了改变，深圳大规模的疫情导致之前跑步的场所全部都拿来做成了核酸采样亭，而且一持续就是快一年的时间。这给天性就懒惰的自己带来了一个能够轻易说服自己的理由：“没地方锻炼！”，随之而来的后果就是人变得不自律，发福，变得更懒了。
        </h3>
        <h3>
          接下来半年努力健身吧，人一长胖果然就会失去自律，要做个自律的人。
        </h3>
      </div>
    </div>
  );
}
