import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BgEffect from '../components/BgEffect';
import ConnectionShow from '../components/ConnectionShow';
import CustomizableSolution from '../components/Customize';
import FloatingButtons from '../components/FloatingButtons';
import MaxWidth from '../components/MaxWidthRapper';
import Payment from '../components/Payment';
import Link from 'next/link';
import Onclick from '../components/Onclick';

export default function Home() {
  return (
    <div>
      <section
        id="home-section"
        className="w-full h-full pt-15 lg:h-[51.4rem] relative overflow-hidden  "
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-tl from-black from-15% via-primary/70 via-50% to-black to-85%">
          {/* Subtle animation for gradient */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0,transparent_70%)] animate-[pulse_15s_infinite]" />
          </div>
        </div>
        <MaxWidth>
          <div className="relative w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-4  ">
            {/* Text Content */}
            <div className="w-full h-full pl-8 pt-30 text-slate-300">
              <div className=" flex flex-col justify-center items-start">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Powerful Platform <br />
                  <span className="text-primary">For Your Business</span>
                </h1>

                <div className=" text-lg md:text-xl">
                  <div className="flex items-center gap-4 p-3   hover:bg-white/5 rounded-lg transition-all duration-300 group">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/50 transition-all">
                      <span className="text-primary">✓</span>
                    </div>
                    <h2 className="capitalize">All-in-one platform</h2>
                  </div>

                  <div className="flex items-center gap-4 p-3 hover:bg-white/5 rounded-lg transition-all duration-300 group">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/50 transition-all">
                      <span className="text-primary">✓</span>
                    </div>
                    <h2 className="capitalize">One time payment</h2>
                  </div>

                  <div className="flex items-center gap-4 p-3  hover:bg-white/5 rounded-lg transition-all duration-300 group">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/50 transition-all">
                      <span className="text-primary">✓</span>
                    </div>
                    <h2 className="capitalize">Customizable to needs</h2>
                  </div>

                  <div className="flex items-center gap-4 p-3  hover:bg-white/5 rounded-lg transition-all duration-300 group">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/50 transition-all">
                      <span className="text-primary">✓</span>
                    </div>
                    <h2 className="capitalize">Own hosting & data control</h2>
                  </div>
                </div>
              </div>

              <div className=" mt-14 flex justify-start pl-6 sm:pl-10 items-center">
                <Link href="/contact">
                  <button className="px-10 py-3 border hover:text-primary text-lg md:text-xl hover:border-primary hover:bg-black font-semibold cursor-pointer border-white/90 rounded-lg bg-primary text-white/90 transition-all duration-300 shadow-md ">
                    Book a Meeting
                  </button>
                </Link>
              </div>
            </div>

            {/* Visual/Image Placeholder */}
            <div className="w-full h-[40rem] lg:h-full ">
              <FloatingButtons />
            </div>
          </div>
        </MaxWidth>
        {/* Visual connection component */}
        <BgEffect />
      </section>

      <section
        id="about-section"
        className="w-full h-full pt-30 pb-20 lg:h-[60rem] relative overflow-hidden "
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-bl from-black from-15% via-primary/70 via-50% to-black to-85%">
          {/* Subtle animation for gradient */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0,transparent_70%)] animate-[pulse_15s_infinite]" />
          </div>
        </div>

        {/* Content container */}
        <MaxWidth>
          <div className="relative w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-4     ">
            {/* Visual/Image Placeholder */}

            <div className="relative w-full h-[50rem]">
              <ConnectionShow />
            </div>

            {/* Text content */}
            <div className="w-full h-full px-6 space-y-10 flex flex-col justify-start py-12 items-center">
              {/* 1. All-in-one platform */}
              <div className="group relative max-w-xl w-full">
                <div className="relative bg-black/90 p-6 rounded-xl border border-blue-900/50 hover:border-blue-400 transition duration-200 drop-shadow-lg drop-shadow-primary hover:shadow-blue-900/20 select-none">
                  <div className="text-3xl font-bold mb-4">
                    <h1 className="bg-gradient-to-r from-white/90 to-blue-300 bg-clip-text text-transparent inline-block">
                      All-in-one platform
                      <span className="block  h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mt-2"></span>
                    </h1>
                  </div>
                  <p className="text-base text-gray-300 leading-relaxed">
                    A unified system combining all tailored to fit your business workflow.
                  </p>
                </div>
              </div>

              {/* 2. Own hosting & data control */}
              <div className="group relative max-w-xl w-full">
                <div className="relative bg-black/90 p-6 rounded-xl border border-blue-900/50 hover:border-blue-400 transition duration-200 drop-shadow-lg drop-shadow-primary  hover:shadow-blue-900/20 select-none">
                  <div className="text-3xl font-bold mb-4">
                    <h1 className="bg-gradient-to-r from-white/90 to-blue-300 bg-clip-text text-transparent inline-block">
                      Own hosting & data control
                      <span className="block h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mt-2"></span>
                    </h1>
                  </div>
                  <p className="text-base text-gray-300 leading-relaxed">
                    Run the platform on your own server with full data ownership, security control,
                    and Firebase-powered speed.
                  </p>
                </div>
              </div>

              {/* 3. Free setup included */}
              <div className="group relative max-w-xl w-full">
                <div className="relative bg-black/90 p-6 rounded-xl border border-blue-900/50 hover:border-blue-400 transition duration-200 drop-shadow-lg drop-shadow-primary hover:shadow-blue-900/20 select-none">
                  <div className="text-3xl font-bold mb-4">
                    <h1 className="bg-gradient-to-r from-white/90 to-blue-300 bg-clip-text text-transparent inline-block">
                      Free setup included
                      <span className="block h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mt-2"></span>
                    </h1>
                  </div>
                  <p className="text-base text-gray-300 leading-relaxed">
                    We handle the full setup, including hosting and backend, so you can launch with
                    zero effort.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </MaxWidth>

        <BgEffect />
      </section>
      {/*  */}
      {/*  */}
      {/*  */}
      {/* customize section */}
      {/*  */}
      {/*  */}
      {/*  */}
      <section
        id="details-section"
        className="w-full h-full lg:h-[70rem] relative overflow-hidden py-15"
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-tl from-black from-15% via-primary/70 via-50% to-black to-85%">
          {/* Subtle animation for gradient */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0,transparent_70%)] animate-[pulse_15s_infinite]" />
          </div>
        </div>

        {/*  */}
        <MaxWidth>
          <div className="relative w-full h-full">
            <div>
              <CustomizableSolution />
            </div>
          </div>
        </MaxWidth>
        <BgEffect />
      </section>
      {/*  */}
      {/*  */}
      {/*  */}
      {/* pricing section */}
      {/*  */}
      {/*  */}
      {/*  */}
      <section
        id="pricing-section"
        className="w-full h-full lg:h-[62rem] relative overflow-hidden py-20"
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-bl from-black from-15% via-primary/70 via-50% to-black to-85%">
          {/* Subtle animation for gradient */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0,transparent_70%)] animate-[pulse_15s_infinite]" />
          </div>
        </div>

        {/*  */}
        <MaxWidth>
          <div className="relative w-full h-full ">
            {/* first grid */}
            <Payment />
          </div>
        </MaxWidth>
        <BgEffect />
      </section>
      {/*  */}
      {/*  */}
      {/*  */}
      {/* last section */}
      {/*  */}
      {/*  */}
      {/*  */}
      <section
        id="contact-us-section"
        className="w-full h-full lg:h-[35rem] relative overflow-hidden py-20"
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-tl from-black from-15% via-primary/70 via-50% to-black to-85%">
          {/* Subtle animation for gradient */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0,transparent_70%)] animate-[pulse_15s_infinite]" />
          </div>
        </div>

        {/*  */}
        <MaxWidth>
          <div className="relative w-full h-full py-12 px-4 sm:px-6   border-primary  max-w-2xl mx-auto">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-slate-100 mb-2">
                Thank You for Your Interest!
              </h2>

              <p className="text-gray-200 mb-6 max-w-md mx-auto">
                We appreciate you considering our solutions. Our team will review your inquiry and
                get back to you shortly.
              </p>

              <div className="bg-background border border-primary rounded-lg p-4 mt-10 max-w-md mx-auto">
                <p className="text-sm text-gray-300">
                  For immediate assistance, please contact us at{' '}
                </p>
                <div className="py-2 pt-4 flex justify-center items-center">
                  <a
                    href="https://wa.me/1922252908"
                    target="_blank"
                    className="text-primary hover:underline flex items-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="#25D366"
                    >
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                    +8801922252908
                  </a>
                </div>
                <div className="flex items-center justify-center my-4">
                  <div className="flex-grow border-t border-gray-700"></div>
                  <span className="mx-4 text-gray-400 text-sm">OR</span>
                  <div className="flex-grow border-t border-gray-700"></div>
                </div>
                <div className=" pt-2 pb-4 mt-6">
                  <a href="/contact">
                    <button className="w-full bg-primary cursor-pointer hover:bg-primary-dark text-white font-medium py-4 px-6 rounded-md transition-colors text-sm">
                      Book a Meeting </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </MaxWidth>
        <BgEffect />
      </section>
      <footer className="bg-background border-t border-primary py-12 px-4 sm:px-6 lg:px-10">
        <MaxWidth>
          <div className=" border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Your Deonbase. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="/terms" className="text-gray-400 hover:text-primary text-sm">
                Terms of License
              </a>
            </div>
          </div>
        </MaxWidth>
      </footer>
    </div>
  );
}
