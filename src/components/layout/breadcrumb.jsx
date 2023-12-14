import { Breadcrumb } from "flowbite-react";

export default function BreadcrumbNav() {
  return (
    <Breadcrumb aria-label="Navigation breadcrumb" className="bg-secondary-navy px-5 py-3 ">
      <Breadcrumb.Item ><span className="text-white">Home</span></Breadcrumb.Item>
      <Breadcrumb.Item><span className="text-white">Posts</span></Breadcrumb.Item>
      <Breadcrumb.Item><span className="text-white">Comments</span></Breadcrumb.Item>
    </Breadcrumb>
  );
}
