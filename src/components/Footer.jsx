import styles from "../style"
import { logo } from "../assets"
import { footerLinks } from "../constants"

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start mr-10">
          <img src={logo} alt="logo" className="w-[266px] h-[72px] object-contain"/>
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>A new way to make the payments easy, reliable and secure.</p>
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerLink) => (
            <div key={footerLink.key} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">{footerLink.title}</h4>
              <ul className="list-none mt-4">
                {footerLink.links.map((link, index) => (
                  <li key={link.name} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary mb-3 } `}>
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-between items-center pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          2024 HooBank. All Rights Reserved.
        </p>
        <div className="flex flex-row">
          <p className="text-white font-poppins">Made with ❤️ by InnoproTech</p>
        </div>
      </div>
    </section>
  )
}

export default Footer