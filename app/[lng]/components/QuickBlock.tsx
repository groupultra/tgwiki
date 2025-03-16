import type { Variants } from "motion/react";
import * as motion from "motion/react-client";
import Link from "next/link";
import { navListData } from "../../lib/navListData";
import SpotlightCard from "./animation/SpotlightCard";

const cardVariants: Variants = {
  offscreen: {
    y: 0,
    rotate: 10,
  },
  onscreen: {
    y: 0,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};
const QuickBlock = ({ t, lng }: { t: any; lng: string }) => {
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-10">
      {navListData.map((item, index) => {
        return (
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.8 }}
            variants={cardVariants}
            key={index}
          >
            <Link
              key={index}
              href={`/${lng}/docs/${item.key}`}
              className="flex flex-col items-center gap-4 py-4 cursor-pointer"
            >
              <SpotlightCard
                className="w-10 h-10 relative"
                spotlightColor="rgba(0, 229, 255, 0.3)"
              >
                <span className="text-white flex w-full h-full absolute top-0 left-0 items-center justify-center">
                  {item.icon}
                </span>
              </SpotlightCard>

              <h3 className="text-center font-bold text-xl">
                {t(`quickData.${item.key}.title`)}
              </h3>
              <p className="text-center">
                {t(`quickData.${item.key}.description`)}
              </p>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
};
export default QuickBlock;
