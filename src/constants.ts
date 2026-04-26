/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Language, Grade } from './types.ts';

export const LANGUAGES: Language[] = ['Dansk', 'Engelsk', 'Tysk', 'Fransk', 'Spansk'];

export const GRADES: Grade[] = [0, 1, 2, 3, 4, 5, 6, 7, 8,  9];

export const LANGUAGE_THEMES: Record<Language, { bg: string; accent: string; text: string }> = {
  'Dansk': { bg: 'bg-red-500', accent: 'text-red-600', text: 'text-white' },
  'Engelsk': { bg: 'bg-blue-600', accent: 'text-blue-700', text: 'text-white' },
  'Tysk': { bg: 'bg-yellow-500', accent: 'text-yellow-600', text: 'text-black' },
  'Fransk': { bg: 'bg-blue-400', accent: 'text-blue-500', text: 'text-white' },
  'Spansk': { bg: 'bg-orange-500', accent: 'text-orange-600', text: 'text-white' },
};

export const GRADE_LABELS: Record<Grade, string> = {
  0: '0. klasse',
  1: '1. klasse',
  2: '2. klasse',
  3: '3. klasse',
  4: '4. klasse',
  5: '5. klasse',
  6: '6. klasse',
  7: '7. klasse',
  8: '8. klasse',
  9: '9. klasse',
};

export const GAME_TYPES = ['Match', 'Audio', 'Reading', 'Grammar', 'Cloze', 'WordSort', 'LetterOrder', 'Memory'] as const;

export const GAME_LABELS: Record<string, string> = {
  Match: 'Par-match',
  Audio: 'Lytteøvelse',
  Reading: 'Læseforståelse',
  Grammar: 'Grammatik',
  Cloze: 'Udfyld huller',
  WordSort: 'Ord-sortering',
  LetterOrder: 'Stavning',
  Memory: 'Vendespil',
  Random: 'Blandet',
};
