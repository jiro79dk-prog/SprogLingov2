/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GameContent, Grade } from '../../../../types';

export const ENGELSK_MEMORY_P1: Partial<Record<Grade, GameContent[]>> = {
  0: Array.from({ length: 50 }, (_, i) => ({
    id: `en0-me-p1-${i}`,
    type: 'Memory',
    question: 'Basic Vocabulary',
    instruction: 'Match the pairs',
    answer: '',
    context: i % 2 === 0 
      ? 'Sun:Sun|Moon:Moon|Star:Star|Cloud:Cloud|Rain:Rain|Wind:Wind'
      : 'Red:Red|Blue:Blue|Green:Green|Yellow:Yellow|Black:Black|White:White'
  })),
  1: Array.from({ length: 50 }, (_, i) => ({
    id: `en1-me-p1-${i}`,
    type: 'Memory',
    question: 'Numbers and Colors',
    instruction: 'Match the pairs',
    answer: '',
    context: i % 2 === 0
      ? 'One:1|Two:2|Three:3|Four:4|Five:5|Six:6'
      : 'Apple:Apple|Pear:Pear|Grape:Grape|Big:Big|Small:Small|Cat:Cat'
  })),
  2: Array.from({ length: 50 }, (_, i) => ({
    id: `en2-me-p1-${i}`,
    type: 'Memory',
    question: 'Animals and Actions',
    instruction: 'Match the pairs',
    answer: '',
    context: i % 2 === 0
      ? 'Jump:Jump|Run:Run|Swim:Swim|Talk:Talk|Walk:Walk|Sing:Sing'
      : 'Lion:Lion|Tiger:Tiger|Bear:Bear|Wolf:Wolf|Fox:Fox|Deer:Deer'
  })),
  3: Array.from({ length: 50 }, (_, i) => ({
    id: `en3-me-p1-${i}`,
    type: 'Memory',
    question: 'Body and School',
    instruction: 'Match the pairs',
    answer: '',
    context: i % 2 === 0
      ? 'Head:Head|Hand:Hand|Foot:Foot|Arm:Arm|Leg:Leg|Eye:Eye'
      : 'Book:Book|Pen:Pen|Desk:Desk|Chair:Chair|Map:Map|Bell:Bell'
  })),
  4: Array.from({ length: 50 }, (_, i) => ({
    id: `en4-me-p1-${i}`,
    type: 'Memory',
    question: 'Family and House',
    instruction: 'Match the pairs',
    answer: '',
    context: i % 2 === 0
      ? 'Mother:Mother|Father:Father|Sister:Sister|Brother:Brother|Baby:Baby|Home:Home'
      : 'Door:Door|Window:Window|Roof:Roof|Wall:Wall|Floor:Floor|Room:Room'
  }))
};
