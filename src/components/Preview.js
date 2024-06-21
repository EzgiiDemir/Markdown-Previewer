import React, { useEffect } from 'react';
import { marked } from 'marked'; // Import specific named export from 'marked'

const Preview = ({ markdown }) => {
  useEffect(() => {
    if (markdown) {
      document.getElementById('preview').innerHTML = marked(markdown);
    } else {
      document.getElementById('preview').innerHTML = ''; // Clear preview if markdown is empty
    }
  }, [markdown]);

  return (
    <div
      id="preview"
      dangerouslySetInnerHTML={{ __html: marked(markdown || '') }} // Handle undefined/null case here too
    />
  );
};

export default Preview;
