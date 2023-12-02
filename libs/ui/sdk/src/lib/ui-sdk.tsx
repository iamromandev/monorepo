import styles from './ui-sdk.module.scss';

/* eslint-disable-next-line */
export interface UiSdkProps {}

export function UiSdk(props: UiSdkProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiSdk!</h1>
    </div>
  );
}

export default UiSdk;
