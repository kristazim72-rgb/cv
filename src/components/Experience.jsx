import { useState } from 'react';
import '../styles/Experience.css';

export default function Experience() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [exp, setExp] = useState({
    company: '',
    position: '',
    responsibilities: '',
    dateFrom: '',
    dateUntil: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExp((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="section-card">
        <h2>Practical Experience</h2>
        <div className="preview-content">
          <p><strong>Company Name:</strong> {exp.company}</p>
          <p><strong>Position Title:</strong> {exp.position}</p>
          <p><strong>Main Responsibilities:</strong> {exp.responsibilities}</p>
          <p><strong>From:</strong> {exp.dateFrom} <strong>Until:</strong> {exp.dateUntil}</p>
        </div>
        <button onClick={() => setIsSubmitted(false)}>Edit</button>
      </div>
    );
  }

  return (
    <div className="section-card">
      <h2>Practical Experience</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Company Name:</label>
          <input
            type="text"
            name="company"
            value={exp.company}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Position Title:</label>
          <input
            type="text"
            name="position"
            value={exp.position}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Main Responsibilities:</label>
          <textarea
            name="responsibilities"
            value={exp.responsibilities}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Worked From:</label>
          <input
            type="text"
            name="dateFrom"
            value={exp.dateFrom}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Worked Until:</label>
          <input
            type="text"
            name="dateUntil"
            value={exp.dateUntil}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}