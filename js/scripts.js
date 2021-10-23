// hamburger menu open/close
document.querySelector(".hamburger-menu").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
});

// Draw A Card
let deck = [
  new card('The Fool', 'Beginnings, innocence, spontaneity, a free spirit', 'O The Fool'),
  new card('The Magician', 'Manifestation, resourcefulness, power, inspired action', '1 The Magician'),
  new card('The High Priestess', 'Intuition, sacred knowledge, divine feminine, the subconscious mind', '2 The High Priestess'),
  new card('The Empress', 'Femininity, beauty, nature, nurturing, abundance', '3 The Empress'),
  new card('The Emperor', 'Authority, establishment, structure, a father figure', '4 The Emperor'),
  new card('The Hierophant', 'Spiritual wisdom, religious beliefs, conformity, tradition,institutions', '5 The Hierophant'),
  new card('The Lovers', 'Love, harmony, relationships, values alignment, choices', '6 The Lovers'),
  new card('The Chariot', 'Control, willpower, success, action, determination', '7 The Chariot'),
  new card('The Strength', 'Strength, courage, persuasion, influence, compassion', '8 Strength'),
  new card('The Hermit', 'Soul-searching, introspection, being alone, inner guidance', '9 The Hermit'),
  new card('Wheel Of Fortune', 'Good luck, karma, life cycles, destiny, a turning point', '10 Wheel of Fortune'),
  new card('Justice', 'Justice, fairness, truth, cause and effect, law', '11 Justice'),
  new card('The The Hanged Man', 'Pause, surrender, letting go, new perspectives', '12 The Hanged Man'),
  new card('The Death', 'Endings, change, transformation, transition', '13 Death'),
  new card('The Temperance', 'Balance, moderation, patience, purpose', '14 Temperance'),
  new card('The Devil', 'Shadow self, attachment, addiction, restriction, sexuality', '15 The Devil'),
  new card('The Tower', 'Sudden change, upheaval, chaos, revelation, awakening', '16 The Tower'),
  new card('The Star', 'Hope, faith, purpose, renewal, spirituality', '17 The Star'),
  new card('The Moon', 'Illusion, fear, anxiety, subconscious, intuition', '18 The Moon'),
  new card('The Sun', 'Positivity, fun, warmth, success, vitality', '19 The Sun'),
  new card('The Judgement', 'Judgement, rebirth, inner calling, absolution', '20 Judgement'),
  new card('The World', 'Completion, integration, accomplishment, travel', '21 The World'),
  new card('Ace of Cups', 'Love, new relationships, compassion, creativity.', '36 Ace of Cups'),
  new card('The Two of Cups', 'Unified love, partnership, mutual attraction', '37 Two of Cups'),
  new card('Three of Cups', 'Celebration, friendship, creativity, collaborations.', '38 Three of Cups'),
  new card('Four of Cups', 'Meditation, contemplation, apathy, reevaluation.', '39 Four of Cups'),
  new card('Five of Cups', 'Regret, failure, disappointment, pessimism.', '40 Five of Cups'),
  new card('Six of Cups', 'Revisiting the past, childhood memories, innocence, joy.', '41 Six of Cups'),
  new card('Seven of Cups', 'Opportunities, choices, wishful thinking, illusion.', '42 Seven of Cups'),
  new card('Eight of Cups', 'Disappointment, abandonment, withdrawal, escapism.', '43 Eight of Cups'),
  new card('Nine of Cups', 'Contentment, satisfaction, gratitude, wish come true.', '44 Nine of Cups'),
  new card('Ten of Cups', 'Divine love, blissful relationships, harmony, alignment.', '45 Ten of Cups'),
  new card('Page of Cups', 'Creative opportunities, intuitive messages, curiosity, possibility.', '46 Page of Cups'),
  new card('Knight of Cups', 'Creativity, romance, charm, imagination, beauty.', '47 Knight of Cups'),
  new card('The Queen of Cups', 'Compassionate, caring, emotionally stable, intuitive, in flow.', '48 Queen of Cups'),
  new card('King of Cups', 'Emotionally balanced, compassionate, diplomatic.', '49 King of Cups'),
  new card('Ace of Pentacles', 'A new financial or career opportunity, manifestation, abundance.', '64 Ace of Pentacles'),
  new card('Two of Pentacles', 'Multiple priorities, time management, prioritisation, adaptability.', '65 Two of Pentacles'),
  new card('Three of Pentacles', 'Teamwork, collaboration, learning, implementation.', '66 Three of Pentacles'),
  new card('Four of Pentacles', 'Saving money, security, conservatism, scarcity, control.', '67 Four of Pentacles'),
  new card('Five of Pentacles', 'Financial loss, poverty, lack mindset, isolation, worry.', '68 Five of Pentacles'),
  new card('Six of Pentacles', 'Giving, receiving, sharing wealth, generosity, charity.', '69 Six of Pentacles'),
  new card('Seven of Pentacles', 'Long-term view, sustainable results, perseverance, investment.', '70 Seven of Pentacles'),
  new card('Eight of Pentacles', 'Apprenticeship, repetitive tasks, mastery, skill development.', '71 Eight of Pentacles'),
  new card('Nine of Pentacles', 'Abundance, luxury, self-sufficiency, financial independence.', '72 Nine of Pentacles'),
  new card('Ten of Pentacles', 'Wealth, financial security, family, long-term success, contribution.', '73 Ten of Pentacles'),
  new card('Page of Pentacles', 'Manifestation, financial opportunity, skill development.', '74 Page of Pentacles'),
  new card('Knight of Pentacles', 'Hard work, productivity, routine, conservatism.', '75 Knight of Pentacles'),
  new card('Queen of Pentacles', 'Nurturing, practical, providing financially, a working parent.', '76 Queen of Pentacles'),
  new card('King of Pentacles', 'Wealth, business, leadership, security, discipline, abundance.', '77 King of Pentacles'),
  new card('Ace of Wands', 'Inspiration, new opportunities, growth, potential', '22 Ace of Wands'),
  new card('Two of Wands', 'Future planning, progress, decisions, discovery', '23 Two of Wands'),
  new card('Three of Wands', 'Progress, expansion, foresight, overseas opportunities.', '24 Three of Wands'),
  new card('Four of Wands', 'Celebration, joy, harmony, relaxation, homecoming.', '25 Four of Wands'),
  new card('Five of Wands', 'Conflict, disagreements, competition, tension, diversity.', '26 Five of Wands'),
  new card('Six of Wands', 'Success, public recognition, progress, self-confidence.', '27 Six of Wands'),
  new card('Seven of Wands', 'Challenge, competition, protection, perseverance.', '28 Seven of Wands'),
  new card('Eight of Wands', 'Movement, fast paced change, action, alignment, air travel.', '29 Eight of Wands'),
  new card('Nine of Wands', 'Resilience, courage, persistence, test of faith, boundaries.', '30 Nine of Wands'),
  new card('Ten of Wands', 'Burden, extra responsibility, hard work, completion.', '31 Ten of Wands'),
  new card('Page of Wands', 'Inspiration, ideas, discovery, limitless potential, free spirit.', '32 Page of Wands'),
  new card('Knight of Wands', 'Energy, passion, inspired action, adventure, impulsiveness.', '33 Knight of Wands'),
  new card('Queen of Wands', 'Courage, confidence, independence, social butterfly, determination.', '34 Queen of Wands'),
  new card('King of Wands', 'Natural-born leader, vision, entrepreneur, honour.', '35 King of Wands'),
  new card('Ace of Swords', 'Breakthroughs, new ideas, mental clarity, success.', '50 Ace of Swords'),
  new card('Two of Swords', 'Difficult decisions, weighing up options, an impasse, avoidance.', '51 Two of Swords'),
  new card('Three of Swords', 'Heartbreak, emotional pain, sorrow, grief, hurt.', '52 Three of Swords'),
  new card('Four of Swords', 'Rest, relaxation, meditation, contemplation, recuperation.', '53 Four of Swords'),
  new card('Five of Swords', 'Conflict, disagreements, competition, defeat, winning at all costs.', '54 Five of Swords'),
  new card('Six of Swords', 'Transition, change, rite of passage, releasing baggage.', '55 Six of Swords'),
  new card('Seven of Swords', 'Betrayal, deception, getting away with something, acting strategically.', '56 Seven of Swords'),
  new card('Eight of Swords', 'Negative thoughts, self-imposed restriction, imprisonment, victim mentality.', '57 Eight of Swords'),
  new card('Nine of Swords', 'Anxiety, worry, fear, depression, nightmares.', '58 Nine of Swords'),
  new card('Ten of Swords', 'Painful endings, deep wounds, betrayal, loss, crisis.', '59 Ten of Swords'),
  new card('Page of Swords', 'New ideas, curiosity, thirst for knowledge, new ways of communicating.', '60 Page of Swords'),
  new card('Knight of Swords', 'Ambitious, action-oriented, driven to succeed, fast-thinking.', '61 Knight of Swords'),
  new card('Queen of Swords', 'Independent, unbiased judgement, clear boundaries, direct communication.', '62 Queen of Swords'),
  new card('King of Swords', 'Mental clarity, intellectual power, authority, truth.', '63 King of Swords'),
]

function getRandom(num){
  let randomNumber = Math.floor(Math.random() * num);
  return randomNumber;
}

document.getElementById("draw").onload = () => {
  let index = getRandom(78);
  let currentCard = deck[index];

  document.getElementById("display").innerHTML = '<img src="img/LG/' + currentCard.image + '.png">' < h3 > +currentCard.name + '</h3><p>' +
    currentCard.description + '</p>';
};
