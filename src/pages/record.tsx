import styles from './record.less';

export default function Record() {
  interface dataObject {
    [date: string]: string;
    title: string;
    content: string;
  }
  const data: Array<dataObject> = [
    {
      date: '2022-08-25 17:32:00',
      title: '测试demo1',
      content: '是omer测试1',
    },
    {
      date: '2022-08-25 17:32:00',
      title: '测试demo2',
      content: '是omer测试2',
    },
  ];

  const list = data.map(function (v: dataObject, k: number): Object {
    return (
      <div>
        <div className={styles.date}>{v.date}</div>
        <h1>{v.title}</h1>
      </div>
    );
  });

  return <div>{list}</div>;
}
