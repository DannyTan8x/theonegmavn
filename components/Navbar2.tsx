"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
const navigation = [
  { name: "HOME", href: "/", section: "home" },
  { name: "SERVICE", href: "/#service", section: "service" },
  { name: "NEWS", href: "/#news", section: "news" },
  { name: "CONTACT US", href: "/contact", section: "contact" },
];
function classNames(...classes: String[]) {
  return classes.filter(Boolean).join(" ");
}
export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  // useEffect(() => {
  //   const handleScroll = () => {
  //     sections.forEach((section) => {
  //       const element = document.getElementById(section);
  //       if (element) {
  //         const rect = element.getBoundingClientRect();
  //         if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
  //           setActiveSection(section);
  //           document.documentElement.style.setProperty(
  //             "--active-section",
  //             section
  //           );
  //         }
  //       }
  //     });
  //   };
  //   console.log(activeSection);
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    let currentSectionIndex = 0;
    let isScrolling = false;

    // Variables for touch control
    let startY = 0;
    let endY = 0;
    const handleActive = () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            setActiveSection(section.id);
            document.documentElement.style.setProperty(
              "--active-section",
              section.id
            );
          }
        }
      });
    };
    const scrollToSection = (index: number) => {
      if (index < 0 || index >= sections.length) return; // Out of bounds check
      isScrolling = true;

      const section = sections[index];
      console.log(section);
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
      setActiveSection(section.id); // Update global state
      // Reset isScrolling after animation duration
      setTimeout(() => {
        isScrolling = false;
      }, 500); // Adjust this time based on animation duration
    };

    // Mouse wheel handler
    let wheelTimeout: NodeJS.Timeout;
    const handleWheel = (event: WheelEvent) => {
      handleActive();
      if (isScrolling) return;

      clearTimeout(wheelTimeout); // Reset debounce timer
      wheelTimeout = setTimeout(() => {
        event.preventDefault();

        const direction = event.deltaY > 0 ? 1 : -1;
        const currentScroll = window.scrollY;

        const currentSection = sections[currentSectionIndex];
        console.log("wheelSection:", currentSection);
        const sectionTop = currentSection.offsetTop;
        const sectionBottom = sectionTop + currentSection.offsetHeight;

        if (
          (direction === 1 &&
            currentScroll + window.innerHeight >= sectionBottom) ||
          (direction === -1 && currentScroll <= sectionTop)
        ) {
          const nextIndex = currentSectionIndex + direction;
          if (nextIndex >= 0 && nextIndex < sections.length) {
            currentSectionIndex = nextIndex;

            scrollToSection(nextIndex);
          }
        }
      }, 100); // Debounce delay
    };

    // Touch start handler
    const handleTouchStart = (event: TouchEvent) => {
      startY = event.touches[0].clientY; // Get the initial touch Y position
    };

    // Touch move handler
    const handleTouchMove = (event: TouchEvent) => {
      endY = event.touches[0].clientY; // Update the touch Y position as the finger moves
    };

    // Touch end handler
    const handleTouchEnd = () => {
      if (isScrolling) return; // Prevent multiple scrolls during animation

      const direction = startY - endY; // Calculate the swipe direction
      if (Math.abs(direction) > 50) {
        // Only trigger if the swipe is significant
        if (direction > 0) {
          // Swipe up
          if (currentSectionIndex < sections.length - 1) {
            currentSectionIndex += 1;
            scrollToSection(currentSectionIndex);
          }
        } else {
          // Swipe down
          if (currentSectionIndex > 0) {
            currentSectionIndex -= 1;
            scrollToSection(currentSectionIndex);
          }
        }
      }
    };

    // Add event listeners for both mouse and touch controls
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      // Cleanup event listeners
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);
  return (
    <Disclosure
      as="nav"
      className="fixed bg-gray-100 p-2 absolute left-0 right-0 md:left-15 md:mt-5 md:right-15 md:rounded-full"
    >
      <div className="mx-auto max-w-7xl px-2 ms:px-4 lg:px-3">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo & The One */}
          <div className="flex gap-2 lg:gap-5">
            <Image
              src="Logo.png"
              alt="Profile"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "auto", height: "50px" }}
            />
            <Link href="/" className="flex flex-col items-left mx-2 font-bold">
              <span className="text-3xl">THE ONE</span>{" "}
              <span className="text-sm italic">ONE SOLUTION</span>
            </Link>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-open:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-open:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-streth sm:justify-end">
            <div className="hidden sm:ml-5 md:block">
              <div className={`${activeSection} flex space-x-1 `}>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      "text-gray-300 hover:bg-gray-700 hover:text-white",
                      `${
                        activeSection === item.section ? "active-section" : ""
                      } rounded-full w-30 px-3 py-2 md:px-2 lg:mx-5 text-sm font-medium text-center`
                    )}
                    onClick={() => setActiveSection(item.section)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Disclosure>
  );
}
//
