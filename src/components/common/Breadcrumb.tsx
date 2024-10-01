import Icons from "@/src/assets";
import { useRouter } from "next/navigation";
import React from "react";

interface BreadcrumbItem {
  name: string | any;
  path?: string | undefined;
  current?: boolean;
}

interface BreadcrumbProps {
  data: BreadcrumbItem[];
}

const convertToReadableText = (text: string): string => {
  return text
    ?.replace(/-+/g, " ")
    ?.replace(/(?:^|\s)\S/g, (char) => char.toUpperCase());
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({ data }) => {
  const router = useRouter();

  return (
    <div className="flex items-center">
      {data?.map((item: BreadcrumbItem, index: number) => (
        <div key={index} className="flex">
          <button
            className={`text-[15px] max-sm:text-[14px] font-medium capitalize ${
              item?.current ? "opacity-50" : ""
            }`}
            onClick={() => {
              if (item?.path) {
                router.push(item?.path);
              }
            }}
          >
            {convertToReadableText(item?.name) ?? item?.name}
          </button>
          {!item?.current && (
            <span className="w-[6px] mx-2 mt-[1px] opacity-50">
              <Icons.rightArrowIcon svgProps={{ width: 6 }} />
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumb;
