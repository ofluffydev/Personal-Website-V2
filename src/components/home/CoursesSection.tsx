import CourseCard from "../../fluffy-pack/components/CourseCard.tsx";
import pythonCourseImage from "../../assets/Images/python-course.png";
import javaCourseImage from "../../assets/Images/java.png";
import reactCourseImage from "../../assets/Images/react.png";
import {FC} from "react";

interface Course {
    image: string | { default: string };
    title: string;
    description: string;
    disabled?: boolean;
    url: string;
}

const CourseSection: FC = () => {
    const courses: Course[] = [{
        image: pythonCourseImage,
        title: "Python",
        description: "A free Python course for everyone.",
        url: "https://python.kadenfrisk.com/",
    }, {
        image: javaCourseImage,
        title: "Java",
        description: "Detailed Java course (Coming Soon)!",
        disabled: true,
        url: "/",
    }, {
        image: reactCourseImage,
        title: "React",
        description: "While React is not an entire language on its own, it is a very popular library for building user interfaces.",
        disabled: true,
        url: "https://react.kadenfrisk.com/",
    }, // Add more courses as needed
    ];

    return (<section className="py-12 bg-black-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Courses</h2>
                <p className="text-center mb-5">All of the programming courses I've created. All free for everyone!</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {courses.map((course, index) => (<CourseCard
                            key={index}
                            image={course.image}
                            title={course.title}
                            description={course.description}
                            disabled={course.disabled}
                            url={course.url}
                        />))}
                </div>
            </div>
        </section>);
};

export default CourseSection;