import { Cover } from "../../components/Cover";
import { Layout } from "../../components/Layout";
import "./style.scss";

const About = () => {
  const coverIMG =
    "https://images.pexels.com/photos/1906795/pexels-photo-1906795.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";
  return (
    <Layout>
      <Cover />
    </Layout>
  );
};
export { About };
