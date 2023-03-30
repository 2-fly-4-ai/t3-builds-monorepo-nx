import styles from './category-cards.module.scss';

export function CategoryCards(props: CategoryCardsProps) {
  const mockList = [{
    title: 'FormWise',
    desc: 'Build AI tools using your favorite GPT prompts.',
    price: '$753/month'
  },
  {
    title: 'FormWise',
    desc: 'Build AI tools using your favorite GPT prompts.',
    price: '$753/month'
  },
  {
    title: 'FormWise',
    desc: 'Build AI tools using your favorite GPT prompts.',
    price: '$753/month'
  },
  {
    title: 'FormWise',
    desc: 'Build AI tools using your favorite GPT prompts.',
    price: '$753/month'
  },
  {
    title: 'FormWise',
    desc: 'Build AI tools using your favorite GPT prompts.',
    price: '$753/month'
  },
]
  return (
    <div className={styles['ui-cat-cards']}>
      {
        mockList?.map((item, i) => {
          return <div key={`cat-card-${i}`} className={styles['ui-cat-cards__card']}>
            <div>{item.title}</div>
            <div>{item.desc}</div>
            <div>{item.price}</div>
          </div>
        })
      }
    </div>
  );
}

/* eslint-disable-next-line */
export interface CategoryCardsProps {}

export default CategoryCards;
