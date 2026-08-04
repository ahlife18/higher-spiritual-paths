import { useState, useRef } from 'react';

function ImageUpload() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState(null);
  const [message, setMessage] = useState('');
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setMessage(`📁 Selected: ${selectedFile.name}`);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      setMessage('⚠️ Please select a file first.');
      return;
    }

    setUploading(true);
    setMessage('⏳ Uploading...');

    try {
      // 1. Get a secure upload URL from our backend (we will build this next)
      const response = await fetch('/api/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filename: file.name }),
      });

      if (!response.ok) throw new Error('Failed to get upload URL');

      const { url } = await response.json();

      // 2. Upload the actual file to the secure URL
      const uploadResponse = await fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': file.type },
        body: file,
      });

      if (!uploadResponse.ok) throw new Error('Upload failed');

      const blob = await uploadResponse.json();
      
      setUploadedUrl(blob.url);
      setMessage(`✅ Upload successful! File available at: ${blob.url}`);
      
      // Reset the form
      setFile(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
    } catch (error) {
      console.error('Upload error:', error);
      setMessage('❌ Error: ' + error.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>🕯️ Upload an Image</h2>
      <p style={styles.subtitle}>Share a photo with the community (Max 4.5MB)</p>
      
      <form onSubmit={handleUpload} style={styles.form}>
        <div style={styles.inputGroup}>
          <input 
            type="file" 
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            style={styles.fileInput}
          />
        </div>
        
        <button 
          type="submit" 
          disabled={uploading || !file}
          style={uploading ? {...styles.button, ...styles.buttonDisabled} : styles.button}
        >
          {uploading ? '⏳ Uploading...' : '☁️ Upload to Cloud'}
        </button>
      </form>

      {message && <p style={styles.message}>{message}</p>}

      {uploadedUrl && (
        <div style={styles.previewContainer}>
          <h4>Preview:</h4>
          <img src={uploadedUrl} alt="Uploaded content" style={styles.previewImage} />
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '500px',
    margin: '2rem auto',
    padding: '2rem',
    background: 'white',
    borderRadius: '20px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
    fontFamily: 'Georgia, serif',
    textAlign: 'center'
  },
  title: {
    color: '#2c1b13',
    marginBottom: '0.5rem'
  },
  subtitle: {
    color: '#888',
    fontSize: '0.9rem',
    marginBottom: '2rem'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  },
  inputGroup: {
    display: 'flex',
    justifyContent: 'center'
  },
  fileInput: {
    padding: '0.8rem',
    border: '2px dashed #c2a66b',
    borderRadius: '10px',
    width: '100%',
    cursor: 'pointer'
  },
  button: {
    padding: '0.8rem 2rem',
    background: '#3b2f4f',
    color: '#fcf6f0',
    border: 'none',
    borderRadius: '30px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'transform 0.2s'
  },
  buttonDisabled: {
    opacity: 0.6,
    cursor: 'not-allowed'
  },
  message: {
    marginTop: '1rem',
    fontSize: '0.95rem',
    color: '#2c1b13'
  },
  previewContainer: {
    marginTop: '2rem',
    padding: '1rem',
    background: '#fcf6f0',
    borderRadius: '10px'
  },
  previewImage: {
    maxWidth: '100%',
    borderRadius: '10px',
    marginTop: '0.5rem'
  }
};

export default ImageUpload;