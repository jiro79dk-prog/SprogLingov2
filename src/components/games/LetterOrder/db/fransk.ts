/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GameContent, Grade } from '../../../../types';

export const FRANSK_LETTERORDER: Partial<Record<Grade, GameContent[]>> = {
  0: [
    { id: 'fr0-lo1', type: 'LetterOrder', question: 'Épelle "Chat"', answer: 'chat', instruction: 'Un petit animal' },
    { id: 'fr0-lo2', type: 'LetterOrder', question: 'Épelle "Chien"', answer: 'chien', instruction: 'Un animal fidèle' },
    { id: 'fr0-lo3', type: 'LetterOrder', question: 'Épelle "Maison"', answer: 'maison', instruction: 'Où on habite' }
  ],
  1: [
    { id: 'fr1-lo1', type: 'LetterOrder', question: 'Épelle "Pomme"', answer: 'pomme', instruction: 'Un fruit' },
    { id: 'fr1-lo2', type: 'LetterOrder', question: 'Épelle "École"', answer: 'école', instruction: 'Lieu d\'apprentissage' },
    { id: 'fr1-lo3', type: 'LetterOrder', question: 'Épelle "Pain"', answer: 'pain', instruction: 'On le mange' }
  ],
  2: [
    { id: 'fr2-lo1', type: 'LetterOrder', question: 'Épelle "Jardin"', answer: 'jardin', instruction: 'Derrière la maison' },
    { id: 'fr2-lo2', type: 'LetterOrder', question: 'Épelle "Météo"', answer: 'météo', instruction: 'Soleil ou pluie' }
  ]
};
