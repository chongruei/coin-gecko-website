import { FC, Fragment, useState } from "react";
import { useQuery } from "react-query";
import Image from "next/image";
import { fetchExchanges } from "@services/exchanges/exchanges";
import { ExchangeEntity } from "@interface/exchange";
import { Pagination } from "components/pagination";
import { useThrottleFn } from "@hooks/useThrottleFn";

export const Exchanges: FC = () => {
  const [page, setPage] = useState<number>(1);
  const { data, isLoading, isError } = useQuery<ExchangeEntity[], Error>(
    ["exchanges", page],
    () => fetchExchanges(page, 10)
  );

  const handleNextPage = useThrottleFn(() => {
    setPage((prevPage) => prevPage + 1);
  }, 400);

  const handlePrevPage = useThrottleFn(() => {
    setPage((prevPage) => prevPage - 1);
  }, 400);

  if (isError) {
    return <div>Oops! occurs some error</div>;
  }

  return (
    <div className="w-full md:w-[600px] h-[600px] flex flex-col items-center justify-start">
      <div className="w-full h-[500px] grid grid-container gap-3 justify-items-center mb-5">
        <div data-testid="exchange-rank">Rank</div>
        <div data-testid="exchange-name">Name</div>
        <div data-testid="exchange-country">Country</div>
        {isLoading && <div className="col-span-4">loading...</div>}
        {data?.map((exchange: ExchangeEntity) => {
          const { id, name, country, url, image, trust_score_rank } = exchange;
          return (
            <Fragment key={id}>
              <div data-testid={`rank-${trust_score_rank}`}>
                {trust_score_rank}
              </div>
              <div className="flex self-center justify-self-start">
                <div className="h-min-[24px] w-min-[24px]">
                  <Image
                    alt={name}
                    src={image}
                    height={24}
                    width={24}
                    layout="fixed"
                  />
                </div>
                <a
                  className="ml-2 hover:text-blue-500"
                  href={url}
                  target="blank"
                >
                  {name}
                </a>
              </div>
              <div>{country || "empty"}</div>
            </Fragment>
          );
        })}
      </div>
      <Pagination
        showPrev={page > 1}
        showNext={isLoading || (data !== undefined && data.length > 0)}
        onPrevPage={handlePrevPage}
        onNextPage={handleNextPage}
      />
      <style>
        {`
          .grid-container {
            grid-template-rows: auto;
            grid-template-columns: 50px minmax(100px, 1fr) minmax(100px, 1fr);
          }
        `}
      </style>
    </div>
  );
};
