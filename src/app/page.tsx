import Link from "next/link";

export default function Home() {
  return (
    <section className="">
      <div className="flex space-x-4 p-4">
        <div className="w-[200px] bg-slate-300 text-black text-center border-2 border-slate-500">
          <Link href="/flex" className="w-full">
            Flex 샘플
          </Link>
        </div>
        <div className="w-[200px] bg-slate-300 text-black text-center border-2 border-slate-500">
          <Link href="/grid">Grid 샘플</Link>
        </div>
      </div>
    </section>
  );
}
