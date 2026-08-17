import { useState, useEffect } from 'react';

// Inject CSS keyframes directly into the document head
const styleTag = document.createElement('style');
styleTag.innerHTML = `
  @keyframes floatGlow {
    0% { transform: translateY(0px) scale(1); opacity: 0.8; }
    50% { transform: translateY(-10px) scale(1.02); opacity: 1; }
    100% { transform: translateY(0px) scale(1); opacity: 0.8; }
  }
  @keyframes shuffleReal {
    0% { transform: rotate(0deg) translateX(0); }
    10% { transform: rotate(-10deg) translateX(-40px); }
    30% { transform: rotate(15deg) translateX(40px); }
    50% { transform: rotate(-15deg) translateX(-30px); }
    70% { transform: rotate(10deg) translateX(30px); }
    90% { transform: rotate(-5deg) translateX(-10px); }
    100% { transform: rotate(0deg) translateX(0); }
  }
  @keyframes revealCard {
    0% { transform: scale(0) rotateY(90deg) translateX(50px); opacity: 0; }
    60% { transform: scale(1.1) rotateY(-10deg) translateX(0); opacity: 1; }
    100% { transform: scale(1) rotateY(0deg) translateX(0); opacity: 1; }
  }
  @keyframes sparkle {
    0% { opacity: 0.2; transform: scale(0.8); }
    50% { opacity: 1; transform: scale(1.2); }
    100% { opacity: 0.2; transform: scale(0.8); }
  }
`;
document.head.appendChild(styleTag);

