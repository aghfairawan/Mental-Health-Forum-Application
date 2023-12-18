/* eslint-disable react/prop-types */
import { FolderOpen } from "lucide-react";
import PostListCard from "../ui/post-list-card";
import { motion } from "framer-motion";
import { convertToInitial } from "../../utils/helper-converter";
import { springVariants } from "../../utils/animate-variants";
import { formatDateV2 } from "../../utils/date-converter";
// import { useParams } from "react-router-dom";
import { Pagination } from "flowbite-react";
import LoadingForumContent from "../ui/loading";

export default function PostLists({ posts, loading, currentPage, onPageChange, totalPages }) {
  // const params = useParams();
  // const title = params.title;
  const forumTitle = posts.length > 0 ? posts[0].forum.title : "Forum";

  return (
    <>
      <PostListCard title={forumTitle} icon={<FolderOpen />}>
        <div className="divide-y-2">
          {loading ? (
            <div className="my-10">
              <LoadingForumContent />
            </div>
          ) : (
            <>
              {posts.map((post) => (
                <motion.div key={post._id} variants={springVariants} initial="initial" animate="animate" exit="exit" layout className="grid md:grid-cols-5 mb-2 pt-2 gap-2 ">
                  <div className="flex gap-2 md:col-span-3">
                    <div className="flex gap-2 justify-start items-center">
                      <div className="relative text-xs font-medium inline-flex items-center justify-center w-12 h-12 overflow-hidden bg-gray-300 rounded-full" title={post.author.username}>
                        {convertToInitial(post.author.username)}
                      </div>
                    </div>
                    <div className="">
                      <div>
                        <p className="text-base font-medium line-clamp-1 hover:underline underline-offset-2">{post.title}</p>
                      </div>
                      <p className="line-clamp-1 text-xs font-normal">{post.content}</p>
                      <span className="text-xs font-medium">{formatDateV2(post.createdAt)}</span>
                    </div>
                  </div>
                  <div className="flex  md:justify-center items-center">
                    <span className="text-xs font-medium">Replies: {post.totalComments} </span>
                  </div>
                  <div className="flex justify-start items-center ">
                    {post.comments.length > 0 ? (
                      post.comments.map((comment) => (
                        <div key={comment._id} className="text-sm flex gap-1">
                          <div className="flex gap-2 justify-start items-center">
                            <div className="relative text-xs font-medium inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-300 rounded-full" title={post.author.username}>
                              {convertToInitial(comment.commenter.username)}
                            </div>
                          </div>
                          <div className="flex flex-col gap-0">
                            <span className="line-clamp-1 text-sm">{comment.text}</span>
                            <span className="text-xs">{formatDateV2(comment.createdAt)}</span>
                          </div>
                        </div>
                      ))
                    ) : (
                      <span className="text-sm text-rose-700">No comment yet</span>
                    )}
                  </div>
                </motion.div>
              ))}
              <div className="flex pt-5 pb-2 overflow-x-auto sm:justify-end">
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
              </div>
            </>
          )}
        </div>
      </PostListCard>
    </>
  );
}
