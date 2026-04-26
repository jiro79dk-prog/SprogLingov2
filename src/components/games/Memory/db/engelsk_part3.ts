/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GameContent, Grade } from '../../../../types';

export const ENGELSK_MEMORY_P3: Partial<Record<Grade, GameContent[]>> = {
  0: Array.from({ length: 50 }, (_, i) => ({
    id: `en0-me-p3-${i}`,
    type: 'Memory',
    question: 'More Basics',
    instruction: 'Match the pairs',
    answer: '',
    context: 'Dog:Dog|Cat:Cat|Bird:Bird|Fish:Fish|Milk:Milk|Water:Water'
  })),
  1: Array.from({ length: 50 }, (_, i) => ({
    id: `en1-me-p3-${i}`,
    type: 'Memory',
    question: 'More Numbers',
    instruction: 'Match the pairs',
    answer: '',
    context: 'Seven:7|Eight:8|Nine:9|Ten:10|Boy:Boy|Girl:Girl'
  })),
  2: Array.from({ length: 50 }, (_, i) => ({
    id: `en2-me-p3-${i}`,
    type: 'Memory',
    question: 'Food and Drinks',
    instruction: 'Match the pairs',
    answer: '',
    context: 'Bread:Bread|Juice:Juice|Egg:Egg|Cake:Cake|Rice:Rice|Soup:Soup'
  })),
  3: Array.from({ length: 50 }, (_, i) => ({
    id: `en3-me-p3-${i}`,
    type: 'Memory',
    question: 'Time and Weather',
    instruction: 'Match the pairs',
    answer: '',
    context: 'Day:Day|Night:Night|Cold:Cold|Hot:Hot|Snow:Snow|Rain:Rain'
  })),
  4: Array.from({ length: 50 }, (_, i) => ({
    id: `en4-me-p3-${i}`,
    type: 'Memory',
    question: 'Clothes and Items',
    instruction: 'Match the pairs',
    answer: '',
    context: 'Hat:Hat|Shoe:Shoe|Shirt:Shirt|Bag:Bag|Box:Box|Key:Key'
  }))
};
