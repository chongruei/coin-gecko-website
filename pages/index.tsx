import type { NextPage } from "next";
import { Exchanges } from "@components/exchanges";

const Home: NextPage = () => {
  return (
    <div className="flex items-center justify-center">
      <Exchanges />
    </div>
  );
};

export default Home;
