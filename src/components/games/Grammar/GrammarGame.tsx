/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { GameContent } from '../../../types';

interface GameProps {
  content: GameContent;
  onCorrect: () => void;
  onWrong: (hint: string) => void;
}

export const GrammarGame = ({ content, onCorrect, onWrong }: GameProps) => {
  return (
    <div className="space-y-8 text-center">
      <p className="text-2xl font-medium text-slate-700 max-w-xl mx-auto italic leading-relaxed">
        "{content.question}"
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {content.options?.map((opt) => (
          <motion.button
            key={opt}
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => opt === content.answer ? onCorrect() : onWrong("Husk reglerne!")}
            className="px-10 py-5 bg-white/60 border-2 border-white rounded-3xl font-black text-2xl text-slate-600 shadow-sm hover:border-indigo-300 transition-all"
          >
            {opt}
          </motion.button>
        ))}
      </div>
    </div>
  );
};
