import Image from "next/legacy/image";
import Link from "next/link";
import { PostType } from "@/types";
import EmptyState from "../shared/EmptyState";
import { BiTime } from "react-icons/bi";
import { formatDate } from "../../utils/date";
import { HiCalendar } from "react-icons/hi";

export default async function Posts() {
  const posts = [
    {
      _id: "0",
      reach: "https://insightblog.hashnode.dev/difference-between",
      title: "Loose Equality Vs Strict Equality",
      description:
        "In this blog, I have explained strict and loose equality operators in-depth by taking some knowledge from Kyle Simpson and ECMA Script.",
      coverImage: {
        thumbnail:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1703494302/Avatar/BlogOne.cc66ab5e68b1e5a757c0_za5j1d.png",
        alt: "Loose Equality vs Strict Equality",
      },
      date: "Feb 15, 2023",
      length: "10",
    },

    {
      _id: "1",
      reach: "https://insightblog.hashnode.dev/rem-vs-em",
      title: "em Vs rem css unit",
      description:
        "In this blog, I have explained em and rem css units in-depth by taking some knowledge from mdn and Kevin Powell.",
      coverImage: {
        thumbnail:
          "https://res.cloudinary.com/duqsyuriy/image/upload/v1703495374/Avatar/BlogTwo.d1817f995977d150d487_yirtg3.png",
        alt: "em Vs rem css unit",
      },
      date: "Feb 23, 2023",
      length: "5",
    },
  ];

  return (
    <section>
      {posts.length > 0 ? (
        <div className="flex flex-col lg:max-w-[950px] max-w-full lg:gap-y-8 gap-y-12 mb-12">
          {posts.map((post) => (
            <article key={post._id}>
              <Link
                href={post.reach}
                className="flex lg:flex-row flex-col lg:items-center items-start gap-8 dark:bg-primary-bg bg-secondary-bg p-6 rounded-lg border dark:border-zinc-800 border-zinc-200 group"
              >
                <div className="relative lg:w-[450px] lg:h-52 w-full h-56 overflow-clip">
                  <Image
                    src={post.coverImage?.thumbnail}
                    className="dark:bg-zinc-800 bg-zinc-100 rounded-md object-cover group-hover:scale-125 duration-300"
                    alt={post.coverImage?.alt || post.title}
                    layout="fill"
                  />
                </div>
                <div className="max-w-lg">
                  <h2 className="max-w-sm text-2xl font-semibold tracking-tight mb-4">
                    {post.title}
                  </h2>
                  <p className="dark:text-zinc-400 text-zinc-600 text-[15.5px]">
                    {post.description}
                  </p>
                  <div className="flex items-center gap-x-4 mt-3 text-sm">
                    <div className="flex items-center gap-x-2">
                      <HiCalendar />
                      <time dateTime={post.date}>{post.date}</time>
                    </div>
                    <div className="flex items-center gap-x-2">
                      <BiTime />
                      <p className="">{post.length} min read</p>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <EmptyState value="Blog Post" />
      )}
    </section>
  );
}
