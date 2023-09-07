import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@/components/SocialIcons";
import logoAirbnb from "@/media/images/logos/airbnb.svg";
import logoFacebook from "@/media/images/logos/facebook.svg";
import logoPlanetaria from "@/media/images/logos/planetaria.svg";
import logoStarbucks from "@/media/images/logos/starbucks.svg";
import image1 from "@/media/images/life/scott1.jpg";
import image2 from "@/media/images/life/scott2.jpg";
import image3 from "@/media/images/life/scott3.jpg";
import image4 from "@/media/images/life/scott4.jpg";
import image5 from "@/media/images/life/scott5.jpg";
import sunshineImage from "@/media/images/sunshine.png";
import { formatDate } from "@/lib/formatDate";
import { generateRssFeed } from "@/lib/generateRssFeed";
import { getAllArticles } from "@/lib/getAllArticles";

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  );
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  );
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  );
}

function Event({ event }) {
  return (
    <Card as="article">
      <Card.Title>{event.title}</Card.Title>
      <Card.Eyebrow as="time" dateTime={event.date}>
        {formatDate(event.date)}
      </Card.Eyebrow>
      <Card.Description>{event.description}</Card.Description>
    </Card>
  );
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  );
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  );
}

function Resume() {
  let resume = [
    {
      company: "Planetaria",
      title: "CEO",
      logo: logoPlanetaria,
      start: "2019",
      end: {
        label: "Present",
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: "Airbnb",
      title: "Product Designer",
      logo: logoAirbnb,
      start: "2014",
      end: "2019",
    },
    {
      company: "Facebook",
      title: "iOS Software Engineer",
      logo: logoFacebook,
      start: "2011",
      end: "2014",
    },
    {
      company: "Starbucks",
      title: "Shift Supervisor",
      logo: logoStarbucks,
      start: "2008",
      end: "2011",
    },
  ];

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{" "}
                <span aria-hidden="true">—</span>{" "}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button href="#" variant="secondary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  );
}

function Photos() {
  let rotations = [
    "rotate-2",
    "-rotate-2",
    "rotate-2",
    "rotate-2",
    "-rotate-2",
  ];

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              "relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl",
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home({ articles, events }) {
  return (
    <>
      <Head>
        <title>
          Scott Hannah - Loving son, brother, grandson, uncle and friend.
        </title>
        <meta name="description" content="" />
      </Head>
      <Container className="mt-9">
        <div className="flex items-center">
          <div className="flex max-w-2xl flex-col items-center">
            <h1 className="whitespace-nowrap text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Scott P. Hannah
            </h1>
            <h2 className="mt-6 whitespace-nowrap text-3xl font-bold text-zinc-600 dark:text-zinc-400">
              1993 - 2022
            </h2>
            <p className="mt-6 text-center text-xl italic dark:text-zinc-400">
              Loving son, brother, grandson, uncle and friend.
            </p>
          </div>
          <div>
            <Image src={sunshineImage} alt="" priority />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <ol className="border-l border-neutral-300 dark:border-neutral-500">
            {events.map((event) => (
              <li key={event.id}>
                <div className="flex-start flex items-start pt-3">
                  <div className="-ml-[5px] mr-3 mt-2 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                  <Event event={event} />
                </div>
              </li>
            ))}
          </ol>

          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <div className="rounded-2xl border border-zinc-100 p-6 text-zinc-900 dark:border-zinc-700/40 dark:text-zinc-100">
              <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                {/* <BriefcaseIcon className="h-6 w-6 flex-none" /> */}
                <span className=" mb-2 text-2xl">Obituary</span>
              </h2>
              <p>
                Scott Patrick “Tater Tot” Hannah age 28 of Riverside, passed
                away unexpectedly at his residence on Sunday, November 27, 2022.
                He was born the son of Tim & Tracie (O’Dell) Hannah on October
                1, 1994, in Rome, New York. He is preceded in death by his
                paternal grandfather Gene Hannah. Scott is survived by his
                loving parents Tim & Tracie Hannah of South Charleston; maternal
                grandparents Raymond & Madonna O’Dell of South Charleston;
                paternal grandmother Venita Hannah of Arkansas; brothers Rob
                Hannah of Dayton, & Joey (Megan) Hannah of New York; nephews
                Bradley & Nolan; several aunts, uncles, cousins, & a host of
                friends & his beloved dog Harper. Scott was a graduate of
                Southeastern High School class of 2013 where he ran track &
                cross country & holds the schools record in the 5K & was a
                member of the Marching Band. Scott, known as one of the “No Bull
                Guys”, was a national spokesperson for the Great American No
                Bull Challenge which is an organization that focuses on
                empowering teens to end bullying. Having just won his battle
                with cancer, he was a courageous & creative spirit who worked as
                a videographer & also a server at the Cheesecake Factory. In his
                free time, he enjoyed attending musical festivals, traveling, &
                most of all spending quality time with his family & friends.
                Scott was a loving son, brother, grandson, uncle, & friend.
                Scott never knew a stranger, loved to make people laugh and was
                a friend to all. He will be missed by all of those who love him.
                Friends & family may call on Friday, December 2, 2022, at the
                First Christian Church 3638 Middle Urbana Rd. Springfield, Ohio
                45502 from 10AM – 12PM where a funeral service to celebrate his
                life will begin at 12PM with Pastor Anthony Smith officiating.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === "production") {
    await generateRssFeed();
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
      events: [
        {
          id: 1,
          title: "Born",
          description: "",
          date: "1994-10-01",
        },
        {
          id: 2,
          title: "Graduated High School",
          description: "",
          date: "2013-05-26",
        },
        {
          id: 3,
          title: "Graduated College",
          description: "",
          date: "2017-05-26",
        },
        {
          id: 4,
          title: "Promoted to Angel",
          description: "",
          date: "2022-11-27",
        },
      ],
    },
  };
}
