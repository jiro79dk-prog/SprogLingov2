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

export const MatchGame = ({ content, onCorrect, onWrong }: GameProps) => {
  const handleChoice = (option: string) => {
    if (option === content.answer) {
      onCorrect();
    } else {
      onWrong(`Prøv igen! Det rigtige svar er ${content.answer}.`);
    }
  };

  return (
    <div className="space-y-8">
      <h3 className="text-3xl font-black text-center text-slate-800 tracking-tight">{content.question}</h3>
      <div className="grid grid-cols-2 gap-6">
        {content.options?.map((opt) => (
          <motion.button
            key={opt}
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleChoice(opt)}
            className="p-8 bg-white/40 border-2 border-white rounded-[2rem] shadow-sm text-2xl font-black text-slate-600 backdrop-blur-sm transition-all"
          >
            {opt}
          </motion.button>
        ))}
      </div>
    </div>
  );
};
