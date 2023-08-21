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
        <h3>近期最大的惊喜就是发现了一支来自日本的传奇摇滚乐队：X Japan</h3>
        <p>
          入坑曲是诞生于1989年的“摇滚三雨”之一：「endless
          rain」。这是何等伟大何等有感情有力量的音乐。近期每当因为工作或是生活琐事导致心情很浮躁的时候脑子里总会第一时间想到这首歌，特别是「the
          last
          live」版，当你被工作或是生活折磨到心里开始出现麻木的情况下，有一股力量能够把你内心深处的共情能力唤醒并帮你抵御这些麻木所带来的负面情绪，我想这就是这首歌带给我最大的意义。
        </p>
        <p>
          虽是一首抒情风格的摇滚乐，但是整首曲子大气磅礴，无一丝颓废，更是给人一种全然的温柔，饱满的美，和坦荡的心碎。“let
          my heart, take in your tears, take in your
          memorries”，这个作品的伟大就在于悲壮。
        </p>
        <p>
          包括《Without You》《The Last Song》《Tears》《红》《Say
          Anything》《Rusty Nail》《Forever Love》《Week
          End》《Longing》等等在内的歌曲，X的创作真的太强太强了。
        </p>
        <p>
          很喜欢x的自传《we are x》里的那句：
          <span style={{ color: 'rgb(186, 71, 89)' }}>
            {' '}
            “痛苦是不会变老的，过三四十年，仍然一样。一切都会消失淡出这个世界。但那种感觉，痛苦永远不会消失。带着自己伤疤的人，他们依靠着我们的音乐，和我们一起走过生活。这是我们的音乐，抛开伤痕，那些不放弃未来继续生存的人，我们的音乐向那些人的灵魂诉说。”
          </span>
        </p>
        <p>
          乐队的创始人和队长Yoshiki是一位极富有灵性的音乐家，他在音乐和演出中表达出的情感深度让我非常震撼。X
          Japan音乐中涉及的情感、痛苦、希望和挣扎给人一股置之死地而后生的力量，一股毁灭的力量，一股重生的力量。
        </p>
        <p>
          除了音乐外，X
          Japan还因为其成员个人的经历和乐队整体的生命历程而体现出坚韧、毅力和奋斗的精神。乐队曾经历了成员之间的离世和重大变革，但他们仍然在音乐道路上坚持不懈，表现出对音乐事业的热爱和执着，让人感受到了无限的生命力与希望。他们的音乐不仅仅是音乐本身，更是一种表达情感、寻找灵魂共鸣的方式。
        </p>
        <p>希望有一天有机会能够去现场看看X，看看Yoshiki。</p>
        <p>We Are X ❌</p>
      </div>
    </div>
  );
}
