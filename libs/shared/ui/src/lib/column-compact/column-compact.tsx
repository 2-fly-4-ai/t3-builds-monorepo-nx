import Link from "next/link"
import UserStarIcon from "../../icons/UserStarIcon"
import styles from "./column-compact.module.scss"

const ColumnCompact = () => {
  const mockData = [
    {
      title: "This is the name of my new SaaS 👀",
      count: 4,
      linkText: "youtube.com",
      link: "https://www.youtube.com/watch?v=s8bgG94cxJI",
      category: "Software as a Service",
      commentCount: 5,
    },
    {
      title: "Dad of 3 launching solo startup on PH for first time! 🚀",
      count: 4,
      linkText: "youtube.com",
      link: "https://www.youtube.com/watch?v=s8bgG94cxJI",
      category: "Software as a Service",
      commentCount: 33,
    },
    {
      title: "This is the name of my new SaaS 👀",
      count: 4,
      linkText: "youtube.com",
      link: "https://www.youtube.com/watch?v=s8bgG94cxJI",
      category: "Software as a Service",
      commentCount: 5,
    },
    {
      title: "Dad of 3 launching solo startup on PH for first time! 🚀",
      count: 4,
      linkText: "youtube.com",
      link: "https://www.youtube.com/watch?v=s8bgG94cxJI",
      category: "Software as a Service",
      commentCount: 33,
    },
    {
      title: "This is the name of my new SaaS 👀",
      count: 4,
      linkText: "youtube.com",
      link: "https://www.youtube.com/watch?v=s8bgG94cxJI",
      category: "Software as a Service",
      commentCount: 5,
    },
    {
      title: "Dad of 3 launching solo startup on PH for first time! 🚀",
      count: 4,
      linkText: "youtube.com",
      link: "https://www.youtube.com/watch?v=s8bgG94cxJI",
      category: "Software as a Service",
      commentCount: 33,
    },
    {
      title: "This is the name of my new SaaS 👀",
      count: 4,
      linkText: "youtube.com",
      link: "https://www.youtube.com/watch?v=s8bgG94cxJI",
      category: "Software as a Service",
      commentCount: 5,
    },
    {
      title: "Dad of 3 launching solo startup on PH for first time! 🚀",
      count: 4,
      linkText: "youtube.com",
      link: "https://www.youtube.com/watch?v=s8bgG94cxJI",
      category: "Software as a Service",
      commentCount: 33,
    },
  ]
  return (
    <div className={styles["ui-col-compact"]}>
      {mockData?.map((item, i) => {
        return (
          <div
            key={`col-compact-${i}`}
            className={styles["ui-col-compact--row"]}
          >
            <UserStarIcon className='user-star-icon' />
            <div>{item.count}</div>
            <div className={styles["ui-col-compact--row--content"]}>
              <span className="title">{item.title}</span>
              <div className="desc">
                <span>
                  <Link href={item.link}>{item.linkText}</Link>
                </span>
                <span>{item.category}</span>
                <span>{item.commentCount} comments</span>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ColumnCompact
