import { HeroeType } from "@/types";
import EasterEgg from "../shared/EasterEgg";
import { Slide } from "../../animation/Slide";
import Image from "next/image";
import Link from "next/link";

export default async function Heroes() {
  const heroes = [
    {
      _id: "0",
      name: "Akshay Saini",
      thumbnail:
        "https://res.cloudinary.com/duqsyuriy/image/upload/v1703583359/Avatar/1697706616770_xluzyk.jpg",
      url: "https://www.linkedin.com/in/akshaymarch7/",
    },
    {
      _id: "1",
      name: "Kyle Simpson",
      thumbnail:
        "https://res.cloudinary.com/duqsyuriy/image/upload/v1703584914/Avatar/1552016979921_kwewbt.jpg",
      url: "https://www.linkedin.com/in/getify/",
    },
    {
      _id: "2",
      name: "Bob Ziroll",
      thumbnail:
        "https://res.cloudinary.com/duqsyuriy/image/upload/v1703585874/Avatar/1683654528844_jckjfx.jpg",
      url: "https://www.linkedin.com/in/bobziroll/",
    },
    {
      _id: "2",
      name: "Hitesh Choudhary",
      thumbnail:
        "https://res.cloudinary.com/duqsyuriy/image/upload/v1703586387/Avatar/1693777638244_mteuk0.jpg",
      url: "https://www.linkedin.com/in/hiteshchoudhary/",
    },
  ];
  return (
    <section className="mt-32 max-w-5xl">
      <Slide delay={0.17}>
        <h2 className="text-4xl mb-4 font-bold tracking-tight">Heroes</h2>
        <p className="dark:text-zinc-400 text-zinc-600 max-w-2xl">
          Heroes that helped me throughout my coding journey of self-learning
          through their expertise in web development.
        </p>
      </Slide>

      <ul className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mt-12 tracking-tight">
        {heroes.map((heroe) => (
          <li
            key={heroe._id}
            className="dark:bg-primary-bg bg-zinc-100 border dark:border-zinc-800 border-zinc-200 rounded-md px-2 py-1 cursor-pointer dark:text-white dark:hover:text-green-300 text-green-800"
          >
            <Link
              href={heroe.url}
              target="_blank"
              className="flex items-center gap-x-2"
            >
              <div className="rounded-full overflow-hidden">
                <Image
                  src={heroe.thumbnail}
                  width={50}
                  height={50}
                  alt="logo"
                  objectFit="cover"
                />
              </div>
              <span className="transition-all">{heroe.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
