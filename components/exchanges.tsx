import { FC, Fragment, useState } from "react";
import { useQuery } from "react-query";
import { fetchExchanges } from "services/exchanges/exchanges";
import { ExchangeEntity } from "interface/exchange";
import Image from "next/image";

export const Exchanges: FC = () => {
  const [page, setPage] = useState<number>(1);
  const { data, isLoading, isError, isSuccess } = useQuery<
    ExchangeEntity[],
    Error
  >("exchanges", () => fetchExchanges(page, 10));

  return (
    <div className="grid grid-cols-5 gap-5">
      {data?.map((exchange: ExchangeEntity, idx) => {
        const { name, country, url, image, trust_score_rank } = exchange;
        return (
          <Fragment key={name}>
            <div>{name}</div>
            <div>{country}</div>
            <div>{url}</div>
            <div>
              <Image
                alt={name}
                src={image}
                height={20}
                width={20}
                layout="fixed"
              />
            </div>
            <div>{trust_score_rank}</div>
          </Fragment>
        );
      })}
    </div>
  );
};
