import React from 'react';
import './LanguageSelector.css'; // Import the CSS file

const LanguageSelector = () => {
  return (
    <div className="language-selector">
      <label htmlFor="language">Select Language</label>
      <select id="language">
        <option value="">Select language</option>
        <option value="english">English</option>
        <option value="hindi">Hindi</option>
        <option value="tamil">Tamil</option>
        <option value="telugu">Telugu</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
