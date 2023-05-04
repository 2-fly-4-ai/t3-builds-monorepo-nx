import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState, useEffect } from 'react';
import { useGlobalContextTechStore } from '@front-end-nx/shared/ui';
import { useGlobalContextStore } from '@front-end-nx/shared/ui';
import { useRef } from 'react';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
};

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
}: React.PropsWithChildren<ModalProps>) {
  const { setIsWriteTechModalOpen } = useGlobalContextTechStore();
  const { setIsWriteModalOpen } = useGlobalContextStore();

  const modalRef = useRef();
  useEffect(() => {
    if (isOpen) {
      // scroll the modal element to the top
      modalRef?.current?.scrollIntoView({ behavior: 'smooth' });
    }
    // ... rest of your code
  }, [isOpen]);
  return (
    <>
      <Transition appear show={isOpen ? true : false} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={onClose}
          initialFocus={modalRef}
        >
          <Transition.Child
            as={Fragment}
            ref={modalRef}
            enter="ease-out duration-0"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-[#363636]  bg-opacity-70 " />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex  items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="h-full w-full max-w-5xl transform overflow-hidden rounded-2xl bg-white pt-6 text-left align-middle shadow-xl transition-all dark:border-2 dark:border-white dark:bg-black ">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {title}
                  </Dialog.Title>
                  {children}

                  <button onClick={onClose} className="absolute right-6 top-2">
                    <svg
                      className="hover:text-red-500"
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      height="1.5em"
                      width="1.5em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-83.6 290.5c4.8 4.8 4.8 12.6 0 17.4l-40.5 40.5c-4.8 4.8-12.6 4.8-17.4 0L256 313.3l-66.5 67.1c-4.8 4.8-12.6 4.8-17.4 0l-40.5-40.5c-4.8-4.8-4.8-12.6 0-17.4l67.1-66.5-67.1-66.5c-4.8-4.8-4.8-12.6 0-17.4l40.5-40.5c4.8-4.8 12.6-4.8 17.4 0l66.5 67.1 66.5-67.1c4.8-4.8 12.6-4.8 17.4 0l40.5 40.5c4.8 4.8 4.8 12.6 0 17.4L313.3 256l67.1 66.5z"></path>
                    </svg>
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
