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
import { usePathname } from "next/navigation";

import { useState, useEffect, useCallback } from "react";

const navigation = [
  {
    name: "HOME",
    href: "/#home",
    section: ["home", "equipment", "featured_service"],
  },
  { name: "SERVICE", href: "/#service", section: ["service"] },
  { name: "NEWS", href: "/#news", section: ["news"] },
  { name: "CONTACT US", href: "/contact", section: ["contact"] },
];
function classNames(...classes: String[]) {
  return classes.filter(Boolean).join(" ");
}
export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [location, setLocation] = useState<Location | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setLocation(window.location);
    }
  }, []);

  //   const location = window.location;
  const scrollToSection = useCallback((targetId: string) => {
    console.log(targetId);
    setActiveSection(targetId);
    const targetSection = document.getElementById(targetId);
    if (targetSection && targetSection instanceof HTMLElement) {
      window.scrollTo({
        top: (targetSection as HTMLElement).offsetTop,
        behavior: "smooth",
      });
    }
  }, []);

  const handleNavigation = (targetId: string) => {
    setTimeout(() => {
      scrollToSection(targetId);
    }, 100); // Small delay for navigation to complete
  };

  // Handle active class dynamically using IntersectionObserver
  useEffect(() => {
    const sections = document.querySelectorAll("main section");
    const options = {
      root: null, // Use the viewport as the root
      threshold: 0.5, // Trigger when 50% of the section is visible
    };
    console.log("Scrolling");
    let timeout: NodeJS.Timeout;
    const observer = new IntersectionObserver((entries) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      }, 100);
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [location]);
  // Smooth scrolling for sections

  useEffect(() => {
    if (pathname.includes("#")) {
      const targetId = pathname.split("#")[1];
      scrollToSection(targetId);
    }
  }, [pathname]);

  // useEffect(() => {
  //   const sections = document.querySelectorAll("section");

  //   let currentSectionIndex = 0;
  //   let isScrolling = false;

  //   // Variables for touch control
  //   let startY = 0;
  //   let endY = 0;
  //   const handleActive = () => {
  //     sections.forEach((section) => {
  //       const element = document.getElementById(section.id);
  //       if (element) {
  //         const rect = element.getBoundingClientRect();
  //         if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
  //           setActiveSection(section.id);
  //           document.documentElement.style.setProperty(
  //             "--active-section",
  //             section.id
  //           );
  //         }
  //       }
  //     });
  //   };

  //   // Mouse wheel handler
  //   let wheelTimeout: NodeJS.Timeout;
  //   const handleWheel = (event: WheelEvent) => {
  //     handleActive();
  //     if (isScrolling) return;

  //     clearTimeout(wheelTimeout); // Reset debounce timer
  //     wheelTimeout = setTimeout(() => {
  //       event.preventDefault();

  //       const direction = event.deltaY > 0 ? 1 : -1;
  //       const currentScroll = window.scrollY;

  //       const currentSection = sections[currentSectionIndex];
  //       console.log("wheelSection:", currentSection);
  //       const sectionTop = currentSection.offsetTop;
  //       const sectionBottom = sectionTop + currentSection.offsetHeight;

  //       if (
  //         (direction === 1 &&
  //           currentScroll + window.innerHeight >= sectionBottom) ||
  //         (direction === -1 && currentScroll <= sectionTop)
  //       ) {
  //         const nextIndex = currentSectionIndex + direction;
  //         if (nextIndex >= 0 && nextIndex < sections.length) {
  //           currentSectionIndex = nextIndex;

  //           scrollToSection(sections[nextIndex].id);
  //         }
  //       }
  //     }, 100); // Debounce delay
  //   };

  //   // Touch start handler
  //   const handleTouchStart = (event: TouchEvent) => {
  //     startY = event.touches[0].clientY; // Get the initial touch Y position
  //   };

  //   // Touch move handler
  //   const handleTouchMove = (event: TouchEvent) => {
  //     endY = event.touches[0].clientY; // Update the touch Y position as the finger moves
  //   };

  //   // Touch end handler
  //   const handleTouchEnd = () => {
  //     if (isScrolling) return; // Prevent multiple scrolls during animation

  //     const direction = startY - endY; // Calculate the swipe direction
  //     if (Math.abs(direction) > 50) {
  //       // Only trigger if the swipe is significant
  //       if (direction > 0) {
  //         // Swipe up
  //         if (currentSectionIndex < sections.length - 1) {
  //           currentSectionIndex += 1;
  //           scrollToSection(sections[currentSectionIndex].id);
  //         }
  //       } else {
  //         // Swipe down
  //         if (currentSectionIndex > 0) {
  //           currentSectionIndex -= 1;
  //           scrollToSection(sections[currentSectionIndex].id);
  //         }
  //       }
  //     }
  //   };

  //   // Add event listeners for both mouse and touch controls
  //   window.addEventListener("wheel", handleWheel, { passive: false });
  //   window.addEventListener("touchstart", handleTouchStart, { passive: true });
  //   window.addEventListener("touchmove", handleTouchMove, { passive: true });
  //   window.addEventListener("touchend", handleTouchEnd, { passive: true });

  //   return () => {
  //     // Cleanup event listeners
  //     window.removeEventListener("wheel", handleWheel);
  //     window.removeEventListener("touchstart", handleTouchStart);
  //     window.removeEventListener("touchmove", handleTouchMove);
  //     window.removeEventListener("touchend", handleTouchEnd);
  //   };
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

    // Mouse wheel handler with dynamic scroll speed
    const handleWheel = (event: WheelEvent) => {
      handleActive();
      if (isScrolling) return; // Prevent multiple scrolls

      // Set isScrolling to true to prevent multiple triggers during scroll
      isScrolling = true;

      // Normalize scroll direction and delta
      const direction = event.deltaY > 0 ? 1 : -1;
      const scrollSpeed = Math.abs(event.deltaY); // Get scroll distance
      const maxSpeed = 300; // Max scroll speed for smoothing (can be adjusted)
      const scrollDistance = Math.min(scrollSpeed, maxSpeed); // Cap scroll distance

      const currentScroll = window.scrollY;
      const currentSection = sections[currentSectionIndex];
      const nextSection = sections[currentSectionIndex + direction];

      if (nextSection) {
        const sectionHeight = nextSection.offsetHeight;
        const sectionTop = nextSection.offsetTop;

        // Check if the scroll has passed 30% of the next section
        const passed30Percent =
          currentScroll + window.innerHeight >=
          sectionTop + sectionHeight * 0.3;

        if (passed30Percent) {
          // Scroll to the next section
          const nextIndex = currentSectionIndex + direction;
          if (nextIndex >= 0 && nextIndex < sections.length) {
            currentSectionIndex = nextIndex;
          }
        }
      }

      // Get the section that is currently in the viewport
      let targetSection: HTMLElement | null = null;
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          targetSection = section;
        }
      });

      if (targetSection) {
        window.scrollTo({
          top: (targetSection as HTMLElement).offsetTop,
          behavior: "smooth",
        });
      }

      event.preventDefault(); // Prevent default scroll behavior

      // Reset isScrolling after a short delay to allow smooth scrolling to complete
      setTimeout(() => {
        isScrolling = false;
      }, 600); // Adjust timeout based on your animation duration
    };

    // Touch start handler
    const handleTouchStart = (event: TouchEvent) => {
      startY = event.touches[0].clientY; // Get the initial touch Y position
    };

    // Touch move handler
    const handleTouchMove = (event: TouchEvent) => {
      endY = event.touches[0].clientY; // Update the touch Y position
    };

    // Touch end handler with dynamic swipe behavior
    const handleTouchEnd = () => {
      if (isScrolling) return; // Prevent multiple scrolls during animation

      // Set isScrolling to true
      isScrolling = true;

      const direction = startY - endY; // Calculate swipe direction
      const swipeDistance = Math.abs(direction);
      const currentSection = sections[currentSectionIndex];
      const nextSection =
        sections[currentSectionIndex + (direction > 0 ? 1 : -1)];

      if (nextSection) {
        const sectionHeight = nextSection.offsetHeight;
        const sectionTop = nextSection.offsetTop;

        // Check if the swipe has passed 30% of the next section height
        const passed30Percent = swipeDistance >= sectionHeight * 0.3;

        if (passed30Percent) {
          // Scroll to the next section
          const nextIndex =
            direction > 0 ? currentSectionIndex + 1 : currentSectionIndex - 1;
          if (nextIndex >= 0 && nextIndex < sections.length) {
            currentSectionIndex = nextIndex;
          }
        }
      }

      // Get the section that is currently in the viewport
      let targetSection: HTMLElement | null = null;
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          targetSection = section;
        }
      });

      if (targetSection) {
        scrollToSection((targetSection as HTMLElement).id); // Scroll to the section that is visible in the viewport
      }

      // Reset isScrolling after a short delay to allow smooth scrolling to complete
      setTimeout(() => {
        isScrolling = false;
      }, 600); // Adjust timeout based on your animation duration
    };

    // Add event listeners for both mouse and touch controls
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

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
      className="container animate-fade-down animate-once animate-ease-in"
    >
      {({ open }) => (
        <div
          className={classNames(
            `navbar  m-auto nav-${activeSection}`,
            "fixed p-2  left-0 right-0 md:left-15 md:mt-5 md:right-15",
            open
              ? "md:rounded-t-[40px] md:rounded-b-lg !bg-white"
              : "md:rounded-full " // Dynamically change based on open state
          )}
        >
          <div className="mx-auto  px-2 ms:px-4 lg:px-3">
            <div className="mx-auto  px-2 ms:px-4 lg:px-3">
              <div className="relative flex h-16 items-center justify-between">
                {/* Logo & The One */}
                <div className={classNames("flex gap-2 lg:gap-5")}>
                  <Image
                    src="Logo.png"
                    alt="Profile"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "auto", height: "50px" }}
                  />
                  <Link
                    href="/"
                    className="flex flex-col items-left mx-2 font-bold"
                  >
                    <span className="text-3xl whitespace-nowrap">THE ONE</span>{" "}
                    <span className="text-sm italic">ONE SOLUTION</span>
                  </Link>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
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
                  <div className="hidden sm:ml-5 lg:block">
                    <div className={`flex`}>
                      {navigation.map((item) => (
                        <ul key={item.name}>
                          <li className="nav-item rounded-full w-30 px-1 py-2 md:px-1 md:mx-2 lg:mx-3 xl:mx-8 text-sm font-medium text-center">
                            <Link
                              href={item.href}
                              className={classNames(
                                "nav-link font-bold relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full",
                                `${
                                  item.section.includes(activeSection)
                                    ? "active"
                                    : ""
                                }`
                              )}
                              onClick={() => handleNavigation(item.section[0])}
                            >
                              {item.name}
                            </Link>
                          </li>
                        </ul>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <DisclosurePanel className="lg:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    aria-current={
                      item.section.includes(activeSection) ? "page" : undefined
                    }
                    className={classNames(
                      item.section.includes(activeSection)
                        ? " text-black font-bold"
                        : "text-gray-500 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
              </div>
            </DisclosurePanel>
          </div>
        </div>
      )}
    </Disclosure>
  );
}
//
