// import UserStarIcon from "@/icons/UserStarIcon"
import styles from "./column-with-cta.module.scss"


const ColumnWithCTA = ({ title }: Props) => {
  const mockList = [
    {
      title: "Saas SEO",
      cta: "Join",
    },
    {
      title: "Product Management",
      cta: "Join",
    },
    {
      title: "One Person Businesses",
      cta: "Join",
    },
    {
      title: "Reddit",
      cta: "Join",
    },
    {
      title: "Feedback",
      cta: "Join",
    },
    {
      title: "domains names for sale",
      cta: "Join",
    },
  ]
  return (
    <div className={styles["ui-col-w-cta"]}>
      <h3>{title}</h3>

      {mockList?.map((item, i) => {
        return (
          <div
            key={`col-with-cta-${i}`}
            className={styles["ui-col-w-cta--row"]}
          >
            <div className={styles["ui-col-w-cta--row--left"]}>
              {/* <UserStarIcon className="user-star-icon" /> */}
              <span className="title">{item.title}</span>
            </div>

            <span className="cta">{item.cta}</span>
          </div>
        )
      })}
    </div>
  )
}

type Props = {
  title: string
}

export default ColumnWithCTA
