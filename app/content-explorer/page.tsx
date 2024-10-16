import Card from "@/components/home/card";
import { DEPLOY_URL } from "@/lib/constants";
import { Github, Twitter } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import { nFormatter } from "@/lib/utils";

export default async function Home() {
    const { stargazers_count: stars } = await fetch(
        "https://api.github.com/repos/steven-tey/precedent",
        {
            ...(process.env.GITHUB_OAUTH_TOKEN && {
                headers: {
                    Authorization: `Bearer ${process.env.GITHUB_OAUTH_TOKEN}`,
                    "Content-Type": "application/json",
                },
            }),
            // data will revalidate every 24 hours
            next: { revalidate: 86400 },
        },
    )
        .then((res) => res.json())
        .catch((e) => console.log(e));

    return (
        <>
            <div className="z-10 w-full max-w-xl px-5 xl:px-0">
                <a
                    href="https://twitter.com/steventey/status/1613928948915920896"
                    target="_blank"
                    rel="noreferrer"
                    className="mx-auto mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
                >
                    <Twitter className="h-5 w-5 text-[#1d9bf0]" />
                    <p className="text-sm font-semibold text-[#1d9bf0]">
                        Introducing Precedent
                    </p>
                </a>
                <h1
                    className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
                    style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
                >
                    Box Content Explorer
                </h1>
            </div>
            <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">

            </div>
        </>
    );
}

const features = [
    {
        title: "Beautiful, reusable components",
        description:
            "Pre-built beautiful, a11y-first components, powered by [Tailwind CSS](https://tailwindcss.com), [Radix UI](https://www.radix-ui.com), and [Framer Motion](https://framer.com/motion). Used in production on [Dub.co](https://dub.co).",
        large: true,
    },
    {
        title: "Performance first",
        description:
            "Built on [Next.js](https://nextjs.org/) primitives like `@next/font` and `next/image` for stellar performance.",
        demo: <WebVitals />,
    },
    {
        title: "One-click Deploy",
        description:
            "Jumpstart your next project by deploying Precedent to [Vercel](https://vercel.com/) in one click.",
        demo: (
            <a href={DEPLOY_URL}>
                <Image
                    src="https://vercel.com/button"
                    alt="Deploy with Vercel"
                    width={120}
                    height={30}
                    unoptimized
                />
            </a>
        ),
    },
    {
        title: "Built-in Auth",
        description:
            "Precedent comes with authentication via [Clerk](https://clerk.com/)",
        demo: (
            <div className="flex items-center justify-center space-x-20">
                <Image alt="Clerk logo" src="/clerk.svg" width={50} height={50} />
            </div>
        ),
    },
    {
        title: "Hooks, utilities, and more",
        description:
            "Precedent offers a collection of hooks, utilities, and `@vercel/og`",
        demo: (
            <div className="grid grid-flow-col grid-rows-3 gap-10 p-10">
                <span className="font-mono font-semibold">useIntersectionObserver</span>
                <span className="font-mono font-semibold">useLocalStorage</span>
                <span className="font-mono font-semibold">useScroll</span>
                <span className="font-mono font-semibold">nFormatter</span>
                <span className="font-mono font-semibold">capitalize</span>
                <span className="font-mono font-semibold">truncate</span>
            </div>
        ),
    },
];
