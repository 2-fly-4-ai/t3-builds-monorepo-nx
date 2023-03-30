import styles from './product-cards.module.scss';

export function ProductCards(props: ProductCardsProps) {
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
    <div className={styles['ui-product-cards']}>
      {
        mockList?.map((item, i) => {
          return <div key={`product-card-${i}`} className={styles['ui-product-cards__card']}>
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
export interface ProductCardsProps {}

export default ProductCards;
