import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import type { ProjectType } from "@/types";
import EmptyState from "../components/shared/EmptyState";
import { Slide } from "../animation/Slide";
import { IconButton } from "@mui/material";

export const metadata: Metadata = {
  title: "Project | Vivek Bhatt",
  metadataBase: new URL("https://victoreke.com/projects"),
  description: "Explore projects built by Vivek Bhatt",
  openGraph: {
    title: "Projects | Vivek Bhatt",
    url: "https://victoreke.com/projects",
    description: "Explore projects built by Vivek Bhatt",
    images:
      "https://res.cloudinary.com/victoreke/image/upload/v1692636087/victoreke/projects.png",
  },
};

export default async function Project() {
  const react = {
    title: "React JS",
    logo: "https://res.cloudinary.com/duqsyuriy/image/upload/v1703591519/Avatar/icons8-react_qgatag.svg",
  };

  const javascript = {
    title: "Javascript",
    logo: "https://res.cloudinary.com/duqsyuriy/image/upload/v1703598217/Avatar/icons8-javascript_v6h5rk.svg",
  };

  const tailwind = {
    title: "Tailwind CSS",
    logo: "https://res.cloudinary.com/duqsyuriy/image/upload/v1703596180/Avatar/icons8-tailwind-css_unfxwf.svg",
  };

  const html = {
    title: "HTML",
    logo: "https://res.cloudinary.com/duqsyuriy/image/upload/v1703598004/Avatar/icons8-html_o274vy.svg",
  };

  const css = {
    title: "CSS",
    logo: "https://res.cloudinary.com/duqsyuriy/image/upload/v1703598122/Avatar/icons8-css_bf4ebu.svg",
  };

  const materialUI = {
    title: "Material UI",
    logo: "https://res.cloudinary.com/duqsyuriy/image/upload/v1703598695/Avatar/material-ui_r2b3a5.svg",
  };

  const mongoose = {
    title: "Mongoose",
    logo: "https://res.cloudinary.com/duqsyuriy/image/upload/v1703690944/Avatar/mongoose5_62x30_transparent_c5qurd.png",
  };

  const mongoDB = {
    title: "Mongo DB",
    logo: "https://res.cloudinary.com/duqsyuriy/image/upload/v1703692035/Avatar/mdb_fj5pzu.webp",
  };

  const typescript = {
    title: "Typescript",
    logo: "https://res.cloudinary.com/duqsyuriy/image/upload/v1703696793/Avatar/icons8-typescript-96_nrulsz.png",
  };

  const projects = [
    {
      _id: "0",
      name: "Taskify",
      tagline: "A task management app",
      logo: "https://res.cloudinary.com/duqsyuriy/image/upload/v1703684012/Avatar/icons8-task-100_gow9is.png",
      link: {
        liveLink: "https://taskify-theta-two.vercel.app/",
        githubLink: "https://github.com/vivekbhatt07/Taskify",
      },
      techStack: [react, tailwind, typescript, materialUI, mongoose, mongoDB],
    },
    {
      _id: "2",
      name: "Sociobee",
      tagline: "A social media app",
      logo: "https://res.cloudinary.com/duqsyuriy/image/upload/v1703489935/Avatar/icons8-social-100_fattlp.png",
      link: {
        liveLink: "https://sociobee.netlify.app/",
        githubLink: "https://github.com/vivekbhatt07/sociobee",
      },
      techStack: [react, tailwind, materialUI],
    },
    {
      _id: "3",
      name: "Playverse",
      tagline: "An ecommerce app",
      logo: "https://res.cloudinary.com/duqsyuriy/image/upload/v1703488647/Avatar/icons8-game-100_eoccid.png",
      link: {
        liveLink: "https://playverse.netlify.app/",
        githubLink: "https://github.com/vivekbhatt07/ecommerce",
      },
      techStack: [css, react],
    },
    {
      _id: "4",
      name: "Jake & Elwood",
      tagline: "Scrimba",
      logo: "https://res.cloudinary.com/duqsyuriy/image/upload/v1703685694/Avatar/JK_vlolww.png",
      link: {
        liveLink: "https://jake-elwood.netlify.app/",
        githubLink: "https://github.com/vivekbhatt07/Jake-And-Elwood",
      },
      techStack: [html, css],
    },
    {
      _id: "4",
      name: "Living the simple life",
      tagline: "Scrimba",
      logo: "https://res.cloudinary.com/duqsyuriy/image/upload/v1703685924/Avatar/JK_1_eztpjz.png",
      link: {
        liveLink: "https://living-simple.netlify.app/",
        githubLink: "https://github.com/vivekbhatt07/Living-the-Simple-Life",
      },
      techStack: [html, css],
    },
    {
      _id: "5",
      name: "BBQ Master",
      tagline: "Responsive LoginPage",
      logo: "https://res.cloudinary.com/duqsyuriy/image/upload/v1703678077/Avatar/icons8-bbq-96_woipdb.png",
      link: {
        liveLink: "https://bbqs.netlify.app/",
        githubLink: "https://github.com/vivekbhatt07/BBQ",
      },
      techStack: [html, css],
    },
    {
      _id: "6",
      name: "Tenzi",
      tagline: "Roll until all dice are the same",
      logo: "https://res.cloudinary.com/duqsyuriy/image/upload/v1703677805/Avatar/icons8-dice-96_puqsjc.png",
      link: {
        liveLink: "https://play-tenzie.netlify.app/",
        githubLink: "https://github.com/vivekbhatt07/Tenzie",
      },
      techStack: [html, css, react],
    },
    {
      _id: "7",
      name: "Drink Water",
      tagline: "Responsive LoginPage",
      logo: "https://res.cloudinary.com/duqsyuriy/image/upload/v1703675852/Avatar/icons8-sparkling-water-100_h4qiys.png",
      link: {
        liveLink: "https://water-game.netlify.app/",
        githubLink: "https://github.com/vivekbhatt07/water-game",
      },
      techStack: [html, css, javascript],
    },
    {
      _id: "8",
      name: "Product Preview Card",
      tagline: "Frontend Mentor Challenge",
      logo: "https://res.cloudinary.com/duqsyuriy/image/upload/v1703686794/Avatar/icons8-question-100_qihhd3.png",
      link: {
        liveLink: "https://brand-card-preview.netlify.app/",
        githubLink:
          "https://github.com/vivekbhatt07/Product-Preview-Card-Component",
      },
      techStack: [html, css],
    },
    {
      _id: "9",
      name: "Article Preview Card",
      tagline: "Frontend Mentor Challenge",
      logo: "https://res.cloudinary.com/duqsyuriy/image/upload/v1703686794/Avatar/icons8-question-100_qihhd3.png",
      link: {
        liveLink: "https://article-cards-component.netlify.app/",
        githubLink: "https://github.com/vivekbhatt07/Article-Preview-Component",
      },
      techStack: [html, css],
    },
    {
      _id: "10",
      name: "Testimonial Grid Section",
      tagline: "Frontend Mentor Challenge",
      logo: "https://res.cloudinary.com/duqsyuriy/image/upload/v1703676897/Avatar/icons8-testimonial-64_ykskkd.png",
      link: {
        liveLink: "https://grids-testimonial.netlify.app/",
        githubLink: "https://github.com/vivekbhatt07/Testimonial-Grid-Section",
      },
      techStack: [html, css],
    },
    {
      _id: "11",
      name: "Order Summary Component",
      tagline: "Frontend Mentor Challenge",
      logo: "https://res.cloudinary.com/duqsyuriy/image/upload/v1703678362/Avatar/icons8-order-64_bxrbmo.png",
      link: {
        liveLink: "https://orders-component.netlify.app/",
        githubLink: "https://github.com/vivekbhatt07/Order-Summary-Component",
      },
      techStack: [html, css],
    },
    {
      _id: "12",
      name: "Tri Column Card",
      tagline: "Frontend Mentor Challenge",
      logo: "https://res.cloudinary.com/duqsyuriy/image/upload/v1703684238/Avatar/icons8-select-middle-column-100_e1nnb5.png",
      link: {
        liveLink: "https://tri-column-cards.netlify.app/",
        githubLink: "https://github.com/vivekbhatt07/FE-Mentor-Challenge-1",
      },
      techStack: [html, css],
    },
    {
      _id: "13",
      name: "Advice Generator",
      tagline: "Frontend Mentor Challenge",
      logo: "https://res.cloudinary.com/duqsyuriy/image/upload/v1703677323/Avatar/icons8-advice-64_nf4qpr.png",
      link: {
        liveLink: "https://life-advice.netlify.app/",
        githubLink: "https://github.com/vivekbhatt07/Advice-Generator",
      },
      techStack: [html, css, javascript],
    },
    {
      _id: "14",
      name: "QR Code Component",
      tagline: "Frontend Mentor Challenge",
      logo: "https://res.cloudinary.com/duqsyuriy/image/upload/v1703676428/Avatar/icons8-qr-96_zsx1hv.png",
      link: {
        liveLink: "https://qr-scan-card.netlify.app/",
        githubLink: "https://github.com/vivekbhatt07/QR-code-component",
      },
      techStack: [html, css],
    },
    {
      _id: "15",
      name: "News Homepage",
      tagline: "Frontend Mentor Challenge",
      logo: "https://res.cloudinary.com/duqsyuriy/image/upload/v1703676716/Avatar/icons8-news-96_igixl4.png",
      link: {
        liveLink: "https://news-main.netlify.app/",
        githubLink: "https://github.com/vivekbhatt07/news-homepage",
      },
      techStack: [html, css],
    },
    {
      _id: "16",
      name: "Stats Preview Card",
      tagline: "Frontend Mentor Challenge",
      logo: "https://res.cloudinary.com/duqsyuriy/image/upload/v1703684985/Avatar/icons8-stats-100_p6b23a.png",
      link: {
        liveLink: "https://stats-card-view.netlify.app/",
        githubLink:
          "https://github.com/vivekbhatt07/Stats-preview-card-component",
      },
      techStack: [html, css],
    },
    {
      _id: "17",
      name: "Tip Calculator App",
      tagline: "Frontend Mentor Challenge",
      logo: "https://res.cloudinary.com/duqsyuriy/image/upload/v1703675632/Avatar/icons8-calculator-100_vb4ss2.png",
      link: {
        liveLink: "https://tip-divide.netlify.app/",
        githubLink: "https://github.com/vivekbhatt07/Tip-Calculator-App",
      },
      techStack: [html, css, javascript],
    },
    {
      _id: "18",
      name: "CLI Quiz App (Do You Know Me?)",
      tagline: "NEOG Level 0",
      logo: "https://res.cloudinary.com/duqsyuriy/image/upload/v1703675427/Avatar/icons8-quiz-96_ihchyc.png",
      link: {
        liveLink:
          "https://replit.com/@VivekBhatt2/Do-You-Know-Me?embed=1&output=1",
        githubLink: "https://github.com/vivekbhatt07/Do-You-Know-Me-",
      },
      techStack: [javascript],
    },
    {
      _id: "19",
      name: "CLI Quiz App (Do You Marvel?)",
      tagline: "NEOG Level 0",
      logo: "https://res.cloudinary.com/duqsyuriy/image/upload/v1703675427/Avatar/icons8-quiz-96_ihchyc.png",
      link: {
        liveLink:
          "https://replit.com/@VivekBhatt2/Marvel-Quiz?embed=1&output=1",
        githubLink: "https://github.com/vivekbhatt07/Marvel-Quiz",
      },
      techStack: [javascript],
    },
    {
      _id: "20",
      name: "Banana Translator App",
      tagline: "NEOG Level 0",
      logo: "https://res.cloudinary.com/duqsyuriy/image/upload/v1703675265/Avatar/icons8-translate-96_ftujcw.png",
      link: {
        liveLink: "https://banana-mini-translate.netlify.app/",
        githubLink: "https://github.com/vivekbhatt07/Minion-Banana-speak",
      },
      techStack: [html, css, javascript],
    },
    {
      _id: "21",
      name: "Ferb Translator App",
      tagline: "NEOG Level 0",
      logo: "https://res.cloudinary.com/duqsyuriy/image/upload/v1703675265/Avatar/icons8-translate-96_ftujcw.png",
      link: {
        liveLink: "https://phineas.netlify.app/",
        githubLink: "https://github.com/vivekbhatt07/PHINEAS-AND-FERB",
      },
      techStack: [html, css, javascript],
    },
    {
      _id: "22",
      name: "Flag Identifier",
      tagline: "NEOG Level 0",
      logo: "https://res.cloudinary.com/duqsyuriy/image/upload/v1703674847/Avatar/icons8-indian-flag-64_z2dt51.png",
      link: {
        liveLink: "https://tip-divide.netlify.app/",
        githubLink: "https://github.com/vivekbhatt07/Tip-Calculator-App",
      },
      techStack: [html, css, react],
    },
    {
      _id: "23",
      name: "Movie Recommendation",
      tagline: "NEOG Level 0",
      logo: "https://res.cloudinary.com/duqsyuriy/image/upload/v1703674055/Avatar/icons8-movie-64_jhyejl.png",
      link: {
        liveLink: "https://csb-jkzldu.netlify.app/",
        githubLink: "https://github.com/vivekbhatt07/Movies",
      },
      techStack: [html, css, react],
    },
    {
      _id: "24",
      name: "Cash Register Manager",
      tagline: "NEOG Level 0",
      logo: "https://res.cloudinary.com/duqsyuriy/image/upload/v1703673789/Avatar/icons8-cash-register-64_neydjj.png",
      link: {
        liveLink: "https://cash-manage-register.netlify.app/",
        githubLink: "https://github.com/vivekbhatt07/Cash-Register-Manager",
      },
      techStack: [html, css, javascript],
    },
    {
      _id: "25",
      name: "Lucky Birthday",
      tagline: "NEOG Level 0",
      logo: "https://res.cloudinary.com/duqsyuriy/image/upload/v1703673616/Avatar/icons8-birthday-100_js0o7c.png",
      link: {
        liveLink: "https://birthdays-lucky.netlify.app/",
        githubLink: "https://github.com/vivekbhatt07/Birthday-Lucky",
      },
      techStack: [html, css, javascript],
    },
    {
      _id: "26",
      name: "Fun With Triangles",
      tagline: "NEOG Level 0",
      logo: "https://res.cloudinary.com/duqsyuriy/image/upload/v1703673462/Avatar/icons8-three-triangles-64_qb75yj.png",
      link: {
        liveLink: "https://tri-angle-fun.netlify.app/",
        githubLink: "https://github.com/vivekbhatt07/Fun-With-Triangles",
      },
      techStack: [html, css, javascript],
    },
    {
      _id: "27",
      name: "Profit & Loss App",
      tagline: "NEOG Level 0",
      logo: "https://res.cloudinary.com/duqsyuriy/image/upload/v1703673282/Avatar/icons8-profit-80_fdxyoq.png",
      link: {
        liveLink: "https://profits-loss.netlify.app/",
        githubLink: "https://github.com/vivekbhatt07/Profit-And-Loss",
      },
      techStack: [html, css, javascript],
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
                href={project.link.liveLink}
                target="_blank"
                key={project._id}
                className="flex items-center gap-y-4 flex-col dark:bg-primary-bg bg-zinc-50 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 p-4 rounded-lg justify-between"
              >
                <div className="flex gap-x-1 justify-between w-full">
                  <div className="flex gap-x-4 items-center">
                    <Image
                      src={project.logo}
                      width={60}
                      height={60}
                      alt={project.name}
                      className="dark:bg-zinc-800 bg-zinc-100 rounded-md p-2"
                    />
                    <div>
                      <h2 className="text-sm tracking-wide mb-1">
                        {project.name}
                      </h2>
                      <p className="text-xs dark:text-zinc-400 text-zinc-600">
                        {project.tagline}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between gap-y-1">
                    <Link
                      href={project.link.liveLink}
                      target="_blank"
                      title="Live Link"
                    >
                      <Image
                        src="https://res.cloudinary.com/duqsyuriy/image/upload/v1703689094/Avatar/icons8-link-64_ldp5sh.png"
                        width={30}
                        height={30}
                        alt={project.name}
                        className="dark:bg-zinc-800 bg-zinc-100 rounded-md p-2 hover:dark:bg-zinc-950 hover:bg-zinc-200"
                      />
                    </Link>
                    <Link
                      href={project.link.githubLink}
                      target="_blank"
                      title="Github Link"
                    >
                      <Image
                        src="https://res.cloudinary.com/duqsyuriy/image/upload/v1703605987/Avatar/icons8-github-96_1_xxn8jj.png"
                        width={30}
                        height={30}
                        alt={project.name}
                        className="dark:bg-zinc-800 bg-zinc-100 rounded-md p-2 hover:dark:bg-zinc-950 hover:bg-zinc-200"
                      />
                    </Link>
                  </div>
                </div>
                <div className="flex flex-row gap-x-2 w-full">
                  {project.techStack.map((tech) => {
                    return (
                      <Image
                        src={tech.logo}
                        width={40}
                        height={40}
                        alt={tech.title}
                        className="dark:bg-zinc-800 bg-zinc-100 rounded-md p-2"
                        key={tech.title}
                        title={tech.title}
                      />
                    );
                  })}
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
