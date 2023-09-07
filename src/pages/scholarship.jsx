import Head from "next/head";

import { SimpleLayout } from "@/components/SimpleLayout";
import { useState, useEffect } from "react";

function GoFundMe() {
  useEffect(() => {
    try {
      function getIFrame(url) {
        const iframe = document.createElement("iframe");
        return (
          iframe.setAttribute("class", "gfm-embed-iframe"),
          iframe.setAttribute("width", "100%"),
          iframe.setAttribute("height", "540"),
          iframe.setAttribute("frameborder", "0"),
          iframe.setAttribute("scrolling", "no"),
          iframe.setAttribute(
            "src",
            url + "#:~:tcm-regime=GDPR&tcm-prompt=Hidden"
          ),
          iframe
        );
      }

      const embeds = document.getElementsByClassName("gfm-embed");
      for (let i = 0; i < embeds.length; i++) {
        const iframe = getIFrame(embeds[i].getAttribute("data-url"));
        embeds[i].appendChild(iframe);
      }

      return () => {
        if (embeds.length > 0) {
          embeds[0].removeChild(embeds[0].firstChild);
        }
      };
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <div
      className="gfm-embed"
      data-url="https://www.gofundme.com/f/scott-hannah-memorial-scholarship/widget/large"
    ></div>
  );
}

export default function Scholarship() {
  return (
    <>
      <Head>
        <title>Scott Hannah Memorial Scholaship</title>
        <meta
          name="description"
          content="In memory of Scott Hannah, we're partnering with the 4H Foundation to reward others who serve their communities."
        />
      </Head>
      <SimpleLayout title="Scott Hannah Memorial Scholarship" intro="">
        <section className="flex flex-col gap-8 text-lg md:flex-row">
          <div className="space-y-5 text-zinc-800 dark:text-zinc-100 md:w-3/5">
            <p>
              Just months after his victory over cancer, Scott Hannah was found
              murdered in his home on November 27th, 2022. He was a 2013
              graduate of Southeastern High School in South Charleston, Ohio. He
              was a member of the Marching Band, FCCLA, and the Track and Cross
              Country teams where his 5K record stands to this day! He was
              altogether a fun-loving, creative spirit who played piano, wrote
              music, and worked as a videographer.
            </p>
            <p>
              A large part of Scott's legacy was his time serving with his
              friend as National Spokespeople for the Great American NO BULL
              Challenge. Together, they were known as the "No Bull Guys". They
              spent years traveling the country and speaking at events and
              assemblies about bullying. Through these early ventures, he earned
              many awards and accolades, including the Prudential Spirit of
              Community Award and the Megan Meier Foundation Memorial
              Scholarship for those who speak out against bullying in their
              communities.
            </p>
            <p>
              Scott was a loving son, brother, grandson, uncle, & friend. He
              never knew a stranger, loved to make people laugh, and was a
              friend to all. To this day, friends and family hear stories of his
              positive impact on everyone he met.
            </p>
            <p>
              In his memory, we're partnering with the 4H Foundation to reward
              others who serve their communities. For scholarship details, you
              can follow the link below.
            </p>
          </div>
          <div className="md:w-2/5">{GoFundMe()}</div>
        </section>
      </SimpleLayout>
    </>
  );
}
