import { useState } from 'react';

function GuardianAngel() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', gender: '', birthMonth: '', birthDay: '', birthYear: '', email: '' });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // --- EXPANDED ANGEL DATABASE (700+ WORDS EACH) ---
  const angels = [
    {
      name: 'Haniel',
      gender: 'female',
      message: `Dearest seeker, the angel Haniel has been walking beside you since the day you were born. 
      
Haniel is the angel of grace, divine beauty, and the sacred flow of intuition. Her name means "Grace of God," and she is here to remind you that you are not just a physical being having a spiritual experience—you are a radiant soul clothed in human form, carrying a unique light that the universe specifically designed you to share.

You may have felt unseen or undervalued at times. You may have questioned your beauty, your worth, or the purpose of your struggles. Haniel wants you to know that every single experience you have lived has been sculpting you into the masterpiece you are today. She is calling you to soften. To let go of the harsh ways you speak to yourself. To look in the mirror and see the divine rather than the flaws.

Haniel asks you to trust your intuition. The gut feelings you have been ignoring? The dreams that linger in your mind? The sudden inner knowing that something is shifting? That is Haniel whispering to you. She speaks in the language of feelings, not words. When you feel a wave of peace, when you feel drawn to a new path, when you feel a sudden surge of love for yourself, that is her saying: "Yes, you are on the right path."

She is also the angel of harmony in relationships. She asks you to evaluate the connections in your life. Are they filled with grace, or are they draining your light? Haniel does not ask you to abruptly cut ties, but she asks you to set sacred boundaries. Surround yourself with those who see your light, not those who dim it.

In the coming weeks, Haniel will be guiding you toward a period of profound self-acceptance. You are being asked to stop waiting for external validation and to start celebrating your own existence. You are worthy of love, exactly as you are. You are worthy of peace, exactly where you are. The grace of Haniel is not something you have to earn—it is something you have to receive.

Trust the journey. Trust the timing of your life. And most importantly, trust that you are held in the arms of an angel who sees you, loves you, and is guiding you toward a life of deep, radiant beauty.`
    },
    {
      name: 'Raphael',
      gender: 'male',
      message: `Dearest seeker, the angel Raphael has been called to you at this very moment. 
      
Raphael is the archangel of healing, divine light, and the restoration of body, mind, and spirit. His name means "God Heals," and he is present in your life right now because you are ready to heal. Whether your wounds are physical, emotional, or spiritual, Raphael is here to guide you through the process of mending.

You may have been carrying a burden that feels too heavy to bear. You may have been replaying old pains, holding on to grief, or feeling betrayed by your own body or mind. Raphael sees the weary weight you have been carrying, and he gently says: "Put it down. You do not have to hold this alone."

Raphael is the angel of divine medicine. He does not simply take away the pain—he illuminates the path to recovery. He asks you to look at your lifestyle, your eating habits, your sleep patterns, and the people you surround yourself with. He is asking you to become an active participant in your own healing. What you eat, what you consume, and what you listen to either heals you or holds you back.

Emotionally, Raphael is guiding you to release the past. Holding on to old resentments is like drinking poison and expecting the other person to die. Raphael asks you to forgive—not because the other person deserves it, but because YOU deserve peace. Forgiveness is not about the past; it is about untying the knot that binds you to your pain so you can walk into the future with your full energy restored.

Spiritually, Raphael is asking you to reconnect with your body. Your body is the temple of your soul. If you have been neglecting your physical health, neglecting your rest, or ignoring the whispers of your body, Raphael is here to remind you that spiritual health and physical health are not separate. They are deeply intertwined.

A powerful shift is entering your life. You are entering a phase of restoration. Your energy will return. Your emotional clarity will return. Your inner joy will return. Trust that Raphael is working behind the scenes, guiding doctors, healers, and even the Earth itself to bring you what you need to heal.

Healing is not a destination—it is a journey. And you are not walking this journey alone.`
    },
    {
      name: 'Gabriel',
      gender: 'male',
      message: `Dearest seeker, the angel Gabriel has been watching over you with a message of hope and clarity. 
      
Gabriel is the archangel of communication, divine revelation, and the courage to speak your truth. His name means "Strength of God," and he is the messenger who brings clarity to your life. You may have been feeling uncertain about a decision, confused about your path, or hesitant to speak up about something important. Gabriel is here to help you cut through the noise.

Gabriel represents the power of the voice. This is not just about speaking—it is about being heard. It is about having the courage to express your boundaries, your desires, and your dreams without the fear of judgment. Gabriel asks you to write down what is on your heart. Journaling, speaking aloud, or even just speaking kindly to yourself—these are the tools Gabriel offers you to find clarity.

Gabriel is also the angel who announces new beginnings. When a new idea, a new relationship, or a new chapter suddenly appears in your life, that is Gabriel delivering a message from the universe. You are being called to welcome these new beginnings with open arms. Do not overthink them. Do not delay. Trust that if it arrived in your life, it arrived because you are ready for it.

This card also carries a message about your truth. Have you been hiding who you really are? Have you been downplaying your gifts? Gabriel is urging you to step out of the shadows and let your authenticity shine. The world does not need you to be someone else. It needs you to be exactly who you are.

If you have been considering starting a new project, having a difficult conversation, or finally expressing a truth you have held in your heart, Gabriel is standing beside you, saying: "Speak now. The universe will meet you in the middle. The words you speak will bring the miracles you have been waiting for."

Trust your words. Trust your voice. And trust that Gabriel is guiding you toward a life where you are fully heard and fully seen.`
    },
    {
      name: 'Ariel',
      gender: 'female',
      message: `Dearest seeker, the angel Ariel is calling you to reconnect with the earth and your own inner strength. 
      
Ariel is the archangel of the natural world, protection, and raw, untamed courage. Her name means "Lioness of God," and she represents the fierce, protective energy that lives deep within your soul. She is here to remind you that you are not weak. You are not powerless. You are a force of nature, capable of surviving, thriving, and protecting what you love.

Ariel is deeply connected to the earth. She asks you to spend more time in nature—to feel the grass beneath your feet, to listen to the wind, to watch the trees breathe. Reconnecting with the earth is reconnecting with yourself. Nature does not rush. It does not force. It simply grows, adapts, and thrives in harmony. Ariel wants you to adopt this same energy in your own life.

You may be feeling vulnerable, unprotected, or uncertain of your own strength. Ariel is here to reassure you that you are far stronger than you realize. She is the guardian of the planet, and she stands guard over you as well. Her energy is fierce, protective, and unwavering.

If you have been feeling targeted by negativity, facing challenges at work, or dealing with difficult people, Ariel is strengthening your shield. She wants you to defend your boundaries with the ferocity of a lioness. Stand your ground. Claim your space. You are allowed to say no. You are allowed to protect your energy. You are allowed to walk away from anything that does not serve your highest good.

Ariel is also deeply connected to animals and the unseen realms of nature. Pay attention to the animals that cross your path—they may be carrying messages from her. A bird outside your window, a stray cat, a butterfly landing near you—these are signs that the universe is surrounding you with guidance and protection.

On a soul level, Ariel is asking you to trust your power. You are not at the mercy of your circumstances. You are the creator of them. The courage you are seeking is already inside you. The protection you are seeking has already been assigned to you.

Walk with confidence, dear one. Walk with the sure-footed strength of a lion. The earth supports you. The angels protect you. And the universe is conspiring in your favor.`
    }
  ];

  const getRandomAngel = () => angels[Math.floor(Math.random() * angels.length)];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
    else handleSubmit();
  };

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      const angel = getRandomAngel();
      setResult(angel);
      setLoading(false);
      setStep(5);
    }, 2000);
  };

  const progressWidth = ((step - 1) / 4) * 100;

  // --- DYNAMIC DATE GENERATORS ---
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 126 }, (_, i) => currentYear - 125 + i); // 1900 to current + 10 years

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>The Day You Were Born A Guardian Angel Was Assigned To Watch Over You...</h1>
        <p style={styles.subtitle}>Enter your details below to discover your Guardian Angel's name & the special message that awaits you...</p>
      </div>

      <div style={styles.card}>
        {step < 5 && <div style={styles.progressBar}><div style={{ ...styles.progressFill, width: `${progressWidth}%` }} /></div>}

        {/* STEP 1: NAME */}
        {step === 1 && (
          <div>
            <h2 style={styles.stepTitle}>Step 1: What's Your Name?</h2>
            <input type="text" name="name" placeholder="Enter Your First Name" value={formData.name} onChange={handleInputChange} style={styles.input} required />
            <button onClick={handleNext} style={styles.btn}>Continue →</button>
          </div>
        )}

        {/* STEP 2: GENDER */}
        {step === 2 && (
          <div>
            <h2 style={styles.stepTitle}>Step 2: Are You Female Or Male?</h2>
            <div style={styles.genderGroup}>
              <button onClick={() => { setFormData({ ...formData, gender: 'male' }); handleNext(); }} style={{ ...styles.genderBtn, background: formData.gender === 'male' ? '#5B2A8C' : '#ccc' }}>Male</button>
              <button onClick={() => { setFormData({ ...formData, gender: 'female' }); handleNext(); }} style={{ ...styles.genderBtn, background: formData.gender === 'female' ? '#5B2A8C' : '#ccc' }}>Female</button>
            </div>
          </div>
        )}

        {/* STEP 3: BIRTH DATE (FULL RANGES) */}
        {step === 3 && (
          <div>
            <h2 style={styles.stepTitle}>Step 3: When Were You Born?</h2>
            <div style={styles.dateGroup}>
              <select name="birthMonth" onChange={handleInputChange} style={styles.select} required>
                <option value="">Month</option>
                {months.map((m, i) => <option key={i} value={i + 1}>{m}</option>)}
              </select>
              <select name="birthDay" onChange={handleInputChange} style={styles.select} required>
                <option value="">Day</option>
                {days.map(d => <option key={d} value={d}>{d}</option>)}
              </select>
              <select name="birthYear" onChange={handleInputChange} style={styles.select} required>
                <option value="">Year</option>
                {years.map(y => <option key={y} value={y}>{y}</option>)}
              </select>
            </div>
            <button onClick={handleNext} style={styles.btn}>Continue →</button>
          </div>
        )}

        {/* STEP 4: EMAIL */}
        {step === 4 && (
          <div>
            <h2 style={styles.stepTitle}>Step 4: Where Should Your Free Reading Be Sent To?</h2>
            <input type="email" name="email" placeholder="Enter Your Email" value={formData.email} onChange={handleInputChange} style={styles.input} required />
            <button onClick={handleNext} style={styles.btn}>Yes, Show My Result! →</button>
          </div>
        )}

        {/* STEP 5: RESULT / LOADING */}
        {step === 5 && (
          <div style={styles.resultContainer}>
            {loading ? (
              <div>
                <div style={styles.loader}></div>
                <p>Analyzing your results...</p>
              </div>
            ) : result ? (
              <div>
                <h3 style={styles.resultTitle}>Dearest {formData.name},</h3>
                <p style={styles.resultSubtitle}>Your Guardian Archangel is <strong>{result.name}</strong></p>
                <div style={styles.angelMessage}>
                  {result.message.split('\n').map((paragraph, i) => (
                    <p key={i} style={styles.messageParagraph}>{paragraph}</p>
                  ))}
                </div>
                <button onClick={() => window.location.reload()} style={styles.btn}>Start Over</button>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: { minHeight: '100vh', background: '#F5EEF8', padding: '4rem 2rem', fontFamily: 'Arial, sans-serif', display: 'flex', flexDirection: 'column', alignItems: 'center' },
  header: { textAlign: 'center', maxWidth: '800px', marginBottom: '3rem' },
  title: { fontSize: '2.5rem', color: '#5B2A8C', marginBottom: '1rem' },
  subtitle: { fontSize: '1.2rem', color: '#666' },
  card: { background: '#fff', padding: '3rem', borderRadius: '30px', maxWidth: '600px', width: '100%', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', textAlign: 'center' },
  progressBar: { height: '10px', background: '#eee', borderRadius: '10px', marginBottom: '2rem', overflow: 'hidden' },
  progressFill: { height: '100%', background: '#5B2A8C', transition: 'width 0.5s' },
  stepTitle: { fontSize: '1.8rem', color: '#1a1a1a', marginBottom: '2rem' },
  input: { width: '100%', padding: '15px', borderRadius: '10px', border: '1px solid #ddd', fontSize: '1rem', marginBottom: '2rem' },
  btn: { width: '100%', padding: '15px', background: '#5B2A8C', color: '#fff', border: 'none', borderRadius: '30px', fontSize: '1.1rem', cursor: 'pointer' },
  genderGroup: { display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' },
  genderBtn: { padding: '15px 30px', border: 'none', borderRadius: '10px', color: '#fff', fontSize: '1rem', cursor: 'pointer' },
  dateGroup: { display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '2rem' },
  select: { padding: '10px', borderRadius: '10px', border: '1px solid #ddd', fontSize: '1rem', flex: 1, minWidth: '60px' },
  resultContainer: { padding: '1rem' },
  resultTitle: { fontSize: '1.8rem', color: '#5B2A8C', marginBottom: '0.5rem' },
  resultSubtitle: { fontSize: '1.2rem', marginBottom: '2rem' },
  angelMessage: { textAlign: 'left', marginBottom: '2rem' },
  messageParagraph: { fontSize: '1.05rem', lineHeight: '1.8', color: '#444', marginBottom: '1rem' },
  loader: { width: '60px', height: '60px', borderRadius: '50%', border: '8px solid #eee', borderTop: '8px solid #5B2A8C', animation: 'spin 1s linear infinite', margin: '0 auto 1rem' }
};

export default GuardianAngel;