import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string;
  previewUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
}) => {
  return (
    <div className="rounded-xl overflow-hidden relative group">
      <div className="relative h-52 md:h-72">
        <Image
          src={imgUrl}
          alt={title}
          layout="fill"
          objectFit="contain"
          className="transition-transform transform group-hover:scale-105"
        />
        <div className="overlay absolute inset-0 flex items-center justify-center bg-[#232225] bg-opacity-0 transition-all duration-500 group-hover:bg-opacity-80 opacity-0 group-hover:opacity-100">
          <Link
            href={previewUrl}
            target="_blank"
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-grayBlue hover:border-white group/link flex items-center justify-center"
          >
            <EyeIcon className="h-10 w-10 text-grayBlue cursor-pointer" />
          </Link>
          {gitUrl && (
            <Link
              href={gitUrl}
              target="_blank"
              className="h-14 w-14 border-2 relative rounded-full border-grayBlue hover:border-white group/link flex items-center justify-center"
            >
              <CodeBracketIcon className="h-10 w-10 text-grayBlue cursor-pointer" />
            </Link>
          )}
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 py-6 px-4 backProj">
        <h5 className="text-xl text-lightBlue mb-2">{title}</h5>
        <p className="text-grayBlue">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
