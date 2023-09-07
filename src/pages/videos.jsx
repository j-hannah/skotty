import Head from "next/head";
import Image from "next/image";

import { Card } from "@/components/Card";
import { SimpleLayout } from "@/components/SimpleLayout";
import logoAnimaginary from "@/media/images/logos/animaginary.svg";
import logoCosmos from "@/media/images/logos/cosmos.svg";
import logoHelioStream from "@/media/images/logos/helio-stream.svg";
import logoOpenShuttle from "@/media/images/logos/open-shuttle.svg";
import logoPlanetaria from "@/media/images/logos/planetaria.svg";
import { getAllVideos } from "@/lib/getAllVideos";
import { useEffect, useState } from "react";
import VideoModal from "@/components/VideoModal";

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Videos() {
  const [videos, setVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState(null);

  useEffect(() => {
    getAllVideos().then((videos) => {
      setLoaded(true);
      setVideos(videos);
    });
  }, [loaded]);

  useEffect(() => {
    if (selectedVideoIndex !== null) {
      setSelectedVideo(filteredVideos[selectedVideoIndex]);
    }
  }, [filteredVideos, selectedVideoIndex]);

  useEffect(() => {
    if (selectedFilter) {
      const filteredVideos = videos.filter((v) => v.source === selectedFilter);
      setFilteredVideos(filteredVideos);
    } else {
      setFilteredVideos(videos);
    }
  }, [videos, selectedFilter]);

  function handleVideoSelection(index) {
    setSelectedVideoIndex(index);
  }

  function handleNext() {
    const nextIndex =
      selectedVideoIndex < filteredVideos.length - 1
        ? selectedVideoIndex + 1
        : filteredVideos.length - 1;
    setSelectedVideoIndex(nextIndex);
    console.log(selectedVideoIndex);
  }
  function handlePrev() {
    const prevIndex = selectedVideoIndex > 1 ? selectedVideoIndex - 1 : 0;
    setSelectedVideoIndex(prevIndex);
    console.log(selectedVideoIndex);
  }

  return (
    <>
      <Head>
        <title>Videos - Scott Hannah</title>
        <meta name="description" content="Scott Hannah's Video Creations" />
      </Head>
      <SimpleLayout
        title="Video Creations"
        intro="Rarely would you find Scott without his camera up. Always capturing the life moments and creating entertaining media."
      >
        <div className="isolate my-4 inline-flex items-center rounded-md shadow-sm">
          <span className="mr-4">Filters: </span>
          <button
            type="button"
            className={`
              ${selectedFilter === "tiktok" ? "bg-teal-400" : ""}
              relative inline-flex items-center rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-teal-100 focus:z-10`}
            onClick={() =>
              setSelectedFilter((prev) => (prev === "tiktok" ? null : "tiktok"))
            }
          >
            TikTok
          </button>
          <button
            type="button"
            className={`
              ${selectedFilter === "youtube" ? "bg-teal-400" : ""}
              relative -ml-px inline-flex items-center rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-teal-100 focus:z-10`}
            onClick={() =>
              setSelectedFilter((prev) =>
                prev === "youtube" ? null : "youtube"
              )
            }
          >
            YouTube
          </button>
        </div>

        <ul
          role="list"
          className="grid grid-cols-2 items-center gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
        >
          {loaded &&
            filteredVideos.map((video, i) => (
              <li key={video.id} className="relative">
                <div
                  className={`group ${
                    video.source === "youtube" ? "aspect-h-7" : "aspect-h-12"
                  } aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100`}
                >
                  <Image
                    src={video.thumbnail}
                    width={150}
                    height={300}
                    alt=""
                    className="pointer-events-none object-cover group-hover:opacity-75"
                  />
                  <button
                    type="button"
                    className="absolute inset-0 focus:outline-none"
                    onClick={() => handleVideoSelection(i)}
                  >
                    <span className="sr-only">
                      View details for {video.title}
                    </span>
                  </button>
                </div>
                <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
                  {video.title}
                </p>
              </li>
            ))}
        </ul>
        <VideoModal
          show={selectedVideo !== null}
          video={selectedVideo}
          onClose={() => setSelectedVideo(null) && selectedVideoIndex(0)}
          goToPrev={selectedVideoIndex > 0 ? handlePrev : null}
          goToNext={handleNext}
        />
      </SimpleLayout>
    </>
  );
}
