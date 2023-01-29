
import Logo from "@/assets/Logo.png"

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
         <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
                <img alt="logo" src={Logo} />
                <p className="my-5">
                    fjrghrghgrnjgr fgjgfgjgf fgjghgfkjf rfjhrfjkrrkj fjhhfjkggjhg fbnfgkh jgkggb ggkggkj ghjalhj fjjf fkghjggrjhg jmgthjtgj gfjkkgjg jgjgj rjjhrf.
                </p>
                <p> Evogym All Rights Reserved.</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Links</h4>
                <p className="my-5">massa aahad dhdhj djhdh</p>
                <p className="my-5">jsrfj fhfjfh fjhfj </p>
                <p>Ullamcorper Vivamus</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Contact Us</h4>
                <p className="my-5">massa aahad dhdhj gadh dha djhdh</p>
                <p>(234)750-28878</p>
            </div>
         </div>
    </footer>
  )
}

export default Footer