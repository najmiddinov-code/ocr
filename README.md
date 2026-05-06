# OCR Tizimi — Netlify Deploy

## Papka tuzilmasi
```
ocr-netlify/
├── index.html              ← Asosiy sahifa
├── netlify.toml            ← Netlify konfiguratsiyasi
├── README.md               ← Shu fayl
└── netlify/
    └── functions/
        └── ocr.js          ← Backend funksiya (API kalitni yashiradi)
```

---

## Deploy qilish — 3 qadam

### 1-qadam: GitHub ga yuklash
1. https://github.com ga kiring
2. "New repository" → nom bering (masalan: `ocr-tizimi`)
3. "Create repository"
4. Barcha fayllarni shu papkadan yuklang ("uploading an existing file" tugmasi)

### 2-qadam: Netlify ga ulash
1. https://netlify.com ga kiring
2. "Add new site" → "Import an existing project"
3. GitHub ni tanlang → `ocr-tizimi` reponi tanlang
4. Build settings avtomatik aniqlanadi
5. "Deploy site" tugmasini bosing

### 3-qadam: API kalitni qo'shish (ENG MUHIM!)
1. Netlify dashboard → Site settings → Environment variables
2. "Add a variable" tugmasi:
   - Key:   `GEMINI_API_KEY`
   - Value: `AIzaSy...` (o'z kalitingiz)
3. "Save" → Keyin "Deploys" → "Trigger deploy"

---

## Tayyor!
Netlify sizga bepul domen beradi:
`https://your-site-name.netlify.app`

---

## API kalitni qaerdan olish?
1. https://aistudio.google.com ga kiring (Google account bilan)
2. "Get API key" → "Create API key in new project"
3. Kalitni nusxalab Netlify ga joylashtiring.
   *   **Gemini 1.5 Flash** modeli mutlaqo bepul (limit doirasida).
