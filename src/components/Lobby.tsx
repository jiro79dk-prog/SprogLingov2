/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Zap, Play, ChevronLeft, ChevronRight, User, BookOpen, GraduationCap, Settings } from 'lucide-react';
import { LANGUAGES, GRADES, GRADE_LABELS, GAME_LABELS, GAME_TYPES } from '../constants';
import { Language, Grade, GameType } from '../types';
import { getAvailableGameTypes } from '../services/contentService';

interface LobbyProps {
  currentLanguage: Language;
  setCurrentLanguage: (l: Language) => void;
  currentGrade: Grade;
  setCurrentGrade: (g: (prev: Grade) => Grade) => void;
  isChallengeMode: boolean;
  setIsChallengeMode: (v: boolean) => void;
  scores: Record<Language, number>;
  onStart: () => void;
  userName: string;
  setUserName: (n: string) => void;
  isOnboarded: boolean;
  setIsOnboarded: (v: boolean) => void;
  selectedGameType: GameType | 'Random';
  setSelectedGameType: (t: GameType | 'Random') => void;
}

export const Lobby = ({
  currentLanguage,
  setCurrentLanguage,
  currentGrade,
  setCurrentGrade,
  isChallengeMode,
  setIsChallengeMode,
  scores,
  onStart,
  userName,
  setUserName,
  isOnboarded,
  setIsOnboarded,
  selectedGameType,
  setSelectedGameType
}: LobbyProps) => {
  const [showSettings, setShowSettings] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOnboarded) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-xl mx-auto"
      >
        <div className="glass-card p-10 text-center space-y-8">
          <div className="space-y-4">
            <div className="w-20 h-20 bg-indigo-100 rounded-3xl flex items-center justify-center text-indigo-600 mx-auto animate-bounce">
              <GraduationCap size={40} />
            </div>
            <h2 className="text-3xl font-black text-indigo-900">Velkommen til SprogLingo!</h2>
            <p className="text-gray-600">Lad os få dig sat op, så opgaverne passer lige til dig.</p>
          </div>

          <div className="space-y-6 text-left">
            <div className="space-y-2">
              <label className="text-xs font-black uppercase text-indigo-400 tracking-widest pl-4">Hvad hedder du?</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-400" size={20} />
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => {
                    setUserName(e.target.value);
                    if (error) setError(null);
                  }}
                  placeholder="Skriv dit navn..."
                  className="w-full bg-white/60 border-2 border-white focus:border-indigo-400 rounded-2xl py-4 pl-12 pr-4 text-indigo-900 font-bold outline-none transition-all placeholder:text-gray-400"
                />
              </div>
              {error && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-xs font-bold pl-4 mt-1">{error}</motion.p>}
            </div>

            <div className="space-y-4">
              <label className="text-xs font-black uppercase text-indigo-400 tracking-widest pl-4">Hvilket klassetrin går du i?</label>
              <div className="flex items-center justify-between bg-white/60 p-2 rounded-2xl border-2 border-white">
                <button 
                  onClick={() => setCurrentGrade(prev => Math.max(0, prev - 1) as Grade)}
                  className="w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow-sm text-indigo-600 hover:scale-110 active:scale-95 transition-all"
                >
                  <ChevronLeft size={24} />
                </button>
                <div className="text-center">
                  <span className="text-2xl font-black text-indigo-600 block">{GRADE_LABELS[currentGrade]}</span>
                </div>
                <button 
                  onClick={() => setCurrentGrade(prev => Math.min(10, prev + 1) as Grade)}
                  className="w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow-sm text-indigo-600 hover:scale-110 active:scale-95 transition-all"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              if (userName.trim()) {
                setIsOnboarded(true);
              } else {
                setError("Hov! Du skal lige skrive dit navn først.");
              }
            }}
            disabled={!userName.trim()}
            className="w-full bg-indigo-600 text-white p-5 rounded-[1.5rem] font-black text-xl shadow-lg shadow-indigo-200 hover:bg-indigo-700 disabled:opacity-50 disabled:grayscale transition-all flex items-center justify-center gap-3"
          >
            KOM I GANG <Play fill="currentColor" />
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, y: 20 }}
      className="grid grid-cols-12 gap-8"
    >
      <header className="col-span-12 flex items-center justify-between glass-card px-8 py-4">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold">
            {userName[0]?.toUpperCase()}
          </div>
          <div>
            <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">Velkommen tilbage</p>
            <h2 className="text-xl font-black text-indigo-900">{userName} <span className="text-indigo-400 font-medium text-sm">({GRADE_LABELS[currentGrade]})</span></h2>
          </div>
        </div>
        <button 
          onClick={() => setShowSettings(!showSettings)}
          className="p-2 hover:bg-indigo-50 rounded-lg text-indigo-400 transition-colors"
        >
          <Settings size={20} />
        </button>
      </header>

      <aside className="col-span-12 lg:col-span-4 space-y-6">
        <div className="glass-card p-6">
          <h2 className="text-xs uppercase font-bold text-indigo-400 mb-6 tracking-widest">Vælg Sprog</h2>
          <div className="space-y-3">
            {LANGUAGES.map(lang => (
              <button
                key={lang}
                onClick={() => setCurrentLanguage(lang)}
                className={`w-full flex items-center justify-between p-4 rounded-2xl border transition-all ${
                  currentLanguage === lang 
                    ? 'bg-white shadow-md ring-2 ring-indigo-500/30 border-indigo-200' 
                    : 'bg-white/40 border-white hover:bg-white/60'
                }`}
              >
                <span className={`text-sm font-bold ${currentLanguage === lang ? 'text-indigo-900' : 'text-gray-600'}`}>{lang}</span>
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-black px-2 py-1 rounded-lg ${
                    currentLanguage === lang ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-500'
                  }`}>
                    {scores[lang]} pts
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() => setIsChallengeMode(!isChallengeMode)}
          className={`group relative overflow-hidden p-6 rounded-[2.5rem] shadow-xl transition-all active:scale-95 text-left border-4 border-white w-full ${
            isChallengeMode 
              ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white' 
              : 'bg-gradient-to-r from-indigo-100 to-blue-200 text-indigo-900'
          }`}
        >
          <div className="relative z-10">
            <p className="text-[10px] font-bold uppercase tracking-wider opacity-80">
              Niveau: {GRADE_LABELS[Math.min(currentGrade + 1, 10) as Grade]}
            </p>
            <h3 className="text-2xl font-black">Udfordre mig!</h3>
            <p className="text-xs mt-1 font-medium italic">Optjen 1,5x flere point nu</p>
          </div>
          <div className="absolute top-2 right-4 text-4xl transform group-hover:scale-125 transition-transform text-white/40">⚡</div>
          {isChallengeMode && (
            <motion.div 
              className="absolute inset-0 bg-white/20" 
              animate={{ x: ['100%', '-100%'] }} 
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} 
            />
          )}
        </button>
      </aside>

      <section className="col-span-12 lg:col-span-8 space-y-8">
        <div className="glass-card p-8 bg-white/60">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-xs font-black uppercase text-indigo-400 tracking-widest pl-2">Vælg spiltype</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <button
                  onClick={() => setSelectedGameType('Random')}
                  className={`p-4 rounded-2xl border-2 transition-all text-sm font-bold flex flex-col items-center gap-2 ${
                    selectedGameType === 'Random'
                      ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg'
                      : 'bg-white border-white text-gray-600 hover:border-indigo-200'
                  }`}
                >
                  <Zap size={20} />
                  Blandet
                </button>
                {getAvailableGameTypes(currentLanguage, currentGrade).map(type => (
                  <button
                    key={type}
                    onClick={() => setSelectedGameType(type)}
                    className={`p-4 rounded-2xl border-2 transition-all text-sm font-bold flex flex-col items-center gap-2 ${
                      selectedGameType === type
                        ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg'
                        : 'bg-white border-white text-gray-600 hover:border-indigo-200'
                    }`}
                  >
                    <BookOpen size={20} />
                    {GAME_LABELS[type]}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white">
              <button
                onClick={onStart}
                className="w-full bg-gradient-to-tr from-indigo-500 to-purple-600 text-white p-6 rounded-[2rem] font-black text-2xl shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-4 group"
              >
                <Play size={32} className="group-hover:translate-x-1 transition-transform" fill="currentColor" />
                START SPIL
              </button>
            </div>
          </div>
        </div>

        {showSettings && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="glass-card p-6 overflow-hidden"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-black text-indigo-900">Indstillinger</h3>
              <button onClick={() => setShowSettings(false)} className="text-xs font-bold text-indigo-400">Luk</button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] font-black text-indigo-400 uppercase block mb-1">Skift navn</label>
                <input 
                   type="text" 
                   value={userName} 
                   onChange={(e) => setUserName(e.target.value)}
                   className="w-full bg-white border border-indigo-100 rounded-lg p-2 text-sm font-bold text-indigo-900 outline-none"
                />
              </div>
              <div>
                <label className="text-[10px] font-black text-indigo-400 uppercase block mb-1">Skift niveau</label>
                <select 
                  value={currentGrade} 
                  onChange={(e) => setCurrentGrade(() => parseInt(e.target.value) as Grade)}
                  className="w-full bg-white border border-indigo-100 rounded-lg p-2 text-sm font-bold text-indigo-900 outline-none"
                >
                  {GRADES.map(g => <option key={g} value={g}>{GRADE_LABELS[g]}</option>)}
                </select>
              </div>
            </div>
          </motion.div>
        )}
      </section>
    </motion.div>
  );
};
