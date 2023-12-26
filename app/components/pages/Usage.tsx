import { PortableText } from "@portabletext/react";

import type { ProfileType } from "@/types";
import Image from "next/image";
import { CustomPortableTextFavicon } from "../shared/CustomPortableTextFavicon";
import Link from "next/link";

export default async function Usage() {
  const profile = [
    {
      title: "Technologies",
      subItems: [
        {
          title: "HTML",
          subtitle: "Markup",
          reach: "https://react.dev/",
          logo: "https://res.cloudinary.com/duqsyuriy/image/upload/v1703598004/Avatar/icons8-html_o274vy.svg",
        },
        {
          title: "CSS",
          subtitle: "style",
          reach: "https://react.dev/",
          logo: "https://res.cloudinary.com/duqsyuriy/image/upload/v1703598122/Avatar/icons8-css_bf4ebu.svg",
        },
        {
          title: "Javascript",
          subtitle: "Javascript Language",
          reach: "https://react.dev/",
          logo: "https://res.cloudinary.com/duqsyuriy/image/upload/v1703598217/Avatar/icons8-javascript_v6h5rk.svg",
        },
        {
          title: "React",
          subtitle: "UI Library",
          reach: "https://react.dev/",
          logo: "https://res.cloudinary.com/duqsyuriy/image/upload/v1703591519/Avatar/icons8-react_qgatag.svg",
        },
        {
          title: "Tailwind CSS",
          subtitle: "Styling Library",
          reach: "https://tailwindcss.com/",
          logo: "https://res.cloudinary.com/duqsyuriy/image/upload/v1703596180/Avatar/icons8-tailwind-css_unfxwf.svg",
        },
        {
          title: "Material UI",
          subtitle: "Component Library",
          reach: "https://tailwindcss.com/",
          logo: "https://res.cloudinary.com/duqsyuriy/image/upload/v1703598695/Avatar/material-ui_r2b3a5.svg",
        },
      ],
    },
    {
      title: "Tools",
      subItems: [
        {
          title: "Visual Studio Code",
          subtitle: "Text Editor",
          reach: "https://tailwindcss.com/",
          logo: "https://res.cloudinary.com/duqsyuriy/image/upload/v1703597668/Avatar/icons8-vs-code_oge6cl.svg",
        },
        {
          title: "Firefox",
          subtitle: "Web Browser",
          reach: "https://tailwindcss.com/",
          logo: "https://res.cloudinary.com/duqsyuriy/image/upload/v1703597577/Avatar/icons8-firefox-96_pxrtpr.png",
        },
        {
          title: "Chrome",
          subtitle: "Web Browser",
          reach: "https://tailwindcss.com/",
          logo: "https://res.cloudinary.com/duqsyuriy/image/upload/v1703597377/Avatar/icons8-chrome_xdju2s.svg",
        },
        {
          title: "Youtube Music",
          subtitle: "Music Streaming",
          reach: "https://tailwindcss.com/",
          logo: "https://res.cloudinary.com/duqsyuriy/image/upload/v1703597160/Avatar/icons8-youtube-music_wzryyb.svg",
        },
      ],
    },
    {
      title: "Hardware",
      subItems: [
        {
          title: "Asus TUF A15",
          subtitle: "Work",
          reach:
            "https://www.asus.com/in/laptops/for-gaming/tuf-gaming/2021-asus-tuf-gaming-a15/techspec/",
          logo: "https://res.cloudinary.com/duqsyuriy/image/upload/v1703599081/Avatar/asus_fuevq9.svg",
        },
      ],
    },
  ];

  return (
    <section className="max-w-2xl">
      <div className="mb-8">
        <h2 className="text-4xl mb-4 font-bold tracking-tight">Usage</h2>
        <p className="dark:text-zinc-400 text-zinc-600 max-w-xl">
          Tools, technologies and gadgets I use on a daily basis but not limited
          to.
        </p>
        <div className="flex flex-col gap-y-8 mt-4">
          {profile.map((item, i) => {
            return (
              <div className="flex flex-col gap-y-6" key={i}>
                <h3 className="text-2xl">{item.title}</h3>
                <div className="flex flex-col gap-2">
                  {item.subItems.map((subItem, index) => {
                    return (
                      <div className="flex gap-x-4 items-center" key={index}>
                        <Image
                          src={subItem.logo}
                          width={30}
                          height={30}
                          alt={subItem.title}
                          objectFit="cover"
                        />
                        <div className="flex gap-x-2 items-center">
                          <Link
                            href={subItem.reach}
                            className="text-black dark:text-white hover:text-[#10b981] underline transition-all"
                          >
                            {subItem.title}
                          </Link>
                          <span>-</span>
                          <p>{subItem.subtitle}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
