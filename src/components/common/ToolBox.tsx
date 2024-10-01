import React from "react";
interface DataType {
  image: string;
  question: string;
  answer: string;
  url?: string;
}
interface PropsType {
  data: DataType[];
}
export default function ToolBox(props: PropsType) {
  return (
    <>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 px-7 md:px-10 lg:px-12 xl:px-28 2xl:px-40 py-6">
          {props.data?.map((item, i) => (
            <div key={i} className="bg-[#F4F7FE] p-10 rounded-2xl">
              <div className="flex pb-5 items-center">
                <img
                  src={item.image}
                  className="h-[50px] w-[50px]"
                  alt="Edit"
                />
                <h3 className="text-lg xl:text-xl ml-2 sm::m-2 font-bold cursor-pointer">
                  <a href={item.url}>{item.question}</a>
                </h3>
              </div>
              <div>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
