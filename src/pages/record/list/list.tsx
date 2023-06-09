import styles from './list.less';
import { NavLink } from 'umi';

export default function List() {
  interface dataObject {
    date: string;
    title: string;
    page: string;
  }
  const data: Array<dataObject> = [
    {
      date: '2022-08-29',
      title: '关于我',
      page: 'one',
    },
    {
      date: '2022-09-09',
      title: '1983创意小镇的回忆',
      page: 'two',
    },
    {
      date: '2022-10-04',
      title: '回归自律',
      page: 'three',
    },
    {
      date: '2022-10-12',
      title: 'We Are X',
      page: 'four',
    },
    // {
    //   date: '2023-08-03',
    //   title: '聊聊最近的心态变化',
    //   page: 'five',
    // },
  ];

  let list = data.map(function (v: dataObject, k: number): Object {
    let path: string = '?page=';
    return (
      <div key={k}>
        <div className={styles.date}>
          {v.date}
          &nbsp; &nbsp; &nbsp;
          <h1 className={styles.record}>
            <NavLink to={path.concat(v.page)}>{v.title}</NavLink>
          </h1>
        </div>
      </div>
    );
  });

  return <div className={styles.list}>{list}</div>;
}
