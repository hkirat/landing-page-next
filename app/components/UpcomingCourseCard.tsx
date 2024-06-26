import { useState } from "react";
import { Button } from "./Button";
import { Modal } from "./Modal";

interface CourseCardProps {
    imageUrl: string;
    title: string;
}

export function UpcomingCourseCard({
    imageUrl,
    title
}: CourseCardProps) {
    const [openModal, setOpenModal] = useState(false);

    return <div className="border border-gray-900 rounded m-8 shadow-md shadow-gray-600">
        <img src={imageUrl} className="w-full border-b rounded-lg md:w-[450px]" />
        <div className="flex justify-between p-2">
            <div className="text-xl text-gray-300 flex flex-col justify-center">
                {title}
            </div>
            <Button onClick={() => {
                setOpenModal(true)
            }}>Pre register</Button>
        </div>
        <div>
            {openModal ? <Modal title={title} onClose={() => setOpenModal(false)} /> : null}
        </div>
    </div>
}