import SearchIcon from "@/icons/SearchIcon"
import cx from "classnames"
import Link from "next/link"
import Logo, { LogoType } from "../Logo/Logo"
import styles from "./header.module.scss"

const Header = ({ wrapperStyle, menuStyle, logo, menuItems, showSearch }: Props) => {
  return (
    <div className={cx(styles["ui-header__wrapper"], styles[wrapperStyle])}>
      <div
        className={cx(
          styles["ui-header__wrapper--menu"],
          styles[menuStyle ?? ""]
        )}
      >
        {menuItems?.map((item, i) => {
          return (
            <Link key={`menu-item-${i}`} href={item.link}>
              {item.label}
            </Link>
          )
        })}
      </div>
      <Logo {...logo} />
      <div className={cx(styles["ui-header__wrapper--right"])}>
        {showSearch ? <Link href='/'><SearchIcon className='search-icon'/></Link> : null}
        Pic here
        </div>
    </div>
  )
}

type Props = {
  wrapperStyle: string
  menuStyle?: string
  showHamburger?: boolean
  showSearch?: boolean
  userInfo?: UserInfo
  menuItems?: MenuItem[]
  logo: LogoType
}

type UserInfo = {
  notifCount: number
  link: string
  photoUrl: string
}

type MenuItem = {
  label: string
  link: string
}

export default Header
