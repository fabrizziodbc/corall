import { Footer } from "../Footer";
import Header from "../Header";
import { Whatsapp } from "../Whatsapp";


  

const Layout = (props) => (
  <>
    <Whatsapp />
    <Header />
   
      {props.children}
      <Footer />
    
  </>
);
export { Layout };
