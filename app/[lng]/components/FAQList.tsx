"use client";
import { CircleHelp, MessageCircleQuestion } from "lucide-react";
import { useState } from "react";
import { cn } from "../..//lib/utils";
import AnimatedList from "./animation/AnimatedList";
import FAQDialog from "./FAQDialog";
const FAQList = ({ data }: { data: any }) => {
  const [dialogData, setDialogData] = useState({
    title: "",
    description: "",
  });
  return (
    <>
      <FAQDialog dialogData={dialogData} />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-10 md:px-30 sm:px-10">
        {data?.map((item: any, index: number) => {
          return (
            <div
              key={index}
              className="border border-gray-700 bg-[#222] text-white rounded-xl"
            >
              <h3
                className={cn(
                  "text-2xl flex justify-center items-center gap-2 py-3 px-2"
                )}
              >
                {item.title}
                <CircleHelp size={30} className="pl-3" />
              </h3>
              {item.children?.length > 0 && (
                <div className="border-t border-gray-800">
                  <AnimatedList
                    items={item.children || []}
                    itemRender={(item, index) => {
                      return (
                        <div
                          key={index}
                          className="flex items-center gap-2 justify-between opacity-80 hover:opacity-100"
                        >
                          <span>{item.title}</span>
                          <MessageCircleQuestion />
                        </div>
                      );
                    }}
                    onItemSelect={(item: any) => {
                      setDialogData({
                        title: item.title,
                        description: "",
                      });
                      document?.getElementById("faq_dialog")?.showModal();
                    }}
                    showGradients={true}
                    enableArrowNavigation={true}
                    displayScrollbar={true}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FAQList;
