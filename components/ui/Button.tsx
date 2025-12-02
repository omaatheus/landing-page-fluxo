"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "default" | "arrow";
  className?: string;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "default",
  className,
}: ButtonProps) {
  const Component = href ? Link : "button";

  return (
    <Component
      href={href ?? undefined}
      onClick={onClick}
      className={clsx(
        "relative inline-flex items-center justify-center rounded-xl px-6 h-12",
        "font-medium text-white bg-blue-600 hover:bg-blue-800 transition-colors",
        "group", 
        className
      )}
    >
      {variant === "default" && <span>{children}</span>}

      {variant === "arrow" && (
        <div className="flex items-center gap-2 relative">
          <span>{children}</span>

          <motion.div
            initial={{ x: 0 }}
            whileHover={{ x: 6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="flex items-center"
          >
            <ArrowRight className="w-5 h-5" />
          </motion.div>

          <motion.div
            initial={{ width: 0 }}
            whileHover={{ width: 14 }} // expande o lado direito
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="absolute right-[-14px] top-0 bottom-0 bg-black rounded-r-xl"
          />
        </div>
      )}
    </Component>
  );
}
