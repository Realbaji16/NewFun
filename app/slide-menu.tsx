'use client'

import { motion } from "framer-motion";

interface SlideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SlideMenu = ({ isOpen, onClose }: SlideMenuProps) => {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: isOpen ? 0 : "100%" }}
      transition={{ type: "spring", damping: 20 }}
      className="fixed top-0 right-0 h-full w-[300px] bg-black-1 shadow-lg z-50"
    >
      <div className="p-6">
        <button
          onClick={onClose}
          className="text-white mb-8 text-2xl float-right"
        >
          ×
        </button>
        <div className="clear-both">
          <nav className="flex flex-col gap-6 mt-12">
            <a href="#" className="text-white text-lg hover:text-primary-blue">Home</a>
            <a href="#" className="text-white text-lg hover:text-primary-blue">Profile</a>
            <a href="#" className="text-white text-lg hover:text-primary-blue">Jobs</a>
            <a href="#" className="text-white text-lg hover:text-primary-blue">Settings</a>
            <a href="#" className="text-white text-lg hover:text-primary-blue">Help</a>
          </nav>
        </div>
      </div>
    </motion.div>
  );
};