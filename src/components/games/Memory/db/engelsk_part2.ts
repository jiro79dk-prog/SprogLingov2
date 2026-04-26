/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GameContent, Grade } from '../../../../types';

export const ENGELSK_MEMORY_P2: Partial<Record<Grade, Grade>> = {}; // Placeholder to avoid import error during build if needed
// Actually, I should use the correct type straight away.

export const ENGELSK_MEMORY_DATA_P2: Partial<Record<Grade, GameContent[]>> = {
  5: Array.from({ length: 50 }, (_, i) => ({
    id: `en5-me-p2-${i}`,
    type: 'Memory',
    question: 'Nature and Science',
    instruction: 'Match the pairs',
    answer: '',
    context: i % 2 === 0
      ? 'Tree:Tree|Leaf:Leaf|Root:Root|Seed:Seed|Flower:Flower|Plant:Plant'
      : 'Earth:Earth|Mars:Mars|Space:Space|Rocket:Rocket|Star:Star|Sun:Sun'
  })),
  6: Array.from({ length: 50 }, (_, i) => ({
    id: `en6-me-p2-${i}`,
    type: 'Memory',
    question: 'Technology and Media',
    instruction: 'Match the pairs',
    answer: '',
    context: i % 2 === 0
      ? 'Phone:Phone|Computer:Computer|Screen:Screen|Mouse:Mouse|Keyboard:Keyboard|Web:Web'
      : 'Movie:Movie|Song:Song|Book:Book|News:News|Game:Game|Show:Show'
  })),
  7: Array.from({ length: 50 }, (_, i) => ({
    id: `en7-me-p2-${i}`,
    type: 'Memory',
    question: 'History and Culture',
    instruction: 'Match the pairs',
    answer: '',
    context: i % 2 === 0
      ? 'King:King|Queen:Queen|Knight:Knight|Castle:Castle|Sword:Sword|Shield:Shield'
      : 'Music:Music|Art:Art|Dance:Dance|Poem:Poem|Story:Story|Play:Play'
  })),
  8: Array.from({ length: 50 }, (_, i) => ({
    id: `en8-me-p2-${i}`,
    type: 'Memory',
    question: 'Global Issues',
    instruction: 'Match the pairs',
    answer: '',
    context: i % 2 === 0
      ? 'Climate:Climate|World:World|Peace:Peace|Green:Green|Clean:Clean|Change:Change'
      : 'Right:Right|Law:Law|Rule:Rule|Vote:Vote|Fair:Fair|Equal:Equal'
  })),
  9: Array.from({ length: 50 }, (_, i) => ({
    id: `en9-me-p2-${i}`,
    type: 'Memory',
    question: 'Advanced Concepts',
    instruction: 'Match the pairs',
    answer: '',
    context: i % 2 === 0
      ? 'Logic:Logic|Theory:Theory|Fact:Fact|Proof:Proof|Idea:Idea|Mind:Mind'
      : 'Action:Action|Result:Result|Cause:Cause|Effect:Effect|Goal:Goal|Success:Success'
  }))
};
