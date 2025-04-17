"use client";
import { motion, AnimatePresence } from "framer-motion";

const SuggestionDropdown = ({ suggestions, isOpen, onSelect }) => {
  return (
    <AnimatePresence>
      {isOpen && suggestions.length > 0 && (
        <motion.ul
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="absolute z-10 mt-5 py-4 px-8 max-h-60 w-full overflow-y-auto rounded-2xl bg-white shadow-lg "
        >
          {suggestions.map((suggestion) => (
            <li
              key={suggestion}
              className="cursor-pointer px-4 py-2 hover:bg-gray-100"
              onMouseDown={() => onSelect(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  );
};

export default SuggestionDropdown;
