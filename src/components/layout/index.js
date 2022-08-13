import HeaderSection from "../HeaderSection";
import FooterSection from "../FooterSection/index";

export default function Layout({ children }) {
  return (
    <>
        <HeaderSection />
      {children}
        <FooterSection />
    </>
  );
}
