import { PopupRecord, SiteLocale } from '@/graphql/generated';
import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';
import { Image as DatoImage, ResponsiveImageType } from 'react-datocms';

type PropTypes = {
  setPopUp: Dispatch<SetStateAction<boolean>>;
  popup: PopupRecord;
  lng: SiteLocale;
};

const PopUpBanner = ({ setPopUp, popup, lng }: PropTypes) => {
  return (
    <div>
      <div
        onClick={() => {
          setPopUp(false);
        }}
        className="fixed z-40 h-screen w-screen bg-slate-900 bg-opacity-75 "
      ></div>
      <div
        onClick={() => {
          setPopUp(false);
        }}
        className="fixed bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center"
      >
        <section
          onClick={(e) => e.stopPropagation()}
          className="z-50 mx-auto my-auto w-3/4  overflow-hidden rounded-lg bg-white shadow-2xl md:grid md:grid-cols-3"
        >
          <div className="relative h-32 w-full object-cover md:h-full">
            <DatoImage
              data={
                popup.popupImage?.responsiveImage as ResponsiveImageType
              }
              className="h-full w-full object-contain"
              layout="fill"
              objectFit="cover"
              objectPosition="50% 50%"
            />
          </div>

          <div className="my-auto p-4 text-center sm:p-6 md:col-span-2 lg:p-8">
            <p className="text-sm font-semibold uppercase tracking-widest">
              {popup.preTitle}
            </p>

            <h2 className="mt-6 font-black uppercase">
              <span className="text-4xl font-black sm:text-5xl lg:text-6xl">
                {' '}
                {popup.title}{' '}
              </span>

              <span className="mt-2 block text-sm">{popup.subtitle}</span>
            </h2>

            <Link
              onClick={() => {
                setPopUp(false);
              }}
              className="mt-8 inline-block w-full bg-black py-4 text-sm font-bold uppercase tracking-widest text-white"
              href={`/${lng}/${popup.button[0].slug}`}
            >
              {popup.button[0].label}
            </Link>
            <div
              className="mt-8 inline-block w-full cursor-pointer text-xs font-bold uppercase tracking-widest text-slate-500"
              onClick={() => {
                setPopUp(false);
              }}
            >
              {popup.dismissButtonLabel}
            </div>
            <p className="mt-8 text-xs font-medium uppercase text-gray-400">
              {popup.underText}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PopUpBanner;
