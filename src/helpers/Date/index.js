export const MONTHS = {
  1: "janvier",
  2: "février",
  3: "mars",
  4: "avril",
  5: "mai",
  6: "juin",
  7: "juillet",
  8: "août",
  9: "septembre",
  10: "octobre",
  11: "novembre",
  12: "décembre",
};

// Corrigé pour que les mois correspondent bien (0-based)
export const getMonth = (date) => MONTHS[date.getMonth() + 1];

// Affichage complet : 22 avril 2025
export const getFormattedDate = (date) =>
  `${date.getDate()} ${getMonth(date)} ${date.getFullYear()}`;
