/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'motion/react';
import { Languages, Trophy, Zap, Settings, Moon, Sun } from 'lucide-react';
import { Language, Grade, GameContent, GameType } from './types';
import { LANGUAGE_THEMES, GRADE_LABELS } from './constants';
import { generateGameContent } from './services/contentService';
import { soundService } from './services/soundService';
import { Lobby } from './components/Lobby';
import { GameContainer } from './components/GameContainer';
import { SparkleEffect } from './components/Effects';
import { AdminDashboard } from './components/AdminDashboard';

export default function App() {
  const [userName, setUserName] = useState(() => localStorage.getItem('sproglingo_user') || '');
  const [userAvatar, setUserAvatar] = useState(() => localStorage.getItem('sproglingo_avatar') || '🦊');
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

  const [isDyslexicMode, setIsDyslexicMode] = useState(() => localStorage.getItem('sproglingo_dyslexic') === 'true');
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('sproglingo_dark') === 'true');
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('admin') === 'true') {
      setIsAdmin(true);
    }
  }, []);

  useEffect(() => { localStorage.setItem('sproglingo_dyslexic', isDyslexicMode.toString()); }, [isDyslexicMode]);
  useEffect(() => { localStorage.setItem('sproglingo_dark', isDarkMode.toString()); }, [isDarkMode]);
  useEffect(() => { localStorage.setItem('sproglingo_grade', currentGrade.toString()); }, [currentGrade]);
  useEffect(() => { localStorage.setItem('sproglingo_user', userName); }, [userName]);
  useEffect(() => { localStorage.setItem('sproglingo_avatar', userAvatar); }, [userAvatar]);
  useEffect(() => { localStorage.setItem('sproglingo_onboarded', isOnboarded.toString()); }, [isOnboarded]);
  useEffect(() => { localStorage.setItem('sproglingo_scores', JSON.stringify(scores)); }, [scores]);
  useEffect(() => { localStorage.setItem('sproglingo_font', fontSize.toString()); }, [fontSize]);

  const [gameState, setGameState] = useState<'lobby' | 'playing' | 'loading'>('lobby');
  const [contents, setContents] = useState<GameContent[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [feedback, setFeedback] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);

  const startLevel = async (overrideType?: GameType | 'Random', overrideGrade?: Grade) => {
    setGameState('loading');
    const typeToUse = overrideType || selectedGameType;
    const gradeToUseBase = overrideGrade !== undefined ? overrideGrade : currentGrade;
    const gradeToUse = isChallengeMode ? Math.min(gradeToUseBase + 1, 10) as Grade : gradeToUseBase;
    
    const types: GameType[] = ['Match', 'Audio', 'Reading', 'Grammar', 'Cloze', 'WordSort', 'LetterOrder', 'Memory'];
    const finalType = typeToUse === 'Random' ? types[Math.floor(Math.random() * types.length)] : typeToUse;
    
    const newItems = await generateGameContent(currentLanguage, gradeToUse, finalType);
    
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
    <div className={`min-h-screen ${isDyslexicMode ? 'dyslexic-mode' : 'font-sans'} ${isDarkMode ? 'dark-mode bg-slate-950' : isDyslexicMode ? 'bg-[#FAF9F6]' : 'bg-gradient-to-br from-[#E0F2FE] via-[#F5F3FF] to-[#ECFDF5]'} transition-all`} style={{ fontSize: `${fontSize}%` }}>
      <div className={`fixed top-0 left-0 right-0 z-50 ${isDarkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white/60 border-white/80'} backdrop-blur-md border-b h-20 px-4 md:px-8`}>
        <div className="max-w-6xl mx-auto h-full flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-md">
              <Languages size={18} />
            </div>
            <div className="hidden sm:block">
              <h1 className={`text-sm md:text-base font-black leading-tight ${isDarkMode ? 'text-white' : 'text-indigo-900'}`}>SprogLingo</h1>
              <div className="flex items-center gap-1.5">
                <p className={`text-[8px] font-bold uppercase tracking-tighter ${isDarkMode ? 'text-slate-400' : 'text-indigo-400'}`}>Bolvig Solutions</p>
                <div className={`w-[2px] h-[2px] rounded-full ${isDarkMode ? 'bg-slate-700' : 'bg-indigo-200'}`} />
                <p className={`text-[8px] font-black uppercase tracking-tighter ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>{GRADE_LABELS[currentGrade]}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1 md:gap-2 overflow-x-auto no-scrollbar py-2">
            {['Dansk', 'Engelsk', 'Tysk', 'Fransk', 'Spansk'].map((lang) => (
              <button
                key={lang}
                onClick={() => setCurrentLanguage(lang as Language)}
                className={`flex flex-col items-center px-3 py-1 rounded-xl transition-all min-w-[55px] ${
                  currentLanguage === lang 
                    ? 'bg-indigo-600 text-white shadow-md' 
                    : 'bg-white/40 text-gray-500 hover:bg-white/60'
                }`}
              >
                <span className="text-[10px] font-black uppercase tracking-tighter">
                  {lang === 'Engelsk' ? 'EN' : lang === 'Dansk' ? 'DA' : lang === 'Tysk' ? 'DE' : lang === 'Fransk' ? 'FR' : 'ES'}
                </span>
                <span className={`text-[8px] font-mono font-bold ${currentLanguage === lang ? 'text-white/80' : 'text-indigo-400'}`}>
                  {scores[lang as Language] || 0}
                </span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2.5 rounded-xl transition-all border ${
                isDarkMode 
                  ? 'bg-slate-800 text-yellow-400 border-slate-700' 
                  : 'bg-white/80 text-gray-500 border-gray-200 hover:border-indigo-300'
              }`}
              title="Skift tema"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              onClick={() => setIsDyslexicMode(!isDyslexicMode)}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold transition-all border ${
                isDyslexicMode 
                  ? 'bg-indigo-600 text-white border-indigo-700 shadow-md shadow-indigo-100' 
                  : isDarkMode ? 'bg-slate-800 text-slate-300 border-slate-700' : 'bg-white/80 text-gray-600 border-gray-200 hover:border-indigo-300'
              }`}
              title="Aktiver ordblind-visning"
            >
              <Zap size={14} className={isDyslexicMode ? 'fill-current' : ''} />
              <span className="hidden md:inline">Ordblind</span>
            </button>

              <button 
                onClick={() => {
                  if (gameState === 'lobby') {
                    const event = new CustomEvent('toggle-settings');
                    window.dispatchEvent(event);
                  }
                }}
                className={`p-2.5 rounded-xl transition-all border ${
                  isDarkMode ? 'bg-slate-800 text-slate-400 border-slate-700 hover:text-slate-200' : 'bg-white/80 text-indigo-400 border-gray-200 hover:border-indigo-300'
                }`}
              >
                <Settings size={20} />
              </button>
          </div>
        </div>
      </div>

      <div className="pt-28 pb-8 px-4 md:px-6">
        <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-purple-300 rounded-full blur-3xl opacity-30 pointer-events-none" />
        {isChallengeMode && <SparkleEffect />}

        <div className="max-w-6xl mx-auto relative z-10">
          <main>
          <AnimatePresence mode="wait">
            {gameState === 'lobby' && !isAdmin && (
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
                userAvatar={userAvatar}
                setUserAvatar={setUserAvatar}
                isOnboarded={isOnboarded}
                setIsOnboarded={setIsOnboarded}
                selectedGameType={selectedGameType}
                setSelectedGameType={setSelectedGameType}
                isDarkMode={isDarkMode}
                onAdminClick={() => setIsAdmin(true)}
              />
            )}
            {isAdmin && (
              <AdminDashboard 
                isDarkMode={isDarkMode}
                onExit={() => setIsAdmin(false)}
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
                isDarkMode={isDarkMode}
              />
            )}
            {gameState === 'loading' && <div className="glass-card p-32 text-center space-y-4"><div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto" /><h2 className="text-xl font-bold">Gør klar...</h2></div>}
          </AnimatePresence>
        </main>
      </div>
    </div>
  </div>
);
}
