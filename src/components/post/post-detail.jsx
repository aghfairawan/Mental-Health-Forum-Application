/* eslint-disable react/prop-types */
import { Clock } from "lucide-react";
import { formatDateV2, timePassed } from "../../utils/date-converter";
import { convertToInitial } from "../../utils/helper-converter";
import LoadingForumContent from "../ui/loading";

export default function PostDetail({ post, loading }) {
  //   console.log(post.author.username);

  return (
    <div className="">
      {loading ? (
        <div className="border border-gray-200 bg-white py-10 px- ">
          <LoadingForumContent />
        </div>
      ) : (
        <>
          <div className=" bg-dark-navy py-3 pr-2 pl-4 shadow mt-5 mb-1 text-white rounded-t-lg flex justify-between">
            <h1 className="text-lg font-semibold">{post.title}</h1>
            <span className="flex justify-end items-center text-xs md:text-sm font-normal gap-1">
              <Clock size={15} />
              {formatDateV2(post.createdAt)} by {post.author.username}
            </span>
          </div>
          <div className="flex md:flex-row md:gap-0 bg-gray-100 border-white border-solid border-2 shadow text-custom-gray">
            <div className="flex flex-col justify-start md:justify-center items-center p-1 md:p-4 border-white border-r-2">
              <div className="relative  md:text-4xl font-medium inline-flex items-center justify-center w-10 h-10 md:w-24 md:h-24 overflow-hidden bg-gray-300 rounded-full">{convertToInitial(post.author.username)}</div>
              <div>
                <p className="text-sm md:text-base break-all">{post.author.username}</p>
              </div>
            </div>
            <div className="mt-2 px-2 md:px-1 flex md:divide-y flex-col w-11/12 ">
              <p className="text-base mb-4">{post.content}</p>
            </div>
          </div>
          <div>
            {post.comments.map((comment) => (
              <div key={comment._id} className="flex md:flex-row md:gap-0 my-2 shadow bg-white border-gray-200 border-solid border-2 text-custom-gray">
                <div className="flex flex-col justify-start md:justify-center  items-center p-1 md:p-4 border-gray-200 border-r-2">
                  <div className="relative  md:text-4xl font-medium inline-flex items-center justify-center w-10 h-10 md:w-24 md:h-24 overflow-hidden bg-gray-300 rounded-full">{convertToInitial(comment.commenter.username)}</div>
                  <div className="">
                    <p className="text-sm md:text-base break-all">{comment.commenter.username}</p>
                  </div>
                </div>
                <div className="mt-2 px-2 md:px-1 flex md:divide-y flex-col w-11/12">
                  <span className="mb-1 flex md:justify-end text-xs md:text-sm font-extralight">{timePassed(comment.createdAt)}</span>
                  <p className="text-base mb-4">{comment.text}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
