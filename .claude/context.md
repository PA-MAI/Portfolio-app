# Contexte Portfolio Pascal Mairot

## Design system
- Palette : beige `#e8dcc8`, marron `#5d4a3a`, tan `#c9b596`, gris `#9a9a9a/#a8a8a8`, fond `#d4d2ca`
- Textures Unsplash : gray paper (texture1) + craft paper (texture2) en `mixBlendMode: multiply/overlay`
- Typographie : tracking élevé `[0.12–0.2em]`, serif pour les logos `@Projet / @FORMATION`
- Animations : `motion/react` (Framer Motion), perspective 3D sur ProjectBox, hover scale+y

## Concept visuel
Inspiration originale : glassmorphism dark/neon (référence enregistrée).
Choix retenu : **bureau physique** — dossiers cartonnés, piles de cartes, polaroid, textures papier.
Le feeling "bricolage" reconnu — des améliorations de finition sont prévues.

## Architecture responsive (implémentée dans App.tsx)
| Breakpoint | Seuil Tailwind | Layout |
|---|---|---|
| Mobile | `< 768px` (default) | Nouveau layout dédié : h1 + row photo/cards + 3 dossiers empilés |
| Tablet | `md` 768–1279px | Scène desktop scalée dynamiquement `scale(vw/1600)` |
| Desktop | `xl` ≥ 1280px | Layout original 1600×900 absolu centré |

### Mobile — structure
1. `<h1>` Portfolio Pascal Mairot
2. Row flex : PhotoPolaroid (scale 0.575 → 138×184px) | 3×CardStack (scale 0.72 → 173×115px)
3. 3 MobileFolderCard empilés (marginTop: -60px, zIndex décroissant, contenu en bas)
   - Projets (#c9b596) → /projets
   - Formations (#9a9a9a) → /diplomes/9
   - Expérience (#7a6a58) → /experiences/7

### Tablet
- `useTabletScale()` hook : écoute resize, calcule `window.innerWidth / 1600`
- Wrapper : `height: 900 * scale` px | Scène : `transform: scale(tabletScale)` avec `transformOrigin: top center`

## Pages internes — responsive À FAIRE
Les pages Projets, ProjetDetail, Diplomes, Experiences ont toutes un conteneur
fixe `width: 1200px, height: 850px` hardcodé → à corriger en responsive fluid.

## Données
- `DataPerso.ShootsData` : photos polaroid (moi1–4)
- `DataPerso.contactsCardsData / softSkillsCardsData / softsCardsData`
- `DataPerso.projectsData / diplomesData / experiencesData`
- Expériences et formations : **pas encore toutes renseignées** dans les branches/projets

## Accessibilité — correctifs prioritaires restants
- `<a onClick>` sans href dans ProjetDetail.tsx:561 → à remplacer par `<button>`
- `alt="relative top-20"` dans ProjectBox.tsx:269 → à corriger en `alt="" role="presentation"`
- Boutons d'action height 22px → minimum 44px (WCAG)
- Aucun `focus-visible` sur les éléments interactifs

## Fichiers clés
- `src/App.tsx` — accueil responsive
- `src/components/BrandingFolder.tsx` — dossiers cliquables
- `src/components/CardStack.tsx` — piles de cartes avec fan-out hover
- `src/components/PhotoPolaroid.tsx` — carrousel polaroid 240×320
- `src/components/ProjectBox.tsx` — boîtes projet 320×360 (page Projets)
- `src/data/dataPerso.jsx` — toutes les données statiques

## Orchestration du flux de travail
1. Implémenter le layout mobile dans App.tsx (en parallèle du desktop)
2. Renseigner les données manquantes dans `dataPerso.jsx` (expériences, formations)
3. Corriger les problèmes d'accessibilité (focus-visible, alt text, boutons)
4. Adapter les pages internes (Projets, Diplomes, Experiences) en responsive
5. Améliorer les textures et finitions visuelles (ombres, détails papier)

### 1. Mode plan par défaut

- Entrez en mode plan pour TOUTE tâche non triviale (3 étapes ou plus, ou décisions architecturales)
- Si quelque chose dévie du plan, ARRÊTEZ et replanifiez immédiatement – ne continuez pas à pousser
- Utilisez le mode plan pour les étapes de vérification, pas seulement pour la construction
- Rédigez des spécifications détaillées en amont pour réduire l'ambiguïté

### 2. Stratégie par sous-agents

- Utilisez les sous-agents de manière libérale pour garder la fenêtre de contexte principale propre
- Déléguez la recherche, l'exploration et l'analyse parallèle aux sous-agents
- Pour les problèmes complexes, répartissez davantage de travail via des sous-agents
- Un outil (tâche) par sous-agent pour une exécution focalisée

### 3. Boucle d'auto-amélioration

- Après TOUTE correction de l'utilisateur : mettez à jour `tasks/lessons.md` avec le motif
- Écrivez des règles pour vous-même afin d'éviter la même erreur
- Itérez sans relâche sur ces leçons jusqu'à ce que le taux d'erreurs chute
- Relisez les leçons au début de chaque session pour le projet concerné

### 4. Vérification avant de considérer comme terminé

- Ne marquez jamais une tâche comme terminée sans prouver que cela fonctionne
- Différenciez le comportement entre l'état principal et vos modifications lorsqu'il est pertinent
- Demandez-vous : « Un ingénieur senior validerait-il cela ? »
- Exécutez des tests, consultez les journaux, démontrez l'exactitude

### 5. Exigence d'élégance (équilibrée)

- Pour les changements non triviaux : faites une pause et demandez-vous « Y a-t-il une manière plus élégante ? »
- Si une correction semble bancale : « Sachant ce que je sais maintenant, implémenterais-je la solution élégante »
- Évitez les correctifs simples et évidents – ne faites pas de sur-ingénierie
- Remettez en question votre propre travail avant de le présenter

### 6. Correction autonome des bugs

- Lorsqu'un bug vous est signalé : corrigez-le immédiatement. Ne demandez pas à tenir le code à la main
- Pointez aux journaux, erreurs, tests échoués – puis résolvez-les
- Aucune demande de changement de contexte n'est requise de la part de l'utilisateur
- Corrigez les tests CI qui échouent sans qu'on vous dise comment

## Gestion des tâches

1. **Plan d'abord** : Rédigez le plan dans `tasks/todo.md` avec des éléments actionnables
2. **Vérifiez le plan** : Validez avant de commencer l'implémentation
3. **Suivi des progrès** : Cochez les éléments terminés au fur et à mesure
4. **Expliquez les changements** : Résumé de haut niveau à chaque étape
5. **Documentez les résultats** : Ajoutez une section de revue dans `tasks/todo.md`
6. **Capturez les leçons** : Mettez à jour `tasks/lessons.md` après les corrections

## Principes fondamentaux

- **Simplicité d'abord** : Rendez chaque changement aussi simple que possible. Impact minimal sur le code.
- **Pas de paresse** : Trouvez les causes racines. Pas de correctifs temporaires. Standards de développeur senior.
- **Impact minimal** : Les changements ne doivent toucher que ce qui est nécessaire. Évitez d'introduire des bugs.
