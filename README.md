# 📷 Image Editor App

A simple image editor built with **React**, **TailwindCSS**, and **React Photo Editor**.  
Upload an image, edit it, and download the edited version with a dynamic filename.

# live demo
https://imageeditormodern.netlify.app/
---

## 🚀 Features
- Upload any image from your device.
- Edit the image using **React Photo Editor**.
- Download the edited image automatically.
- File is saved with a name pattern:  
  ```
  {original_filename}_edited_{timestamp}.{extension}
  ```
- Responsive UI with hover and click animations.
- Clean gradient background with TailwindCSS.

---

## 🛠️ Tech Stack & Dependencies

### Core
- [React](https://reactjs.org/) – UI library
- [React DOM](https://react.dev/) – DOM bindings
- [Vite](https://vitejs.dev/) – build tool & dev server

### Styling
- [TailwindCSS](https://tailwindcss.com/) – utility-first CSS framework
- [animate.css](https://animate.style/) – animation library

### Icons
- [lucide-react](https://lucide.dev/) – beautiful React SVG icons

### Image Editing
- [react-photo-editor](https://www.npmjs.com/package/react-photo-editor) – photo editing modal

### Dev Tools
- ESLint (with React hooks & refresh plugins)  
- TypeScript type definitions for React & ReactDOM  
- Vite React SWC plugin  

---

## 📦 Installation & Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/imageeditor.git
   cd imageeditor
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

---

## 📱 Responsiveness
- Upload card adapts to screen sizes (`w-[250px]` → `lg:w-[400px]`).  
- Modal editor scales to viewport width (`95vw` on mobile, max `500px` on desktop).  
- Hover (`hover:scale-110`) and active (`active:scale-95`) effects are enabled.

---

## 👨‍💻 Author
**Pavan Birari**  
Frontend Developer | MERN Stack Devloper  
