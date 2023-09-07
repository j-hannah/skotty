import Head from "next/head";

import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { SimpleLayout } from "@/components/SimpleLayout";

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  );
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  );
}

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Scott Hannah - Cancer Journey</title>
        <meta name="description" content="Scott Hannah Cancer Journey" />
      </Head>
      <SimpleLayout
        title="Here is what Scott had to say about his Cancer Journey"
        intro=""
      >
        <section className="text-lg ">
          <div className="space-y-5 text-zinc-800 dark:text-zinc-100">
            <iframe
              src="https://player.vimeo.com/video/730360977?h=a7208cefe4"
              width="640"
              height="360"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
              className="float-right ml-5 h-72 w-full md:w-1/2"
            ></iframe>
            <p>
              When I found out I had cancer, I was honestly very shocked. It put
              me in a very dark mental place. Any guy could understand that if
              this happened to you. It would just put you in a very weird place
              in my mind. So I didn't know how to talk about it with anybody. It
              was just a very hard mental place for me to be in.
            </p>
            <p>
              My chemo treatments were intense. I would go in Monday through
              Friday, six hours a day, getting treatment, and it was very hard
              on my body. I didn't have energy to be able to work, and I wasn't
              able to work at all during this whole time. The Gala of Hope
              Foundation was able to help me pay for two months of my rent, and
              that just took a weight off of my shoulder as I didn't have to
              worry about it for two months.
            </p>
            <p>
              Today I'm cancer free I'm doing great, my energy's back. I do have
              some long term side effects that I'm dealing with, I still have
              the neuropathy in my hand making my hands pretty weak. So that's
              just a day to day struggle, gaining back the strength in my hands.
              I have a new daily routine that I'm working out. But this whole
              journey has made me such a stronger person.
            </p>
            <p>
              I have a new outlook on life and I appreciate it a lot more. Thank
              you so much to all the donors who donated to this foundation. It
              really helped me when I was going through a really hard time
              during my cancer journey. And I want to encourage everybody to
              donate something to this foundation so that it can help other
              people who are going through really tough cancer journeys as well.
            </p>
          </div>
        </section>
        {/* <SpeakingSection title="Conferences">
            <Appearance
              href="#"
              title="In space, no one can watch you stream — until now"
              description="A technical deep-dive into HelioStream, the real-time streaming library I wrote for transmitting live video back to Earth."
              event="SysConf 2021"
              cta="Watch video"
            />
            <Appearance
              href="#"
              title="Lessons learned from our first product recall"
              description="They say that if you’re not embarassed by your first version, you’re doing it wrong. Well when you’re selling DIY space shuttle kits it turns out it’s a bit more complicated."
              event="Business of Startups 2020"
              cta="Watch video"
            />
          </SpeakingSection>
          <SpeakingSection title="Podcasts">
            <Appearance
              href="#"
              title="Using design as a competitive advantage"
              description="How we used world-class visual design to attract a great team, win over customers, and get more press for Planetaria."
              event="Encoding Design, July 2022"
              cta="Listen to podcast"
            />
            <Appearance
              href="#"
              title="Bootstrapping an aerospace company to $17M ARR"
              description="The story of how we built one of the most promising space startups in the world without taking any capital from investors."
              event="The Escape Velocity Show, March 2022"
              cta="Listen to podcast"
            />
            <Appearance
              href="#"
              title="Programming your company operating system"
              description="On the importance of creating systems and processes for running your business so that everyone on the team knows how to make the right decision no matter the situation."
              event="How They Work Radio, September 2021"
              cta="Listen to podcast"
            />
          </SpeakingSection> */}
        {/* </div> */}
      </SimpleLayout>
    </>
  );
}
