import { Breadcrumb } from "flowbite-react";

export default function BreadcrumbNav() {
  return (
    <Breadcrumb aria-label="Navigation breadcrumb">
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>Posts</Breadcrumb.Item>
      <Breadcrumb.Item>Comments</Breadcrumb.Item>
    </Breadcrumb>
  );
}
