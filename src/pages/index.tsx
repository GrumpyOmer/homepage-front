import styles from './index.less';
import Record from './record';

export default function IndexPage() {
  return (
    <div>
      <Title>Omer's Life Record</Title>
      <div className={styles.document}>
        <Left></Left>
        <Body>
          <Record />
        </Body>
        <Right></Right>
      </div>
      <Bottom></Bottom>
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
  return (
    <div className={styles.bottom}>
      <h1 style={{ color: '#6861ca' }}>{props.children}</h1>
    </div>
  );
}
