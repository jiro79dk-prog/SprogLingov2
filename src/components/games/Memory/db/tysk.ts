/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GameContent, Grade } from '../../../../types';

export const TYSK_MEMORY: Partial<Record<Grade, GameContent[]>> = {
  2: [
    { id: 'de2-me1', type: 'Memory', question: 'Zahlen (11-20)', instruction: 'Finde die Paare', answer: '', context: '11:Elf|12:Zwölf|13:Dreizehn|14:Vierzehn|15:Fünfzehn|20:Zwanzig' },
    { id: 'de2-me2', type: 'Memory', question: 'Körperteile', instruction: 'Finde die Paare', answer: '', context: 'Schulter:Skulder|Ellbogen:Albue|Knie:Knæ|Knöchel:Ankel|Kopf:Hoved|Rücken:Ryg' },
    { id: 'de2-me3', type: 'Memory', question: 'Familie', instruction: 'Finde die Paare', answer: '', context: 'Tante:Tante|Onkel:Onkel|Cousin:Fætter/Kusine|Oma:Bedstemor|Opa:Bedstefar|Familie:Familie' },
    { id: 'de2-me4', type: 'Memory', question: 'Frühstück', instruction: 'Finde die Paare', answer: '', context: 'Müsli:Morgenmadsprodukt|Toast:Ristet brød|Marmelade:Syltetøj|Milch:Mælk|Honig:Honning|Butter:Smør' },
    { id: 'de2-me5', type: 'Memory', question: 'Feiertage', instruction: 'Finde die Paare', answer: '', context: 'Ostern:Påske|Weihnachten:Jul|Halloween:Halloween|Nikolaus:Julemand|Tannenbaum:Grantræ|Ei:Æg' },
    { id: 'de2-me6', type: 'Memory', question: 'Tagesablauf', instruction: 'Finde die Paare', answer: '', context: 'Aufwachen:Vågne op|Waschen:Vaske|Essen:Spise|Gehen:Gå|Spielen:Lege|Schlafen:Sove' },
    { id: 'de2-me7', type: 'Memory', question: 'Kleidung', instruction: 'Finde die Paare', answer: '', context: 'Hemd:Skjorte|Hut:Hat|Schuhe:Sko|Socken:Strømper|Hose:Bukser|Mantel:Frakke' },
    { id: 'de2-me8', type: 'Memory', question: 'Farben', instruction: 'Finde die Paare', answer: '', context: 'Rosa:Lyserød|Braun:Brun|Grau:Grå|Schwarz:Sort|Weiß:Hvid|Orange:Orange' },
    { id: 'de2-me9', type: 'Memory', question: 'Haustiere', instruction: 'Finde die Paare', answer: '', context: 'Hund:Hund|Katze:Katze|Hamster:Hamster|Kaninchen:Kanin|Vogel:Fugl|Fisch:Fisk' },
    { id: 'de2-me10', type: 'Memory', question: 'Fragen', instruction: 'Finde die Paare', answer: '', context: 'Wer:Hvem|Was:Hvad|Wo:Hvor|Wie:Hvordan|Warum:Hvorfor|Wann:Hvornår' },
  ],
  3: [
    { id: 'de3-me1', type: 'Memory', question: 'Zahlen (1-10)', instruction: 'Match numerals', answer: '', context: '1:Eins|2:Zwei|3:Drei|4:Vier|5:Fünf|10:Zehn' },
    { id: 'de3-me2', type: 'Memory', question: 'Farben', instruction: 'Match colors', answer: '', context: 'Rot:Rot|Blau:Blau|Gelb:Gelb|Grün:Grün|Schwarz:Schwarz|Weiß:Weiß' },
    { id: 'de3-me3', type: 'Memory', question: 'Familie', instruction: 'Match family', answer: '', context: 'Mutter:Mutter|Vater:Vater|Schwester:Schwester|Bruder:Bruder|Oma:Oma|Opa:Opa' },
    { id: 'de3-me4', type: 'Memory', question: 'Freunde & Adjektive', instruction: 'Match adjectives', answer: '', context: 'Gut:Dårlig (no)|Sød:Gutte|Lustig:Funny|Schön:Smuk|Groß:Stor|Stark:Stærk' },
  ],
  4: [
    { id: 'de4-me1', type: 'Memory', question: 'Ugedage', instruction: 'Match days', answer: '', context: 'Montag:Mandag|Dienstag:Tirsdag|Mittwoch:Onsdag|Donnerstag:Torsdag|Freitag:Fredag|Sonntag:Søndag' },
    { id: 'de4-me2', type: 'Memory', question: 'Schule', instruction: 'Match school items', answer: '', context: 'Buch:Buch|Heft:Heft|Stift:Stift|Schule:Schule|Lehrer:Lehrer|Tisch:Tisch' },
    { id: 'de4-me3', type: 'Memory', question: 'Tiere', instruction: 'Match animals', answer: '', context: 'Hund:Hund|Katze:Katze|Pferd:Pferd|Vogel:Vogel|Maus:Maus|Fisch:Fisch' },
    { id: 'de4-me4', type: 'Memory', question: 'Freizeit & Hobbys', instruction: 'Match hobbies', answer: '', context: 'Fußball:Fodbold|Singen:Synge|Tanzen:Danse|Schwimmen:Svømme|Malen:Male|Lesen:Læse' },
    { id: 'de4-me5', type: 'Memory', question: 'Årstider & Vejr', instruction: 'Match seasons/weather', answer: '', context: 'Winter:Vinter|Sommer:Sommer|Regen:Regn|Sonne:Sol|Kalt:Koldt|Heiß:Varmt' },
  ],
  5: [
    { id: 'de5-me1', type: 'Memory', question: 'Grammatik: Substantiver', instruction: 'Store begyndelsesbogstaver', answer: '', context: 'Haus:Das Haus|Schule:Die Schule|Apfel:Der Apfel|Kind:Das Kind|Frau:Die Frau|Mann:Der Mann' },
    { id: 'de5-me2', type: 'Memory', question: 'Essen & Trinken', instruction: 'Match food', answer: '', context: 'Brot:Brot|Apfel:Apfel|Wasser:Wasser|Milch:Milch|Käse:Käse|Kuchen:Kuchen' },
    { id: 'de5-me3', type: 'Memory', question: 'Körperteile', instruction: 'Match body parts', answer: '', context: 'Hand:Hand|Fuß:Fuß|Kopf:Kopf|Auge:Auge|Nase:Nase|Mund:Mund' },
  ],
  6: [
    { id: 'de6-me1', type: 'Memory', question: 'Begegnungen', instruction: 'Match hilsner', answer: '', context: 'Guten Tag:Goddag|Hallo:Hej|Wie geht es dir?:Hvordan går det?|Mir geht es gut:Jeg har det godt|Tschüss:Farvel|Auf Wiedersehen:På gensyn' },
    { id: 'de6-me2', type: 'Memory', question: 'Meine Schule: Schultüte', instruction: 'Match school items', answer: '', context: 'Schultüte:Kræmmerhus|Stundenplan:Skema|Mathe:Matematik|Deutsch:Tysk|Pause:Pause|Klassenzimmer:Klasselov' },
    { id: 'de6-me3', type: 'Memory', question: 'Taschengeld & Freizeit', instruction: 'Match job/money', answer: '', context: 'Job:Arbeid|Geld:Penge|Sparen:Spare|Kaufen:Købe|Teuer:Dyr|Billig:Billig' },
    { id: 'de6-me4', type: 'Memory', question: 'Weihnachten & Silvester', instruction: 'Match holiday words', answer: '', context: 'Weihnachtsbaum:Juletræ|Geschenk:Gave|Feuerwerk:Fyrværkeri|Neujahr:Nytår|Vorsatz:Forsæt|Sekt:Bobler' },
    { id: 'de6-me5', type: 'Memory', question: 'Eisdiele & Essen', instruction: 'Match ice cream shop terms', answer: '', context: 'Kugel:Kugle|Waffel:Vaffel|Schokolade:Chokolade|Vanille:Vanilje|Erdbeere:Jordbær|Zitrone:Citron' },
  ],
  7: [
    { id: 'de7-me1', type: 'Memory', question: 'Körper & Gesundheit', instruction: 'Match health terms', answer: '', context: 'Gesund:Sund|Krank:Syg|Arzt:Læge|Medizin:Medicin|Apotheke:Apotek|Fitness:Træning' },
    { id: 'de7-me2', type: 'Memory', question: 'Landeskunde: Berlin', instruction: 'Match Berlin sights', answer: '', context: 'Fernsehturm:TV-tårn|Mauer:Mur|Brandenburger Tor:Port|Spree:Flod|Hauptstadt:Hovedstad|Kiez:Kvarter' },
    { id: 'de7-me3', type: 'Memory', question: 'Grammatik: Noun Categories', instruction: 'Match gender', answer: '', context: 'Maskulin:Der|Feminin:Die|Neutrum:Das|Plural:Die|Substantiv:Navneord|Großschreibung:Stort bogstav' },
    { id: 'de7-me4', type: 'Memory', question: 'Märchen & Grimm', instruction: 'Match fairytales', answer: '', context: 'Wolf:Ulv|Hexe:Heks|Prinz:Prins|Schloss:Slot|Grimm:Brødre|Wald:Skov' },
    { id: 'de7-me5', type: 'Memory', question: 'Hamborg & Østrig', instruction: 'Match places', answer: '', context: 'Hafen:Havn|Alster:Sø|Wien:Hovedstad|Alpen:Bjerge|Sachertorte:Kage|Mozart:Musik' },
  ],
  8: [
    { id: 'de8-me1', type: 'Memory', question: 'Horror & Grusel', instruction: 'Match spooky words', answer: '', context: 'Geist:Spøgelse|Angst:Frygt|Dunkel:Mørk|Blut:Blod|Vampir:Vampyr|Gruselig:Uhyggelig' },
    { id: 'de8-me2', type: 'Memory', question: 'Umwelt & Klima', instruction: 'Match eco words', answer: '', context: 'Müll:Affald|Recycling:Genbrug|Wasser:Vand|Erde:Jord|Rettung:Redning|Klima:Klima' },
    { id: 'de8-me3', type: 'Memory', question: 'Geschichte: Anne Frank', instruction: 'Match WWII words', answer: '', context: 'Tagebuch:Dagbog|Versteck:Skjulested|Krieg:Krig|Frieden:Fred|Jude:Jøde|Zweiter Weltkrieg:WW2' },
    { id: 'de8-me4', type: 'Memory', question: 'Berliner Mauer', instruction: 'Match Wall history', answer: '', context: 'Ost:Øst|West:Vest|Grenze:Grænse|Fall:Fald|Einheit:Enhed|DDR:DDR' },
    { id: 'de8-me5', type: 'Memory', question: 'Musik & Rammstein', instruction: 'Match music terms', answer: '', context: 'Band:Gruppe|Sänger:Sanger|Lied:Sang|Konzert:Koncert|Bühne:Scene|Gitarre:Guitar' },
  ],
  9: [
    { id: 'de9-me1', type: 'Memory', question: 'Identität & Teenager', instruction: 'Match social terms', answer: '', context: 'Liebe:Kærlighed|Dating:Dating|Zukunft:Fremtid|Gefühl:Følelse|Selbst:Selv|Einsam:Ensom' },
    { id: 'de9-me2', type: 'Memory', question: 'Online Leben', instruction: 'Match digital terms', answer: '', context: 'Social Media:SoMe|Selfie:Billede|Handy:Mobil|Internet:Internet|KI:AI|Sicherheit:Sikkerhed' },
    { id: 'de9-me3', type: 'Memory', question: 'Geschichte: Wunden', instruction: 'Match political history', answer: '', context: 'Blockade:Blokade|Luftbrücke:Luftbro|RAF:Terror|Widerstand:Modstand|Gedenken:Mindes|Opfer:Offer' },
    { id: 'de9-me4', type: 'Memory', question: 'Hygge & Kultur', instruction: 'Match culture', answer: '', context: 'Gemütlich:Hyggeligt|Tradition:Tradition|Dänemark:Danmark|Nationalität:Nationalitet|Sprache:Sprog|Verbindung:Forbindelse' },
    { id: 'de9-me5', type: 'Memory', question: 'Film & Sido', instruction: 'Match media/rap', answer: '', context: 'Regisseur:Instruktør|Schauspieler:Skuespiller|Rapper:Rapper|Maske:Maske|Leben:Liv|Text:Tekst' },
  ],
};
