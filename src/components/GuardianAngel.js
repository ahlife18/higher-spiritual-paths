import { useState } from 'react';
import emailjs from '@emailjs/browser';

function GuardianAngel() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', gender: '', birthMonth: '', birthDay: '', birthYear: '', email: '' });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [validationError, setValidationError] = useState('');

  // --- ANGEL DATABASE ---
  const angels = [
    {
      name: 'Haniel',
      gender: 'female',
      message: `Haniel is the angel of grace and divine beauty. She reminds you that the universe views you with unconditional love. You are here to bring harmony and elegance into the world. She has been guiding you toward self-acceptance and deeper relationships.`
    },
    {
      name: 'Raphael',
      gender: 'male',
      message: `Raphael is the divine healer. His presence is a sign that you are being healed on a physical, emotional, or spiritual level. You are being guided to seek balance and to trust that your body and soul are mending. He brings immense light and restoration.`
    },
    {
      name: 'Gabriel',
      gender: 'male',
      message: `Gabriel is the messenger of hope and clarity. He is here to help you communicate your truth and to embrace your spiritual path. As an archangel, he brings powerful news of transformation. Trust the messages you are receiving.`
    },
    {
      name: 'Ariel',
      gender: 'female',
      message: `Ariel is the lioness of God, protecting the earth and all living creatures. She is calling you to reconnect with nature and to protect your own boundaries. She brings strength and courage to those who feel lost or vulnerable.`
    }
  ];

  const getRandomAngel = () => angels[Math.floor(Math.random() * angels.length)];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setValidationError('');
  };

  const handleNext = () => {
    setValidationError('');

    if (step === 1 && !formData.name.trim()) {
      setValidationError('Please enter your name to continue.');
      return;
    }
    if (step === 2 && !formData.gender) {
      setValidationError('Please select your gender to continue.');
      return;
    }
    if (step === 3 && (!formData.birthMonth || !formData.birthDay || !formData.birthYear)) {
      setValidationError('Please select your full birth date to continue.');
      return;
    }
    if (step === 4 && !formData.email.trim()) {
      setValidationError('Please enter your email to receive your reading.');
      return;
    }

    if (step < 4) setStep(step + 1);
    else handleSubmit();
  };

  const handleSubmit = async () => {
    setLoading(true);

    // 1. Choose the Angel
    const angel = getRandomAngel();
    setResult(angel);

    // 2. Send the Email via EmailJS (No Template Required)
    try {
      const serviceID = 'service_bksgbfs';     // ✅ Your Service ID
      const publicKey = '868cFAcGA6sQXfBjN';   // ✅ Your Public Key

      // We construct the email message directly in the code
      const emailMessage = `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 30px; border-radius: 20px; border: 1px solid #e0e0e0;">
          <div style="text-align: center; margin-bottom: 20px;">
            <h1 style="color: #5B2A8C;">🕯️ Higher Spiritual Paths</h1>
            <h2 style="color: #5B2A8C;">Your Guardian Angel Reading</h2>
          </div>
          
          <div style="background: white; padding: 25px; border-radius: 15px; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
            <p style="font-size: 18px; font-weight: bold; color: #5B2A8C;">Dearest ${formData.name},</p>
            
            <p style="font-size: 16px; line-height: 1.6;">
              The day you were born, a very special Angel was assigned to watch over you.
            </p>
            
            <div style="background: #F5EEF8; padding: 20px; border-radius: 12px; margin: 20px 0; text-align: center;">
              <h3 style="color: #5B2A8C; margin: 0;">Your Guardian Archangel is</h3>
              <h2 style="color: #5B2A8C; font-size: 32px; margin: 5px 0;">${angel.name}</h2>
            </div>
            
            <p style="font-size: 16px; line-height: 1.8; color: #444;">
              <strong>Message from ${angel.name}:</strong><br />
              ${angel.message}
            </p>
            
            <p style="font-size: 16px; line-height: 1.6; margin-top: 20px; color: #666; font-style: italic;">
              May this message guide you on your path.
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #888; font-size: 14px;">
            <p>No Religion. All Religion. The truth is in plain sight.</p>
            <p>🕯️ Higher Spiritual Paths</p>
          </div>
        </div>
      `;

      // Send the email using the direct method
      await emailjs.send(
        serviceID, 
        'template_xxxxxx', // Placeholder: This is ignored when using direct custom email
        {
          to_email: formData.email,
          subject: 'Your Guardian Angel Reading from Higher Spiritual Paths',
          message_html: emailMessage
        }, 
        publicKey
      );
      
      setLoading(false);
      setStep(5);
    } catch (error) {
      console.error('Email sending failed:', error);
      setValidationError('Failed to send email. Please check your email address and try again.');
      setLoading(false);
    }
  };

  const progressWidth = ((step - 1) / 4) * 100;

  // --- DYNAMIC DATE GENERATORS ---
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 126 }, (_, i) => currentYear - 125 + i);

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>The Day You Were Born A Guardian Angel Was Assigned To Watch Over You...</h1>
        <p style={styles.subtitle}>Enter your details below to discover your Guardian Angel's name & the special message that awaits you...</p>
      </div>

      <div style={styles.card}>
        {step < 5 && <div style={styles.progressBar}><div style={{ ...styles.progressFill, width: `${progressWidth}%` }} /></div>}

        {step === 1 && (
          <div>
            <h2 style={styles.stepTitle}>Step 1: What's Your Name?</h2>
            <input type="text" name="name" placeholder="Enter Your First Name" value={formData.name} onChange={handleInputChange} style={{ ...styles.input, borderColor: validationError ? '#e74c3c' : '#ddd' }} required />
            {validationError && <p style={styles.errorText}>{validationError}</p>}
            <button onClick={handleNext} style={styles.btn}>Continue →</button>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 style={styles.stepTitle}>Step 2: Are You Female Or Male?</h2>
            <div style={styles.genderGroup}>
              <button onClick={() => { setFormData({ ...formData, gender: 'male' }); handleNext(); }} style={{ ...styles.genderBtn, background: formData.gender === 'male' ? '#5B2A8C' : '#ccc' }}>Male</button>
              <button onClick={() => { setFormData({ ...formData, gender: 'female' }); handleNext(); }} style={{ ...styles.genderBtn, background: formData.gender === 'female' ? '#5B2A8C' : '#ccc' }}>Female</button>
            </div>
            {validationError && <p style={styles.errorText}>{validationError}</p>}
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 style={styles.stepTitle}>Step 3: When Were You Born?</h2>
            <div style={styles.dateGroup}>
              <select name="birthMonth" onChange={handleInputChange} style={{ ...styles.select, borderColor: validationError ? '#e74c3c' : '#ddd' }} required>
                <option value="">Month</option>
                {months.map((m, i) => <option key={i} value={i + 1}>{m}</option>)}
              </select>
              <select name="birthDay" onChange={handleInputChange} style={{ ...styles.select, borderColor: validationError ? '#e74c3c' : '#ddd' }} required>
                <option value="">Day</option>
                {days.map(d => <option key={d} value={d}>{d}</option>)}
              </select>
              <select name="birthYear" onChange={handleInputChange} style={{ ...styles.select, borderColor: validationError ? '#e74c3c' : '#ddd' }} required>
                <option value="">Year</option>
                {years.map(y => <option key={y} value={y}>{y}</option>)}
              </select>
            </div>
            {validationError && <p style={styles.errorText}>{validationError}</p>}
            <button onClick={handleNext} style={styles.btn}>Continue →</button>
          </div>
        )}

        {step === 4 && (
          <div>
            <h2 style={styles.stepTitle}>Step 4: Where Should Your Free Reading Be Sent To?</h2>
            <input type="email" name="email" placeholder="Enter Your Email" value={formData.email} onChange={handleInputChange} style={{ ...styles.input, borderColor: validationError ? '#e74c3c' : '#ddd' }} required />
            {validationError && <p style={styles.errorText}>{validationError}</p>}
            <button onClick={handleNext} style={styles.btn}>Yes, Show My Result! →</button>
          </div>
        )}

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
                  <p style={styles.messageParagraph}>{result.message}</p>
                </div>
                <p style={styles.emailSentMessage}>✅ Your reading has been sent to <strong>{formData.email}</strong>. Please check your inbox!</p>
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
  input: { width: '100%', padding: '15px', borderRadius: '10px', border: '1px solid #ddd', fontSize: '1rem', marginBottom: '1rem' },
  errorText: { color: '#e74c3c', fontSize: '0.9rem', marginBottom: '1rem', fontWeight: 'bold' },
  btn: { width: '100%', padding: '15px', background: '#5B2A8C', color: '#fff', border: 'none', borderRadius: '30px', fontSize: '1.1rem', cursor: 'pointer' },
  genderGroup: { display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' },
  genderBtn: { padding: '15px 30px', border: 'none', borderRadius: '10px', color: '#fff', fontSize: '1rem', cursor: 'pointer' },
  dateGroup: { display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '1rem' },
  select: { padding: '10px', borderRadius: '10px', border: '1px solid #ddd', fontSize: '1rem', flex: 1, minWidth: '60px' },
  resultContainer: { padding: '1rem' },
  resultTitle: { fontSize: '1.8rem', color: '#5B2A8C', marginBottom: '0.5rem' },
  resultSubtitle: { fontSize: '1.2rem', marginBottom: '2rem' },
  angelMessage: { textAlign: 'left', marginBottom: '2rem' },
  messageParagraph: { fontSize: '1.05rem', lineHeight: '1.8', color: '#444' },
  emailSentMessage: { fontSize: '1rem', color: '#27ae60', marginBottom: '2rem', fontWeight: 'bold' },
  loader: { width: '60px', height: '60px', borderRadius: '50%', border: '8px solid #eee', borderTop: '8px solid #5B2A8C', animation: 'spin 1s linear infinite', margin: '0 auto 1rem' }
};

export default GuardianAngel;