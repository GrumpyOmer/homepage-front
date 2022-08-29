import styles from './one.less';

export default function One() {
  return (
    <div className={styles.one}>
      <h1>关于我</h1>
      <h3>
        一名来自中国广东省深圳市的服务端码农，未来规划去中国广东省惠州市惠阳区定居。
      </h3>
      <h1>要做的事</h1>
      <h3>
        在这里只是为了使自己了解些前端技能而搞的一个 react + ts + umi
        项目，同时想要记录分享一些自己的想法和目标
      </h3>
      <h1>喜欢做的事</h1>
      <ul>
        <h2>
          <li>打游戏</li>
        </h2>
        <h3>
          <li>
            &lt;<a href="http://xyq.163.com/">梦幻西游</a>
            &gt;十余年骨灰级玩家（2007 ~ current）
          </li>
        </h3>
        <h3>
          <li>
            &lt;<a href="https://www.nba2k.com/">NBA2K系列</a>
            &gt;十余年骨灰级玩家（2K08 ~ current）
          </li>
        </h3>
        <h3>
          <li>
            &lt;<a href="https://store.steampowered.com/">steam</a>
            &gt;大型单机游戏爱好者
          </li>
        </h3>
        <h2>
          <li>听摇滚乐</li>
        </h2>
        <h3>
          <li>
            &lt;
            <a href="https://en.wikipedia.org/wiki/Marilyn_Manson">
              marilyn manson
            </a>
            &gt;多年忠实粉丝（2017 ~ current）
          </li>
        </h3>
        <h3>
          <li>
            &lt;
            <a href="https://en.wikipedia.org/wiki/Guns_N%27_Roses">
              Guns N' Roses
            </a>
            &gt;多年忠实粉丝（2016 ~ current）
          </li>
        </h3>
        <h2>
          <li>运动</li>
        </h2>
        <h3>
          <li>
            篮球爱好者，大学计算机专业系篮球队替补一枚
            <br />
            NBA现役篮球巨星
            <a href="https://en.wikipedia.org/wiki/James_Harden">
              james harden
            </a>
            多年铁粉（2011 ~ current）
          </li>
        </h3>
      </ul>
    </div>
  );
}
