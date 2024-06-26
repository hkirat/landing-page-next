import { UpcomingCourseCard } from "./UpcomingCourseCard";

const NEW_COURSES = [
  {
    title: "Web Dev Cohort 3.0",
    imageUrl: "/web-cohort-3.jpg",
  },
  {
    title: "Web3 Cohort 1.0",
    imageUrl: "/web3-cohort-1.png",
  },
];

export const NewCourses = () => {
  return (
    <div className="w-full md:px-8">
      <div className="flex justify-center pt-8">
        <div className="text-3xl text-gray-300">New Courses</div>
      </div>
      <div className="md:flex justify-center">
        {NEW_COURSES.map((course) => (
          <UpcomingCourseCard
            key={course.title}
            title={course.title}
            imageUrl={course.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};
