import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import type { ProjectType } from "@/types";
import EmptyState from "../components/shared/EmptyState";
import { Slide } from "../animation/Slide";

export const metadata: Metadata = {
  title: "Project | Vivek Bhatt",
  metadataBase: new URL("https://victoreke.com/projects"),
  description: "Explore projects built by Vivek Bhatt",
  openGraph: {
    title: "Projects | Vivek Bhatt",
    url: "https://victoreke.com/projects",
    description: "Explore projects built by Victor Eke",
    images:
      "https://res.cloudinary.com/victoreke/image/upload/v1692636087/victoreke/projects.png",
  },
};

export default async function Project() {
  const projects = [
    {
      _id: "0",
      name: "Taskify",
      tagline: "A task management app",
      slug: "/taskManagmentApp",
      logo: "https://res.cloudinary.com/duqsyuriy/image/upload/v1687449309/Avatar/AvatarEleven_frqxrs.svg",
    },
    {
      _id: "2",
      name: "Sociobee",
      tagline: "A social media app",
      slug: "/sociobee",
      logo: "https://res.cloudinary.com/duqsyuriy/image/upload/v1703489935/Avatar/icons8-social-100_fattlp.png",
    },
    {
      _id: "3",
      name: "Playverse",
      tagline: "An ecommerce app",
      slug: "/playverse",
      logo: "https://res.cloudinary.com/duqsyuriy/image/upload/v1703488647/Avatar/icons8-game-100_eoccid.png",
    },
  ];
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6">
      <header className="max-w-2xl mb-16">
        <Slide>
          <h1 className="font-incognito font-black tracking-tight sm:text-5xl text-3xl mb-6 lg:leading-[3.7rem]">
            Projects
          </h1>
          <p className="text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
            I&apos;ve worked on tons of little projects over the years but these
            are the ones that I&apos;m most proud of. Many of them are
            open-source, so if you see something that piques your interest,
            check out the code and contribute if you have ideas on how it can be
            improved.
          </p>
        </Slide>
      </header>

      <Slide delay={0.1}>
        {projects.length > 0 ? (
          <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-12">
            {projects.map((project) => (
              <Link
                href={`/projects/${project.slug}`}
                key={project._id}
                className="flex items-center gap-x-4 dark:bg-primary-bg bg-zinc-50 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 p-4 rounded-lg"
              >
                <Image
                  src={project.logo}
                  width={60}
                  height={60}
                  alt={project.name}
                  className="dark:bg-zinc-800 bg-zinc-100 rounded-md p-2"
                />
                <div>
                  <h2 className="text-lg tracking-wide mb-1">{project.name}</h2>
                  <div className="text-sm dark:text-zinc-400 text-zinc-600">
                    {project.tagline}
                  </div>
                </div>
              </Link>
            ))}
          </section>
        ) : (
          <EmptyState value="Projects" />
        )}
      </Slide>
    </main>
  );
}
