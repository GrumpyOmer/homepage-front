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
  ];

  let list = data.map(function (v: dataObject, k: number): Object {
    let path: string = '?page=';
    return (
      <div key={k}>
        <div className={styles.date}>
          {v.date}
          &nbsp; &nbsp; &nbsp;
          <h1 className={styles.record}>
            <NavLink
              to={path.concat(v.page)}
              activeStyle={{
                color: 'rgb(68, 149, 211)',
              }}
            >
              {v.title}
            </NavLink>
          </h1>
        </div>
      </div>
    );
  });

  return <div className={styles.list}>{list}</div>;
}
