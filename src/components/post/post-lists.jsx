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

export default function PostLists({ posts, loading, currentPage, onPageChange }) {
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
                <motion.div key={post._id} variants={springVariants} initial="initial" animate="animate" exit="exit" layout className="flex justify-between mb-2 pt-2 gap-2 ">
                  <div className="flex gap-2">
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

                  <div>{post.totalComments} </div>
                </motion.div>
              ))}
              <div className="flex pt-5 pb-2 overflow-x-auto sm:justify-end">
                <Pagination currentPage={currentPage} totalPages={100} onPageChange={onPageChange} />
              </div>
            </>
          )}
        </div>
      </PostListCard>
    </>
  );
}
