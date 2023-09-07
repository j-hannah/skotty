import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  ExclamationTriangleIcon,
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

export default function VideoModal({
  show,
  video,
  onClose,
  goToPrev,
  goToNext,
}) {
  //   const [open, setOpen] = useState(show ?? false);

  const closeModal = () => {
    // setOpen(false);
    onClose?.();
  };

  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={() => closeModal()}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all dark:bg-zinc-900 sm:my-8 sm:w-auto sm:max-w-4xl sm:p-6">
                <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-zinc-900 dark:text-zinc-100"
                    onClick={() => closeModal()}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center">
                    <Dialog.Title
                      as="h3"
                      className="mt-4 text-base font-semibold leading-6 text-gray-900 dark:text-zinc-100"
                    >
                      {video?.title}
                    </Dialog.Title>
                    <div className="align-center my-4 flex">
                      <div className="self-stretch">
                        {goToPrev && (
                          <button
                            type="button"
                            className="mr-auto mt-3 inline-flex h-full w-full items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900  transition hover:bg-zinc-100 dark:bg-zinc-900  dark:text-zinc-100 dark:hover:bg-zinc-800  sm:mt-0 sm:w-auto"
                            onClick={() => goToPrev()}
                          >
                            <ChevronLeftIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                            <span className="sr-only">Previous Video</span>
                          </button>
                        )}
                      </div>

                      {!video?.video.startsWith("https") ? (
                        <video
                          key={video?.id}
                          controls
                          style={{ width: "500px", height: "500px" }}
                        >
                          <source src={video?.video} />
                        </video>
                      ) : (
                        <iframe
                          width="560"
                          height="315"
                          src={video?.video}
                          title="YouTube video player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        ></iframe>
                      )}

                      <div className="self-stretch">
                        {goToNext && (
                          <button
                            type="button"
                            className="mr-auto mt-3 inline-flex h-full w-full items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 transition  hover:bg-zinc-100 dark:bg-zinc-900  dark:text-zinc-100 dark:hover:bg-zinc-800  sm:mt-0 sm:w-auto"
                            onClick={() => goToNext()}
                          >
                            <ChevronRightIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                            <span className="sr-only">Next Video</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 justify-center sm:mt-4 sm:flex">
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:text-zinc-100 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 sm:mt-0 sm:w-auto"
                    onClick={() => closeModal()}
                  >
                    Done
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
