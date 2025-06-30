
# Diana & Luminița - Website Profesional

Un site web modern și responsiv pentru experții în Social Media Marketing și Frontend Development.

## 🚀 Funcționalități

- **Design Modern**: Interface minimalist cu fundal întunecat și accente vibrante
- **Responsive**: Optimizat pentru toate dispozitivele
- **Formularul de Contact**: Integrat cu EmailJS pentru trimiterea mesajelor
- **Animații Fluide**: Tranziții și efecte interactive
- **SEO Optimizat**: Meta tags și structură optimizată pentru motoarele de căutare

## 🛠️ Tehnologii Utilizate

- **React 18** - Librăria JavaScript pentru UI
- **TypeScript** - Pentru siguranța tipurilor
- **Tailwind CSS** - Framework CSS utility-first
- **Shadcn/ui** - Componente UI moderne
- **EmailJS** - Pentru trimiterea email-urilor din frontend
- **Lucide React** - Iconuri moderne și elegante
- **Vite** - Build tool rapid

## 📧 Configurarea EmailJS

Pentru ca formularul de contact să funcționeze, urmează acești pași:

1. **Creează un cont pe [EmailJS](https://www.emailjs.com/)**

2. **Configurează Service-ul**:
   - Mergi la "Email Services"
   - Adaugă un service (Gmail, Outlook, etc.)
   - Notează `Service ID`

3. **Creează un Template**:
   - Mergi la "Email Templates"
   - Creează un template nou cu următoarele variabile:
     - `{{from_name}}` - numele expeditorului
     - `{{from_email}}` - email-ul expeditorului
     - `{{subject}}` - subiectul mesajului
     - `{{message}}` - conținutul mesajului
     - `{{to_name}}` - "Diana & Luminița"
   - Notează `Template ID`

4. **Obține Public Key**:
   - Mergi la "Account" → "General"
   - Copiază `Public Key`

5. **Actualizează Contact.tsx**:
   Înlocuiește în fișierul `src/components/Contact.tsx`:
   ```typescript
   const result = await emailjs.send(
     'YOUR_SERVICE_ID',    // Înlocuiește cu Service ID-ul tău
     'YOUR_TEMPLATE_ID',   // Înlocuiește cu Template ID-ul tău
     {
       from_name: formData.name,
       from_email: formData.email,
       subject: formData.subject,
       message: formData.message,
       to_name: 'Diana & Luminița',
     },
     'YOUR_PUBLIC_KEY'     // Înlocuiește cu Public Key-ul tău
   );
   ```

## 🎨 Personalizare

### Culori și Stiluri
Toate culorile și stilurile sunt definite în `src/index.css` și `tailwind.config.ts`. Poți personaliza:
- Paleta de culori
- Fonturile (Inter și Poppins sunt configurate)
- Animațiile și tranzițiile

### Conținut
Actualizează conținutul în componentele din `src/components/`:
- `Hero.tsx` - Secțiunea principală
- `About.tsx` - Informații despre experiență
- `Portfolio.tsx` - Proiecte și cazuri de studiu
- `Services.tsx` - Serviciile oferite
- `Testimonials.tsx` - Feedback de la clienți
- `Contact.tsx` - Informații de contact

## 📱 Optimizări SEO

Site-ul include:
- Meta tags optimizate
- Open Graph pentru social media
- Twitter Cards
- Structură semantică HTML5
- Imagini optimizate cu lazy loading

## 🚀 Deployment

Site-ul poate fi publicat pe:
- **Lovable** (recomandat) - click pe "Publish"
- **Vercel** - conectează repository-ul GitHub
- **Netlify** - drag & drop build folder
- **GitHub Pages** - prin GitHub Actions

## 📞 Suport

Pentru întrebări despre personalizare sau probleme tehnice, contactează echipa de development.

---

**Dezvoltat cu ❤️ de Diana & Luminița**
