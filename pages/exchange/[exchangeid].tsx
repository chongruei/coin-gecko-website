import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Exchange } from "@components/exchange";

const ExchangeDetail: NextPage = () => {
  const router = useRouter();
  const { exchangeid } = router.query;

  return (
    <div className="w-full flex items-center justify-center">
      <Exchange id={exchangeid as string} />
    </div>
  );
};

export default ExchangeDetail;
