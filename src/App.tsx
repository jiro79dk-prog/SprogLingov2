/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'motion/react';
import { Languages, Trophy, Zap } from 'lucide-react';
import { Language, Grade, GameContent, GameType } from './types';
import { LANGUAGE_THEMES } from './constants';
import { generateGameContent } from './services/contentService';
import { soundService } from './services/soundService';
import { Lobby } from './components/Lobby';
import { GameContainer } from './components/GameContainer';
import { SparkleEffect } from './components/Effects';

export default function App() {
  const [userName, setUserName] = useState(() => localStorage.getItem('sproglingo_user') || '');
  const [isOnboarded, setIsOnboarded] = useState(() => localStorage.getItem('sproglingo_onboarded') === 'true');
  const [selectedGameType, setSelectedGameType] = useState<GameType | 'Random'>('Random');
  const [currentGrade, setCurrentGrade] = useState<Grade>(() => {
    const saved = localStorage.getItem('sproglingo_grade');
    return saved ? parseInt(saved) as Grade : 2;
  });
  const [currentLanguage, setCurrentLanguage] = useState<Language>('Dansk');
  const [isChallengeMode, setIsChallengeMode] = useState(false);
  const [scores, setScores] = useState<Record<Language, number>>(() => {
    const saved = localStorage.getItem('sproglingo_scores');
    return saved ? JSON.parse(saved) : { 'Dansk': 0, 'Engelsk': 0, 'Tysk': 0, 'Fransk': 0, 'Spansk': 0 };
  });
  const [fontSize, setFontSize] = useState(() => {
    const saved = localStorage.getItem('sproglingo_font');
    return saved ? parseInt(saved) : 100;
  });

  useEffect(() => { localStorage.setItem('sproglingo_grade', currentGrade.toString()); }, [currentGrade]);
  useEffect(() => { localStorage.setItem('sproglingo_user', userName); }, [userName]);
  useEffect(() => { localStorage.setItem('sproglingo_onboarded', isOnboarded.toString()); }, [isOnboarded]);
  useEffect(() => { localStorage.setItem('sproglingo_scores', JSON.stringify(scores)); }, [scores]);
  useEffect(() => { localStorage.setItem('sproglingo_font', fontSize.toString()); }, [fontSize]);

  const [gameState, setGameState] = useState<'lobby' | 'playing' | 'loading'>('lobby');
  const [contents, setContents] = useState<GameContent[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [feedback, setFeedback] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);

  const startLevel = async () => {
    setGameState('loading');
    const gradeToUse = isChallengeMode ? Math.min(currentGrade + 1, 10) as Grade : currentGrade;
    const types: GameType[] = ['Match', 'Audio', 'Reading', 'Grammar', 'Cloze', 'WordSort', 'LetterOrder', 'Memory'];
    const typeToUse = selectedGameType === 'Random' ? types[Math.floor(Math.random() * types.length)] : selectedGameType;
    const newItems = await generateGameContent(currentLanguage, gradeToUse, typeToUse);
    
    if (newItems?.length > 0) {
      setContents(newItems);
      setCurrentIndex(0);
      setGameState('playing');
    } else {
      setGameState('lobby');
      setFeedback({ message: "Ups! Ingen opgaver fundet her endnu.", type: 'error' });
      setTimeout(() => setFeedback(null), 3000);
    }
  };

  const handleCorrect = useCallback(() => {
    const points = Math.round(10 * (isChallengeMode ? 1.5 : 1));
    setScores(prev => ({ ...prev, [currentLanguage]: prev[currentLanguage] + points }));
    setFeedback({ message: `Flot! + ${points} point!`, type: 'success' });
    
    if (currentIndex < contents.length - 1) {
      soundService.playCorrect();
    } else {
      soundService.playComplete();
    }
    
    setTimeout(() => {
      if (currentIndex < contents.length - 1) {
        setCurrentIndex(v => v + 1);
        setFeedback(null);
      } else {
        setGameState('lobby');
        setFeedback({ message: "Level gennemført!", type: 'info' });
      }
    }, 1500);
  }, [currentIndex, contents, currentLanguage, isChallengeMode]);

  const handleWrong = useCallback((hint: string) => {
    soundService.playWrong();
    setFeedback({ message: hint, type: 'error' });
    setTimeout(() => setFeedback(null), 3000);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-[#E0F2FE] via-[#F5F3FF] to-[#ECFDF5] p-6 transition-all" style={{ fontSize: `${fontSize}%` }}>
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-purple-300 rounded-full blur-3xl opacity-30 pointer-events-none" />
      {isChallengeMode && <SparkleEffect />}

      <div className="max-w-6xl mx-auto relative z-10">
        <header className="glass-card px-6 py-4 mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-tr from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg"><Languages size={24} /></div>
            <div><h1 className="text-2xl font-black text-indigo-900">SprogLingo</h1><p className="text-[10px] font-bold uppercase tracking-widest text-indigo-400 font-mono">Ved Bolvig Solutions</p></div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 bg-white/60 px-4 py-2 rounded-2xl border border-white text-indigo-900 font-bold shadow-sm">
              <Trophy size={18} className="text-amber-500" /><span className="font-mono">{scores[currentLanguage]} </span>
            </div>
          </div>
        </header>

        <main>
          <AnimatePresence mode="wait">
            {gameState === 'lobby' && (
              <Lobby 
                scores={scores} 
                currentGrade={currentGrade} 
                setCurrentGrade={setCurrentGrade} 
                currentLanguage={currentLanguage} 
                setCurrentLanguage={setCurrentLanguage} 
                isChallengeMode={isChallengeMode} 
                setIsChallengeMode={setIsChallengeMode} 
                onStart={startLevel}
                userName={userName}
                setUserName={setUserName}
                isOnboarded={isOnboarded}
                setIsOnboarded={setIsOnboarded}
                selectedGameType={selectedGameType}
                setSelectedGameType={setSelectedGameType}
              />
            )}
            {gameState === 'playing' && (
              <GameContainer 
                contents={contents} 
                currentIndex={currentIndex} 
                currentLanguage={currentLanguage} 
                onCorrect={handleCorrect} 
                onWrong={handleWrong} 
                onExit={() => setGameState('lobby')} 
                feedback={feedback} 
              />
            )}
            {gameState === 'loading' && <div className="glass-card p-32 text-center space-y-4"><div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto" /><h2 className="text-xl font-bold">Gør klar...</h2></div>}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
