/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GameContent, Grade } from '../../../../types';

export const FRANSK_MEMORY: Partial<Record<Grade, GameContent[]>> = {
  0: [
    { id: 'fr0-me1', type: 'Memory', question: 'Nombres (1-6)', instruction: 'Trouvez les paires', answer: '', context: '1:Un|2:Deux|3:Trois|4:Quatre|5:Cinq|6:Six' },
    { id: 'fr0-me2', type: 'Memory', question: 'Couleurs', instruction: 'Trouvez les paires', answer: '', context: 'Rouge:Rouge|Bleu:Bleu|Jaune:Jaune|Vert:Vert|Noir:Noir|Blanc:Blanc' },
    { id: 'fr0-me3', type: 'Memory', question: 'Animaux', instruction: 'Trouvez les paires', answer: '', context: 'Chien:Chien|Chat:Chat|Oiseau:Oiseau|Cheval:Cheval|Poisson:Poisson|Souris:Souris' },
    { id: 'fr0-me4', type: 'Memory', question: 'Famille', instruction: 'Trouvez les paires', answer: '', context: 'Mère:Mère|Père:Père|Sœur:Sœur|Frère:Frère|Grand-mère:Grand-mère|Grand-père:Grand-père' },
    { id: 'fr0-me5', type: 'Memory', question: 'Corps', instruction: 'Trouvez les paires', answer: '', context: 'Tête:Tête|Main:Main|Pied:Pied|Œil:Œil|Nez:Nez|Bouche:Bouche' },
    { id: 'fr0-me6', type: 'Memory', question: 'Manger', instruction: 'Trouvez les paires', answer: '', context: 'Pain:Pain|Pomme:Pomme|Lait:Lait|Eau:Eau|Gâteau:Gâteau|Fromage:Fromage' },
  ],
  1: [
    { id: 'fr1-me1', type: 'Memory', question: 'Nombres (7-12)', instruction: 'Trouvez les paires', answer: '', context: '7:Sept|8:Huit|9:Neuf|10:Dix|11:Onze|12:Douze' },
    { id: 'fr1-me2', type: 'Memory', question: 'École', instruction: 'Trouvez les paires', answer: '', context: 'Livre:Livre|Stylo:Stylo|Table:Table|Chaise:Chaise|École:École|Professeur:Professeur' },
    { id: 'fr1-me3', type: 'Memory', question: 'Sentiments', instruction: 'Trouvez les paires', answer: '', context: 'Heureux:Heureux|Triste:Triste|Fatigué:Fatigué|Affamé:Affamé|Assoiffé:Assoiffé|Fâché:Fâché' },
    { id: 'fr1-me4', type: 'Memory', question: 'Maison', instruction: 'Trouvez les paires', answer: '', context: 'Maison:Maison|Porte:Porte|Fenêtre:Fenêtre|Lit:Lit|Cuisine:Cuisine|Jardin:Jardin' },
    { id: 'fr1-me5', type: 'Memory', question: 'Nature', instruction: 'Trouvez les paires', answer: '', context: 'Soleil:Soleil|Lune:Lune|Étoile:Étoile|Arbre:Arbre|Fleur:Fleur|Pluie:Pluie' },
  ],
  2: [
    { id: 'fr2-me1', type: 'Memory', question: 'Nombres (11-20)', instruction: 'Trouvez les paires', answer: '', context: '11:Onze|12:Douze|13:Treize|14:Quatorze|15:Quinze|20:Vingt' },
    { id: 'fr2-me2', type: 'Memory', question: 'Le corps', instruction: 'Trouvez les paires', answer: '', context: 'Épaule:Skulder|Coude:Albue|Genou:Knæ|Cheville:Ankel|Tête:Hoved|Dos:Ryg' },
    { id: 'fr2-me3', type: 'Memory', question: 'La famille', instruction: 'Trouvez les paires', answer: '', context: 'Tante:Tante|Oncle:Onkel|Cousin:Fætter/Kusine|Grand-mère:Bedstemor|Grand-père:Bedstefar|Famille:Familie' },
    { id: 'fr2-me4', type: 'Memory', question: 'Le petit déjeuner', instruction: 'Trouvez les paires', answer: '', context: 'Céréales:Morgenmadsprodukt|Toast:Ristet brød|Confiture:Syltetøj|Lait:Mælk|Miel:Honning|Beurre:Smør' },
    { id: 'fr2-me5', type: 'Memory', question: 'Højtider', instruction: 'Trouvez les paires', answer: '', context: 'Pâques:Påske|Noël:Jul|Halloween:Halloween|Père Noël:Julemand|Sapin:Grantræ|Œuf:Æg' },
    { id: 'fr2-me6', type: 'Memory', question: 'Actions quotidiennes', instruction: 'Trouvez les paires', answer: '', context: 'Se réveiller:Vågne op|Se laver:Vaske sig|Manger:Spise|Aller:Gå|Jouer:Lege|Dormir:Sove' },
    { id: 'fr2-me7', type: 'Memory', question: 'Vêtements', instruction: 'Trouvez les paires', answer: '', context: 'Chemise:Skjorte|Chapeau:Hat|Chaussures:Sko|Chaussettes:Strømper|Pantalon:Bukser|Manteau:Frakke' },
    { id: 'fr2-me8', type: 'Memory', question: 'Couleurs', instruction: 'Trouvez les paires', answer: '', context: 'Rose:Lyserød|Marron:Brun|Gris:Grå|Noir:Sort|Blanc:Hvid|Orange:Orange' },
    { id: 'fr2-me9', type: 'Memory', question: 'Animaux domestiques', instruction: 'Trouvez les paires', answer: '', context: 'Chien:Hund|Chat:Kat|Hamster:Hamster|Lapin:Kanin|Oiseau:Fugl|Poisson:Fisk' },
    { id: 'fr2-me10', type: 'Memory', question: 'Questions', instruction: 'Trouvez les paires', answer: '', context: 'Qui:Hvem|Quoi:Hvad|Où:Hvor|Comment:Hvordan|Pourquoi:Hvorfor|Quand:Hvornår' },
  ],
  3: [
    { id: 'fr3-me1', type: 'Memory', question: 'Passe-temps', instruction: 'Trouvez les activités', answer: '', context: 'Lire:Læse|Jouer:Spille|Chanter:Synge|Danser:Danse|Nager:Svømme|Courir:Løbe' },
    { id: 'fr3-me2', type: 'Memory', question: 'En ville', instruction: 'Trouvez les lieux', answer: '', context: 'Parc:Park|Cinéma:Biograf|Gare:Station|Hôtel:Hotel|Église:Kirke|Magasin:Butik' },
    { id: 'fr3-me3', type: 'Memory', question: 'Prépositions', instruction: 'Trouvez les prépositions', answer: '', context: 'Sur:På|Sous:Under|Dans:I|Derrière:Bag|Devant:Foran|À côté de:Ved siden af' },
    { id: 'fr3-me4', type: 'Memory', question: 'Verbes', instruction: 'Trouvez les actions', answer: '', context: 'Écrire:Skrive|Écouter:Høre|Voir:Se|Faire:Gøre|Venir:Komme|Aller:Gå' },
    { id: 'fr3-me5', type: 'Memory', question: 'Grands animaux', instruction: 'Trouvez les animaux sauvages', answer: '', context: 'Lion:Løve|Tigre:Tiger|Éléphant:Elefant|Girafe:Giraf|Singe:Abe|Zèbre:Zebra' },
  ],
  4: [
    { id: 'fr4-me1', type: 'Memory', question: 'Pays', instruction: 'Trouvez les pays', answer: '', context: 'Allemagne:Tyskland|Danemark:Danmark|France:Frankrig|Espagne:Spanien|Angleterre:England|Italie:Italien' },
    { id: 'fr4-me2', type: 'Memory', question: 'Environnement', instruction: 'Trouvez les mots', answer: '', context: 'Déchets:Affald|Recyclage:Genbrug|Eau:Vand|Forêt:Skov|Climat:Klima|Terre:Jord' },
    { id: 'fr4-me3', type: 'Memory', question: 'Médias', instruction: 'Trouvez les mots', answer: '', context: 'Ordinateur:Computer|Portable:Mobil|Internet:Internet|Radio:Radio|Télévision:TV|Journal:Avis' },
    { id: 'fr4-me4', type: 'Memory', question: 'Grammaire: Pluriel', instruction: 'Trouvez le singulier au pluriel', answer: '', context: 'Maison:Maisons|Enfant:Enfants|Homme:Hommes|Femme:Femmes|Arbre:Arbres|Pomme:Pommes' },
    { id: 'fr4-me5', type: 'Memory', question: 'Achats', instruction: 'Trouvez les mots', answer: '', context: 'Prix:Pris|Argent:Penge|Acheter:Købe|Vendre:Sælge|Cher:Dyr|Bon marché:Billig' },
  ],
  5: [
    { id: 'fr5-me1', type: 'Memory', question: 'Grammaire: Articles', instruction: 'Trouvez le genre', answer: '', context: 'Le:Chien|La:Porte|Le:Livre|La:Maison|Le:Tableau|La:Chaise' },
    { id: 'fr5-me2', type: 'Memory', question: 'Culture', instruction: 'Trouvez les icônes', answer: '', context: 'Paris:Capitale|Tour Eiffel:Symbole|Baguette:Pain|Fromage:Aliment|Napoléon:Histoire|Louvre:Musée' },
    { id: 'fr5-me3', type: 'Memory', question: 'Temps', instruction: 'Trouvez les unités', answer: '', context: 'Seconde:60|Minute:60|Heure:24|Jour:7|Semaine:52|Année:12' },
    { id: 'fr5-me4', type: 'Memory', question: 'Opposés', instruction: 'Trouvez les contraires', answer: '', context: 'Grand:Petit|Vieux:Nouveau|Chaud:Froid|Rapide:Lent|Bon:Mauvais|Clair:Sombre' },
    { id: 'fr5-me5', type: 'Memory', question: 'Politesse', instruction: 'Trouvez les phrases', answer: '', context: 'S\'il vous plaît:Vær så venlig|Merci:Tak|Bonjour:Goddag|Au revoir:Farvel|Pardon:Undskyld|Salut:Hej' },
  ],
  6: [
    { id: 'fr6-me1', type: 'Memory', question: 'Salut !', instruction: 'Trouvez les paires', answer: '', context: 'Bonjour:Goddag|Salut:Hej|Bonsoir:Godaften|Au revoir:Farvel|À bientôt:Vi ses snart|Bonne nuit:Godnat' },
    { id: 'fr6-me2', type: 'Memory', question: 'Ça c\'est moi !', instruction: 'Trouvez les paires', answer: '', context: 'Je m’appelle:Jeg hedder|J’ai... ans:Jeg er... år|J’habite:Jeg bor|Garçon:Dreng|Fille:Pige|Moi:Mig' },
    { id: 'fr6-me3', type: 'Memory', question: 'Ma chambre', instruction: 'Trouvez les paires', answer: '', context: 'Lit:Seng|Bureau:Skrivebord|Chaise:Stol|Armoire:Skab|Fenêtre:Vindue|Porte:Dør' },
    { id: 'fr6-me4', type: 'Memory', question: 'Ma famille', instruction: 'Trouvez les paires', answer: '', context: 'Père:Far|Mère:Mor|Frère:Bror|Sœur:Søster|Grand-père:Bedstefar|Grand-mère:Bedstemor' },
    { id: 'fr6-me5', type: 'Memory', question: 'Au marché', instruction: 'Trouvez les paires', answer: '', context: 'Pain:Brød|Fromage:Ost|Lait:Mælk|Œuf:Æg|Fruit:Frugt|Légume:Grøntsag' },
    { id: 'fr6-me6', type: 'Memory', question: 'Les animaux', instruction: 'Trouvez les paires', answer: '', context: 'Chien:Hund|Chat:Kat|Lapin:Kanin|Hamster:Hamster|Oiseau:Fugl|Poisson:Fisk' },
    { id: 'fr6-me7', type: 'Memory', question: 'Vive la mode', instruction: 'Trouvez les paires', answer: '', context: 'T-shirt:T-shirt|Pantalon:Bukser|Jupe:Nederdel|Robe:Kjole|Chaussures:Sko|Chapeau:Hat' },
    { id: 'fr6-me8', type: 'Memory', question: 'Le sport', instruction: 'Trouvez les paires', answer: '', context: 'Foot:Fodbold|Tennis:Tennis|Natation:Svømning|Danse:Dans|Vélo:Cykling|Ski:Ski' },
    { id: 'fr6-me9', type: 'Memory', question: 'Anniversaire', instruction: 'Trouvez les paires', answer: '', context: 'Cadeau:Gave|Gâteau:Kage|Bougie:Lys|Fête:Fest|Musique:Musik|Amis:Venner' },
    { id: 'fr6-me10', type: 'Memory', question: 'Le temps', instruction: 'Trouvez les paires', answer: '', context: 'Soleil:Sol|Pluie:Regn|Neige:Sne|Vent:Vind|Froid:Koldt|Chaud:Varmt' },
  ],
  7: [
    { id: 'fr7-me1', type: 'Memory', question: 'On fait les courses', instruction: 'Trouvez les paires', answer: '', context: 'Boulangerie:Bageri|Supermarché:Supermarked|Boucherie:Slagter|Pharmacie:Apotek|Marché:Marked|Épicerie:Købmand' },
    { id: 'fr7-me2', type: 'Memory', question: 'La nourriture', instruction: 'Trouvez les paires', answer: '', context: 'Poulet:Kylling|Poisson:Fisk|Viande:Kød|Riz:Ris|Pâtes:Pasta|Beurre:Smør' },
    { id: 'fr7-me3', type: 'Memory', question: 'Histoire et Art', instruction: 'Trouvez les paires', answer: '', context: 'Artiste:Kunstner|Peinture:Maleri|Musée:Museum|Histoire:Historie|Célèbre:Berømt|Tableau:Maleri' },
    { id: 'fr7-me4', type: 'Memory', question: 'Joyeux Noël', instruction: 'Trouvez les paires', answer: '', context: 'Sapin:Juletræ|Noël:Jul|Lumières:Lys|Étoile:Stjerne|Hiver:Vinter|Froid:Koldt' },
    { id: 'fr7-me5', type: 'Memory', question: 'En vacances au ski', instruction: 'Trouvez les paires', answer: '', context: 'Montagne:Bjerg|Ski:Ski|Neige:Sne|Vacances:Ferie|Froid:Koldt|Gants:Vanter' },
    { id: 'fr7-me6', type: 'Memory', question: 'Les jeux vidéo', instruction: 'Trouvez les paires', answer: '', context: 'Manette:Controller|Écran:Skærm|Jeu:Spil|Jouer:Spille|Gagner:Vinde|Perdre:Tabe' },
  ],
  8: [
    { id: 'fr8-me1', type: 'Memory', question: 'Musique', instruction: 'Trouvez les paires', answer: '', context: 'Chanteur:Sanger|Chanson:Sang|Concert:Koncert|Radio:Radio|Guitare:Guitar|Piano:Klaver' },
    { id: 'fr8-me2', type: 'Memory', question: 'Le Cinéma', instruction: 'Trouvez les paires', answer: '', context: 'Film:Film|Acteur:Skuespiller|Salles de ciné:Biografsale|Écran:Skærm|Pop-corn:Popcorn|Star:Stjerne' },
    { id: 'fr8-me3', type: 'Memory', question: 'Gastronomie', instruction: 'Trouvez les paires', answer: '', context: 'Restaurant:Restaurant|Chef:Kok|Menu:Menu|Plat:Ret|Cuisine:Køkken|Délicieux:Lækkert' },
    { id: 'fr8-me4', type: 'Memory', question: 'Monde francophone', instruction: 'Trouvez les paires', answer: '', context: 'Suisse:Schweiz|Québec:Québec|Belgique:Belgien|Maroc:Marokko|Sénégal:Sénégal|Haïti:Haïti' },
    { id: 'fr8-me5', type: 'Memory', question: 'La vie des jeunes', instruction: 'Trouvez les paires', answer: '', context: 'École:Skole|Amis:Venner|Hobby:Hobby|Portable:Mobiltelefon|Réseaux sociaux:Sociale medier|Études:Studier' },
  ],
  9: [
    { id: 'fr9-me1', type: 'Memory', question: 'Maître Gims', instruction: 'Trouvez les paires', answer: '', context: 'Chanteur:Sanger|Rap:Rap|Style:Stil|Lunettes:Briller|Succès:Succes|Voix:Stemme' },
    { id: 'fr9-me2', type: 'Memory', question: 'Intouchables', instruction: 'Trouvez les paires', answer: '', context: 'Film:Film|Amitié:Venskab|Humour:Humor|Histoire:Historie|Acteur:Skuespiller|Émotion:Følelse' },
    { id: 'fr9-me3', type: 'Memory', question: 'L’île Maurice', instruction: 'Trouvez les paires', answer: '', context: 'Île:Ø|Océan:Hav|Plage:Strand|Soleil:Sol|Nature:Natur|Voyage:Rejse' },
    { id: 'fr9-me4', type: 'Memory', question: 'Le Tour de France', instruction: 'Trouvez les paires', answer: '', context: 'Vélo:Cykel|Course:Løb|Maillot jaune:Gul førertrøje|Étape:Etape|Montagne:Bjerg|Vitesse:Fart' },
    { id: 'fr9-me5', type: 'Memory', question: 'L’IA (Intelligence Artificielle)', instruction: 'Trouvez les paires', answer: '', context: 'Ordinateur:Computer|Futur:Fremtid|Robot:Robot|Apprendre:Lære|Technologie:Teknologi|Science:Videnskab' },
  ],
};
