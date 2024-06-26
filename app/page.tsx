"use client";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { NewCourses } from "./components/NewCourses";
import { ExistingCourses } from "./components/ExistingCourses";

export default function Home() {
  return (
    <div className="md:max-w-screen-md md:mx-auto">
      <Navbar />
      <Hero />
      <NewCourses />
      <ExistingCourses />
    </div>
  );
}
