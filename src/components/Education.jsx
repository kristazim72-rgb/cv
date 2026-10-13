import { useState } from 'react';
import '../styles/Education.css';

export default function Education() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [edu, setEdu] = useState({
    school: '',
    title: '',
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEdu((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="section-card">
        <h2>Educational Experience</h2>
        <div className="preview-content">
          <p><strong>School Name:</strong> {edu.school}</p>
          <p><strong>Title of Study:</strong> {edu.title}</p>
          <p><strong>Date of Study:</strong> {edu.date}</p>
        </div>
        <button onClick={() => setIsSubmitted(false)}>Edit</button>
      </div>
    );
  }

  return (
    <div className="section-card">
      <h2>Educational Experience</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>School Name:</label>
          <input
            type="text"
            name="school"
            value={edu.school}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Title of Study:</label>
          <input
            type="text"
            name="title"
            value={edu.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Date of Study:</label>
          <input
            type="text"
            name="date"
            value={edu.date}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}