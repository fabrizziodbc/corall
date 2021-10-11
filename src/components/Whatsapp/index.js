import "./style.scss";
const Whatsapp = () => {
  const wsppNumber = "949172626";
  const wsppMessage = "Deseo agendar una reunión";
  const wsppMessageFinish = wsppMessage.split(" ").join("%20");
  const linkWsp = `https://api.whatsapp.com/send/?phone=51${wsppNumber}&text=${wsppMessageFinish}&app_absent=0`;
  return <a className="whatsapp" href={linkWsp} target="_blank" rel="noreferrer"> </a>;
};
export { Whatsapp };
