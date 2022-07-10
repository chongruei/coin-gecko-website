import { FC } from "react";
import { useQuery } from "react-query";
import Image from "next/image";
import { fetchExchange } from "@services/exchanges/exchanges";
import { ExchangeDetailEntity } from "@interface/exchange";
import { useRouter } from "next/router";
import { MediaLink } from "@components/mediaLink";

interface IProps {
  id: string;
}

export const Exchange: FC<IProps> = ({ id }) => {
  const router = useRouter();
  const { data, isLoading, isError } = useQuery<ExchangeDetailEntity, Error>(
    ["exchange", id],
    () => fetchExchange(id),
    { enabled: id !== undefined }
  );

  const handleRedirectToExchanges = () => {
    router.push("/");
  };

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (isError || !data) {
    return <div>Oops! occurs some error!</div>;
  }

  const {
    name,
    image,
    year_established,
    trust_score_rank,
    description,
    facebook_url,
    reddit_url,
    telegram_url,
    slack_url,
  } = data;

  return (
    <div className="w-full max-w-[600px] h-[90vh] relative flex flex-col items-center justify-start">
      <button
        data-testid="backto-index"
        className="absolute top-1 left-8 rounded-lg bg-slate-200 text-slate-900 p-2 text-center cursor-pointer"
        onClick={handleRedirectToExchanges}
      >
        Back
      </button>
      <div className="flex items-center justify-center py-2">
        <Image alt={name} src={image} height={28} width={28} layout="fixed" />
        <p data-testid={`exchange-name-${id}`} className="ml-2">
          {name}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="w-full col-span-2 flex justify-start">
          {facebook_url && (
            <MediaLink
              name="facebook"
              src={"/medias/facebook.png"}
              url={facebook_url}
            />
          )}
          {reddit_url && (
            <MediaLink
              name="reddit"
              src={"/medias/reddit.png"}
              url={reddit_url}
            />
          )}
          {telegram_url && (
            <MediaLink
              name="telegram"
              src={"/medias/telegram.png"}
              url={telegram_url}
            />
          )}
          {slack_url && (
            <MediaLink name="slack" src={"/medias/slack.png"} url={slack_url} />
          )}
        </div>
        <p>Trust Rank:</p>
        <p>{trust_score_rank}</p>
        <p>Year Established:</p>
        <p data-testid="exchange-year-established">{year_established}</p>
        <p>Description:</p>
        <p>{description || "empty"}</p>
      </div>
    </div>
  );
};
