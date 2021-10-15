import { Contact } from "../../components/Contact";
import { Portada } from "../../components/Portada";

const ContactPage = () => {
  const coverIMG =
    "https://images.pexels.com/photos/1906795/pexels-photo-1906795.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";
  return (
    <>
      <Portada coverLink={coverIMG} title="Contáctanos" />
      <Contact />
    </>
  );
};
export {ContactPage}
