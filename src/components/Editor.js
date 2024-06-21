import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { marked } from 'marked'; // Import the marked library for Markdown parsing

const Editor = () => {
  const defaultMarkdown = `
    # Başlık 1
    ## Alt Başlık 1
    [Örnek bağlantı](https://www.example.com)
    \`Satır içi kod\`

    \`\`\`
    // Kod bloğu
    function greet() {
      return "Hello!";
    }
    \`\`\`

    - Liste öğesi 1
    - Liste öğesi 2

    > Blok alıntı

    ![Örnek resim](https://via.placeholder.com/150)

    **Kalın metin**
  `;

  const [markdown, setMarkdown] = useState(defaultMarkdown);

  useEffect(() => {
    // Convert Markdown to HTML using marked library
    const html = marked(markdown);
    document.getElementById('preview').innerHTML = html;
  }, [markdown]);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="editor-container">
      <Form.Group controlId="editor">
        <Form.Control
          as="textarea"
          rows={10}
          value={markdown}
          onChange={handleChange}
          placeholder="Markdown yazınızı buraya girin..."
        />
      </Form.Group>

      <div className="preview-container">
        <div id="preview"></div>
      </div>
    </div>
  );
};

export default Editor;
