import ColumnCompact from '../../lib/column-compact/column-compact';
import ColumnWithCTA from '../../lib/column-with-cta/column-with-cta';
import ColumnWithDates from '../../lib/column-with-dates/column-with-dates';
import styles from './three-col-community.module.scss';

const ThreeColCommunity = () => {
  return (
    <div className={styles['ui-3-col-community__wrapper']}>
      <div className={styles['ui-3-col-community__left']}>
        <ColumnWithDates />
      </div>
      <div className={styles['ui-3-col-community__mid']}>
        <ColumnCompact />
      </div>
      <div className={styles['ui-3-col-community__right']}>
        <div className={styles['ui-3-col-community__right--col']}>
          <ColumnWithCTA title="Trending Groups" />
        </div>
        <div className={styles['ui-3-col-community__right--col']}>
          <ColumnWithCTA title="Partner Up" />
        </div>
      </div>
    </div>
  );
};

export default ThreeColCommunity;
