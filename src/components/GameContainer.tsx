/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { XCircle } from 'lucide-react';
import { GameContent, Language } from '../types';
import { MatchGame } from './games/Match/MatchGame';
import { AudioGame } from './games/Audio/AudioGame';
import { ReadingGame } from './games/Reading/ReadingGame';
import { GrammarGame } from './games/Grammar/GrammarGame';
import { ClozeGame } from './games/Cloze/ClozeGame';
import { WordSortGame } from './games/WordSort/WordSortGame';
import { LetterOrderGame } from './games/LetterOrder/LetterOrderGame';
import { MemoryGame } from './games/Memory/MemoryGame';
import { FeedbackBox } from './Effects';

interface GameContainerProps {
  contents: GameContent[];
  currentIndex: number;
  currentLanguage: Language;
  onCorrect: () => void;
  onWrong: (hint: string) => void;
  onExit: () => void;
  feedback: { message: string; type: 'success' | 'error' | 'info' } | null;
  isDarkMode: boolean;
}

export const GameContainer = ({
  contents,
  currentIndex,
  currentLanguage,
  onCorrect,
  onWrong,
  onExit,
  feedback,
  isDarkMode
}: GameContainerProps) => {
  const currentItem = contents[currentIndex];

  const formatQuestion = (text: string) => {
    if (!text) return text;
    return text
      .replace(/\$\\dots\$/g, '___')
      .replace(/\$\(\\dots\)\$/g, '___')
      .replace(/\$\(dots\)\$/g, '___')
      .replace(/\(dots\)/g, '___')
      .replace(/\.\.\./g, '___');
  };

  const formattedItem = {
    ...currentItem,
    question: formatQuestion(currentItem.question)
  };

  return (
    <motion.div
      key="playing"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`glass-card p-8 min-h-[600px] relative overflow-hidden flex flex-col ${
        isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white/60 border-white'
      }`}
    >
      <div className={`absolute top-0 left-0 w-full h-2 ${isDarkMode ? 'bg-slate-800' : 'bg-white/20'}`}>
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${((currentIndex + 1) / contents.length) * 100}%` }}
          className="h-full bg-gradient-to-r from-indigo-500 to-purple-600"
        />
      </div>

      <div className="flex justify-between items-center mb-10 pt-4">
        <div>
          <span className="text-indigo-400 font-black text-xs tracking-[0.2em] uppercase">
            {formattedItem.type} • {currentLanguage}
          </span>
          <h2 className="text-2xl font-black">{formattedItem.type}</h2>
        </div>
        <div className="flex items-center gap-6">
          <span className={`text-xs font-black uppercase tracking-widest px-3 py-1 rounded-lg border ${
            isDarkMode ? 'bg-slate-800/60 border-slate-700 text-slate-300' : 'bg-white/60 border-white text-gray-400'
          }`}>
            {currentIndex + 1} / {contents.length}
          </span>
          <button onClick={onExit} className="text-gray-400 hover:text-red-500 transition-all hover:scale-110">
            <XCircle size={32} />
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col min-h-0">
        <div className="flex-1 flex flex-col justify-center py-8">
          <p className="text-xs font-black text-indigo-300 uppercase tracking-[0.3em] mb-4 text-center">
            {formattedItem.instruction}
          </p>
          
          <div className="max-w-3xl mx-auto w-full">
            {formattedItem.type === 'Match' && <MatchGame content={formattedItem} onCorrect={onCorrect} onWrong={onWrong} />}
            {formattedItem.type === 'Audio' && <AudioGame content={formattedItem} language={currentLanguage} onCorrect={onCorrect} onWrong={onWrong} />}
            {formattedItem.type === 'Reading' && <ReadingGame content={formattedItem} language={currentLanguage} onCorrect={onCorrect} onWrong={onWrong} />}
            {formattedItem.type === 'Grammar' && <GrammarGame content={formattedItem} onCorrect={onCorrect} onWrong={onWrong} />}
            {formattedItem.type === 'Cloze' && <ClozeGame content={formattedItem} onCorrect={onCorrect} onWrong={onWrong} />}
            {formattedItem.type === 'WordSort' && <WordSortGame content={formattedItem} onCorrect={onCorrect} onWrong={onWrong} />}
            {formattedItem.type === 'LetterOrder' && <LetterOrderGame content={formattedItem} onCorrect={onCorrect} onWrong={onWrong} />}
            {formattedItem.type === 'Memory' && (
              <MemoryGame 
                content={formattedItem} 
                onComplete={(isCorrect) => (isCorrect ? onCorrect() : onWrong('Prøv igen!'))} 
              />
            )}
          </div>
        </div>

        <div className="h-24 flex items-center justify-center shrink-0">
          <AnimatePresence mode="wait">
            {feedback && <FeedbackBox message={feedback.message} type={feedback.type} />}
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute bottom-4 left-8 opacity-20 text-[10px] font-mono pointer-events-none">
        # {formattedItem.id}
      </div>
    </motion.div>
  );
};
