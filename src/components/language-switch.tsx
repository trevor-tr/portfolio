import { useTranslation } from "react-i18next";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { GlobeIcon } from "lucide-react";
import { LANGUAGE_OPTIONS } from "../const";
import {
  AnimatePresence,
  motion,
  useTime,
  useTransform,
  type Variants,
} from "motion/react";
import { useState } from "react";
import { cn } from "../utils";

const dropdownVariants = {
  hidden: {
    opacity: 0,
    y: -20,
    filter: "blur(10px)",
    transition: {
      duration: 0.35,
      ease: [0, 0.55, 0.45, 1],
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.35,
      ease: [0, 0.55, 0.45, 1],
    },
  },
  exit: {
    opacity: 0,
    y: 0,
    filter: "blur(10px)",
    transition: {
      duration: 0.35,
      ease: [0, 0.55, 0.45, 1],
    },
  },
} satisfies Variants;

export default function LanguageSwitch() {
  const [isOpen, setIsOpen] = useState(false);
  const time = useTime();

  const { i18n } = useTranslation();
  const rotateY = useTransform(time, [0, 3500], [0, 360], { clamp: false });

  const currentLanguage = i18n.language;

  function changeLanguage(lng: string) {
    i18n.changeLanguage(lng);
  }

  return (
    <div className="absolute top-4 right-4 rounded-full hover:bg-slate-200">
      <DropdownMenu.Root open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenu.Trigger asChild>
          <motion.button
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{
              filter: "blur(0px)",
              opacity: 1,
            }}
            style={{
              rotateY,
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ ease: "easeOut", duration: 0.4, delay: 4 }}
            className="cursor-none p-2"
          >
            <GlobeIcon />
          </motion.button>
        </DropdownMenu.Trigger>
        <AnimatePresence mode="wait">
          {isOpen && (
            <DropdownMenu.Portal forceMount>
              <DropdownMenu.Content asChild forceMount>
                <motion.div
                  className="rounded-md shadow-md"
                  variants={dropdownVariants}
                  animate="visible"
                  exit="exit"
                  initial="hidden"
                >
                  {LANGUAGE_OPTIONS.map(({ label, value }) => (
                    <DropdownMenu.Item
                      key={value}
                      className={cn(
                        "px-6 py-2 first:rounded-t-md last:rounded-b-md hover:bg-slate-200 md:px-4 md:py-2",
                        {
                          "bg-slate-100 font-bold": value === currentLanguage,
                        },
                      )}
                      onClick={() =>
                        value !== currentLanguage && changeLanguage(value)
                      }
                    >
                      {label}
                    </DropdownMenu.Item>
                  ))}
                </motion.div>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          )}
        </AnimatePresence>
      </DropdownMenu.Root>
    </div>
  );
}
