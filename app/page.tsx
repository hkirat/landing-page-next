"use client";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { NewCourses } from "./components/NewCourses";
import { ExistingCourses } from "./components/ExistingCourses";

export default function Home() {
  return (
    <div className="md:min-w-screen-xl md:mx-auto">
      <Navbar />
      <div className="absolute top-0 left-0 w-full h-full z-[-1]">
        <div className="overflow-x-hidden">
          <div
            className="absolute left-0 h-48 w-[95%] overflow-x-hidden bg-[#369DFD] bg-opacity-70 blur-[337.4px]"
            style={{ transform: "rotate(-30deg)" }}
          />
        </div>
      </div>
      <Hero />
      <NewCourses />
      <ExistingCourses />
    </div>
  );
}
