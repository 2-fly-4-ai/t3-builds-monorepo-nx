import styles from './column-with-dates.module.scss';

const ColumnWithDates = () => {
  const mockList = [
    {
      month: 'APR',
      day: 5,
      title: 'IndieBeers #2 // Munich Meetup',
      desc: 'Munich, Germany',
    },
    {
      month: 'APR',
      day: 6,
      title: 'Silicon Valley Bootstrappers Breakfast (Online)',
      desc: 'Remote',
    },
    {
      month: 'APR',
      day: 7,
      title: 'IndieBeers #2 // Munich Meetup',
      desc: 'Munich, Germany',
    },
    {
      month: 'APR',
      day: 8,
      title: 'Silicon Valley Bootstrappers Breakfast (Online)',
      desc: 'Remote',
    },
    {
      month: 'APR',
      day: 9,
      title: 'IndieBeers #2 // Munich Meetup',
      desc: 'Munich, Germany',
    },
    {
      month: 'APR',
      day: 6,
      title: 'Silicon Valley Bootstrappers Breakfast (Online)',
      desc: 'Remote',
    },
    {
      month: 'APR',
      day: 10,
      title: 'IndieBeers #2 // Munich Meetup',
      desc: 'Munich, Germany',
    },
    {
      month: 'APR',
      day: 11,
      title: 'Silicon Valley Bootstrappers Breakfast (Online)',
      desc: 'Remote',
    },
  ];
  return (
    <div className={styles['ui-col-w-dates']}>
      {mockList?.map((item, i) => {
        return (
          <div
            key={`col-with-dates-${i}`}
            className={styles['ui-col-w-dates--row']}
          >
            <div className={styles['ui-col-w-dates--row--date']}>
              <span>{item.month}</span>
              <span>{item.day}</span>
            </div>
            <div className={styles['ui-col-w-dates--row--content']}>
              <span className="title">{item.title}</span>
              <span>{item.desc}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ColumnWithDates;
