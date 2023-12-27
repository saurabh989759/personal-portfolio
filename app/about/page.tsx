import Image from "next/image";
import { Metadata } from "next";
import type { ProfileType } from "@/types";
import { PortableText } from "@portabletext/react";
import { BiEnvelope, BiLinkExternal, BiSolidDownload } from "react-icons/bi";
import { CustomPortableText } from "../components/shared/CustomPortableText";
import Heroes from "../components/pages/Heroes";
import Usage from "../components/pages/Usage";
import { Slide } from "../animation/Slide";

export const metadata: Metadata = {
  title: "About | Vivek Bhatt",
  metadataBase: new URL("https://victoreke.com/about"),
  description:
    "Learn more about my skills, experience and technical background",
  openGraph: {
    title: "About | Vivek bhatt",
    url: "https://victoreke.com/about",
    description:
      "Learn more about my skills, experience and technical background",
    images:
      "https://res.cloudinary.com/victoreke/image/upload/v1692635746/victoreke/og.png",
  },
};

export default async function About() {
  return (
    <main className="relative lg:max-w-7xl mx-auto max-w-3xl md:px-16 px-6">
      <div>
        <section className="relative grid lg:grid-cols-custom grid-cols-1 gap-x-6 justify-items-center">
          <div className="order-2 lg:order-none">
            <Slide>
              <h1 className="font-incognito font-black tracking-tight sm:text-5xl text-3xl lg:leading-tight basis-1/2 mb-8">
                I&apos;m <span className="text-[#33e092]">Vivek Bhatt</span>. I
                live in Uttarakhand, where I build the future.
              </h1>

              <div className="dark:text-zinc-400 text-zinc-600 leading-relaxed flex flex-col gap-y-4">
                <p>
                  I am a self-driven, career-oriented software developer
                  specializing in front-end development. My expertise lies in
                  building interactive web applications. Primarily working with
                  technologies like HTML, CSS, JavaScript, React and TypeScript.
                </p>
                <p>
                  I strongly believe in continuous learning and improving
                  myself, so I try my best to learn in any situation possible,
                  unfavorable or not.
                </p>
                <p>
                  Beyond learning, I enjoy playing CSS Battle at{" "}
                  <a
                    href="https://cssbattle.dev/"
                    className="underline hover:text-[#33e092]"
                    target="_blank"
                  >
                    cssbattle.dev
                  </a>{" "}
                  and creating responsive layouts at{" "}
                  <a
                    href="http://frontendmentor.com/"
                    className="underline hover:text-[#33e092]"
                    target="_blank"
                  >
                    frontendmentor
                  </a>
                  .
                </p>
              </div>
            </Slide>
          </div>

          <aside className="flex flex-col lg:justify-self-center justify-self-start gap-y-8 lg:order-1 order-none mb-12">
            <Slide delay={0.1}>
              <div className="sticky top-10">
                <Image
                  className="rounded-2xl mb-4 object-cover max-h-96 min-h-96 bg-top"
                  src="https://res.cloudinary.com/duqsyuriy/image/upload/v1703527608/Avatar/Pic_zyt8sc.jpg"
                  width={400}
                  height={400}
                  quality={100}
                  alt="pic"
                  priority
                />

                <div className="flex flex-col text-center gap-y-4">
                  <div className="flex items-center gap-x-3">
                    <a
                      href="https://drive.google.com/file/d/1DKfswi-vbO5-2sHJNyhCIKEwR2jz7_K7/view?usp=sharing"
                      rel="noreferrer noopener"
                      target="_blank"
                      className="flex items-center justify-center text-center gap-x-2 basis-[90%] dark:bg-primary-bg bg-zinc-100 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 rounded-md py-2 text-lg font-incognito font-semibold"
                    >
                      View Résumé <BiLinkExternal className="text-base" />
                    </a>
                    <a
                      // href={`${data.resumeURL}?dl=${data.fullName}-resume`}
                      href={`https://drive.google.com/file/d/1DKfswi-vbO5-2sHJNyhCIKEwR2jz7_K7/view?usp=sharing?dl=VivekBhatt-resume`}
                      className="flex items-center justify-center text-center dark:text-primary-color text-secondary-color hover:underline basis-[10%] dark:bg-primary-bg bg-zinc-100 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 rounded-md py-3 text-lg"
                      title="Download Resume"
                    >
                      <BiSolidDownload
                        className="text-lg"
                        aria-label="Download Resume"
                      />
                    </a>
                  </div>

                  <a
                    href={`mailto:vivekbhatt618@gmail.com`}
                    className="flex items-center gap-x-2 hover:text-primary-color"
                  >
                    <BiEnvelope className="text-lg" />
                    vivekbhatt618@gmail.com
                  </a>
                </div>
              </div>
            </Slide>
          </aside>
        </section>
        <Slide delay={0.14}>
          <Usage />
        </Slide>
        <Heroes />
      </div>
    </main>
  );
}
