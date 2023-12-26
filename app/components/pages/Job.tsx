import Image from "next/image";

import type { JobType } from "@/types";
import { formatDate } from "../../utils/date";
import { Slide } from "../../animation/Slide";

export default async function Job() {
  const job = [
    {
      _id: "0",
      name: "Tealbox Digital",
      jobTitle: "Freelancer (Webflow Developer)",
      url: "https://www.tealbox.digital/",
      logo: "https://res.cloudinary.com/duqsyuriy/image/upload/v1703522180/Avatar/6335a708a702cd1dd5f9f4db_Tealbox_Transparent-p-500_vxlxzb.png",
      startDate: "SEP 25, 2022",
      endDate: "JAN 6, 2023",
      description:
        "At Tealbox Digital, I was assigned to create their entire website on webflow.",
    },
    {
      _id: "1",
      name: "neoG Camp",
      jobTitle: "Student (Bootcamp)",
      url: "https://neog.camp/",
      logo: "https://res.cloudinary.com/duqsyuriy/image/upload/v1703523459/Avatar/logo_nkb5fl.svg",
      startDate: "DEC 25, 2022",
      endDate: "OCT 6, 2023",
      description:
        "neoG Camp is a bootcamp, where I learnt technologies like Javascript, ReactJS and basics of backend tech like express.js, mongoose and mongo DB. ",
    },
    {
      _id: "2",
      name: "Queryflow",
      jobTitle: "Freelancer (React JS Frontend Developer)",
      url: "/",
      logo: "https://res.cloudinary.com/duqsyuriy/image/upload/v1703524534/Avatar/QueryFlow_tqozyq.ico",
      startDate: "AUG 25, 2022",
      endDate: "",
      description: "",
    },
  ];
  return (
    <section className="mt-32">
      <Slide delay={0.16}>
        <div className="mb-16">
          <h2 className="font-incognito text-4xl mb-4 font-bold tracking-tight">
            Work Experience
          </h2>
        </div>
      </Slide>

      <Slide delay={0.18}>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-12 gap-y-10">
          {job.map((data) => (
            <div
              key={data._id}
              className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative before:absolute before:bottom-0 before:top-[5rem] before:left-9 before:w-[1px] before:h-[calc(100%-70px)] dark:before:bg-zinc-800 before:bg-zinc-200"
            >
              <a
                href={data.url}
                rel="noreferrer noopener"
                target="_blank"
                className="grid place-items-center dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 min-h-[80px] min-w-[80px] p-2 rounded-md overflow-clip relative"
              >
                <Image
                  src={data.logo}
                  className="object-cover duration-300"
                  alt={`${data.name} logo`}
                  width={50}
                  height={50}
                />
              </a>
              <div className="flex flex-col items-start">
                <h3 className="text-xl font-bold">{data.name}</h3>
                <p>{data.jobTitle}</p>
                <time className="text-sm text-zinc-500 mt-2 tracking-widest uppercase">
                  {formatDate(data.startDate)} -{" "}
                  {data.endDate ? (
                    formatDate(data.endDate)
                  ) : (
                    <span className="dark:text-primary-color text-tertiary-color">
                      Present
                    </span>
                  )}
                </time>
                <p className="tracking-tight dark:text-zinc-400 text-zinc-600 my-4">
                  {data.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Slide>
    </section>
  );
}
