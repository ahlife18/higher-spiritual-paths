import { useState } from 'react';

function GuardianAngel() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', gender: '', birthMonth: '', birthDay: '', birthYear: '', email: '' });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // Angel Database
  const angels = [
    { name: 'Haniel', gender: 'female', message: 'Haniel is the angel of grace and divine beauty. She reminds you that the universe views you with unconditional love. You are here to bring harmony and elegance into the world. She has been guiding you toward self-acceptance and deeper relationships.' },
    { name: 'Raphael', gender: 'male', message: 'Raphael is the divine healer. His presence is a sign that you are being healed on a physical, emotional, or spiritual level. You are being guided to seek balance and to trust that your body and soul are mending. He brings immense light and restoration.' },
    { name: 'Gabriel', gender: 'male', message: 'Gabriel is the messenger of hope and clarity. He is here to help you communicate your truth and to embrace your spiritual path. As an archangel, he brings powerful news of transformation. Trust the messages you are receiving.' },
    { name: 'Ariel', gender: 'female', message: 'Ariel is the lioness of God, protecting the earth and all living creatures. She is calling you to reconnect with nature and to protect your own boundaries. She brings strength and courage to those who feel lost or vulnerable.' }
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
                <p style={styles.resultMessage}>{result.message}</p>
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
  resultTitle: { fontSize: '1.8rem', color: '#5B2A8C' },
  resultSubtitle: { fontSize: '1.2rem', marginBottom: '2rem' },
  resultMessage: { fontSize: '1.1rem', lineHeight: '1.8', textAlign: 'left', marginBottom: '2rem' },
  loader: { width: '60px', height: '60px', borderRadius: '50%', border: '8px solid #eee', borderTop: '8px solid #5B2A8C', animation: 'spin 1s linear infinite', margin: '0 auto 1rem' }
};

export default GuardianAngel;