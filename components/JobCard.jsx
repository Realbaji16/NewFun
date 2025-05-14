import { Calendar } from "lucide-react";
import { MapPin } from "lucide-react";
import { Star } from "lucide-react";

const JobCard = ({ job }) => {
return (
    <>
        <hr className="border-t b-[0.5px] border-gray-600" />
        <div className="mb-6 px-8 text-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-sm mb-2 font-semibold">{job.title}</h3>

            <div className="mb-4 text-xs space-y-2">
                <div className="flex text-gray-500 gap-2 ">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <p className="">{job.duration}</p> •
                    <p className="">{job.hoursPerWeek}</p> •
                    <p className="">{job.level}</p>
                </div>
                <div className="flex gap-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <p className="text-gray-600">{job.location}</p>
                </div>
            </div>

            <p className=" text-xs text-gray-700">{job.description}</p>
            <a
                href={job.viewMoreLink}
                className="text-blue-600 mb-8 underline text-xs"
            >
                View more
            </a>
            <div className="flex justify-between mt-2 items-center">
                <div className="flex gap-2">
                    {job.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 border border-gray-600 rounded-full text-sm"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            <div className="flex text-xs text-gray-500 justify-between mt-2 items-center">
                <p>Posted {job.postedAt} </p>
                    <Star fill="white" className="w-4 h-4 text-gray-500" />
            </div>
        </div>
        
    </>
);
};

export default JobCard;
