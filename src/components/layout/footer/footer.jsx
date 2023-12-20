import { Footer as FlowFooter } from "flowbite-react";

export default function Footer() {
  return (
    <FlowFooter container className="bg-dark-navy dark:bg-dark-navy text-white">
      <div className="w-full text-center">
        <div className="max-w-7xl mx-auto justify-between sm:flex sm:items-center sm:justify-between -mt-2">
          <div className="">
            <FlowFooter.Title className="text-white" title="Health Haven Forum" />
            <FlowFooter.LinkGroup col className="text-white flex items-center md:items-start -mt-3">
              <FlowFooter.Link href="#">About</FlowFooter.Link>
              <FlowFooter.Link href="#">Privacy Policy</FlowFooter.Link>
              <FlowFooter.Link href="#">Licensing</FlowFooter.Link>
              <FlowFooter.Link href="#">Contact</FlowFooter.Link>
            </FlowFooter.LinkGroup>
          </div>
          <div className="">
            <FlowFooter.Title className="text-white" title="Health Haven Forum" />
            <FlowFooter.LinkGroup col className="text-white flex items-center md:items-start -mt-3">
              <FlowFooter.Link href="#">About</FlowFooter.Link>
              <FlowFooter.Link href="#">Privacy Policy</FlowFooter.Link>
              <FlowFooter.Link href="#">Licensing</FlowFooter.Link>
              <FlowFooter.Link href="#">Contact</FlowFooter.Link>
            </FlowFooter.LinkGroup>
          </div>
          <div className="">
            <FlowFooter.Title className="text-white" title="Health Haven Forum" />
            <FlowFooter.LinkGroup col className="text-white flex items-center md:items-start -mt-3">
              <FlowFooter.Link href="#">About</FlowFooter.Link>
              <FlowFooter.Link href="#">Privacy Policy</FlowFooter.Link>
              <FlowFooter.Link href="#">Licensing</FlowFooter.Link>
              <FlowFooter.Link href="#">Contact</FlowFooter.Link>
            </FlowFooter.LinkGroup>
          </div>
        </div>
        <div className="-my-4">
          <FlowFooter.Divider />
          <FlowFooter.Copyright href="#" by="Group L-D" year={2023} />
        </div>
      </div>
    </FlowFooter>
  );
}
