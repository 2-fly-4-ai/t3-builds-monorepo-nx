import { ReactNode } from "react";
import Home from "./../views/Home/Home";

export function Index(props: Props) {
  return (
    <Home {...props} />
  );
}

type Props = {
  header: () => ReactNode
}

export default Index;
