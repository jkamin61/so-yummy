'use client'

import logo from '../../public/footer-logo.png';
import Link from "next/link";
import Image from "next/image";
import {navigation} from "@/app/components/partials";
import React from "react";

function Footer(): JSX.Element {
    return (
        <div className="flex flex-col justify-center items-center text-white bg-charcoal">
            <div>
                <div className="flex justify-center items-center gap-2 mt-6">
                    <Link href={"/"}
                          className="rounded-xl bg-asparagus flex items-center justify-center hover:animate-pulse">
                        <Image src={logo} className="w-10 h-10" alt="Footer logo"/>
                    </Link>
                    <h3 className="font-bold text-xl">So Yummy</h3>
                </div>
                <ul className="flex flex-col gap-8 my-8 pb-0 justify-center items-center">
                    {navigation.map((item, index) => (
                        <li key={index}>
                            <Link href={item.href}
                                  className="text-xl hover:text-asparagus motion-safe:hover:text-asparagus">{item.name}</Link>
                        </li>
                    ))}
                </ul>
                <form className="flex flex-col justify-center items-center gap-2 mb-8">
                    <div className="w-52 h-12 flex justify-center items-center gap-1 border border-zinc-500 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 18 14" fill="none">
                            <path
                                d="M2.6 1H15.4C15.824 1.00119 16.2302 1.1596 16.53 1.44065C16.8298 1.7217 16.9987 2.10254 17 2.5V11.5C16.9987 11.8975 16.8298 12.2783 16.53 12.5593C16.2302 12.8404 15.824 12.9988 15.4 13H2.6C2.17604 12.9988 1.76981 12.8404 1.47003 12.5593C1.17024 12.2783 1.00127 11.8975 1 11.5V2.5C1.00127 2.10254 1.17024 1.7217 1.47003 1.44065C1.76981 1.1596 2.17604 1.00119 2.6 1V1Z"
                                stroke="#FAFAFA" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M17 2.49951L9 7.74951L1 2.49951" stroke="#FAFAFA" strokeWidth="1.2"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <input className="bg-charcoal text-xs outline-0" name="email"
                               placeholder="Enter your email address"/>
                    </div>
                    <button
                        className="text-center w-52 h-12 bg-asparagus rounded font-extralight hover:animate-pulse motion-safe:hover:animate-pulse">Subscribe
                    </button>
                </form>
                <ul className="flex gap-4 justify-center items-center mb-4">
                    <li>
                        <Link href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21"
                                 className="hover:animate-pulse motion-safe:hover:animate-pulse" viewBox="0 0 20 21"
                                 fill="none">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M18 9.55437C18 4.55425 13.9701 0.5 9 0.5C4.02991 0.5 0 4.55425 0 9.55437C0 14.0735 3.29063 17.8193 7.59375 18.4992V12.1725H5.30799V9.55437H7.59375V7.55958C7.59375 5.29073 8.93772 4.03646 10.9933 4.03646C11.978 4.03646 13.0082 4.2135 13.0082 4.2135V6.44193H11.8728C10.7554 6.44193 10.4058 7.1396 10.4058 7.85667V9.55437H12.9017L12.5032 12.1725H10.4062V18.5C14.7094 17.8205 18 14.0747 18 9.55437Z"
                                      fill="#8BAA36"/>
                            </svg>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15"
                                 className="hover:animate-pulse motion-safe:hover:animate-pulse" viewBox="0 0 20 15"
                                 fill="none">
                                <path
                                    d="M18.8779 3.09122C18.8779 1.45064 17.6494 0.130882 16.1315 0.130882C14.0754 0.0364572 11.9784 0 9.83545 0H9.1674C7.02963 0 4.92897 0.0364573 2.87285 0.131246C1.3586 0.131246 0.130125 1.45829 0.130125 3.09887C0.0373398 4.39639 -0.00200115 5.69427 0.000225694 6.99215C-0.00348571 8.29003 0.0385769 9.58913 0.126413 10.8894C0.126413 12.53 1.35489 13.8607 2.86914 13.8607C5.02918 13.9592 7.24489 14.0029 9.49771 13.9993C11.7542 14.0065 13.9638 13.9604 16.1263 13.8607C17.6442 13.8607 18.8727 12.53 18.8727 10.8894C18.9618 9.58792 19.0026 8.29004 18.9989 6.98851C19.0073 5.69063 18.967 4.39153 18.8779 3.09122ZM7.68284 10.5686V3.40475L13.0644 6.98486L7.68284 10.5686Z"
                                    fill="#8BAA36"/>
                            </svg>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17"
                                 className="hover:animate-pulse motion-safe:hover:animate-pulse" viewBox="0 0 20 17"
                                 fill="none">
                                <path
                                    d="M18 2.15886C17.3248 2.44409 16.6104 2.632 15.8794 2.71667C16.6476 2.27931 17.2254 1.58448 17.5043 0.762505C16.7779 1.17543 15.9846 1.46515 15.1583 1.61927C14.8103 1.26473 14.3918 0.982678 13.9282 0.790266C13.4647 0.597855 12.9657 0.4991 12.4616 0.500006C10.4209 0.500006 8.76938 2.08229 8.76938 4.03281C8.76793 4.30412 8.79991 4.57462 8.86462 4.83853C7.40126 4.77184 5.96832 4.4089 4.65749 3.77295C3.34666 3.137 2.18681 2.24204 1.25213 1.14532C0.924216 1.68275 0.7508 2.29595 0.75 2.92083C0.75 4.14583 1.40738 5.22864 2.4 5.86301C1.8119 5.84944 1.23585 5.69811 0.72075 5.42187V5.46562C0.72075 7.17915 1.99575 8.60467 3.68325 8.92915C3.36592 9.01139 3.03891 9.05306 2.7105 9.0531C2.47747 9.0535 2.24496 9.03152 2.01638 8.98748C2.4855 10.3911 3.85088 11.412 5.46825 11.4411C4.15402 12.4258 2.54048 12.9581 0.88125 12.9541C0.586732 12.9537 0.292487 12.9367 0 12.9031C1.68794 13.951 3.65004 14.5053 5.65275 14.5C12.4538 14.5 16.1693 9.11508 16.1693 4.44479C16.1693 4.29166 16.1651 4.13854 16.1576 3.98906C16.8788 3.49033 17.5027 2.87056 18 2.15886Z"
                                    fill="#8BAA36"/>
                            </svg>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17"
                                 className="hover:animate-pulse motion-safe:hover:animate-pulse" viewBox="0 0 17 17"
                                 fill="none">
                                <path
                                    d="M12.0415 1.41654C12.9801 1.41934 13.8793 1.79341 14.543 2.45704C15.2066 3.12067 15.5807 4.01995 15.5835 4.95846V12.0415C15.5807 12.9801 15.2066 13.8793 14.543 14.543C13.8793 15.2066 12.9801 15.5807 12.0415 15.5835H4.95846C4.01995 15.5807 3.12067 15.2066 2.45704 14.543C1.79341 13.8793 1.41934 12.9801 1.41654 12.0415V4.95846C1.41934 4.01995 1.79341 3.12067 2.45704 2.45704C3.12067 1.79341 4.01995 1.41934 4.95846 1.41654H12.0415ZM12.0415 0H4.95846C2.23125 0 0 2.23125 0 4.95846V12.0415C0 14.7688 2.23125 17 4.95846 17H12.0415C14.7688 17 17 14.7688 17 12.0415V4.95846C17 2.23125 14.7688 0 12.0415 0Z"
                                    fill="#8BAA36"/>
                                <path
                                    d="M13.104 4.9602C12.8939 4.9602 12.6885 4.89789 12.5137 4.78114C12.339 4.66439 12.2028 4.49845 12.1224 4.30431C12.042 4.11016 12.021 3.89653 12.062 3.69042C12.103 3.48432 12.2041 3.295 12.3527 3.1464C12.5013 2.99781 12.6907 2.89662 12.8968 2.85562C13.1029 2.81462 13.3165 2.83567 13.5106 2.91608C13.7048 2.9965 13.8707 3.13268 13.9875 3.30741C14.1042 3.48214 14.1665 3.68756 14.1665 3.89771C14.1668 4.03732 14.1396 4.17562 14.0863 4.30466C14.033 4.4337 13.9547 4.55095 13.856 4.64968C13.7573 4.7484 13.64 4.82665 13.511 4.87994C13.382 4.93323 13.2437 4.96051 13.104 4.9602ZM8.5 5.66829C9.06041 5.66829 9.60823 5.83446 10.0742 6.14581C10.5401 6.45715 10.9033 6.89968 11.1178 7.41743C11.3322 7.93517 11.3883 8.50489 11.279 9.05452C11.1697 9.60416 10.8998 10.109 10.5036 10.5053C10.1073 10.9016 9.60242 11.1714 9.05278 11.2808C8.50314 11.3901 7.93343 11.334 7.41568 11.1195C6.89794 10.9051 6.45541 10.5419 6.14407 10.0759C5.83272 9.60997 5.66654 9.06215 5.66654 8.50174C5.66735 7.75051 5.96613 7.03028 6.49733 6.49907C7.02853 5.96787 7.74877 5.66909 8.5 5.66829ZM8.5 4.25175C7.65943 4.25175 6.83774 4.501 6.13883 4.968C5.43992 5.43499 4.89519 6.09875 4.57351 6.87534C4.25184 7.65193 4.16768 8.50646 4.33166 9.33088C4.49565 10.1553 4.90043 10.9126 5.4948 11.5069C6.08917 12.1013 6.84645 12.5061 7.67087 12.6701C8.49529 12.8341 9.34982 12.7499 10.1264 12.4282C10.903 12.1066 11.5668 11.5618 12.0337 10.8629C12.5007 10.164 12.75 9.34231 12.75 8.50174C12.75 7.37457 12.3022 6.29357 11.5052 5.49654C10.7082 4.69951 9.62717 4.25175 8.5 4.25175Z"
                                    fill="#8BAA36"/>
                            </svg>
                        </Link>
                    </li>
                </ul>
            </div>
            <div
                className="flex justify-center items-center w-full h-20 bg-white gap-4">
                <p className="text-center text-xss text-zinc-500">© 2023 All Rights Reserved.</p>
                <p className="text-center text-xss text-zinc-400">Terms of Service</p>
            </div>
        </div>
    );
}

export default Footer;