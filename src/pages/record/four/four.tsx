import Img, { ImgInfo } from '@/tool/img';
import styles from './four.less';

export default function Four() {
  let img1: ImgInfo = {
    src: require('./img/X-japan-009.jpg'),
    info: (
      <img style={{ width: '500px' }} src={require('./img/X-japan-009.jpg')} />
    ),
  };
  let Player = (
    <audio controls autoPlay hidden>
      <source src="./C400003M5KKA3Ydw0O.mp3" type="audio/mp3"></source>
    </audio>
  );
  return (
    <div className={styles.four}>
      {Img([img1])}
      {Player}
      <div className={styles.box}>
        <h3>近期最大的惊喜就是发现了一支来自日本的传奇摇滚乐队：X JAPAN</h3>
        <h3>
          入坑曲是诞生于1989年的“摇滚三雨”之一：《endless
          rain》。这是何等伟大何等有感情有力量的音乐，一个人静下心来欣赏的时候彷佛身体里所有的悲伤都被唤醒，再被雨水冲走。
          虽是一首抒情风格的摇滚乐，但是整首曲子大气磅礴，无一丝颓废，更是给人一种全然的温柔，饱满的美，和坦荡的心碎。“let
          my heart, take in your tears, take in your
          memorries”，这个作品的伟大就在于悲壮，而不是悲伤。
        </h3>
        <h3>
          包括《Without You》《The Last Song》《Tears》《红》《Say
          Anything》《Rusty Nail》《Forever Love》《Week
          End》《Longing》等等在内的歌曲，X的创作真的太强太强了。
          X的歌有一种置之死地而后生的力量，一种毁灭的力量，一种重生的力量。
        </h3>
        <h3 style={{ color: 'rgb(186, 71, 89)' }}>
          很喜欢X队长Yoshiki在自传里的那句：
          <br />
          “痛苦是不会变老的，过三四十年，仍然一样。一切都会消失淡出这个世界。但那种感觉，痛苦永远不会消失。带着自己伤疤的人，他们依靠着我们的音乐，和我们一起走过生活。这是我们的音乐，抛开伤痕，那些不放弃未来继续生存的人，我们的音乐向那些人的灵魂诉说。”
        </h3>
        <h3>希望有一天有机会能够去现场看看X，看看Yoshiki。</h3>
        <h3>Now We Are X</h3>
      </div>
    </div>
  );
}
