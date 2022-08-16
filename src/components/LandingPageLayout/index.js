import HeaderSection from "../HeaderSection";
import FooterSection from "../FooterSection/index";
import logo from "../../../public/images/logo.png";

export default function Layout({ children }) {
  return (
    <>
      <HeaderSection logo={logo} layout={"LandingPageLayout"} />
      {children}
      <FooterSection />
    </>
  );
}
