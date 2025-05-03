import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import MaxWidth from './MaxWidthRapper';
import { nunito } from '../app/layout';
import { redirect } from 'next/navigation';
import Onclick from './Onclick';
import ScrollTo from './Scrollto';

const Navbar = () => {


  return (
    <nav className=" sticky top-0 inset-x-0 z-50 h-[5.3rem] pt-4  bg-background drop-shadow-lg border-b-2 border-primary drop-shadow-shadow">
      <MaxWidth>
        <div className="flex justify-between items-center">
          {/* icon and logo */}
          <div className="flex  md:gap-6 justify-start items-center">
            <div className=" w-14 h-12 lg:hidden hover:bg-transparent/10 rounded-lg flex justify-center items-center text-primary cursor-pointer">
              <FontAwesomeIcon className="w-[2.5rem] h-8 " icon={faBarsStaggered} size="sm" />
            </div>
            <Onclick path="/">
              <div className="flex justify-center items-center gap-3">
                <Image
                  className="w-[2.6rem]    cursor-pointer "
                  alt="logo"
                  src="/logo.png"
                  width={700}
                  height={700}
                />
                <div className="text-primary hidden md:block font-bold text-2xl">
                  <h1>DeonBase</h1>
                </div>
              </div>{' '}
            </Onclick>
          </div>
          {/* icon and logo */}

          <div
            className={`${nunito.className} flex text-primary font-bold  items-center  gap-9 capitalize`}
          >
            {/* menu */}
            <div className="lg:flex hidden  gap-8">
              <ScrollTo targetId="home-section">
                <div className="cursor-pointer flex items-center hover:text-primary transition-all gap-2">
                  <h1>Home</h1>
                </div>
              </ScrollTo>
              <ScrollTo targetId="about-section">
                <div className="cursor-pointer flex hover:text-primary transition-all items-center gap-2">
                  <h1>about</h1>
                </div>
              </ScrollTo>
              <ScrollTo targetId="details-section">
                <div className="cursor-pointer flex hover:text-primary transition-all items-center gap-2">
                  <h1>details</h1>
                </div>
              </ScrollTo>
              <ScrollTo targetId="pricing-section">
                <div className="cursor-pointer flex hover:text-primary transition-all items-center gap-2">
                  <h1>pricing</h1>
                </div>
              </ScrollTo>
            </div>
            {/* contact button*/}
            <ScrollTo targetId="contact-us-section">
              <div className="w-[9rem] h-13 ">
                <div className="w-[8.2rem] h-13 transition-all bg-primary rounded-2xl border-b-4 border-r-4 hover:h-11 hover:w-[8rem] border-primary ">
                  <div className="bg-background border  border-primary text-primary h-12 flex font-bold    justify-center items-center w-[8rem] rounded-2xl">
                    <h1 className=" text-lg">
                      contact us
                    </h1>
                  </div>
                </div>
              </div>
            </ScrollTo>
          </div>
        </div>
      </MaxWidth>
    </nav>
  );
};

export default Navbar;
