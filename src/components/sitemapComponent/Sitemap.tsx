"use client";
import { allLandingPages } from "@/src/constants/allLandingPages";
import { allToolsPages } from "@/src/constants/allToolsPages";
import { DashboardDataType } from "@/src/interface/dashboard";
import React from "react";


interface PageItem {
  link: string;
  title: string;
}

export default function Sitemap(props: {
  data: DashboardDataType;
  specialKeywordUrl: any;

  dynamicPage: { page_slug: string; title: string }[];
}) {
   const editor = process.env.NEXT_PUBLIC_DOMAIN;
  return (
    <>
      <title>Sitemap</title>
      <div className="px-[50px] py-[20px] max-sm:px-[10px]">
        <div className=" flex gap-14 px-4 py-6 lg:py-8 flex-wrap max-sm:px-0">
          <div>
            {props.specialKeywordUrl?.kPages?.map((item: PageItem) => {
              return (
                <div className="flex gap-1">
                  •{" "}
                  <a
                    href={`${item.link}`}
                    target="_blank"
                    className="underline capitalize max-sm:text-[15px]"
                  >
                    {item.title}
                  </a>
                </div>
              );
            })}

            {props.specialKeywordUrl?.sPages?.map((item: PageItem) => {
              return (
                <div className="flex gap-1">
                  •{" "}
                  <a
                    href={`${item.link}`}
                    target="_blank"
                    className="underline capitalize max-sm:text-[15px]"
                  >
                    {item.title}
                  </a>
                </div>
              );
            })}
          </div>

          <div>
            {props.data?.datas?.map((item) => (
              <div>
                •{" "}
                <a
                  href={`/templates/${item?.id_name}`}
                  target="_blank"
                  className="underline max-sm:text-[15px]"
                >
                  {item?.category_name}
                </a>
              </div>
            ))}
            {props.specialKeywordUrl?.catDatas?.map((item: any) => (
              <div>
                •{" "}
                <a
                   href={`${item.link}`}
                  target="_blank"
                  className="underline max-sm:text-[15px]"
                >
                  {item?.title}
                </a>
              </div>
            ))}
          </div>

          <div className="flex gap-3">
            <div>
              {allLandingPages?.map((item) => (
                <div>
                  •{" "}
                  <a
                    href={item.path}
                    target="_blank"
                    className="underline max-sm:text-[15px]"
                  >
                    {item?.name}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div>
            {props.dynamicPage?.map((item: any) => {
              return (
                <div className="flex gap-1">
                  •{" "}
                  <a
                    href={`${editor}${item.page_slug}`}
                    target="_blank"
                    className="underline capitalize max-sm:text-[15px]"
                  >
                    {item?.title}
                  </a>
                </div>
              );
            })}
          </div>

          <div>
            {allToolsPages?.map((item) => (
              <div>
                •{" "}
                <a
                  href={`${item?.path}`}
                  target="_blank"
                  className="underline max-sm:text-[15px]"
                >
                  {item?.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}