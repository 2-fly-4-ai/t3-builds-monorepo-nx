import styles from './column-filter.module.scss';

export function ColumnFilter(props: ColumnFilterProps) {
  const mockList = [
    {
      label: 'Sort By',
      value: 'Recently Updated',
    },
    {
      label: 'Category',
      value: 'Anything',
    },
    {
      label: 'Business Model',
      value: 'Anything',
    },
    {
      label: 'Monthly Revenue',
      value: 'Any Amount',
    },
    {
      label: 'Search',
      value: 'All Products',
    },
    {
      label: 'Founders',
      value: 'Any Number',
    },
  ];
  return (
    <div className={styles['container']}>
      {mockList?.map((item, i) => {
        return <div key={`col-filter-${i}`} className={styles['ui-col-filter__item']}>
          <div className='label'>{item.label}</div>
          <div className='value'>{item.value}</div>
        </div>
      })}
    </div>
  );
}

/* eslint-disable-next-line */
export interface ColumnFilterProps {}

export default ColumnFilter;
