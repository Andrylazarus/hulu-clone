import Image from "next/image";
import Result from "./Result";
import {ThumbUpIcon} from '@heroicons/react/outline'
import { forwardRef } from "react";


const Thumbnail = forwardRef(({ results }, ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div ref={ref} className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
      <Image
        layout="responsive"
        src={`${BASE_URL}${results.backdrop_path || Result.poster_path}` || `${BASE_URL}${result.poster_path}`}
        height={1080}
        width={1920}
      />
      <div className="p-2">
        <p className="truncate max-w-md">{results.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {results.title || results.original_name}</h2>

        <p className="flex items-center opacity-0 group-hover:opacity-100">{results.media_type && `${results.media_type} •`}{" "}
            {results.release_date || results.first_air_date} •{" "}
            <ThumbUpIcon className="h-5 mx-2" /> {results.vote_count}
        </p>
      </div>
    </div>
  );
})

export default Thumbnail;
