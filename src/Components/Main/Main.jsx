import "./Main.css";
import { Header } from "../Header";
import { Greeting } from "../Greeting";
import { CardWrapper } from "../CardWrapper";
import { useSidebarContext } from "../../Context/SidebarContext";

export const Main = () => {
  const { state } = useSidebarContext();

  return (
    <div className={state ? "mainToggled" : "main"}>
      <Header />
      <main className="mainWrapper">
        <Greeting />
        <CardWrapper />
      </main>
    </div>
  );
};
