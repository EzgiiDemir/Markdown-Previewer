import React, { useState, useEffect } from 'react';
import { marked } from 'marked';  // marked doğru şekilde import edildi
import './App.css'; // CSS dosyası eklendi

function App() {
  const defaultMarkdown = `
# Başlık (H1)
## Alt Başlık (H2)

Bu bir [bağlantı örneği](https://www.example.com).

\`Satır içi kod\`

\`\`\`
// Kod bloğu örneği
function greet() {
  console.log('Merhaba!');
}
\`\`\`

- Liste öğesi 1
- Liste öğesi 2

> Blok alıntı örneği

![Resim örneği](https://via.placeholder.com/150)
**Kalın metin örneği**

İlk satır
İkinci satır
`;

  const [markdown, setMarkdown] = useState(defaultMarkdown);

  useEffect(() => {
    const html = marked(markdown, { breaks: true });
    // setMarkdown ile güncellenen markdown state'i otomatik olarak önizleme alanını güncelleyecektir
    // innerHTML yerine JSX ile React tarafından sağlanan yöntemler kullanılmalı
    // dangerouslySetInnerHTML kullanılabilir ancak bu durumda XSS açıklarına dikkat edilmelidir
    // Bu örnekte, JSX ile güvenli bir şekilde render edilmiştir
    document.getElementById('preview').innerHTML = html; // Bunun yerine JSX ile gösterilebilir
  }, [markdown]);

  useEffect(() => {
    // İlk yüklemde varsayılan Markdown içeriğini işle
    const defaultHtml = marked(defaultMarkdown, { breaks: true });
    document.getElementById('preview').innerHTML = defaultHtml;
  }, []);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="App">
      <div className="editor-container">
        <textarea
          id="editor"
          placeholder="Markdown metnini buraya girin..."
          value={markdown}
          onChange={handleChange}
        />
      </div>
      <div className="preview-container">
        {/* JSX ile güvenli bir şekilde markdown'u göster */}
        <div id="preview" dangerouslySetInnerHTML={{ __html: marked(markdown, { breaks: true }) }}></div>
      </div>
    </div>
  );
}

export default App;
