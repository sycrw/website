import Navbar from "../componets/Navbar";
import { oswald } from "../fonts";

interface Props {
  children: React.ReactNode;
}

const layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <div className={oswald.className}>{children}</div>
    </>
  );
};

export default layout;
