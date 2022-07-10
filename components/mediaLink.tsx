import { FC } from "react";
import Image from "next/image";

interface IProps {
  name: string;
  src: string;
  url: string;
}

export const MediaLink: FC<IProps> = ({ name, src, url }) => {
  return (
    <a className="ml-2 cursor-pointer" href={url} target="blank">
      <Image alt={name} src={src} height={28} width={28} layout="fixed" />
    </a>
  );
};