function Tarot() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isReadingOpen, setIsReadingOpen] = useState(false);
  const [pickedCardIds, setPickedCardIds] = useState([]);
  
  const [phase, setPhase] = useState('shuffling'); // 'shuffling' -> 'offering' -> 'revealed'
  const [revealedCard, setRevealedCard] = useState(null);

  // ==========================================
  // COMPLETE 78-CARD TAROT DATABASE
  // ==========================================
  const tarotDeck = [
    // ================= MAJOR ARCANA (22) =================
    {
      id: 0,
      name: "The Fool",
      image: "/tarot-cards/00-TheFool.jpg",
      shortDesc: "New Beginnings, Innocence, Spontaneity.",
      story: "The Fool stands at the cliff's edge, gazing toward the unknown with a heart full of trust. He carries a small bag containing the wisdom of the universe, ready to step into a new adventure.",
      meaning: "You are being called to take a leap of faith into a new chapter of your life. Don't let the fear of the unknown hold you back. Trust that the universe has a plan for you, and move forward with an open heart and a fearless spirit."
    },
    {
      id: 1,
      name: "The Magician",
      image: "/tarot-cards/01-TheMagician.jpg",
      shortDesc: "Manifestation, Power, Resourcefulness.",
      story: "The Magician stands at his table, channeling the power of the universe through his hands. He holds the tools of all four suits, ready to create his reality.",
      meaning: "You are a powerful creator. The universe is aligning to support your will. Don't just dream—take action. Everything you need to manifest your goals is within reach. Trust in your abilities and step into your power today."
    },
    {
      id: 2,
      name: "The High Priestess",
      image: "/tarot-cards/02-TheHighPriestess.jpg",
      shortDesc: "Intuition, Inner Wisdom, Mystery.",
      story: "The High Priestess sits between the pillars of light and shadow, guarding the sacred scroll of knowledge. She represents the quiet voice within that knows the truth before the mind understands it.",
      meaning: "Your intuition is your highest guide right now. The answers you seek cannot be found in the external world; they are hidden deep within your soul. Spend time in stillness, pay attention to your dreams, and trust your gut instincts."
    },
    {
      id: 3,
      name: "The Empress",
      image: "/tarot-cards/03-TheEmpress.jpg",
      shortDesc: "Abundance, Creativity, Nurturing.",
      story: "The Empress sits on her throne, surrounded by the bounty of the earth. She is the archetype of motherhood, creativity, and unlimited growth. She reminds us that we are all connected to nature and the cycles of life.",
      meaning: "You are entering a time of immense growth and prosperity. Nurture your ideas, your relationships, and your body. Spend time in nature, express your creativity, and allow yourself to receive the abundance the universe is offering you."
    },
    {
      id: 4,
      name: "The Emperor",
      image: "/tarot-cards/04-TheEmperor.jpg",
      shortDesc: "Authority, Structure, Stability.",
      story: "The Emperor sits solidly on his stone throne, his armor representing his readiness for battle. He is the archetype of the father figure, providing structure, order, and protection to his kingdom.",
      meaning: "It is time to take control of your life and establish strong boundaries. The chaos you have been experiencing needs to be met with discipline and order. Step into your authority and lead your life with confidence. You are the sovereign of your own destiny."
    },
    {
      id: 5,
      name: "The Hierophant",
      image: "/tarot-cards/05-TheHierophant.jpg",
      shortDesc: "Tradition, Guidance, Conformity.",
      story: "The Hierophant stands between two pillars, a religious leader ready to impart wisdom. He holds the keys to sacred teachings and represents the bridge between the divine and the earthly.",
      meaning: "You are being called to seek guidance from a mentor, a teacher, or a trusted source of wisdom. Sometimes we need to learn from those who have walked the path before us. Embrace tradition and allow the wisdom of the collective to guide your steps."
    },
    {
      id: 6,
      name: "The Lovers",
      image: "/tarot-cards/06-TheLovers.jpg",
      shortDesc: "Relationships, Alignment, Choices.",
      story: "The Lovers depicts a man and a woman standing beneath the angel of harmony. They represent the union of opposites and the power of choice. The tree behind them reminds us that all choices have consequences.",
      meaning: "This card represents a powerful connection—whether it is romantic, platonic, or even a deep connection to your own soul. However, it also signifies a major choice you are about to face. Choose in alignment with your truth, and your relationships will flourish."
    },
    {
      id: 7,
      name: "The Chariot",
      image: "/tarot-cards/07-TheChariot.jpg",
      shortDesc: "Determination, Control, Victory.",
      story: "The Charioteer drives his chariot forward without reins, controlling the two sphinxes by sheer willpower alone. He represents the triumph of will over the opposing forces of the universe.",
      meaning: "You are called to take decisive action and push forward with unwavering determination. You have the willpower to overcome any obstacle in your path. Stay focused, take the reins of your life, and keep moving toward your goal. Victory is within reach."
    },
    {
      id: 8,
      name: "Strength",
      image: "/tarot-cards/08-Strength.jpg",
      shortDesc: "Courage, Patience, Inner Power.",
      story: "A woman gently closes the mouth of a fierce lion, not with force, but with compassion and inner strength. She represents the mastery of the human spirit over the animal instincts.",
      meaning: "You have the inner strength to overcome your current challenges. This is not about brute force; it is about patience, compassion, and resilience. Trust that you have the power to tame the wild forces in your life. Be gentle, yet firm."
    },
    {
      id: 9,
      name: "The Hermit",
      image: "/tarot-cards/09-TheHermit.jpg",
      shortDesc: "Solitude, Introspection, Inner Guidance.",
      story: "The Hermit stands alone on a mountain peak, holding a lantern that illuminates the path ahead. He has withdrawn from society to seek the deeper truths of existence.",
      meaning: "The universe is asking you to step away from the noise of the world and turn inward. This is a time for solitude, deep reflection, and connecting with your inner guide. The answers you seek are not outside—they are within you. Trust your inner light."
    },
    {
      id: 10,
      name: "Wheel of Fortune",
      image: "/tarot-cards/10-WheelOfFortune.jpg",
      shortDesc: "Cycles, Luck, Change.",
      story: "The wheel of the cosmos turns endlessly, its cycles representing the rise and fall of all things. The four creatures at its corners represent the foundations of the universe.",
      meaning: "Change is inevitable, and the wheel is turning in your favor. The tides of luck are shifting, and you are about to enter a new cycle. Accept the flow of life and trust that whatever happens is meant to be. Your destiny is unfolding perfectly."
    },
    {
      id: 11,
      name: "Justice",
      image: "/tarot-cards/11-Justice.jpg",
      shortDesc: "Truth, Fairness, Cause & Effect.",
      story: "Lady Justice sits with her scales balanced, holding a sword ready to cut through deception. She represents the eternal truth that what we sow, we shall inevitably reap.",
      meaning: "The universe is bringing you a moment of reckoning. This is a time for honesty, fairness, and taking responsibility for your actions. Don't try to hide from the truth. Face it with integrity, and you will find peace."
    },
    {
      id: 12,
      name: "The Hanged Man",
      image: "/tarot-cards/12-TheHangedMan.jpg",
      shortDesc: "Surrender, Letting Go, New Perspective.",
      story: "The Hanged Man hangs upside down from a tree, his face calm and serene. He willingly sacrifices his old way of seeing the world to gain a new, higher perspective.",
      meaning: "You are being asked to surrender control. Holding on to your current struggle is draining your energy. Let go. Pause. Look at your situation from a completely different angle. The answers you seek will appear when you stop forcing them."
    },
    {
      id: 13,
      name: "Death",
      image: "/tarot-cards/13-Death.jpg",
      shortDesc: "Endings, Transformation, Transition.",
      story: "The skeletal figure rides a white horse, cutting a path through the landscape. He does not bring destruction for its own sake, but clears the way for new life to grow.",
      meaning: "A significant phase of your life is coming to an end. Do not fear this transition; it is necessary for your growth. Something old must die so that something new can be born. Embrace the transformation and trust that the change will bring renewal."
    },
    {
      id: 14,
      name: "Temperance",
      image: "/tarot-cards/14-Temperance.jpg",
      shortDesc: "Balance, Healing, Patience.",
      story: "The angel stands with one foot on land and one in water, pouring water between two cups. She represents the alchemy of blending opposites to achieve harmony.",
      meaning: "You are being called to find balance in your life. Extremes are exhausting you. Take a step back, heal your wounds, and blend the different aspects of your life into a harmonious whole. Patience will be your greatest ally right now."
    },
    {
      id: 15,
      name: "The Devil",
      image: "/tarot-cards/15-TheDevil.jpg",
      shortDesc: "Attachment, Temptation, Materialism.",
      story: "The Devil sits upon a dark altar, trapping two humans beneath him. He represents the chains we create for ourselves through fear, addiction, and unhealthy attachments.",
      meaning: "You may be feeling trapped by a situation, a habit, or a material desire. Recognize that you are the one holding the key to your own prison. You have the power to break free from anything that does not serve your higher good. Release the attachments that are holding you back."
    },
    {
      id: 16,
      name: "The Tower",
      image: "/tarot-cards/16-TheTower.jpg",
      shortDesc: "Sudden Change, Upheaval, Awakening.",
      story: "The lightning strikes the tower, shattering its foundations. A king and queen fall from the structure that was built on a false sense of security.",
      meaning: "A sudden, powerful change is on the horizon. It may feel destructive, but it is actually a profound awakening. The universe is tearing down the false walls you have built so that you can rebuild on a foundation of truth. Embrace the chaos—it is clearing the way for your liberation."
    },
    {
      id: 17,
      name: "The Star",
      image: "/tarot-cards/17-TheStar.jpg",
      shortDesc: "Hope, Healing, Inspiration.",
      story: "A woman kneels by the water, pouring her emotions out and receiving the healing light of the star above. She represents the eternal wellspring of hope that exists within all of us.",
      meaning: "Even in your darkest moments, hope is never lost. The universe is shining a light on your path. This is a time for deep healing, self-love, and reconnecting with your dreams. Keep your eyes on the light, and you will find your way home."
    },
    {
      id: 18,
      name: "The Moon",
      image: "/tarot-cards/18-TheMoon.jpg",
      shortDesc: "Illusion, Anxiety, Subconscious.",
      story: "The moonlight casts a pale glow over a path that leads into the unknown. The creatures of the night howl at the sky, representing the fears that lurk in our subconscious.",
      meaning: "You are navigating through a period of deep uncertainty and confusion. Your fears are clouding your judgment. You are being called to trust your intuition through the fog. Be patient, and the truth will reveal itself when the time is right."
    },
    {
      id: 19,
      name: "The Sun",
      image: "/tarot-cards/19-TheSun.jpg",
      shortDesc: "Joy, Success, Clarity.",
      story: "A child rides a white horse beneath the radiant sun, representing the pure, unencumbered joy of existence. The sunflowers remind us to always turn our faces toward the light.",
      meaning: "This is a time of immense joy, success, and clarity. The storms have passed, and you are entering a period of pure radiance. Celebrate your achievements, bask in the warmth of the universe, and let your inner child play. You are radiant."
    },
    {
      id: 20,
      name: "Judgement",
      image: "/tarot-cards/20-Judgement.jpg",
      shortDesc: "Reflection, Rebirth, Awakening.",
      story: "The angel Gabriel blows his trumpet, summoning the dead to rise and face their lives. It represents the moment of profound realization and awakening.",
      meaning: "You are being called to reflect deeply on your life and the choices you have made. This is a moment of spiritual awakening and rebirth. Assess your past with honesty, learn from your experiences, and step into your new, awakened self."
    },
    {
      id: 21,
      name: "The World",
      image: "/tarot-cards/21-TheWorld.jpg",
      shortDesc: "Completion, Integration, Fulfillment.",
      story: "A woman dances within a wreath, surrounded by the four cornerstones of the universe. She represents the ultimate fulfillment of the soul's journey.",
      meaning: "A major cycle in your life is coming to a beautiful, fulfilling completion. You have integrated the lessons of your journey, and you are now ready to reap the rewards of your hard work. Celebrate your success—you have reached a milestone. A new cycle is about to begin."
    },

    // ================= SUIT OF CUPS (WATER) - 14 =================
    {
      id: 22,
      name: "Ace of Cups",
      image: "/tarot-cards/Cups01.jpg",
      shortDesc: "Emotional Awakening, Love, Compassion.",
      story: "The Ace of Cups represents the overflowing wellspring of divine love. Water pours from the cup, symbolizing the unconditional love that flows from the heart of the universe into your soul.",
      meaning: "A new wave of emotional depth and love is entering your life. Whether this is a new relationship, a rekindling of an old one, or a newfound love for yourself, your heart is opening. Allow yourself to feel deeply and trust that the universe is guiding you toward emotional fulfillment."
    },
    {
      id: 23,
      name: "Two of Cups",
      image: "/tarot-cards/Cups02.jpg",
      shortDesc: "Partnership, Connection, Harmony.",
      story: "Two figures exchange cups beneath the caduceus, symbolizing the sacred union of two souls. They represent the balance, trust, and mutual respect that forms the foundation of any meaningful relationship.",
      meaning: "A powerful partnership is forming in your life. Whether it is romantic, platonic, or professional, this connection is built on mutual respect and deep emotional understanding. Nurture this bond, as it is a reflection of the love the universe holds for you."
    },
    {
      id: 24,
      name: "Three of Cups",
      image: "/tarot-cards/Cups03.jpg",
      shortDesc: "Celebration, Friendship, Joy.",
      story: "Three figures raise their cups in a toast of celebration. They represent the deep bonds of friendship, community, and the simple joy of sharing life's victories with those you love.",
      meaning: "This is a time for celebration! Whether you have achieved a long-sought goal or simply wish to connect with cherished friends, the universe is urging you to partake in the joy of community. Share your joy with others and let them celebrate your success."
    },
    {
      id: 25,
      name: "Four of Cups",
      image: "/tarot-cards/Cups04.jpg",
      shortDesc: "Apathy, Contemplation, Missed Opportunities.",
      story: "A figure sits beneath a tree, arms crossed, ignoring the cup being offered by a hand from the clouds. He represents the state of being so absorbed in our own discontent that we miss the blessings being offered to us.",
      meaning: "You are being presented with an opportunity that may be passing you by because you are too focused on what you lack. Open your eyes to the blessings around you. There is a gift waiting for you, but you must be willing to look up and receive it."
    },
    {
      id: 26,
      name: "Five of Cups",
      image: "/tarot-cards/Cups05.jpg",
      shortDesc: "Grief, Loss, Moving Forward.",
      story: "A figure cloaked in black stares at three overturned cups, ignoring the two upright cups behind them. The card represents the pain of loss and the difficulty of finding hope in the midst of sorrow.",
      meaning: "You are experiencing a loss that has left you feeling deeply saddened. It is important to honor your grief, but do not allow it to consume you. Look behind you—there are still blessings remaining. Although you cannot change the past, the future still holds potential for healing and joy."
    },
    {
      id: 27,
      name: "Six of Cups",
      image: "/tarot-cards/Cups06.jpg",
      shortDesc: "Nostalgia, Childhood, Innocence.",
      story: "A figure in a garden offers a cup full of flowers to a younger child. The scene evokes a sense of nostalgia, innocence, and the pure, uncomplicated love of childhood.",
      meaning: "The past is calling to you. This may be a time to reconnect with childhood memories, old friends, or the innocent joy you once possessed. Revisit the simple pleasures that once brought you happiness, and allow them to heal your present."
    },
    {
      id: 28,
      name: "Seven of Cups",
      image: "/tarot-cards/Cups07.jpg",
      shortDesc: "Choices, Illusions, Temptation.",
      story: "A figure stands before seven cups, each containing a different tempting illusion. The card represents the overwhelming number of choices that can distract us from our true path.",
      meaning: "You are currently faced with many options and possibilities. However, not all of them are real or beneficial. Beware of chasing illusions. Take the time to discern what is truly aligned with your higher purpose, and avoid being seduced by fantasy."
    },
    {
      id: 29,
      name: "Eight of Cups",
      image: "/tarot-cards/Cups08.jpg",
      shortDesc: "Walking Away, Abandonment, Moving On.",
      story: "A figure turns their back on the eight cups and walks away into the night. They have realized that emotional fulfillment cannot be found in that which no longer serves them.",
      meaning: "You are being called to leave behind a situation, a relationship, or a way of living that no longer brings you emotional fulfillment. It may be painful to walk away, but doing so is necessary for your spiritual growth. Trust that a better path lies ahead."
    },
    {
      id: 30,
      name: "Nine of Cups",
      image: "/tarot-cards/Cups09.jpg",
      shortDesc: "Satisfaction, Emotional Fulfillment.",
      story: "A figure sits in contentment, surrounded by nine cups arranged like a shrine to their happiness. They have achieved emotional satisfaction and are basking in the rewards of their journey.",
      meaning: "You have reached a state of deep emotional satisfaction. Your heart is full, and your wishes are being granted. Take a moment to acknowledge and appreciate the abundance you have created. You are worthy of this joy."
    },
    {
      id: 31,
      name: "Ten of Cups",
      image: "/tarot-cards/Cups10.jpg",
      shortDesc: "Emotional Fulfillment, Family, Harmony.",
      story: "A family stands together beneath a rainbow, their arms raised in joy. They represent the ultimate emotional fulfillment that comes from deep, harmonious relationships.",
      meaning: "You are experiencing a profound sense of emotional fulfillment and harmony. This card often represents a coming together of family, a deepening of bonds, or the achievement of a long-cherished emotional goal. You are surrounded by love. Treasure this moment."
    },
    {
      id: 32,
      name: "Page of Cups",
      image: "/tarot-cards/Cups11.jpg",
      shortDesc: "Creative Inspiration, New Feelings.",
      story: "A young figure holds a cup, a fish peering out from it. They represent the bearer of new emotional or creative messages, brimming with potential and curiosity.",
      meaning: "A new feeling or creative inspiration is entering your life. This may be an unexpected crush, a sudden burst of artistic expression, or a gentle intuitive nudge. Embrace this new energy and allow it to guide your emotions."
    },
    {
      id: 33,
      name: "Knight of Cups",
      image: "/tarot-cards/Cups12.jpg",
      shortDesc: "Romance, Chivalry, Emotional Pursuit.",
      story: "A knight in armor rides a gentle horse, holding out a cup. He is the romantic hero on a quest to express his deepest emotions.",
      meaning: "A romantic gesture or an emotional offering is on its way to you. Someone may be coming forward to express their feelings for you, or you may be called to be brave and speak from your heart. Allow yourself to be swept away by the sincerity of the moment."
    },
    {
      id: 34,
      name: "Queen of Cups",
      image: "/tarot-cards/Cups13.jpg",
      shortDesc: "Emotional Wisdom, Intuition, Compassion.",
      story: "The Queen of Cups sits on her throne, holding a beautiful cup. Her gaze is deep and empathetic. She is the embodiment of emotional maturity, compassion, and intuitive wisdom.",
      meaning: "You are being called to lead with your heart. Your emotional intelligence and intuitive abilities are at their peak. Trust your feelings, offer compassion to those around you, and nurture yourself with the same love you give to others."
    },
    {
      id: 35,
      name: "King of Cups",
      image: "/tarot-cards/Cups14.jpg",
      shortDesc: "Emotional Mastery, Diplomacy, Authority.",
      story: "The King of Cups sits upon his throne, holding a cup. He is the master of his emotions, channeling his deep feelings into wisdom, stability, and balanced leadership.",
      meaning: "You are being called to master your emotions and lead with compassion and diplomacy. The ability to balance empathy with strength is your greatest asset right now. Use your emotional intelligence to navigate complex situations and bring harmony to your sphere of influence."
    },

    // ================= SUIT OF PENTACLES (EARTH) - 14 =================
    {
      id: 36,
      name: "Ace of Pentacles",
      image: "/tarot-cards/Pentacles01.jpg",
      shortDesc: "New Prosperity, Abundance, Potential.",
      story: "A hand emerges from the clouds, offering a single, glowing pentacle. The Ace of Pentacles symbolizes a new beginning in the physical realm—money, career, or health.",
      meaning: "A new opportunity for material or financial prosperity is presenting itself. This could be a new job, a promotion, a real estate deal, or a fruitful investment. The universe is offering you a chance to build lasting wealth and stability. Take this opportunity seriously and nurture it from the ground up."
    },
    {
      id: 37,
      name: "Two of Pentacles",
      image: "/tarot-cards/Pentacles02.jpg",
      shortDesc: "Balance, Adaptability, Flexibility.",
      story: "A figure juggles two pentacles, a ship tossing on the waves behind them. This represents the delicate balance between managing multiple resources and responsibilities.",
      meaning: "You are currently navigating multiple commitments or sources of income. The key to success right now is balance and adaptability. You must learn to juggle your responsibilities without dropping any. Stay flexible, keep your priorities straight, and you will maintain equilibrium."
    },
    {
      id: 38,
      name: "Three of Pentacles",
      image: "/tarot-cards/Pentacles03.jpg",
      shortDesc: "Collaboration, Teamwork, Skill.",
      story: "A stonemason works on a cathedral, while a monk and an architect discuss the plans. This card represents the power of collaborative effort and skilled craftsmanship.",
      meaning: "You are being called to collaborate with others who bring specialized skills to the table. Your current project or goal requires a team effort. Don't try to do everything alone. Embrace the unique talents of your team members, and you will build something far greater than you could on your own."
    },
    {
      id: 39,
      name: "Four of Pentacles",
      image: "/tarot-cards/Pentacles04.jpg",
      shortDesc: "Security, Hoarding, Control.",
      story: "A figure holds a pentacle close to his body, while others sit beneath his feet. The Four of Pentacles represents the desire for security and the tendency to cling tightly to what we have.",
      meaning: "You are in a phase of focusing on material security and financial stability. While it is wise to safeguard your resources, be cautious not to let your fear of loss turn into hoarding or possessiveness. Trust that the universe will provide, and allow yourself to enjoy the security you have built."
    },
    {
      id: 40,
      name: "Five of Pentacles",
      image: "/tarot-cards/Pentacles05.jpg",
      shortDesc: "Hardship, Financial Loss, Isolation.",
      story: "Two figures walk through the snow, passing by a brightly lit church window. The Five of Pentacles represents times of poverty, hardship, and feeling left out in the cold.",
      meaning: "You may be going through a period of financial struggle or feeling isolated and abandoned. It is important to remember that help is often available, even if it seems out of reach. Reach out to trusted friends, family, or support systems. The light is not far away."
    },
    {
      id: 41,
      name: "Six of Pentacles",
      image: "/tarot-cards/Pentacles06.jpg",
      shortDesc: "Generosity, Giving, Charitable Actions.",
      story: "A wealthy merchant holds a scale in one hand and offers coins to the needy. The Six of Pentacles represents the flow of abundance when we give and receive graciously.",
      meaning: "You are entering a time of giving and receiving. The universe is asking you to share your resources, time, and energy with those in need. By being generous with others, you will open the flow of abundance in your own life. Practice charity, not just with money, but with kindness."
    },
    {
      id: 42,
      name: "Seven of Pentacles",
      image: "/tarot-cards/Pentacles07.jpg",
      shortDesc: "Patience, Evaluation, Hard Work.",
      story: "A farmer pauses to look at his crop, leaning on his hoe. He represents the patience required to wait for long-term results after sowing the seeds of hard work.",
      meaning: "You have put in the hard work, and now you must be patient. The rewards of your labor are not yet visible, but they are growing. This is a time for reflection and evaluation. Check your progress and trust that your efforts will eventually bear fruit. Don't give up just because you can't see the results yet."
    },
    {
      id: 43,
      name: "Eight of Pentacles",
      image: "/tarot-cards/Pentacles08.jpg",
      shortDesc: "Diligence, Mastery, Focused Effort.",
      story: "A craftsman works diligently on a set of pentacles, absorbed in his craft. This card represents the dedication and mastery that comes from repetitive, focused effort.",
      meaning: "You are in a phase of deep focus and skill-building. Whether you are learning a new trade, perfecting a craft, or studying a subject with intense dedication, your hard work is leading to mastery. Keep applying yourself, and you will become an expert. The universe rewards focused effort."
    },
    {
      id: 44,
      name: "Nine of Pentacles",
      image: "/tarot-cards/Pentacles09.jpg",
      shortDesc: "Self-Sufficiency, Luxury, Independence.",
      story: "A woman stands in a lush vineyard, surrounded by the fruits of her labor. She is self-sufficient, independent, and enjoying the material rewards of her hard work.",
      meaning: "You have reached a level of self-sufficiency and independence that allows you to enjoy the finer things in life. You have worked hard to build your security, and you deserve to enjoy it. This is a time of luxury, material abundance, and inner confidence. You are standing on your own two feet, and you are thriving."
    },
    {
      id: 45,
      name: "Ten of Pentacles",
      image: "/tarot-cards/Pentacles10.jpg",
      shortDesc: "Wealth, Legacy, Long-Term Security.",
      story: "A family sits in comfort, surrounded by wealth and abundance. The Ten of Pentacles represents the enduring prosperity that is passed down through generations.",
      meaning: "You are not just securing wealth for yourself; you are building a lasting legacy that will benefit your family and community for generations. This is the card of long-term financial security, family prosperity, and the fulfillment of your material dreams. You have built a strong foundation that will stand the test of time."
    },
    {
      id: 46,
      name: "Page of Pentacles",
      image: "/tarot-cards/Pentacles11.jpg",
      shortDesc: "Curiosity, Learning, Practical Opportunity.",
      story: "A young figure holds a pentacle, looking at it with deep fascination. The Page of Pentacles represents the beginning of a new practical endeavor or the desire to learn about material matters.",
      meaning: "A new opportunity to learn, study, or develop your skills in the practical realm is presenting itself. This could be a new job offer, an investment idea, or a chance to deepen your expertise. Approach this with the curiosity of a student, and you will learn valuable lessons that will lead to prosperity."
    },
    {
      id: 47,
      name: "Knight of Pentacles",
      image: "/tarot-cards/Pentacles12.jpg",
      shortDesc: "Hard Work, Diligence, Persistence.",
      story: "A knight sits still on his horse, holding a single pentacle. He represents the slow, steady, and persistent effort required to achieve long-term material goals.",
      meaning: "Your approach to your material goals must be slow, steady, and persistent. There are no shortcuts to lasting wealth and stability. Work diligently, stay committed to your plan, and trust that your consistent effort will eventually yield the results you desire. Patience is your ally."
    },
    {
      id: 48,
      name: "Queen of Pentacles",
      image: "/tarot-cards/Pentacles13.jpg",
      shortDesc: "Nurturing, Practicality, Generosity.",
      story: "The Queen of Pentacles sits on her throne, holding her pentacle with a gentle and nurturing gaze. She represents the balance of practicality, generosity, and earth-bound wisdom.",
      meaning: "You are being called to embody the energy of the Queen of Pentacles: nurturing, practical, and deeply grounded. Create a home or workspace that feels nurturing, manage your resources wisely, and share your generosity with those around you. Your practicality is a gift."
    },
    {
      id: 49,
      name: "King of Pentacles",
      image: "/tarot-cards/Pentacles14.jpg",
      shortDesc: "Abundance, Authority, Earthly Success.",
      story: "The King of Pentacles sits securely on his throne, his robe draped in the bounty of the earth. He represents the ultimate mastery of the material world.",
      meaning: "You have reached a level of mastery in the material world. Your financial acumen, business sense, and ability to manifest abundance are at their peak. You are in a position of great authority and influence. Use your power wisely, generously, and with the intention of lifting others up."
    },

    // ================= SUIT OF SWORDS (AIR) - 14 =================
    {
      id: 50,
      name: "Ace of Swords",
      image: "/tarot-cards/Swords01.jpg",
      shortDesc: "Clarity, Truth, New Ideas.",
      story: "A hand emerges from the clouds, gripping a single, gleaming sword. The Ace of Swords represents the power of clarity, truth, and the sharpness of a new idea.",
      meaning: "A breakthrough is on the horizon. You are about to experience a moment of profound clarity and truth. A new idea, a sudden realization, or an honest conversation will cut through the fog and reveal what you need to know. Embrace this clarity and act on the truth it reveals."
    },
    {
      id: 51,
      name: "Two of Swords",
      image: "/tarot-cards/Swords02.jpg",
      shortDesc: "Stalemate, Avoidance, Indecision.",
      story: "A blindfolded figure sits with two swords crossed over their chest. The card represents a state of impasse, where you are avoiding a difficult truth or refusing to make a choice.",
      meaning: "You are in a state of indecision, avoiding a difficult conversation or a tough choice. The longer you delay, the more tension builds. The universe is urging you to remove your blindfold, face the situation with clarity, and make a decision so you can move forward."
    },
    {
      id: 52,
      name: "Three of Swords",
      image: "/tarot-cards/Swords03.jpg",
      shortDesc: "Heartbreak, Grief, Emotional Pain.",
      story: "Three swords pierce a heart, surrounded by a stormy sky. This is one of the most painful cards, representing heartbreak, betrayal, and emotional suffering.",
      meaning: "You are experiencing a deep emotional wound or heartbreak. This pain is real, and it is okay to grieve. Allow yourself to feel the sorrow, but remember that this too shall pass. You will heal, and your heart will grow stronger for having known this depth of feeling."
    },
    {
      id: 53,
      name: "Four of Swords",
      image: "/tarot-cards/Swords04.jpg",
      shortDesc: "Rest, Recovery, Contemplation.",
      story: "A figure lies in repose within a church, three swords hanging above them. This card represents the essential need for rest and recovery after a period of struggle.",
      meaning: "You have been through a battle, and now is the time to rest and recover. The universe is calling you to step away from the chaos and take a much-needed break. Do not feel guilty about resting. Your mind and body need this time to heal."
    },
    {
      id: 54,
      name: "Five of Swords",
      image: "/tarot-cards/Swords05.jpg",
      shortDesc: "Conflict, Defeat, Unresolved Tension.",
      story: "A figure holds swords in a gesture of victory, while others walk away in defeat. The Five of Swords represents a hollow victory—winning the battle but losing the peace.",
      meaning: "You may have won an argument or a conflict, but the cost was high. The tension and resentment left behind are not worth the victory. Take a step back and consider if winning is truly the most important thing. Sometimes, choosing peace over being right is the wiser path."
    },
    {
      id: 55,
      name: "Six of Swords",
      image: "/tarot-cards/Swords06.jpg",
      shortDesc: "Transition, Healing, Moving On.",
      story: "A figure guides a boat across calm waters, carrying swords and passengers. This is the card of transition—leaving behind the turmoil and moving toward a place of peace.",
      meaning: "You are moving from a period of turmoil into a phase of healing and peace. You are leaving behind the struggles of the past and traveling toward calmer waters. Trust that this journey is guided and necessary for your growth. You are safe."
    },
    {
      id: 56,
      name: "Seven of Swords",
      image: "/tarot-cards/Swords07.jpg",
      shortDesc: "Deception, Strategy, Hidden Agenda.",
      story: "A figure sneaks away with five swords, leaving two behind. This card represents deception, hidden motives, and the need to be vigilant of others' agendas.",
      meaning: "You may be dealing with someone who is not being completely honest, or perhaps you are avoiding a truth yourself. The universe is cautioning you to be aware of your surroundings and to trust your instincts. If something feels off, it probably is. Investigate before you commit to any plans."
    },
    {
      id: 57,
      name: "Eight of Swords",
      image: "/tarot-cards/Swords08.jpg",
      shortDesc: "Self-Imposed Imprisonment, Anxiety.",
      story: "A bound figure stands surrounded by swords, blindfolded. The Eight of Swords represents the feeling of being trapped, but the bindings are self-imposed.",
      meaning: "You feel trapped, anxious, and unsure of how to escape your current situation. However, the truth is that you are not as helpless as you believe. The bonds are of your own making. Recognize that you have the power to remove the blindfold and free yourself. The solution is within you."
    },
    {
      id: 58,
      name: "Nine of Swords",
      image: "/tarot-cards/Swords09.jpg",
      shortDesc: "Anxiety, Nightmares, Overthinking.",
      story: "A figure sits up in bed, hands covering their face, while swords hang on the wall behind them. The Nine of Swords represents the torment of anxiety and overthinking.",
      meaning: "Your mind is your own worst enemy right now. You are trapped in a cycle of overthinking and anxiety, causing you distress. The fears you are facing are largely in your head. Take a deep breath, step away from your thoughts, and find a way to ground yourself in reality. Seek support if you need it."
    },
    {
      id: 59,
      name: "Ten of Swords",
      image: "/tarot-cards/Swords10.jpg",
      shortDesc: "Endings, Pain, The Bottom.",
      story: "A figure lies on the ground, pierced by ten swords. The sky is dark, but a golden light shines on the horizon. This is the card of hitting rock bottom, but it is also a sign that the end is near.",
      meaning: "You have hit rock bottom. The pain and suffering you are experiencing are reaching their peak. While this moment is incredibly difficult, it is also a turning point. There is nowhere to go but up. The darkness is a prelude to a new dawn. This is the end of a cycle, and healing is on its way."
    },
    {
      id: 60,
      name: "Page of Swords",
      image: "/tarot-cards/Swords11.jpg",
      shortDesc: "Curiosity, New Ideas, Communication.",
      story: "A young figure holds a sword, alert and ready to investigate. The Page of Swords is the bearer of new ideas and the spirit of inquisitive communication.",
      meaning: "A new idea or piece of information is coming your way. You may be feeling a strong urge to investigate, communicate, or express your thoughts. Be open to receiving messages from the universe, and don't be afraid to ask questions. Your curiosity will lead you to the truth."
    },
    {
      id: 61,
      name: "Knight of Swords",
      image: "/tarot-cards/Swords12.jpg",
      shortDesc: "Action, Speed, Directness.",
      story: "A knight charges forward on his horse, sword raised, moving with unstoppable speed and determination. He represents swift and direct action.",
      meaning: "You are moving forward with great speed and determination. However, your haste may be causing you to overlook important details. Make sure you are charging in the right direction. When you are sure of your target, direct action will lead to success. Beware of impulsiveness."
    },
    {
      id: 62,
      name: "Queen of Swords",
      image: "/tarot-cards/Swords13.jpg",
      shortDesc: "Independence, Intellectual Clarity, Truth.",
      story: "The Queen of Swords sits upright, her sword pointing toward the heavens. She is the master of intellectual clarity, truth, and fierce independence.",
      meaning: "You are being called to cut through the noise and speak your truth with clarity and compassion. Do not shy away from difficult conversations or decisions. Your independence and intellectual strength are your greatest assets right now. Trust in your ability to discern the truth and act upon it."
    },
    {
      id: 63,
      name: "King of Swords",
      image: "/tarot-cards/Swords14.jpg",
      shortDesc: "Authority, Logic, Truth.",
      story: "The King of Swords sits on his throne, holding his sword upright. He represents the highest level of logical and intellectual authority.",
      meaning: "You are being asked to take a balanced, logical, and authoritative approach to your current situation. Let go of emotional bias and focus on the facts. Your ability to communicate clearly and make decisions based on reason will guide you through this challenge. Your word is law—use it wisely."
    },

    // ================= SUIT OF WANDS (FIRE) - 14 =================
    {
      id: 64,
      name: "Ace of Wands",
      image: "/tarot-cards/Wands01.jpg",
      shortDesc: "Inspiration, New Energy, Passion.",
      story: "A hand emerges from the clouds, gripping a sprouting wand. The Ace of Wands represents the initial spark of creative or spiritual fire that ignites our passions.",
      meaning: "A surge of creative energy and passion is entering your life. A new idea, a new project, or a new career path is calling to you. This is a spark of divine inspiration—do not ignore it. Seize the moment and let this fire fuel your next adventure."
    },
    {
      id: 65,
      name: "Two of Wands",
      image: "/tarot-cards/Wands02.jpg",
      shortDesc: "Planning, Decision, Vision.",
      story: "A figure stands on a castle wall, holding one wand and looking out at the horizon. They represent the planning stage, where we look toward the future and decide which path to take.",
      meaning: "You are in a stage of planning and decision-making. The possibilities are vast, but you must choose a direction. Take the time to consider your long-term goals and trust the vision you hold for your future. Your decision will pave the way for your journey."
    },
    {
      id: 66,
      name: "Three of Wands",
      image: "/tarot-cards/Wands03.jpg",
      shortDesc: "Expansion, Vision, Foresight.",
      story: "A figure stands with his back to us, watching his ships sail off into the horizon. He represents looking toward the future with confidence and expanding beyond your current boundaries.",
      meaning: "Your vision is expanding, and your plans are beginning to bear fruit. The seeds you have planted are growing, and you are now able to look toward the future with a sense of excitement and anticipation. Trust that your long-term plans will lead to expansion and success."
    },
    {
      id: 67,
      name: "Four of Wands",
      image: "/tarot-cards/Wands04.jpg",
      shortDesc: "Celebration, Homecoming, Stability.",
      story: "A joyful group gathers beneath a garland of flowers, celebrating a milestone or a return home. The Four of Wands represents a moment of stability, peace, and communal joy.",
      meaning: "You are entering a time of celebration and stability. Whether you are marking a personal achievement, returning to a place of comfort, or simply enjoying a moment of peace with loved ones, this is a time to cherish. You have built a foundation of security and joy."
    },
    {
      id: 68,
      name: "Five of Wands",
      image: "/tarot-cards/Wands05.jpg",
      shortDesc: "Conflict, Competition, Struggle.",
      story: "Five figures clash with their wands, engaging in a spirited struggle. The Five of Wands represents the tensions that arise when multiple forces seek dominance.",
      meaning: "You are currently experiencing friction or competition. It may be a clash of egos, a heated debate, or a struggle to assert your position. While conflict can be uncomfortable, it is often necessary to refine your ideas and strengthen your resolve. Stand your ground with integrity."
    },
    {
      id: 69,
      name: "Six of Wands",
      image: "/tarot-cards/Wands06.jpg",
      shortDesc: "Victory, Public Recognition, Progress.",
      story: "A rider on a white horse, holding a wand adorned with a laurel wreath, receives admiration from a cheering crowd. He represents the triumphant recognition that follows hard-won success.",
      meaning: "Your efforts are being recognized. You are moving into a phase of victory, success, and public acclaim. Whether you are receiving praise for your work, achieving a long-sought goal, or simply feeling a deep sense of pride, acknowledge your accomplishments and allow yourself to bask in the light of your success."
    },
    {
      id: 70,
      name: "Seven of Wands",
      image: "/tarot-cards/Wands07.jpg",
      shortDesc: "Defense, Perseverance, Standing Your Ground.",
      story: "A figure stands on a hill, wielding a wand, defending their position against the six wands aimed at them from below. He represents the courage to protect what you hold dear.",
      meaning: "You are being called to stand your ground. You may feel like you are under attack or facing opposition, but you have the strength and conviction to hold your position. Don't back down. Your resilience will prove that your values and beliefs are unshakable."
    },
    {
      id: 71,
      name: "Eight of Wands",
      image: "/tarot-cards/Wands08.jpg",
      shortDesc: "Speed, Action, Progress.",
      story: "Eight wands fly through the air in a flurry of speed and movement. The card represents rapid progress, swift communication, and decisive action.",
      meaning: "Things are moving quickly! Events are unfolding at an accelerated pace, and the universe is pushing you to take swift action. Be prepared to adapt and respond quickly to incoming news or developments. This is a time of rapid acceleration and forward momentum."
    },
    {
      id: 72,
      name: "Nine of Wands",
      image: "/tarot-cards/Wands09.jpg",
      shortDesc: "Resilience, Persistence, Guardedness.",
      story: "A battered figure leans on a wand, holding one more wand up defensively. Despite his weariness, he remains steadfast and ready for the final battle.",
      meaning: "You have been through a lot of battles, and you are feeling weary. However, the end is in sight. Do not give up now. Your resilience is your greatest strength, and you are closer to victory than you realize. Keep pushing forward—the final challenge is the one you will overcome."
    },
    {
      id: 73,
      name: "Ten of Wands",
      image: "/tarot-cards/Wands10.jpg",
      shortDesc: "Burden, Overwhelm, Release.",
      story: "A figure struggles beneath the weight of ten wands, bent over from the burden they carry. This represents the exhaustion of carrying too much responsibility alone.",
      meaning: "You are carrying a heavy burden, and it is beginning to take a toll on your energy and spirit. The universe is asking you to look at your responsibilities and delegate or release what no longer serves you. You cannot do it all alone. Asking for help is not a sign of weakness."
    },
    {
      id: 74,
      name: "Page of Wands",
      image: "/tarot-cards/Wands11.jpg",
      shortDesc: "Curiosity, New Discoveries, Creative Spark.",
      story: "A young figure holds a wand, looking at it with curiosity. This is the Page, the messenger of inspiration and new beginnings.",
      meaning: "A new creative spark or source of inspiration is entering your life. You are being called to explore new ideas and pursue your passions with youthful enthusiasm. This is a time to learn, to experiment, and to embrace the excitement of starting something new."
    },
    {
      id: 75,
      name: "Knight of Wands",
      image: "/tarot-cards/Wands12.jpg",
      shortDesc: "Action, Adventure, Impulsiveness.",
      story: "A knight charges forward on his horse, his wand raised. He represents the drive to take action and pursue adventure with unbridled passion.",
      meaning: "You are being called to take bold, decisive action. This is a time for adventure, for breaking free from the mundane, and for pursuing your passions fearlessly. While your enthusiasm is inspiring, be mindful not to act impulsively. Balance your drive with careful planning."
    },
    {
      id: 76,
      name: "Queen of Wands",
      image: "/tarot-cards/Wands13.jpg",
      shortDesc: "Confidence, Independence, Charisma.",
      story: "The Queen of Wands sits upon her throne, radiating confidence and magnetism. She is the embodiment of self-assurance and independent fire.",
      meaning: "You are entering a stage of profound confidence and self-assurance. Your inner fire is burning bright, and others are drawn to your charisma. Trust in your abilities, embrace your independence, and allow your passion to light the way for others."
    },
    {
      id: 77,
      name: "King of Wands",
      image: "/tarot-cards/Wands14.jpg",
      shortDesc: "Leadership, Vision, Empowerment.",
      story: "The King of Wands sits boldly on his throne, his staff a symbol of his authority. He represents the visionary leader who inspires others through his passion and foresight.",
      meaning: "You are being called to step into a leadership role. Your vision, passion, and decisiveness are exactly what your community or project needs. Lead with confidence, inspire others with your vision, and empower those around you to reach their highest potential."
    }
  ];

  // ==========================================
  // AUTO-PLAY SHUFFLE AND PHASE LOGIC
  // ==========================================
  useEffect(() => {
    // Shuffle for 3 seconds
    setTimeout(() => {
      setPhase('offering');
    }, 3000);
  }, []);

  const handleCutDeck = () => {
    // Pick a random unique card
    const availableCards = tarotDeck.filter(card => !pickedCardIds.includes(card.id));
    let randomPick;
    if (availableCards.length === 0) {
      setPickedCardIds([]);
      randomPick = tarotDeck[Math.floor(Math.random() * tarotDeck.length)];
    } else {
      randomPick = availableCards[Math.floor(Math.random() * availableCards.length)];
      setPickedCardIds([...pickedCardIds, randomPick.id]);
    }
    
    setRevealedCard(randomPick);
    setPhase('revealed');
    
    // Show the reading modal after the card slides in
    setTimeout(() => {
      setSelectedCard(randomPick);
      setIsReadingOpen(true);
    }, 1000);
  };

  const handleClose = () => {
    setIsReadingOpen(false);
    setSelectedCard(null);
    setRevealedCard(null);
    setPhase('offering'); // Reset to offering state for next draw
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.angelEdgeTop}>🕊️ ✦ 🕊️</div>

      <h1 style={styles.title}>🔮 Divine Tarot Reading</h1>
      <p style={styles.subtitle}>The cards are waiting. Cut the deck to reveal your message.</p>

      {/* --- THE FLOATING DECK --- */}
      <div style={styles.sceneContainer}>
        
        {/* Shuffling State */}
        {phase === 'shuffling' && (
          <div style={styles.shuffleTextContainer}>
            <div style={styles.shuffleText}>♻️ Shuffling the cards...</div>
          </div>
        )}

        {/* Offering State (Floating deck) */}
        {phase === 'offering' && (
          <div 
            style={styles.offeringContainer}
            onClick={handleCutDeck}
          >
            {/* Ethereal Glow behind the deck */}
            <div style={styles.etherealGlow}></div>
            
            <div style={styles.fannedDeck}>
              {tarotDeck.slice(0, 12).map((card, index) => {
                const offset = index - 5.5;
                return (
                  <div 
                    key={card.id}
                    style={{
                      ...styles.floatingCard,
                      transform: `rotate(${offset * 4}deg) translateY(${Math.abs(offset) * -2}px)`,
                      zIndex: index,
                      animationDelay: `${index * 0.05}s`
                    }}
                  >
                    <img src={card.image} alt={card.name} style={styles.cardImage} />
                    <div style={styles.cardLabel}>{card.name}</div>
                  </div>
                );
              })}
            </div>
            
            <div style={styles.cutPrompt}>✧ Tap to Cut the Deck ✧</div>
          </div>
        )}

        {/* Revealed State (Single card sliding out) */}
        {phase === 'revealed' && revealedCard && (
          <div style={styles.revealContainer}>
            <div style={styles.revealCardWrapper}>
              <img src={revealedCard.image} alt={revealedCard.name} style={styles.revealedImage} />
              <div style={styles.cardLabel}>{revealedCard.name}</div>
            </div>
            <div style={styles.revealText}>Your card has been chosen.</div>
          </div>
        )}

      </div>

      <div style={styles.angelEdgeBottom}>🕊️ ✦ 🕊️</div>

      {/* --- DEEP READING MODAL --- */}
      {isReadingOpen && selectedCard && (
        <div style={styles.modalOverlay} onClick={handleClose}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button style={styles.closeBtn} onClick={handleClose}>✕</button>
            
            <div style={styles.modalHeader}>
              <img src={selectedCard.image} alt={selectedCard.name} style={styles.modalImage} />
              <div>
                <h2 style={styles.modalTitle}>{selectedCard.name}</h2>
                <p style={styles.modalSubtitle}>{selectedCard.shortDesc}</p>
              </div>
            </div>

            <div style={styles.readingBody}>
              <h3 style={styles.sectionTitle}>📖 The Card's Story</h3>
              <p style={styles.readingText}>{selectedCard.story}</p>

              <h3 style={styles.sectionTitle}>✨ Your Reading Today</h3>
              <p style={styles.readingText}>{selectedCard.meaning}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ==========================================
// STYLES
// ==========================================
const styles = {
  pageContainer: {
    minHeight: '100vh',
    background: 'linear-gradient(to bottom, #5B2A8C, #F5EEF8)',
    padding: '2rem 2rem 6rem 2rem',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  angelEdgeTop: {
    fontSize: '2rem',
    color: '#D4AF37',
    marginBottom: '0.5rem',
    letterSpacing: '10px'
  },
  angelEdgeBottom: {
    fontSize: '2rem',
    color: '#D4AF37',
    marginTop: '2rem',
    letterSpacing: '10px'
  },
  title: {
    fontSize: '3rem',
    color: '#fff',
    textShadow: '0 2px 10px rgba(0,0,0,0.3)',
    marginBottom: '0.5rem'
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#e0d4eb',
    marginBottom: '3rem'
  },
  sceneContainer: {
    height: '420px',
    width: '100%',
    maxWidth: '700px',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '1rem'
  },
  shuffleTextContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  shuffleText: {
    fontSize: '2rem',
    color: '#fff',
    animation: 'sparkle 1.5s ease-in-out infinite'
  },
  offeringContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer',
    width: '100%'
  },
  etherealGlow: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '400px',
    height: '400px',
    background: 'radial-gradient(circle, rgba(91, 42, 140, 0.3) 0%, rgba(212, 175, 55, 0.1) 50%, transparent 70%)',
    borderRadius: '50%',
    animation: 'floatGlow 3s ease-in-out infinite',
    zIndex: 0,
    pointerEvents: 'none'
  },
  fannedDeck: {
    position: 'relative',
    width: '320px',
    height: '240px',
    zIndex: 5,
    marginTop: '10px'
  },
  floatingCard: {
    position: 'absolute',
    bottom: '0',
    width: '120px',
    height: '180px',
    transformOrigin: 'bottom center',
    boxShadow: '0 10px 25px rgba(0,0,0,0.4)',
    borderRadius: '10px',
    background: '#fff',
    overflow: 'hidden',
    border: '2px solid #D4AF37',
    animation: 'floatGlow 3s ease-in-out infinite',
    transition: 'transform 0.3s ease'
  },
  cardImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  cardLabel: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    background: 'rgba(91, 42, 140, 0.9)',
    color: '#fff',
    fontSize: '0.7rem',
    padding: '4px',
    textAlign: 'center'
  },
  cutPrompt: {
    marginTop: '30px',
    fontSize: '1.3rem',
    color: '#fff',
    fontWeight: 'bold',
    textShadow: '0 2px 15px rgba(0,0,0,0.6)',
    background: 'rgba(91, 42, 140, 0.6)',
    padding: '12px 25px',
    borderRadius: '30px',
    backdropFilter: 'blur(8px)',
    zIndex: 20,
    animation: 'sparkle 2s ease-in-out infinite',
    border: '1px solid rgba(212, 175, 55, 0.3)'
  },
  revealContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  revealCardWrapper: {
    width: '170px',
    height: '250px',
    boxShadow: '0 15px 40px rgba(0,0,0,0.6)',
    borderRadius: '12px',
    background: '#fff',
    overflow: 'hidden',
    border: '3px solid #D4AF37',
    animation: 'revealCard 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
    transformOrigin: 'center',
    position: 'relative'
  },
  revealedImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  revealText: {
    marginTop: '25px',
    fontSize: '1.2rem',
    color: '#fff',
    fontWeight: 'bold',
    textShadow: '0 2px 15px rgba(0,0,0,0.6)'
  },
  modalOverlay: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.85)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
    padding: '20px'
  },
  modalContent: {
    background: '#fff',
    padding: '3rem',
    borderRadius: '30px',
    maxWidth: '700px',
    width: '100%',
    maxHeight: '90vh',
    overflowY: 'auto',
    position: 'relative',
    boxShadow: '0 20px 60px rgba(0,0,0,0.6)'
  },
  closeBtn: {
    position: 'absolute',
    top: '15px',
    right: '25px',
    fontSize: '2rem',
    cursor: 'pointer',
    color: '#999',
    background: 'none',
    border: 'none'
  },
  modalHeader: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
    marginBottom: '2rem',
    borderBottom: '2px solid #F5EEF8',
    paddingBottom: '1rem'
  },
  modalImage: {
    width: '120px',
    height: 'auto',
    borderRadius: '15px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
  },
  modalTitle: {
    fontSize: '2rem',
    color: '#5B2A8C',
    marginBottom: '0.5rem'
  },
  modalSubtitle: {
    fontSize: '1.1rem',
    color: '#666',
    fontStyle: 'italic'
  },
  readingBody: {
    textAlign: 'left'
  },
  sectionTitle: {
    fontSize: '1.3rem',
    color: '#5B2A8C',
    marginTop: '1.5rem',
    marginBottom: '0.5rem'
  },
  readingText: {
    fontSize: '1.05rem',
    lineHeight: '1.8',
    color: '#444'
  }
};

// ==========================================
// MOBILE RESPONSIVE OVERRIDES
// ==========================================
const mobileStyles = document.createElement('style');
mobileStyles.innerHTML = `
  @media (max-width: 600px) {
    .floatingCard {
      width: 80px !important;
      height: 120px !important;
    }
    .revealCardWrapper {
      width: 130px !important;
      height: 190px !important;
    }
    .etherealGlow {
      width: 300px !important;
      height: 300px !important;
    }
  }
`;
document.head.appendChild(mobileStyles);

export default Tarot;