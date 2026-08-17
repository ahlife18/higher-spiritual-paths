import { useState } from 'react';

// Inject CSS keyframes directly into the document head
const styleTag = document.createElement('style');
styleTag.innerHTML = `
  @keyframes pulseGlow {
    0% { transform: translate(-50%, -50%) scale(0.9); opacity: 0.3; }
    50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.7; }
    100% { transform: translate(-50%, -50%) scale(0.9); opacity: 0.3; }
  }
`;
document.head.appendChild(styleTag);

function Tarot() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isReadingOpen, setIsReadingOpen] = useState(false);
  const [pickedCardIds, setPickedCardIds] = useState([]);

  // ==========================================
  // COMPLETE 78-CARD TAROT DATABASE (DEEP MEANINGS)
  // ==========================================
  const tarotDeck = [
    // ================= MAJOR ARCANA (22) =================
    {
      id: 0,
      name: "The Fool",
      image: "/tarot-cards/00-TheFool.jpg",
      shortDesc: "New Beginnings, Innocence, Spontaneity.",
      story: "The Fool stands at the cliff's edge, holding a single rose, gazing toward the unknown with a heart full of trust. He carries a small bag containing the wisdom of the universe, yet he is completely unaware of it. He is the pure potential of a soul about to embark on its journey, unburdened by the past and fearless of the future. The Fool invites us to take a leap of faith, to trust that the universe will catch us, and to embrace the adventure of being alive.",
      meaning: "You are being called to take a leap of faith into a new chapter of your life. Don't let the fear of the unknown hold you back. The universe is telling you that right now, you are being supported in ways you cannot yet see. This is a time for spontaneity, for releasing the need to overthink every decision, and for trusting your gut. Whether it is a new career, a new relationship, or a new spiritual practice, step forward with the innocence of a child. The path ahead is full of adventure, and you have everything you need to walk it. Trust that the universe has a plan for you, even if you cannot see it right now. This card reminds you that you are not meant to know everything at the start of your journey. The answers will reveal themselves as you take the next step. Embrace the mystery, and let the journey begin."
    },
    {
      id: 1,
      name: "The Magician",
      image: "/tarot-cards/01-TheMagician.jpg",
      shortDesc: "Manifestation, Power, Resourcefulness.",
      story: "The Magician stands at his table, channeling the power of the universe through his hands. He holds the tools of all four suits, ready to create his reality. He is the master of manifesting desires into physical form. The Magician represents the bridge between the spiritual and the material, reminding us that we are not just victims of fate—we are active creators of our own destiny. The tools on his table represent the four elements: fire, water, air, and earth. They symbolize that you already possess everything you need to succeed.",
      meaning: "You are a powerful creator, and the universe is currently aligning to support your will. Don't just dream—take action. The cards are telling you that you have all the skills, tools, and resources you need to achieve your goals right now. Stop waiting for the perfect moment to begin. The perfect moment is now. Whether you are launching a project, healing a relationship, or transforming your personal habits, step into your power. Your thoughts, words, and actions are deeply connected. What you focus on, you bring to life. Do not underestimate your ability to shape your reality. Take inspired action today, and watch the universe meet you halfway. You are more powerful than you believe."
    },
    {
      id: 2,
      name: "The High Priestess",
      image: "/tarot-cards/02-TheHighPriestess.jpg",
      shortDesc: "Intuition, Inner Wisdom, Mystery.",
      story: "The High Priestess sits between the pillars of light and shadow, guarding the sacred scroll of knowledge. She represents the quiet voice within that knows the truth before the mind understands it. The High Priestess is the guardian of the subconscious mind, the keeper of dreams, and the gatekeeper to the unseen realms. She is the feminine archetype of inner wisdom, reminding us that the answers we seek cannot be found in the external world, but are hidden deep within our own souls.",
      meaning: "Your intuition is your highest guide right now. The answers you seek cannot be found in the external world; they are hidden deep within your own soul. Spend time in stillness today. Pay attention to your dreams, your sudden gut feelings, and the subtle whispers of your inner voice. Logic and reason will not give you the answers you need at this moment. Instead of trying to figure things out, sit quietly and listen. The truth is already within you. This is also a time to trust your psychic or intuitive abilities. If you have been ignoring your 'gut feeling' about a situation, it is time to pay attention. You know more than you give yourself credit for. Trust yourself."
    },
    {
      id: 3,
      name: "The Empress",
      image: "/tarot-cards/03-TheEmpress.jpg",
      shortDesc: "Abundance, Creativity, Nurturing.",
      story: "The Empress sits on her throne, surrounded by the bounty of the earth. Golden wheat fields stretch before her, and she holds a scepter representing her dominion over life and growth. She is the archetype of motherhood, creativity, and unlimited growth. She reminds us that we are all connected to nature and the cycles of life. The Empress does not force things to grow; she simply creates the conditions of love, warmth, and nourishment, and allows life to flourish. She represents the nurturing energy that exists within every human being—the desire to create, to care, and to bring new life into the world.",
      meaning: "You are entering a time of immense growth and prosperity. This is a period to nurture your ideas, your relationships, and your physical body. Spend time in nature, express your creativity, and allow yourself to receive the abundance the universe is offering you. The Empress asks you to take care of yourself the way you take care of others. Self-care is not selfish; it is necessary for you to thrive. If you have been feeling drained, it is because you have been giving too much to others without replenishing your own energy. It is time to plant seeds for your future. Nurture your dreams, and watch them grow."
    },
    {
      id: 4,
      name: "The Emperor",
      image: "/tarot-cards/04-TheEmperor.jpg",
      shortDesc: "Authority, Structure, Stability.",
      story: "The Emperor sits solidly on his stone throne, his armor representing his readiness for battle. He is the archetype of the father figure, providing structure, order, and protection to his kingdom. The Emperor represents the stability that comes from discipline, authority, and clear boundaries. He reminds us that chaos cannot exist where there is strong leadership. The Emperor does not rule through fear, but through wisdom, experience, and an unwavering sense of duty to those he protects.",
      meaning: "It is time to take control of your life and establish strong boundaries. The chaos you have been experiencing needs to be met with discipline and order. Step into your authority and lead your life with confidence. You are the sovereign of your own destiny. If you have been feeling overwhelmed, it is because you have allowed external forces to dictate your path. It is time to take back the reins. Create a plan, set clear expectations for yourself and others, and do not waver. The Emperor reminds you that true strength comes from within. You have the wisdom and the experience to handle any situation that comes your way. Lead with integrity."
    },
    {
      id: 5,
      name: "The Hierophant",
      image: "/tarot-cards/05-TheHierophant.jpg",
      shortDesc: "Tradition, Guidance, Conformity.",
      story: "The Hierophant stands between two pillars, a religious leader ready to impart wisdom. He holds the keys to sacred teachings and represents the bridge between the divine and the earthly. The Hierophant is the guardian of sacred knowledge and the keeper of traditions that have been passed down through generations. He reminds us that we stand on the shoulders of giants, and that there is profound wisdom to be found in the teachings of those who have walked the path before us.",
      meaning: "You are being called to seek guidance from a mentor, a teacher, or a trusted source of wisdom. Sometimes we need to learn from those who have walked the path before us. Embrace tradition and allow the wisdom of the collective to guide your steps. You do not have to reinvent the wheel. There are answers already available to you if you are willing to ask for help. Whether you are seeking spiritual guidance, career advice, or relationship support, reach out to someone you trust. The Hierophant also reminds you to honor your commitments. If you have made a promise, uphold it. Your integrity is your most valuable asset right now."
    },
    {
      id: 6,
      name: "The Lovers",
      image: "/tarot-cards/06-TheLovers.jpg",
      shortDesc: "Relationships, Alignment, Choices.",
      story: "The Lovers depicts a man and a woman standing beneath the angel of harmony. They represent the union of opposites and the power of choice. The tree behind them reminds us that all choices have consequences, and that we must choose with our hearts as well as our minds. The angel above them represents the divine guidance that is available to us when we make decisions based on love rather than fear. The Lovers card is not just about romantic relationships—it is about the union of all opposing forces within our lives.",
      meaning: "This card represents a powerful connection that is forming in your life. Whether it is romantic, platonic, or even a deep spiritual connection to your own soul, this bond is significant. However, The Lovers also signifies a major choice you are about to face. This choice will likely require you to decide between two paths—one that aligns with your fears and one that aligns with your truth. Choose the path that feels right in your heart, not the one that seems logically safer. When you choose in alignment with love, the universe will support you. Be honest with yourself and with others. Your relationships will flourish when you communicate with clarity and authenticity."
    },
    {
      id: 7,
      name: "The Chariot",
      image: "/tarot-cards/07-TheChariot.jpg",
      shortDesc: "Determination, Control, Victory.",
      story: "The Charioteer drives his chariot forward without reins, controlling the two sphinxes by sheer willpower alone. He represents the triumph of will over the opposing forces of the universe. The two sphinxes pulling the chariot are colored black and white, representing the opposing forces of light and dark, positive and negative, logic and emotion. The Charioteer is able to control both forces and steer them in the direction he desires. He does not ignore his emotions or his logic; he masters them.",
      meaning: "You are called to take decisive action and push forward with unwavering determination. You have the willpower to overcome any obstacle in your path. Stay focused, take the reins of your life, and keep moving toward your goal. Victory is within your reach, but it requires you to control your impulses and direct your energy purposefully. Don't let distractions or self-doubt steer you off course. The Chariot is a card of pure willpower. If you stay committed to your path, you will not only reach your destination—you will arrive triumphantly. This is not a time for indecision. Drive forward with confidence."
    },
    {
      id: 8,
      name: "Strength",
      image: "/tarot-cards/08-Strength.jpg",
      shortDesc: "Courage, Patience, Inner Power.",
      story: "A woman gently closes the mouth of a fierce lion, not with force, but with compassion and inner strength. She represents the mastery of the human spirit over the animal instincts. The lion represents the wild, untamed emotions and passions that reside within us all. The woman does not conquer the lion by overpowering it; she tames it through patience, love, and understanding. This card reminds us that true strength is not about brute force—it is about self-control, patience, and the courage to face our own inner demons with grace.",
      meaning: "You have the inner strength to overcome your current challenges. This is not about brute force; it is about patience, compassion, and resilience. Trust that you have the power to tame the wild forces in your life. Be gentle, yet firm. If you are facing a situation that requires courage, remember that you are stronger than you think. The Strength card asks you to channel your inner energy wisely. Do not react impulsively. Instead, respond with calmness and clarity. Your greatest power right now lies in your ability to stay centered and grounded, even when the world around you is chaotic."
    },
    {
      id: 9,
      name: "The Hermit",
      image: "/tarot-cards/09-TheHermit.jpg",
      shortDesc: "Solitude, Introspection, Inner Guidance.",
      story: "The Hermit stands alone on a mountain peak, holding a lantern that illuminates the path ahead. He has withdrawn from society to seek the deeper truths of existence. The Hermit represents the inward journey, the search for meaning, and the quiet revelation that comes from solitude. The lantern he holds represents the inner light of wisdom that guides him through the darkness. The Hermit does not fear loneliness; he embraces it as a necessary part of the spiritual path.",
      meaning: "The universe is asking you to step away from the noise of the world and turn inward. This is a time for solitude, deep reflection, and connecting with your inner guide. The answers you seek are not outside—they are within you. Turn off the distractions, unplug from social media, and spend time in quiet contemplation. This is not a time for isolation out of fear; it is a time for intentional solitude for the purpose of healing and growth. Spend time alone in nature, meditate, or journal your thoughts. The clarity you are seeking will come when you quiet the external noise. Trust your inner light to guide you."
    },
    {
      id: 10,
      name: "Wheel of Fortune",
      image: "/tarot-cards/10-WheelOfFortune.jpg",
      shortDesc: "Cycles, Luck, Change.",
      story: "The wheel of the cosmos turns endlessly, its cycles representing the rise and fall of all things. The four creatures at its corners represent the foundations of the universe. The Wheel of Fortune reminds us that nothing in life is permanent—neither the good times nor the bad times. We are constantly moving through cycles of birth, growth, decay, and rebirth. The wheel does not stop turning, and we are all riding it. This card asks us to accept the ebb and flow of life with grace and humility.",
      meaning: "Change is inevitable, and the wheel is turning in your favor. The tides of luck are shifting, and you are about to enter a new cycle of prosperity, growth, or spiritual awakening. Accept the flow of life and trust that whatever happens is meant to be. Your destiny is unfolding perfectly. If you have been going through a difficult time, rest assured that the wheel is turning upward. If you have been in a period of success, be grateful and humble. The Wheel of Fortune invites you to surrender to the natural rhythms of the universe. Stop trying to control everything. Let life flow, and trust that the universe knows exactly what it is doing."
    },
    {
      id: 11,
      name: "Justice",
      image: "/tarot-cards/11-Justice.jpg",
      shortDesc: "Truth, Fairness, Cause & Effect.",
      story: "Lady Justice sits with her scales balanced, holding a sword ready to cut through deception. She represents the eternal truth that what we sow, we shall inevitably reap. The scales represent the careful weighing of evidence, while the sword represents the swift execution of truth. Justice is blindfolded, reminding us that truth does not see status, wealth, or appearance—it only sees the facts. This card is a powerful reminder that the universe operates on a system of perfect balance and cause and effect.",
      meaning: "The universe is bringing you a moment of reckoning. This is a time for honesty, fairness, and taking responsibility for your actions. Don't try to hide from the truth. Face it with integrity, and you will find peace. If you have been wronged, justice will be served. If you have wronged others, it is time to make things right. The Justice card asks you to look at your choices with brutal honesty. Have you been fair to yourself? Have you been fair to others? The scales are balanced, and the universe is watching. It is time to align your actions with truth. Speak your truth, and let the chips fall where they may."
    },
    {
      id: 12,
      name: "The Hanged Man",
      image: "/tarot-cards/12-TheHangedMan.jpg",
      shortDesc: "Surrender, Letting Go, New Perspective.",
      story: "The Hanged Man hangs upside down from a tree, his face calm and serene. He willingly sacrifices his old way of seeing the world to gain a new, higher perspective. The Hanged Man represents the willingness to pause, to let go of control, and to see things from a completely different angle. He is suspended in time, neither moving forward nor backward. The Hanged Man invites us to stop struggling against the current of life and to simply surrender to the flow.",
      meaning: "You are being asked to surrender control. Holding on to your current struggle is draining your energy. Let go. Pause. Look at your situation from a completely different angle. The answers you seek will appear when you stop forcing them. You may need to let go of a relationship, a job, or a belief that is no longer serving your highest good. Surrender is not weakness. It is the ultimate act of trust in the universe. When you stop trying to force things to happen, you open the door for miracles to enter your life. Trust that the universe has a better plan than you can currently see. Let go, and let God—or the universe—take the wheel."
    },
    {
      id: 13,
      name: "Death",
      image: "/tarot-cards/13-Death.jpg",
      shortDesc: "Endings, Transformation, Transition.",
      story: "The skeletal figure rides a white horse, cutting a path through the landscape. He does not bring destruction for its own sake, but clears the way for new life to grow. Death is not an ending—it is a transition. The Death card represents the profound transformation that occurs when one chapter of our life ends and another begins. The card does not signify literal death, but rather the death of an old identity, a stagnant situation, or a limiting belief. It is the natural cycle of life, death, and rebirth that is essential for spiritual growth.",
      meaning: "A significant phase of your life is coming to an end. Do not fear this transition; it is necessary for your growth. Something old must die so that something new can be born. Embrace the transformation and trust that the change will bring renewal. If you have been holding on to a toxic relationship, an unfulfilling career, or a belief system that limits you, it is time to let it go. The Death card is a powerful invitation to shed your old skin and step into a new, evolved version of yourself. The process may feel uncomfortable, but you are being guided toward something far greater. Trust the process."
    },
    {
      id: 14,
      name: "Temperance",
      image: "/tarot-cards/14-Temperance.jpg",
      shortDesc: "Balance, Healing, Patience.",
      story: "The angel stands with one foot on land and one in water, pouring water between two cups. She represents the alchemy of blending opposites to achieve harmony. Temperance is the card of healing, patience, and the art of finding balance in the midst of chaos. The angel pours water from one cup to another without spilling a single drop, representing the perfect balance of emotions, intellect, and spirit. Temperance reminds us that extremism—whether in work, love, or spirituality—leads to burnout. The path to mastery lies in moderation and patience.",
      meaning: "You are being called to find balance in your life. Extremes are exhausting you. Take a step back, heal your wounds, and blend the different aspects of your life into a harmonious whole. Patience will be your greatest ally right now. You are being asked to temper your expectations and to allow things to unfold at their own pace. Healing takes time. Rebuilding takes time. Do not rush the process. Trust that the universe is working behind the scenes to bring balance back into your life. Practice moderation in all things—food, work, relationships, and even spiritual practice. Balance is the key to your well-being."
    },
    {
      id: 15,
      name: "The Devil",
      image: "/tarot-cards/15-TheDevil.jpg",
      shortDesc: "Attachment, Temptation, Materialism.",
      story: "The Devil sits upon a dark altar, trapping two humans beneath him. He represents the chains we create for ourselves through fear, addiction, and unhealthy attachments. The Devil is not an external demon; he represents the inner demons of materialism, greed, and obsession. The two humans beneath him are not trapped by the Devil himself—they are trapped by the chains that they have placed upon themselves. The Devil card appears when we are bound to things that do not serve our higher good. It is a warning to examine the attachments that are holding us back from living authentically.",
      meaning: "You may be feeling trapped by a situation, a habit, or a material desire. Recognize that you are the one holding the key to your own prison. You have the power to break free from anything that does not serve your higher good. The Devil card asks you to take an honest look at what is controlling your life. Is it money? Is it a toxic relationship? Is it an addiction to work, food, or social media? Whatever holds you in bondage, you have the power to break free. It starts with awareness. Once you see the chain, you can break it. It is time to release the attachments that are holding you back and reclaim your freedom."
    },
    {
      id: 16,
      name: "The Tower",
      image: "/tarot-cards/16-TheTower.jpg",
      shortDesc: "Sudden Change, Upheaval, Awakening.",
      story: "The lightning strikes the tower, shattering its foundations. A king and queen fall from the structure that was built on a false sense of security. The Tower represents the sudden, often painful, upheaval that occurs when we are forced to face the truth. The Tower may come as a shock, but it is always a necessary part of our awakening. The Tower is not about destruction for its own sake—it is about tearing down the false structures we have built so that we can rebuild on a foundation of truth. The lightning represents the flash of divine clarity that illuminates what we have been refusing to see.",
      meaning: "A sudden, powerful change is on the horizon. It may feel destructive, but it is actually a profound awakening. The universe is tearing down the false walls you have built so that you can rebuild on a foundation of truth. Embrace the chaos—it is clearing the way for your liberation. If you have been living a lie, or if your current situation is built on shaky ground, the Tower will force you to face reality. It may feel painful in the moment, but you will be grateful for the clarity in the long run. Trust that the universe is breaking down what no longer serves you so that something far more authentic and aligned can be built in its place."
    },
    {
      id: 17,
      name: "The Star",
      image: "/tarot-cards/17-TheStar.jpg",
      shortDesc: "Hope, Healing, Inspiration.",
      story: "A woman kneels by the water, pouring her emotions out and receiving the healing light of the star above. She represents the eternal wellspring of hope that exists within all of us. The Star is the card of healing, self-love, and deep spiritual connection. The water represents the flow of emotions, while the star represents the guiding light of hope that shines even in the darkest nights. The woman on the card is naked, representing vulnerability and authenticity. She is not hiding who she is, and she is being blessed by the universe for her openness.",
      meaning: "Even in your darkest moments, hope is never lost. The universe is shining a light on your path. This is a time for deep healing, self-love, and reconnecting with your dreams. Keep your eyes on the light, and you will find your way home. The Star asks you to have faith in the future, even when the present moment is clouded with uncertainty. You are being guided toward a brighter chapter in your life. Whether you are healing from a broken heart, a financial loss, or a spiritual crisis, the universe is holding you in its loving embrace. You are not alone. Your healing is already in progress."
    },
    {
      id: 18,
      name: "The Moon",
      image: "/tarot-cards/18-TheMoon.jpg",
      shortDesc: "Illusion, Anxiety, Subconscious.",
      story: "The moonlight casts a pale glow over a path that leads into the unknown. The creatures of the night howl at the sky, representing the fears that lurk in our subconscious. The Moon represents the hidden, the unseen, and the parts of ourselves that we have kept in the shadows. The Moon card invites us to explore the depths of our subconscious mind—to face our fears, our anxieties, and our deepest uncertainties. The path is not clear, and the Moon asks us to walk into the darkness with faith and courage.",
      meaning: "You are navigating through a period of deep uncertainty and confusion. Your fears are clouding your judgment. You are being called to trust your intuition through the fog. Be patient, and the truth will reveal itself when the time is right. The Moon is a card of deep emotional turmoil, but also of profound spiritual insight. You are being asked to face the fears that have been lurking in your subconscious. Do not run from them. Instead, walk through the darkness with the knowledge that the sun will rise again. Your intuition is your guide through this confusion. Trust your gut, even when your mind is full of doubt."
    },
    {
      id: 19,
      name: "The Sun",
      image: "/tarot-cards/19-TheSun.jpg",
      shortDesc: "Joy, Success, Clarity.",
      story: "A child rides a white horse beneath the radiant sun, representing the pure, unencumbered joy of existence. The sunflowers remind us to always turn our faces toward the light. The Sun is one of the most positive cards in the deck, representing abundance, clarity, and the triumph of the human spirit. The child on the white horse represents innocence, purity, and the joy of living in the present moment. The Sun card appears when we have emerged from a period of darkness and are ready to step into the full light of consciousness.",
      meaning: "This is a time of immense joy, success, and clarity. The storms have passed, and you are entering a period of pure radiance. Celebrate your achievements, bask in the warmth of the universe, and let your inner child play. You are radiant. The Sun asks you to embrace the present moment with all of your heart. You have worked hard, and you deserve to enjoy the fruits of your labor. Do not let the weight of the past or the anxiety of the future steal your joy. Today is a day for celebration, for gratitude, and for simply allowing yourself to be happy. You are shining."
    },
    {
      id: 20,
      name: "Judgement",
      image: "/tarot-cards/20-Judgement.jpg",
      shortDesc: "Reflection, Rebirth, Awakening.",
      story: "The angel Gabriel blows his trumpet, summoning the dead to rise and face their lives. It represents the moment of profound realization and awakening. The Judgement card is not about punishment; it is about awakening. It appears when we are being called to rise above our old selves and step into a new, higher level of consciousness. The trumpet represents the call of the universe, urging us to take an honest look at our lives and to make the changes that are necessary for our spiritual growth.",
      meaning: "You are being called to reflect deeply on your life and the choices you have made. This is a moment of spiritual awakening and rebirth. Assess your past with honesty, learn from your experiences, and step into your new, awakened self. The Judgement card asks you to take ownership of your past without shame. You are not being judged by an external force; you are being called to judge yourself with honesty and compassion. What patterns have been holding you back? What are you ready to let go of? The answers are within you. This is your moment of rebirth."
    },
    {
      id: 21,
      name: "The World",
      image: "/tarot-cards/21-TheWorld.jpg",
      shortDesc: "Completion, Integration, Fulfillment.",
      story: "A woman dances within a wreath, surrounded by the four cornerstones of the universe. She represents the ultimate fulfillment of the soul's journey. The World is the final card of the Major Arcana, representing the completion of a long journey and the integration of all the lessons learned along the way. The woman dances with joy, surrounded by the symbols of the four elements—earth, air, fire, and water—representing the balance and harmony that comes from spiritual completion. The World card signifies a moment of profound fulfillment and the beginning of a new cycle.",
      meaning: "A major cycle in your life is coming to a beautiful, fulfilling completion. You have integrated the lessons of your journey, and you are now ready to reap the rewards of your hard work. Celebrate your success—you have reached a milestone. A new cycle is about to begin. The World represents wholeness, integration, and the feeling of being exactly where you are supposed to be. You have completed a chapter of your life, and you have done so with grace and resilience. Take a moment to appreciate how far you have come. The universe is celebrating your journey. You are whole, you are complete, and you are ready for the next adventure."
    },

    // ================= SUIT OF CUPS (WATER) - 14 =================
    {
      id: 22,
      name: "Ace of Cups",
      image: "/tarot-cards/Cups01.jpg",
      shortDesc: "Emotional Awakening, Love, Compassion.",
      story: "The Ace of Cups represents the overflowing wellspring of divine love. Water pours from the cup, symbolizing the unconditional love that flows from the heart of the universe into your soul. This card signifies a new beginning in the emotional realm—a new relationship, a renewed sense of self-love, or a deep spiritual awakening. The Ace of Cups is a gift from the divine, offering you a fresh start in matters of the heart.",
      meaning: "A new wave of emotional depth and love is entering your life. Whether this is a new relationship, a rekindling of an old one, or a newfound love for yourself, your heart is opening. Allow yourself to feel deeply and trust that the universe is guiding you toward emotional fulfillment. The Ace of Cups is a reminder that you are worthy of love. You do not have to earn it; it is already flowing to you. Open your heart to receive it, and let it heal the parts of you that have been closed off. You are surrounded by divine compassion."
    },
    {
      id: 23,
      name: "Two of Cups",
      image: "/tarot-cards/Cups02.jpg",
      shortDesc: "Partnership, Connection, Harmony.",
      story: "Two figures exchange cups beneath the caduceus, symbolizing the sacred union of two souls. They represent the balance, trust, and mutual respect that forms the foundation of any meaningful relationship. The Two of Cups is a card of deep emotional connection, whether romantic, platonic, or even professional. It represents a partnership that is built on shared values, mutual understanding, and a deep sense of emotional safety.",
      meaning: "A powerful partnership is forming in your life. Whether it is romantic, platonic, or professional, this connection is built on mutual respect and deep emotional understanding. Nurture this bond, as it is a reflection of the love the universe holds for you. The Two of Cups invites you to open your heart to another person. Trust that this connection is not an accident—it is part of your spiritual journey. Communicate honestly, listen deeply, and celebrate the joy of finding a kindred spirit."
    },
    {
      id: 24,
      name: "Three of Cups",
      image: "/tarot-cards/Cups03.jpg",
      shortDesc: "Celebration, Friendship, Joy.",
      story: "Three figures raise their cups in a toast of celebration. They represent the deep bonds of friendship, community, and the simple joy of sharing life's victories with those you love. The Three of Cups is a reminder that we are not meant to walk the spiritual path alone. We need friends, mentors, and community to support us along the way. This card celebrates the beauty of human connection and the joy that comes from sharing our success with others.",
      meaning: "This is a time for celebration! Whether you have achieved a long-sought goal or simply wish to connect with cherished friends, the universe is urging you to partake in the joy of community. Share your joy with others and let them celebrate your success. The Three of Cups reminds you that you do not have to face your journey alone. Reach out to your friends, your family, or your spiritual community. Connection is medicine for the soul. Celebrate your life, your growth, and your accomplishments with the people who love you."
    },
    {
      id: 25,
      name: "Four of Cups",
      image: "/tarot-cards/Cups04.jpg",
      shortDesc: "Apathy, Contemplation, Missed Opportunities.",
      story: "A figure sits beneath a tree, arms crossed, ignoring the cup being offered by a hand from the clouds. He represents the state of being so absorbed in our own discontent that we miss the blessings being offered to us. The Four of Cups appears when we are feeling emotionally stagnant, bored, or disconnected from the world. It is a warning that we may be missing an opportunity because we are too focused on what we lack.",
      meaning: "You are being presented with an opportunity that may be passing you by because you are too focused on what you lack. Open your eyes to the blessings around you. There is a gift waiting for you, but you must be willing to look up and receive it. The Four of Cups asks you to shift your perspective. Instead of focusing on what is going wrong, take a moment to count your blessings. The universe is offering you something beautiful, but you must be open to receiving it. Don't let apathy or boredom close your heart to the gifts that are waiting for you."
    },
    {
      id: 26,
      name: "Five of Cups",
      image: "/tarot-cards/Cups05.jpg",
      shortDesc: "Grief, Loss, Moving Forward.",
      story: "A figure cloaked in black stares at three overturned cups, ignoring the two upright cups behind them. The card represents the pain of loss and the difficulty of finding hope in the midst of sorrow. The Five of Cups is a card of profound emotional pain, but it is also a card of resilience. The figure is so consumed by the loss of the three cups that he fails to see the two cups that remain standing behind him. The card reminds us that even in our darkest moments, there is still hope if we are willing to turn around and look for it.",
      meaning: "You are experiencing a loss that has left you feeling deeply saddened. It is important to honor your grief, but do not allow it to consume you. Look behind you—there are still blessings remaining. Although you cannot change the past, the future still holds potential for healing and joy. The Five of Cups gives you permission to grieve, but it also asks you to remember that you are not abandoned. There is still love, still opportunity, and still hope in your life. When you are ready, turn around. There are still blessings waiting for you."
    },
    {
      id: 27,
      name: "Six of Cups",
      image: "/tarot-cards/Cups06.jpg",
      shortDesc: "Nostalgia, Childhood, Innocence.",
      story: "A figure in a garden offers a cup full of flowers to a younger child. The scene evokes a sense of nostalgia, innocence, and the pure, uncomplicated love of childhood. The Six of Cups is a card of memory and emotional healing. It invites us to revisit the past—not to get stuck there, but to heal old wounds and reconnect with the pure joy that we experienced as children. The card reminds us that the child we once were still lives within us, and they hold the key to our healing.",
      meaning: "The past is calling to you. This may be a time to reconnect with childhood memories, old friends, or the innocent joy you once possessed. Revisit the simple pleasures that once brought you happiness, and allow them to heal your present. The Six of Cups asks you to heal old wounds by reconnecting with the parts of yourself that were joyful, curious, and unburdened. Spend time with family, revisit a childhood hobby, or simply allow yourself to play. Your inner child is waiting to be seen and heard."
    },
    {
      id: 28,
      name: "Seven of Cups",
      image: "/tarot-cards/Cups07.jpg",
      shortDesc: "Choices, Illusions, Temptation.",
      story: "A figure stands before seven cups, each containing a different tempting illusion. The card represents the overwhelming number of choices that can distract us from our true path. The Seven of Cups is a card of illusion and temptation. The figure is presented with seven options, each representing a different desire, dream, or fear. But not all of these options are real—some are illusions that will lead nowhere. The card urges us to look beyond the surface and discern what is truly aligned with our higher purpose.",
      meaning: "You are currently faced with many options and possibilities. However, not all of them are real or beneficial. Beware of chasing illusions. Take the time to discern what is truly aligned with your higher purpose, and avoid being seduced by fantasy. The Seven of Cups asks you to slow down and carefully examine each choice before you. Which opportunities are grounded in reality? Which are just wishful thinking? Trust your intuition to guide you toward the path that is truly meant for you."
    },
    {
      id: 29,
      name: "Eight of Cups",
      image: "/tarot-cards/Cups08.jpg",
      shortDesc: "Walking Away, Abandonment, Moving On.",
      story: "A figure turns their back on the eight cups and walks away into the night. They have realized that emotional fulfillment cannot be found in that which no longer serves them. The Eight of Cups represents the courage to walk away from a situation that no longer brings us emotional satisfaction. It is a card of spiritual growth and personal evolution. Walking away is not a sign of failure—it is a sign of wisdom. The figure in the card understands that some doors must be closed so that new, better doors can open.",
      meaning: "You are being called to leave behind a situation, a relationship, or a way of living that no longer brings you emotional fulfillment. It may be painful to walk away, but doing so is necessary for your spiritual growth. Trust that a better path lies ahead. The Eight of Cups asks you to have the courage to let go. Clinging to something that has already run its course will only hold you back. You deserve to find emotional fulfillment, and that requires you to release what no longer serves you."
    },
    {
      id: 30,
      name: "Nine of Cups",
      image: "/tarot-cards/Cups09.jpg",
      shortDesc: "Satisfaction, Emotional Fulfillment.",
      story: "A figure sits in contentment, surrounded by nine cups arranged like a shrine to their happiness. They have achieved emotional satisfaction and are basking in the rewards of their journey. The Nine of Cups is often called the 'wish card' because it represents the fulfillment of a deep, long-held desire. The figure in the card has found what they were looking for, and they are celebrating their emotional satisfaction. This card is a reminder that we are allowed to be happy, and that we deserve to find fulfillment in our lives.",
      meaning: "You have reached a state of deep emotional satisfaction. Your heart is full, and your wishes are being granted. Take a moment to acknowledge and appreciate the abundance you have created. You are worthy of this joy. The Nine of Cups asks you to savor this moment of happiness. You have worked hard, and you deserve to enjoy the fruits of your emotional labor. Celebrate your achievements, count your blessings, and allow yourself to feel deeply satisfied with where you are in life."
    },
    {
      id: 31,
      name: "Ten of Cups",
      image: "/tarot-cards/Cups10.jpg",
      shortDesc: "Emotional Fulfillment, Family, Harmony.",
      story: "A family stands together beneath a rainbow, their arms raised in joy. They represent the ultimate emotional fulfillment that comes from deep, harmonious relationships. The Ten of Cups is the card of emotional prosperity and domestic bliss. It represents the fulfillment that comes from deep, harmonious relationships with family, friends, and community. The rainbow symbolizes the peace that follows the storm, and the family represents the joy of connection. This card appears when we have found our tribe and are living in alignment with our emotional truth.",
      meaning: "You are experiencing a profound sense of emotional fulfillment and harmony. This card often represents a coming together of family, a deepening of bonds, or the achievement of a long-cherished emotional goal. You are surrounded by love. Treasure this moment. The Ten of Cups asks you to express your gratitude for the people in your life. Take time to connect with your family, both blood relatives and the family you have chosen. The love you are experiencing is real, and it is a reflection of the love the universe holds for you. Nurture these relationships, and they will continue to bring you joy."
    },
    {
      id: 32,
      name: "Page of Cups",
      image: "/tarot-cards/Cups11.jpg",
      shortDesc: "Creative Inspiration, New Feelings.",
      story: "A young figure holds a cup, a fish peering out from it. They represent the bearer of new emotional or creative messages, brimming with potential and curiosity. The Page of Cups is the messenger of the heart. They bring news of new feelings, creative inspiration, or an emotional awakening. The fish in the cup represents the depths of the subconscious emerging into consciousness. This card often appears when we are feeling a new emotional stirring, an unexpected crush, or a sudden urge to express ourselves creatively.",
      meaning: "A new feeling or creative inspiration is entering your life. This may be an unexpected crush, a sudden burst of artistic expression, or a gentle intuitive nudge. Embrace this new energy and allow it to guide your emotions. The Page of Cups invites you to be curious about your feelings. Don't judge them; just observe them. This new energy is a gift from the universe, and it is asking you to explore your emotional depth with the curiosity of a child. Write, paint, sing, or simply allow yourself to feel deeply. There is magic in your heart right now."
    },
    {
      id: 33,
      name: "Knight of Cups",
      image: "/tarot-cards/Cups12.jpg",
      shortDesc: "Romance, Chivalry, Emotional Pursuit.",
      story: "A knight in armor rides a gentle horse, holding out a cup. He is the romantic hero on a quest to express his deepest emotions. The Knight of Cups is the card of romance, artistic inspiration, and the pursuit of emotional fulfillment. He represents the courage to express our deepest feelings and the willingness to go on a quest for love and connection. The Knight of Cups is not afraid to be vulnerable; he wears his heart on his sleeve and is willing to take risks for the sake of love.",
      meaning: "A romantic gesture or an emotional offering is on its way to you. Someone may be coming forward to express their feelings for you, or you may be called to be brave and speak from your heart. Allow yourself to be swept away by the sincerity of the moment. The Knight of Cups asks you to be bold in your expression of love. Whether you are pursuing a new relationship or deepening an existing one, do not be afraid to be vulnerable. True romance requires courage. Trust that the universe is supporting you in your emotional journey."
    },
    {
      id: 34,
      name: "Queen of Cups",
      image: "/tarot-cards/Cups13.jpg",
      shortDesc: "Emotional Wisdom, Intuition, Compassion.",
      story: "The Queen of Cups sits on her throne, holding a beautiful cup. Her gaze is deep and empathetic. She is the embodiment of emotional maturity, compassion, and intuitive wisdom. The Queen of Cups is the archetype of the nurturing mother, the compassionate listener, and the wise empath. She does not judge; she simply holds space for others to feel. The Queen of Cups reminds us that emotional intelligence is one of the most powerful gifts we possess. When we lead with our hearts, we become a source of healing for ourselves and others.",
      meaning: "You are being called to lead with your heart. Your emotional intelligence and intuitive abilities are at their peak. Trust your feelings, offer compassion to those around you, and nurture yourself with the same love you give to others. The Queen of Cups asks you to trust your intuition and to listen with empathy. You have the ability to hold space for others without taking on their pain. Offer compassion, but also protect your energy. You are a natural healer, and your presence is a gift to those who need it."
    },
    {
      id: 35,
      name: "King of Cups",
      image: "/tarot-cards/Cups14.jpg",
      shortDesc: "Emotional Mastery, Diplomacy, Authority.",
      story: "The King of Cups sits upon his throne, holding a cup. He is the master of his emotions, channeling his deep feelings into wisdom, stability, and balanced leadership. The King of Cups is the archetype of the mature leader who leads with emotional intelligence and diplomacy. He does not suppress his emotions; he masters them. The King of Cups represents the ability to navigate complex emotional situations with grace and authority. He is a diplomat, a peacemaker, and a leader who inspires trust through his emotional stability.",
      meaning: "You are being called to master your emotions and lead with compassion and diplomacy. The ability to balance empathy with strength is your greatest asset right now. Use your emotional intelligence to navigate complex situations and bring harmony to your sphere of influence. The King of Cups asks you to lead with your heart, but also to maintain your boundaries. You can be both compassionate and authoritative. Your ability to hold both softness and strength is what makes you a natural leader. Trust in your emotional wisdom."
    },

    // ================= SUIT OF PENTACLES (EARTH) - 14 =================
    {
      id: 36,
      name: "Ace of Pentacles",
      image: "/tarot-cards/Pentacles01.jpg",
      shortDesc: "New Prosperity, Abundance, Potential.",
      story: "A hand emerges from the clouds, offering a single, glowing pentacle. The Ace of Pentacles symbolizes a new beginning in the physical realm—money, career, or health. It represents the seed of material prosperity, an offer of abundance that is grounded in reality. This card signifies a new opportunity for financial growth, a new job, or a new venture that has the potential to bring lasting prosperity. The hand from the clouds represents the generosity of the universe, offering you a gift that is yours to nurture and grow.",
      meaning: "A new opportunity for material or financial prosperity is presenting itself. This could be a new job, a promotion, a real estate deal, or a fruitful investment. The universe is offering you a chance to build lasting wealth and stability. Take this opportunity seriously and nurture it from the ground up. The Ace of Pentacles asks you to treat this new opportunity with care. This is not a get-rich-quick scheme—it is a seed that requires patience, hard work, and dedication. If you plant it well, it will grow into something that provides for you and your loved ones for years to come."
    },
    {
      id: 37,
      name: "Two of Pentacles",
      image: "/tarot-cards/Pentacles02.jpg",
      shortDesc: "Balance, Adaptability, Flexibility.",
      story: "A figure juggles two pentacles, a ship tossing on the waves behind them. This represents the delicate balance between managing multiple resources and responsibilities. The Two of Pentacles is the card of adaptability and flexibility. The figure is juggling two pentacles, representing the challenge of balancing work and life, money and relationships, or multiple projects at once. The ship on the waves represents the chaos of life, but the figure remains focused and balanced, undeterred by the storm.",
      meaning: "You are currently navigating multiple commitments or sources of income. The key to success right now is balance and adaptability. You must learn to juggle your responsibilities without dropping any. Stay flexible, keep your priorities straight, and you will maintain equilibrium. The Two of Pentacles asks you to stay calm and centered amidst the chaos. You have the ability to handle multiple things at once, but you must be careful not to overextend yourself. Prioritize what matters most, and trust that you can find a balance that works for you."
    },
    {
      id: 38,
      name: "Three of Pentacles",
      image: "/tarot-cards/Pentacles03.jpg",
      shortDesc: "Collaboration, Teamwork, Skill.",
      story: "A stonemason works on a cathedral, while a monk and an architect discuss the plans. This card represents the power of collaborative effort and skilled craftsmanship. The Three of Pentacles is a card of collaboration, teamwork, and the mastery of one's craft. The stonemason represents the skilled worker, while the monk and architect represent the visionary and the planner. Together, they are building something far greater than any one of them could build alone. This card reminds us that we cannot achieve greatness in isolation.",
      meaning: "You are being called to collaborate with others who bring specialized skills to the table. Your current project or goal requires a team effort. Don't try to do everything alone. Embrace the unique talents of your team members, and you will build something far greater than you could on your own. The Three of Pentacles asks you to seek out people who complement your skills. Whether you are building a business, a community project, or a creative endeavor, the right team will make all the difference. Trust the process of collaboration."
    },
    {
      id: 39,
      name: "Four of Pentacles",
      image: "/tarot-cards/Pentacles04.jpg",
      shortDesc: "Security, Hoarding, Control.",
      story: "A figure holds a pentacle close to his body, while others sit beneath his feet. The Four of Pentacles represents the desire for security and the tendency to cling tightly to what we have. This card is a reminder that while it is wise to safeguard your resources, hoarding them out of fear can stifle your growth. The figure in the card is holding onto his wealth so tightly that he cannot open his hands to receive more. The Four of Pentacles appears when we are afraid of losing what we have, and that fear is preventing us from welcoming new abundance into our lives.",
      meaning: "You are in a phase of focusing on material security and financial stability. While it is wise to safeguard your resources, be cautious not to let your fear of loss turn into hoarding or possessiveness. Trust that the universe will provide, and allow yourself to enjoy the security you have built. The Four of Pentacles asks you to examine your relationship with money and possessions. Are you holding on too tightly? Are you afraid of losing what you have? Open your hands just a little bit, and allow the universe to give you more."
    },
    {
      id: 40,
      name: "Five of Pentacles",
      image: "/tarot-cards/Pentacles05.jpg",
      shortDesc: "Hardship, Financial Loss, Isolation.",
      story: "Two figures walk through the snow, passing by a brightly lit church window. The Five of Pentacles represents times of poverty, hardship, and feeling left out in the cold. This card is one of the most difficult cards in the deck, representing material loss, financial hardship, and emotional isolation. However, it also carries a message of hope: the light of the church window represents the help and support that is available to us, even when we feel abandoned. The figures in the snow are so focused on their struggle that they do not notice the warm, welcoming light just a few feet away.",
      meaning: "You may be going through a period of financial struggle or feeling isolated and abandoned. It is important to remember that help is often available, even if it seems out of reach. Reach out to trusted friends, family, or support systems. The light is not far away. The Five of Pentacles asks you to look for the help that is available to you. You are not as alone as you feel. Reach out, ask for help, and trust that the universe will provide for you. This dark period will not last forever."
    },
    {
      id: 41,
      name: "Six of Pentacles",
      image: "/tarot-cards/Pentacles06.jpg",
      shortDesc: "Generosity, Giving, Charitable Actions.",
      story: "A wealthy merchant holds a scale in one hand and offers coins to the needy. The Six of Pentacles represents the flow of abundance when we give and receive graciously. This card reminds us that true prosperity is not just about accumulating wealth—it is about creating a cycle of giving and receiving. The wealthy merchant does not hoard his resources; he shares them with those in need, and in doing so, he opens the flow of abundance in his own life. This card appears when we are called to be generous with our time, money, or energy.",
      meaning: "You are entering a time of giving and receiving. The universe is asking you to share your resources, time, and energy with those in need. By being generous with others, you will open the flow of abundance in your own life. Practice charity, not just with money, but with kindness, attention, and compassion. The Six of Pentacles asks you to be a channel for abundance. When you give freely, you open the door for the universe to give back to you. Generosity is not just a virtue—it is a law of the universe."
    },
    {
      id: 42,
      name: "Seven of Pentacles",
      image: "/tarot-cards/Pentacles07.jpg",
      shortDesc: "Patience, Evaluation, Hard Work.",
      story: "A farmer pauses to look at his crop, leaning on his hoe. He represents the patience required to wait for long-term results after sowing the seeds of hard work. The Seven of Pentacles is the card of patience, evaluation, and the rewards of long-term effort. The farmer has planted his seeds, and now he must wait for them to grow. He pauses to evaluate his progress and to trust that his hard work will eventually bear fruit. This card reminds us that some goals require patience and that the rewards of our effort are not always immediately visible.",
      meaning: "You have put in the hard work, and now you must be patient. The rewards of your labor are not yet visible, but they are growing. This is a time for reflection and evaluation. Check your progress and trust that your efforts will eventually bear fruit. Don't give up just because you can't see the results yet. The Seven of Pentacles asks you to trust the slow work of growth. You have done your part. Now, it is time to trust the process. The harvest is coming, but you must be willing to wait for it."
    },
    {
      id: 43,
      name: "Eight of Pentacles",
      image: "/tarot-cards/Pentacles08.jpg",
      shortDesc: "Diligence, Mastery, Focused Effort.",
      story: "A craftsman works diligently on a set of pentacles, absorbed in his craft. This card represents the dedication and mastery that comes from repetitive, focused effort. The Eight of Pentacles is the card of the apprentice and the master. The craftsman is completely absorbed in his work, honing his skills and perfecting his craft. This card reminds us that true mastery does not come from talent alone—it comes from dedication, repetition, and the willingness to put in the hours required to become exceptional.",
      meaning: "You are in a phase of deep focus and skill-building. Whether you are learning a new trade, perfecting a craft, or studying a subject with intense dedication, your hard work is leading to mastery. Keep applying yourself, and you will become an expert. The universe rewards focused effort. The Eight of Pentacles asks you to embrace the discipline of learning. Every hour you spend honing your skills is an investment in your future. Soon, your hard work will pay off, and you will be recognized as a master in your field."
    },
    {
      id: 44,
      name: "Nine of Pentacles",
      image: "/tarot-cards/Pentacles09.jpg",
      shortDesc: "Self-Sufficiency, Luxury, Independence.",
      story: "A woman stands in a lush vineyard, surrounded by the fruits of her labor. She is self-sufficient, independent, and enjoying the material rewards of her hard work. The Nine of Pentacles is the card of self-sufficiency, luxury, and independence. The woman in the card has built her wealth through her own effort, and she is now enjoying the fruits of her labor. She does not need anyone else to support her; she stands on her own two feet, confident and secure. This card represents the joy of achieving financial and personal independence.",
      meaning: "You have reached a level of self-sufficiency and independence that allows you to enjoy the finer things in life. You have worked hard to build your security, and you deserve to enjoy it. This is a time of luxury, material abundance, and inner confidence. You are standing on your own two feet, and you are thriving. The Nine of Pentacles asks you to celebrate your independence. You have built a life that you are proud of. Treat yourself to something beautiful, take a vacation, or simply enjoy the peace that comes from knowing that you are secure."
    },
    {
      id: 45,
      name: "Ten of Pentacles",
      image: "/tarot-cards/Pentacles10.jpg",
      shortDesc: "Wealth, Legacy, Long-Term Security.",
      story: "A family sits in comfort, surrounded by wealth and abundance. The Ten of Pentacles represents the enduring prosperity that is passed down through generations. This card is about more than just financial wealth—it is about legacy, family, and the long-term security that comes from building a strong foundation. The Ten of Pentacles appears when we have not only achieved material success, but we have also created a legacy that will benefit our family and community for generations to come.",
      meaning: "You are not just securing wealth for yourself; you are building a lasting legacy that will benefit your family and community for generations. This is the card of long-term financial security, family prosperity, and the fulfillment of your material dreams. You have built a strong foundation that will stand the test of time. The Ten of Pentacles asks you to think beyond your own lifetime. How can you use your wealth and resources to create a better future for your children and your community? Your legacy is your gift to the world."
    },
    {
      id: 46,
      name: "Page of Pentacles",
      image: "/tarot-cards/Pentacles11.jpg",
      shortDesc: "Curiosity, Learning, Practical Opportunity.",
      story: "A young figure holds a pentacle, looking at it with deep fascination. The Page of Pentacles represents the beginning of a new practical endeavor or the desire to learn about material matters. The Page is the student, the apprentice, the curious explorer who is eager to learn how the material world works. This card appears when we are being presented with an opportunity to learn a new skill, start a new business, or explore a new career path. The Page invites us to approach this opportunity with curiosity and a willingness to learn.",
      meaning: "A new opportunity to learn, study, or develop your skills in the practical realm is presenting itself. This could be a new job offer, an investment idea, or a chance to deepen your expertise. Approach this with the curiosity of a student, and you will learn valuable lessons that will lead to prosperity. The Page of Pentacles asks you to embrace the beginner's mind. Even if you are not an expert yet, your willingness to learn will open doors for you. Stay curious, ask questions, and be open to new possibilities."
    },
    {
      id: 47,
      name: "Knight of Pentacles",
      image: "/tarot-cards/Pentacles12.jpg",
      shortDesc: "Hard Work, Diligence, Persistence.",
      story: "A knight sits still on his horse, holding a single pentacle. He represents the slow, steady, and persistent effort required to achieve long-term material goals. The Knight of Pentacles is the card of hard work, diligence, and persistence. He is not the flashiest knight in the deck, but he is the most reliable. He knows that lasting success requires patience, consistency, and an unwavering commitment to the task at hand. The Knight of Pentacles does not cut corners; he does the work, day in and day out, until the job is done.",
      meaning: "Your approach to your material goals must be slow, steady, and persistent. There are no shortcuts to lasting wealth and stability. Work diligently, stay committed to your plan, and trust that your consistent effort will eventually yield the results you desire. Patience is your ally. The Knight of Pentacles asks you to stay the course. Don't get discouraged if you don't see immediate results. Keep moving forward, one step at a time. Your persistence will be rewarded."
    },
    {
      id: 48,
      name: "Queen of Pentacles",
      image: "/tarot-cards/Pentacles13.jpg",
      shortDesc: "Nurturing, Practicality, Generosity.",
      story: "The Queen of Pentacles sits on her throne, holding her pentacle with a gentle and nurturing gaze. She represents the balance of practicality, generosity, and earth-bound wisdom. The Queen of Pentacles is the archetype of the nurturing provider. She knows how to manage resources wisely, and she uses her abundance to care for others. The Queen of Pentacles reminds us that true wealth is not just about accumulating money—it is about using our resources to create a nurturing, supportive environment for ourselves and those we love.",
      meaning: "You are being called to embody the energy of the Queen of Pentacles: nurturing, practical, and deeply grounded. Create a home or workspace that feels nurturing, manage your resources wisely, and share your generosity with those around you. Your practicality is a gift. The Queen of Pentacles asks you to take care of your physical and material needs so that you can take care of others. You cannot pour from an empty cup. First, nurture yourself, and then extend that nurturing energy to those around you."
    },
    {
      id: 49,
      name: "King of Pentacles",
      image: "/tarot-cards/Pentacles14.jpg",
      shortDesc: "Abundance, Authority, Earthly Success.",
      story: "The King of Pentacles sits securely on his throne, his robe draped in the bounty of the earth. He represents the ultimate mastery of the material world. The King of Pentacles is the archetype of the successful entrepreneur, the wise investor, and the generous benefactor. He has achieved a level of mastery in the material world that allows him to provide for himself and others. The King of Pentacles reminds us that wealth is not something to be ashamed of—it is a tool that can be used to create positive change in the world.",
      meaning: "You have reached a level of mastery in the material world. Your financial acumen, business sense, and ability to manifest abundance are at their peak. You are in a position of great authority and influence. Use your power wisely, generously, and with the intention of lifting others up. The King of Pentacles asks you to be a steward of your wealth. You have the power to create positive change in your community and in the world. Use your resources not just for your own benefit, but for the benefit of all."
    },

    // ================= SUIT OF SWORDS (AIR) - 14 =================
    {
      id: 50,
      name: "Ace of Swords",
      image: "/tarot-cards/Swords01.jpg",
      shortDesc: "Clarity, Truth, New Ideas.",
      story: "A hand emerges from the clouds, gripping a single, gleaming sword. The Ace of Swords represents the power of clarity, truth, and the sharpness of a new idea. The sword cuts through illusions and reveals the truth that lies beneath the surface. The Ace of Swords represents a breakthrough in understanding, a moment of profound clarity, or a new idea that will change the way you see the world.",
      meaning: "A breakthrough is on the horizon. You are about to experience a moment of profound clarity and truth. A new idea, a sudden realization, or an honest conversation will cut through the fog and reveal what you need to know. Embrace this clarity and act on the truth it reveals. The Ace of Swords asks you to cut through the noise and get to the heart of the matter. You have been avoiding a truth for too long. It is time to face it head-on. When you do, you will find liberation."
    },
    {
      id: 51,
      name: "Two of Swords",
      image: "/tarot-cards/Swords02.jpg",
      shortDesc: "Stalemate, Avoidance, Indecision.",
      story: "A blindfolded figure sits with two swords crossed over their chest. The card represents a state of impasse, where you are avoiding a difficult truth or refusing to make a choice. The Two of Swords appears when we are stuck in a state of indecision. We are avoiding a difficult conversation or a tough choice because we are afraid of the outcome. The swords crossed over the chest symbolize the emotional armor we use to protect ourselves from the truth. But this armor is also a prison.",
      meaning: "You are in a state of indecision, avoiding a difficult conversation or a tough choice. The longer you delay, the more tension builds. The universe is urging you to remove your blindfold, face the situation with clarity, and make a decision so you can move forward. The Two of Swords asks you to be honest with yourself about what you are avoiding. The fear of making the wrong choice is keeping you stuck. The truth is, there is no wrong choice—only the choice to stay stuck or the choice to move forward."
    },
    {
      id: 52,
      name: "Three of Swords",
      image: "/tarot-cards/Swords03.jpg",
      shortDesc: "Heartbreak, Grief, Emotional Pain.",
      story: "Three swords pierce a heart, surrounded by a stormy sky. This is one of the most painful cards in the deck, representing heartbreak, betrayal, and emotional suffering. The Three of Swords represents the pain of a shattered heart, the grief of a loss, or the betrayal of a trusted relationship. The stormy sky in the background represents the emotional turmoil that accompanies heartbreak. This card does not hold back; it shows us the raw reality of emotional pain. But it also reminds us that the storm will eventually pass.",
      meaning: "You are experiencing a deep emotional wound or heartbreak. This pain is real, and it is okay to grieve. Allow yourself to feel the sorrow, but remember that this too shall pass. You will heal, and your heart will grow stronger for having known this depth of feeling. The Three of Swords gives you permission to feel your pain fully. Do not suppress your grief. Let it flow through you, and know that you are not alone. The universe is holding space for your sorrow. Healing will come in its own time."
    },
    {
      id: 53,
      name: "Four of Swords",
      image: "/tarot-cards/Swords04.jpg",
      shortDesc: "Rest, Recovery, Contemplation.",
      story: "A figure lies in repose within a church, three swords hanging above them. This card represents the essential need for rest and recovery after a period of struggle. The Four of Swords is the card of rest, recovery, and contemplation. The figure in the card is not dead; they are resting. They have retreated from the world to heal their body, mind, and spirit. The three swords above them represent the challenges they have faced, but they are no longer fighting. They are allowing themselves the time they need to recover.",
      meaning: "You have been through a battle, and now is the time to rest and recover. The universe is calling you to step away from the chaos and take a much-needed break. Do not feel guilty about resting. Your mind and body need this time to heal. The Four of Swords asks you to prioritize your health and well-being. You cannot pour from an empty cup. Take a few days off, get extra sleep, and allow yourself to do nothing. This is not laziness—this is medicine."
    },
    {
      id: 54,
      name: "Five of Swords",
      image: "/tarot-cards/Swords05.jpg",
      shortDesc: "Conflict, Defeat, Unresolved Tension.",
      story: "A figure holds swords in a gesture of victory, while others walk away in defeat. The Five of Swords represents a hollow victory—winning the battle but losing the peace. The figure in the card has won the conflict, but at a great cost. The others who walk away in defeat represent the relationships, trust, and goodwill that have been sacrificed in the pursuit of victory. This card reminds us that winning at all costs is not true victory. True victory includes preserving the peace and maintaining healthy relationships.",
      meaning: "You may have won an argument or a conflict, but the cost was high. The tension and resentment left behind are not worth the victory. Take a step back and consider if winning is truly the most important thing. Sometimes, choosing peace over being right is the wiser path. The Five of Swords asks you to examine your motives. Were you fighting to win, or were you fighting to understand? Let go of the need to be right, and focus on finding common ground."
    },
    {
      id: 55,
      name: "Six of Swords",
      image: "/tarot-cards/Swords06.jpg",
      shortDesc: "Transition, Healing, Moving On.",
      story: "A figure guides a boat across calm waters, carrying swords and passengers. This is the card of transition—leaving behind the turmoil and moving toward a place of peace. The Six of Swords represents a journey, both physical and emotional. The figure in the boat is leaving behind a turbulent past and traveling toward calmer waters. The swords in the boat represent the baggage they are carrying, but the water is calm, and the journey is guided. This card is a reminder that we can leave our past behind and move forward into a future of healing and peace.",
      meaning: "You are moving from a period of turmoil into a phase of healing and peace. You are leaving behind the struggles of the past and traveling toward calmer waters. Trust that this journey is guided and necessary for your growth. You are safe. The Six of Swords asks you to let go of the past and look forward to the future. Healing is not a destination; it is a journey. You are on the right path, and the waters ahead are calm. Trust the guidance of the universe, and know that you are being led to a place of peace."
    },
    {
      id: 56,
      name: "Seven of Swords",
      image: "/tarot-cards/Swords07.jpg",
      shortDesc: "Deception, Strategy, Hidden Agenda.",
      story: "A figure sneaks away with five swords, leaving two behind. This card represents deception, hidden motives, and the need to be vigilant of others' agendas. The Seven of Swords is a card of strategy, cunning, and sometimes deception. The figure in the card is sneaking away with swords that do not belong to them. They may be acting out of self-preservation, or they may have ulterior motives. This card invites us to be aware of our surroundings and to trust our instincts when something feels off.",
      meaning: "You may be dealing with someone who is not being completely honest, or perhaps you are avoiding a truth yourself. The universe is cautioning you to be aware of your surroundings and to trust your instincts. If something feels off, it probably is. Investigate before you commit to any plans. The Seven of Swords asks you to look beneath the surface. What is not being said? What is hidden? Trust your intuition, and proceed with caution."
    },
    {
      id: 57,
      name: "Eight of Swords",
      image: "/tarot-cards/Swords08.jpg",
      shortDesc: "Self-Imposed Imprisonment, Anxiety.",
      story: "A bound figure stands surrounded by swords, blindfolded. The Eight of Swords represents the feeling of being trapped, but the bindings are self-imposed. The figure in the card is bound by ropes and surrounded by swords, but a closer look reveals that the bindings are not tight—they could easily break free if they chose to. The swords around them represent the perceived threats that may not be as threatening as they appear. The Eight of Swords is a card of anxiety and self-imposed imprisonment, reminding us that we often imprison ourselves with our own fears.",
      meaning: "You feel trapped, anxious, and unsure of how to escape your current situation. However, the truth is that you are not as helpless as you believe. The bonds are of your own making. Recognize that you have the power to remove the blindfold and free yourself. The solution is within you. The Eight of Swords asks you to take off the blindfold and see the situation for what it really is. Your fears are magnified. You have more control than you realize. Take a deep breath, and step out of your self-imposed prison."
    },
    {
      id: 58,
      name: "Nine of Swords",
      image: "/tarot-cards/Swords09.jpg",
      shortDesc: "Anxiety, Nightmares, Overthinking.",
      story: "A figure sits up in bed, hands covering their face, while swords hang on the wall behind them. The Nine of Swords represents the torment of anxiety and overthinking. The figure in the card is not in physical danger; they are being tormented by their own thoughts. The swords on the wall represent the fears that are keeping them awake at night. The Nine of Swords is a card of mental anguish, reminding us that our mind can be our own worst enemy when we allow anxiety to take over.",
      meaning: "Your mind is your own worst enemy right now. You are trapped in a cycle of overthinking and anxiety, causing you distress. The fears you are facing are largely in your head. Take a deep breath, step away from your thoughts, and find a way to ground yourself in reality. Seek support if you need it. The Nine of Swords asks you to step out of your head and into your body. Your fears are not as real as they feel. Find a way to calm your nervous system, and remember that you are safe."
    },
    {
      id: 59,
      name: "Ten of Swords",
      image: "/tarot-cards/Swords10.jpg",
      shortDesc: "Endings, Pain, The Bottom.",
      story: "A figure lies on the ground, pierced by ten swords. The sky is dark, but a golden light shines on the horizon. This is the card of hitting rock bottom, but it is also a sign that the end is near. The Ten of Swords represents the moment when we feel we cannot go any lower. The pain is overwhelming, and the situation seems hopeless. But the golden light on the horizon is a reminder that even in our darkest moments, dawn is approaching. This is the end of a cycle, and healing is on its way.",
      meaning: "You have hit rock bottom. The pain and suffering you are experiencing are reaching their peak. While this moment is incredibly difficult, it is also a turning point. There is nowhere to go but up. The darkness is a prelude to a new dawn. This is the end of a cycle, and healing is on its way. The Ten of Swords asks you to surrender to the moment. You cannot change what has happened, but you can choose how you respond to it. This is the moment of your rebirth. Let go of the old, and prepare to rise from the ashes."
    },
    {
      id: 60,
      name: "Page of Swords",
      image: "/tarot-cards/Swords11.jpg",
      shortDesc: "Curiosity, New Ideas, Communication.",
      story: "A young figure holds a sword, alert and ready to investigate. The Page of Swords is the bearer of new ideas and the spirit of inquisitive communication. The Page is curious, eager to learn, and unafraid to ask questions. They represent the flow of new information and the courage to speak our truth. The Page of Swords appears when we are being called to investigate, to learn, and to communicate with clarity and courage.",
      meaning: "A new idea or piece of information is coming your way. You may be feeling a strong urge to investigate, communicate, or express your thoughts. Be open to receiving messages from the universe, and don't be afraid to ask questions. Your curiosity will lead you to the truth. The Page of Swords asks you to be a seeker of truth. Do not settle for surface-level answers. Dig deeper, ask questions, and stay curious. The answers you are looking for are out there, waiting to be discovered."
    },
    {
      id: 61,
      name: "Knight of Swords",
      image: "/tarot-cards/Swords12.jpg",
      shortDesc: "Action, Speed, Directness.",
      story: "A knight charges forward on his horse, sword raised, moving with unstoppable speed and determination. He represents swift and direct action. The Knight of Swords is the card of quick action, direct communication, and unstoppable forward momentum. The knight does not hesitate; he charges forward with full force. This card represents the energy of taking decisive action, but it also warns us against acting too hastily. The Knight of Swords reminds us that speed and action are powerful forces, but they must be balanced with discernment.",
      meaning: "You are moving forward with great speed and determination. However, your haste may be causing you to overlook important details. Make sure you are charging in the right direction. When you are sure of your target, direct action will lead to success. Beware of impulsiveness. The Knight of Swords asks you to act with conviction, but also with awareness. Check your direction before you sprint. When you are aligned, your speed will be unstoppable."
    },
    {
      id: 62,
      name: "Queen of Swords",
      image: "/tarot-cards/Swords13.jpg",
      shortDesc: "Independence, Intellectual Clarity, Truth.",
      story: "The Queen of Swords sits upright, her sword pointing toward the heavens. She is the master of intellectual clarity, truth, and fierce independence. The Queen of Swords does not suffer fools gladly. She cuts through the noise and speaks her truth with clarity and precision. The Queen of Swords represents the power of intellect, the courage to speak truth to power, and the strength of independence. She reminds us that we do not need to rely on others for our emotional or intellectual well-being—we are whole, complete, and powerful on our own.",
      meaning: "You are being called to cut through the noise and speak your truth with clarity and compassion. Do not shy away from difficult conversations or decisions. Your independence and intellectual strength are your greatest assets right now. Trust in your ability to discern the truth and act upon it. The Queen of Swords asks you to honor your own mind. Do not let others confuse you or sway you from your convictions. You are clear, you are strong, and you are capable of standing on your own."
    },
    {
      id: 63,
      name: "King of Swords",
      image: "/tarot-cards/Swords14.jpg",
      shortDesc: "Authority, Logic, Truth.",
      story: "The King of Swords sits on his throne, holding his sword upright. He represents the highest level of logical and intellectual authority. The King of Swords is the master of the mind. He thinks clearly, acts decisively, and communicates with authority. The King of Swords represents the power of logic, reason, and truth. He does not let emotion cloud his judgment; he relies on facts, evidence, and clear thinking to make decisions.",
      meaning: "You are being asked to take a balanced, logical, and authoritative approach to your current situation. Let go of emotional bias and focus on the facts. Your ability to communicate clearly and make decisions based on reason will guide you through this challenge. Your word is law—use it wisely. The King of Swords asks you to lead with intellect. You are being called to a position of authority, and you must rely on your mind, not your emotions. Trust your logic, and let the facts guide your decisions."
    },

    // ================= SUIT OF WANDS (FIRE) - 14 =================
    {
      id: 64,
      name: "Ace of Wands",
      image: "/tarot-cards/Wands01.jpg",
      shortDesc: "Inspiration, New Energy, Passion.",
      story: "A hand emerges from the clouds, gripping a sprouting wand. The Ace of Wands represents the initial spark of creative or spiritual fire that ignites our passions. The Ace of Wands is the card of new energy, new inspiration, and the fire of creation. It represents the moment when a new idea, a new passion, or a new project is born. This card is pure potential, waiting to be acted upon. The sprouting wand represents growth, vitality, and the power of new beginnings.",
      meaning: "A surge of creative energy and passion is entering your life. A new idea, a new project, or a new career path is calling to you. This is a spark of divine inspiration—do not ignore it. Seize the moment and let this fire fuel your next adventure. The Ace of Wands asks you to embrace the excitement of this new energy. Allow it to inspire you, but do not let it burn you out. Use this passion as fuel for your creative endeavors."
    },
    {
      id: 65,
      name: "Two of Wands",
      image: "/tarot-cards/Wands02.jpg",
      shortDesc: "Planning, Decision, Vision.",
      story: "A figure stands on a castle wall, holding one wand and looking out at the horizon. They represent the planning stage, where we look toward the future and decide which path to take. The Two of Wands is the card of vision and long-term planning. The figure is not just looking at the horizon—they are holding a globe, representing the global vision they are about to act upon. The Two of Wands appears when we are in the decision-making phase of a new project or endeavor. We are weighing our options and considering which path will lead us toward our long-term goals.",
      meaning: "You are in a stage of planning and decision-making. The possibilities are vast, but you must choose a direction. Take the time to consider your long-term goals and trust the vision you hold for your future. Your decision will pave the way for your journey. The Two of Wands asks you to think ahead. You have a vision for your future, and now is the time to commit to it. Trust in your ability to plan, and have faith that your vision will lead you where you want to go."
    },
    {
      id: 66,
      name: "Three of Wands",
      image: "/tarot-cards/Wands03.jpg",
      shortDesc: "Expansion, Vision, Foresight.",
      story: "A figure stands with his back to us, watching his ships sail off into the horizon. He represents looking toward the future with confidence and expanding beyond your current boundaries. The Three of Wands is the card of expansion and foresight. The figure in the card is watching his ships sail off, representing his ability to project his energy, resources, and vision into the future. The Three of Wands appears when we are expanding our horizons, taking risks, and trusting that our vision for the future will become reality.",
      meaning: "Your vision is expanding, and your plans are beginning to bear fruit. The seeds you have planted are growing, and you are now able to look toward the future with a sense of excitement and anticipation. Trust that your long-term plans will lead to expansion and success. The Three of Wands asks you to trust the journey. Even if you cannot see the full picture yet, your ships are sailing toward a destination of your choosing. Keep your eyes on the horizon, and trust the process."
    },
    {
      id: 67,
      name: "Four of Wands",
      image: "/tarot-cards/Wands04.jpg",
      shortDesc: "Celebration, Homecoming, Stability.",
      story: "A joyful group gathers beneath a garland of flowers, celebrating a milestone or a return home. The Four of Wands represents a moment of stability, peace, and communal joy. This is the card of celebration and coming home. The garland of flowers represents the beauty and abundance that comes when we take the time to celebrate our achievements. The Four of Wands appears when we are being called to pause, to mark a significant milestone, and to gather with those we love to celebrate our success.",
      meaning: "You are entering a time of celebration and stability. Whether you are marking a personal achievement, returning to a place of comfort, or simply enjoying a moment of peace with loved ones, this is a time to cherish. You have built a foundation of security and joy. The Four of Wands asks you to celebrate your accomplishments. You have done the work, and now you deserve to enjoy the rewards. Gather with your family and friends, and allow yourself to feel the joy of the moment."
    },
    {
      id: 68,
      name: "Five of Wands",
      image: "/tarot-cards/Wands05.jpg",
      shortDesc: "Conflict, Competition, Struggle.",
      story: "Five figures clash with their wands, engaging in a spirited struggle. The Five of Wands represents the tensions that arise when multiple forces seek dominance. The Five of Wands is not a card of mortal combat; it is a card of playful competition and ego-clashing. The five figures are struggling, but they are not trying to harm each other. They are testing their strength, sharpening their skills, and vying for recognition. This card appears when we are in a conflict that is driven more by pride than by substance.",
      meaning: "You are currently experiencing friction or competition. It may be a clash of egos, a heated debate, or a struggle to assert your position. While conflict can be uncomfortable, it is often necessary to refine your ideas and strengthen your resolve. Stand your ground with integrity. The Five of Wands asks you to engage in the struggle without losing your sense of humor. This conflict is not a war—it is a chance to grow, to sharpen your skills, and to emerge stronger."
    },
    {
      id: 69,
      name: "Six of Wands",
      image: "/tarot-cards/Wands06.jpg",
      shortDesc: "Victory, Public Recognition, Progress.",
      story: "A rider on a white horse, holding a wand adorned with a laurel wreath, receives admiration from a cheering crowd. He represents the triumphant recognition that follows hard-won success. The Six of Wands is the card of victory and public recognition. The rider on the white horse represents the hero who has returned from battle, triumphant and ready to receive their due praise. The laurel wreath symbolizes victory, and the cheering crowd represents the recognition and admiration that comes from achieving something significant.",
      meaning: "Your efforts are being recognized. You are moving into a phase of victory, success, and public acclaim. Whether you are receiving praise for your work, achieving a long-sought goal, or simply feeling a deep sense of pride, acknowledge your accomplishments and allow yourself to bask in the light of your success. The Six of Wands asks you to own your victory. You have earned the recognition you are receiving. Do not downplay your achievements. Stand tall, and let the world see what you have accomplished."
    },
    {
      id: 70,
      name: "Seven of Wands",
      image: "/tarot-cards/Wands07.jpg",
      shortDesc: "Defense, Perseverance, Standing Your Ground.",
      story: "A figure stands on a hill, wielding a wand, defending their position against the six wands aimed at them from below. He represents the courage to protect what you hold dear. The Seven of Wands is the card of standing your ground in the face of opposition. The figure in the card is outnumbered, but he is standing firm. He represents the courage to defend your position, your beliefs, and your boundaries. The Seven of Wands appears when you are being challenged, and you must summon the strength to hold your ground.",
      meaning: "You are being called to stand your ground. You may feel like you are under attack or facing opposition, but you have the strength and conviction to hold your position. Don't back down. Your resilience will prove that your values and beliefs are unshakable. The Seven of Wands asks you to be courageous in the face of adversity. You are stronger than you appear. Stand tall, and let your opposition know that you will not be moved."
    },
    {
      id: 71,
      name: "Eight of Wands",
      image: "/tarot-cards/Wands08.jpg",
      shortDesc: "Speed, Action, Progress.",
      story: "Eight wands fly through the air in a flurry of speed and movement. The card represents rapid progress, swift communication, and decisive action. The Eight of Wands is the card of rapid movement and quick action. The wands fly through the air, representing the swift arrival of news, events, or decisions. This card appears when things are moving quickly, and you must be prepared to adapt and respond with agility. The Eight of Wands encourages you to move forward with speed and confidence.",
      meaning: "Things are moving quickly! Events are unfolding at an accelerated pace, and the universe is pushing you to take swift action. Be prepared to adapt and respond quickly to incoming news or developments. This is a time of rapid acceleration and forward momentum. The Eight of Wands asks you to embrace the speed of change. Do not resist the fast pace; instead, flow with it. The universe is moving on your behalf, and your response must be swift and decisive."
    },
    {
      id: 72,
      name: "Nine of Wands",
      image: "/tarot-cards/Wands09.jpg",
      shortDesc: "Resilience, Persistence, Guardedness.",
      story: "A battered figure leans on a wand, holding one more wand up defensively. Despite his weariness, he remains steadfast and ready for the final battle. The Nine of Wands represents the resilience of the human spirit. The figure in the card has been through many battles, and he is showing signs of weariness. But he is not giving up. He holds one more wand, ready to defend himself against the final assault. This card appears when we are tired, but we are not ready to surrender. We are close to the finish line, and we must summon our last reserves of strength.",
      meaning: "You have been through a lot of battles, and you are feeling weary. However, the end is in sight. Do not give up now. Your resilience is your greatest strength, and you are closer to victory than you realize. Keep pushing forward—the final challenge is the one you will overcome. The Nine of Wands asks you to tap into your last reserves of strength. You have fought bravely, and you are almost there. The final push will be worth it."
    },
    {
      id: 73,
      name: "Ten of Wands",
      image: "/tarot-cards/Wands10.jpg",
      shortDesc: "Burden, Overwhelm, Release.",
      story: "A figure struggles beneath the weight of ten wands, bent over from the burden they carry. This represents the exhaustion of carrying too much responsibility alone. The Ten of Wands is the card of burnout and overwhelm. The figure in the card is carrying ten wands, and the weight is bending them forward. They are barely able to move forward. This card appears when we have taken on too much responsibility and we are on the verge of collapse. The Ten of Wands invites us to examine what we are carrying and to release what is not ours to bear.",
      meaning: "You are carrying a heavy burden, and it is beginning to take a toll on your energy and spirit. The universe is asking you to look at your responsibilities and delegate or release what no longer serves you. You cannot do it all alone. Asking for help is not a sign of weakness. The Ten of Wands asks you to lighten your load. Identify the responsibilities that are not truly yours, and let them go. You are not a martyr; you are a human being who needs rest. Release what you cannot carry, and allow yourself to be supported by others."
    },
    {
      id: 74,
      name: "Page of Wands",
      image: "/tarot-cards/Wands11.jpg",
      shortDesc: "Curiosity, New Discoveries, Creative Spark.",
      story: "A young figure holds a wand, looking at it with curiosity. This is the Page, the messenger of inspiration and new beginnings. The Page of Wands is the card of creative curiosity and new discoveries. The Page is the messenger of inspiration, bringing news of a new idea, a new project, or a new passion. This card represents the spark of curiosity that leads to creative exploration and self-discovery. The Page of Wands invites us to explore new ideas with enthusiasm and openness.",
      meaning: "A new creative spark or source of inspiration is entering your life. You are being called to explore new ideas and pursue your passions with youthful enthusiasm. This is a time to learn, to experiment, and to embrace the excitement of starting something new. The Page of Wands asks you to follow your curiosity. Don't overthink it—just explore. The things that fascinate you are the things that are meant for you. Follow the spark."
    },
    {
      id: 75,
      name: "Knight of Wands",
      image: "/tarot-cards/Wands12.jpg",
      shortDesc: "Action, Adventure, Impulsiveness.",
      story: "A knight charges forward on his horse, his wand raised. He represents the drive to take action and pursue adventure with unbridled passion. The Knight of Wands is the card of action, adventure, and impulsiveness. The knight charges forward with reckless abandon, eager to pursue his passions and take risks. This card represents the energy of enthusiasm and the willingness to embrace new experiences. However, the Knight of Wands also warns us against acting impulsively without considering the consequences.",
      meaning: "You are being called to take bold, decisive action. This is a time for adventure, for breaking free from the mundane, and for pursuing your passions fearlessly. While your enthusiasm is inspiring, be mindful not to act impulsively. Balance your drive with careful planning. The Knight of Wands asks you to channel your passion into purposeful action. Your enthusiasm is a gift, but you must direct it with intention. Take action, but take it wisely."
    },
    {
      id: 76,
      name: "Queen of Wands",
      image: "/tarot-cards/Wands13.jpg",
      shortDesc: "Confidence, Independence, Charisma.",
      story: "The Queen of Wands sits upon her throne, radiating confidence and magnetism. She is the embodiment of self-assurance and independent fire. The Queen of Wands is the card of confidence, independence, and charismatic leadership. The Queen does not wait for permission to shine; she radiates her light boldly and unapologetically. She represents the power of self-assurance and the magnetic energy that attracts others to her. The Queen of Wands appears when we are being called to step into our power and lead with confidence and charisma.",
      meaning: "You are entering a stage of profound confidence and self-assurance. Your inner fire is burning bright, and others are drawn to your charisma. Trust in your abilities, embrace your independence, and allow your passion to light the way for others. The Queen of Wands asks you to own your power. Do not dim your light for anyone. You are magnetic, confident, and capable. Step into your power and inspire others with your unwavering confidence."
    },
    {
      id: 77,
      name: "King of Wands",
      image: "/tarot-cards/Wands14.jpg",
      shortDesc: "Leadership, Vision, Empowerment.",
      story: "The King of Wands sits boldly on his throne, his staff a symbol of his authority. He represents the visionary leader who inspires others through his passion and foresight. The King of Wands is the card of visionary leadership and transformative action. The King does not just rule; he inspires. He leads with passion, foresight, and an unwavering commitment to his vision. The King of Wands appears when we are being called to step into a leadership role, to lead with inspiration, and to empower others to reach their highest potential.",
      meaning: "You are being called to step into a leadership role. Your vision, passion, and decisiveness are exactly what your community or project needs. Lead with confidence, inspire others with your vision, and empower those around you to reach their highest potential. The King of Wands asks you to lead with fire. You are not meant to follow—you are meant to lead. Step into your authority with passion and conviction, and watch as others are inspired to follow your lead."
    }
  ];

  // ==========================================
  // CARD PICKING LOGIC (PREVENTS REPEATS)
  // ==========================================
  const pickRandomCard = () => {
    const availableCards = tarotDeck.filter(card => !pickedCardIds.includes(card.id));
    
    if (availableCards.length === 0) {
      setPickedCardIds([]);
      const randomPick = tarotDeck[Math.floor(Math.random() * tarotDeck.length)];
      setSelectedCard(randomPick);
      setIsReadingOpen(true);
      return;
    }

    const randomPick = availableCards[Math.floor(Math.random() * availableCards.length)];
    setPickedCardIds([...pickedCardIds, randomPick.id]);
    setSelectedCard(randomPick);
    setIsReadingOpen(true);
  };

  const handleClose = () => {
    setIsReadingOpen(false);
    setSelectedCard(null);
  };

  // ==========================================
  // RENDER THE TAROT PAGE
  // ==========================================
  return (
    <div style={styles.pageContainer}>
      <div style={styles.angelEdgeTop}>🕊️ ✦ 🕊️</div>

      <h1 style={styles.title}>🔮 Divine Tarot Reading</h1>
      <p style={styles.subtitle}>The cards are waiting. Choose one to reveal your message.</p>

      {/* --- CARD FAN WITH GLOWING CENTER --- */}
      <div className="tarot-fan-container" style={styles.fanContainer}>
        <div className="tarot-question-mark" style={styles.questionMarkWrapper}>
          <div style={styles.questionMark}>?</div>
          <div style={styles.glowRing}></div>
        </div>
        
        {tarotDeck.slice(0, 22).map((card, index) => {
          const offset = index - 10.5;
          return (
            <div 
              className="tarot-card"
              key={card.id} 
              onClick={pickRandomCard} 
              style={{
                ...styles.fanCard,
                transform: `rotate(${offset * 4}deg) translateY(${Math.abs(offset) * -3}px)`,
                zIndex: index,
                left: `calc(50% + ${offset * 20}px)`
              }}
            >
              <img src={card.image} alt={card.name} style={styles.cardImage} />
              <div style={styles.cardLabel}>{card.name}</div>
            </div>
          );
        })}
      </div>

      <button className="tarot-choose-btn" onClick={pickRandomCard} style={styles.chooseOneBtn}>
        ✦ Choose One Card ✦
      </button>

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
// PROFESSIONAL STYLES (FULLY MOBILE RESPONSIVE)
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
    marginBottom: '2rem'
  },
  fanContainer: {
    position: 'relative',
    width: '100%',
    maxWidth: '900px',
    height: '350px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    margin: '1rem 0 3rem 0'
  },
  questionMarkWrapper: {
    position: 'absolute',
    bottom: '50px',
    left: '45%',  /* ✅ Shifted the fan slightly to the left */
    transform: 'translateX(-50%)',
    zIndex: 0
  },
  questionMark: {
    fontSize: '6rem',
    color: '#D4AF37',
    fontWeight: 'bold',
    textShadow: '0 0 30px rgba(212, 175, 55, 0.6)'
  },
  glowRing: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(212,175,55,0.2) 0%, rgba(212,175,55,0) 70%)',
    animation: 'pulseGlow 2s ease-in-out infinite',
    zIndex: -1
  },
  fanCard: {
    position: 'absolute',
    bottom: '0',
    width: '140px',
    height: '200px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    transformOrigin: 'bottom center',
    boxShadow: '0 10px 20px rgba(0,0,0,0.4)',
    borderRadius: '10px',
    background: '#fff',
    overflow: 'hidden',
    border: '2px solid #D4AF37',
    left: 'calc(50% + 0px)'
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
    fontSize: '0.8rem',
    padding: '8px 5px',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  chooseOneBtn: {
    background: 'linear-gradient(135deg, #D4AF37, #b8952e)',
    color: '#fff',
    border: 'none',
    padding: '1rem 3rem',
    borderRadius: '50px',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 4px 15px rgba(212, 175, 55, 0.4)',
    transition: 'transform 0.3s',
    marginBottom: '1rem',
    fontFamily: 'Arial, sans-serif'
  },
  modalOverlay: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.8)',
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
    boxShadow: '0 20px 60px rgba(0,0,0,0.5)'
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
    .tarot-card {
      width: 160px !important;
      height: 230px !important;
    }
    .tarot-fan-container {
      height: 400px !important;
    }
    .tarot-choose-btn {
      padding: 0.8rem 2rem !important;
      font-size: 1rem !important;
    }
    .tarot-question-mark {
      font-size: 4rem !important;
    }
  }
`;
document.head.appendChild(mobileStyles);

export default Tarot;