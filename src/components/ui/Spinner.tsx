import dynamic from "next/dynamic";

const Loader = dynamic(
  () => import("react-spinners").then((lib) => lib.FadeLoader),
  {
    ssr: false,
  }
);

type Props = {
  color?: string;
};

export default function Spinner({ color = "red" }: Props) {
  return <Loader color={color} />;
}
