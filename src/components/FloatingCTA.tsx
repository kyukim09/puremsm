import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-8 left-0 right-0 z-40 px-4 pointer-events-none">
      <div className="max-w-md mx-auto pointer-events-auto">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, type: 'spring', stiffness: 100 }}
        >
          <Link
            to="/contact"
            className="flex items-center justify-center w-full bg-secondary text-white py-5 rounded-full text-2xl font-black cta-shadow hover:scale-105 transition-transform active:scale-95 text-center"
          >
            선착순 100명 무료체험 신청하기
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
