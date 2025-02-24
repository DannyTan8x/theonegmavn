"use client";
import { useEffect, useCallback } from "react";
import { usePathname } from "next/navigation"; // Import usePathname from next/navigation
import { useScroll } from "../context/ScrollContext"; // Import context
import Logo from "../assets/Logo.png";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Navbar.module.scss"; // Import the SCSS module

export default function Navbar() {
  const { activeSection, setActiveSection, setSectionIndex } = useScroll();
  const pathname = usePathname(); // Use usePathname for navigation

  const scrollToSection = useCallback((targetId: string, index: number) => {
    console.log(targetId);
    setActiveSection(targetId);
    setSectionIndex(index); // Update section index for Home scrolling
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });
    }
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null, // Use the viewport as the root
      threshold: 0.5, // Trigger when 50% of the section is visible
    };
    console.log("Scrolling");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [pathname]); // Update when the pathname changes

  useEffect(() => {
    if (pathname) {
      const targetSection = document.getElementById(pathname.slice(1)); // remove "/" from path
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: "smooth",
        });
      }
    }
  }, [pathname]);

  return (
    <nav className={`${styles.navbar}`}>
      <div
        className={`container mx-auto flex items-center justify-between mt-5 ${activeSection}`}
      >
        <div className="flex gap-5">
          <Image src="Logo.png" alt="Profile" width={50} height={50} />
          <a href="/" className="flex flex-col items-left mx-2 font-bold">
            <span className="text-3xl">THE ONE</span>{" "}
            <span className="text-sm italic">ONE SOLUTION</span>
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse row`}
          id="navbarSupportedContent"
        >
          <ul>
            <li>
              <Link href="/">HOME</Link>
            </li>
            <li>
              <Link href="/#service">SERVICE</Link>
            </li>
            <li>
              <Link href="/#news">NEWS</Link>
            </li>
            <li>
              <Link href="/contact">CONTACT US</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
