import styles from './list.less';
import { Link } from 'umi';

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
      title: '一些美好的回忆',
      page: 'two',
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
            <Link to={path.concat(v.page)}>{v.title}</Link>
          </h1>
        </div>
      </div>
    );
  });

  return <div className={styles.list}>{list}</div>;
}
