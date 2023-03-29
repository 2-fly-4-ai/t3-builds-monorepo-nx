import Image from "next/image"
import Link from "next/link"
import styles from "./header-logo.module.scss"

const HeaderLogo = ({ label, logoInfo, wrapperStyle }: LogoType) => {
  return (
    <div className={styles[wrapperStyle]}>
      <span className="icon">
        <Link href={logoInfo?.href}>
          <Image
            src={logoInfo?.src}
            width={logoInfo?.width}
            height={logoInfo?.height}
            alt={logoInfo?.alt}
          />
        </Link>
      </span>
      <span className="label">{label}</span>
    </div>
  )
}

export type LogoType = {
  label: string
  wrapperStyle: string
  logoInfo: LogoInfo
}

type LogoInfo = {
  src: string
  width: number
  height: number
  alt: string
  href: string
}

export default HeaderLogo
