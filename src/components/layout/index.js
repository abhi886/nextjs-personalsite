import HeaderSection from "../HeaderSection";
import FooterSection from "../FooterSection/index";

export default function Layout({ children }) {
  return (
    <>
      <div className='px-4 py-2 bg-personal_blue'>
        <HeaderSection />
      </div>
      {children}
      <div className='bg-personal_blue'>
        <FooterSection />
      </div>
    </>
  );
}
