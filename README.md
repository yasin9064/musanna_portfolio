# Professional Document Services Portfolio

This is a comprehensive portfolio website for a professional document services provider, built with Next.js 16, Tailwind CSS 4, and TypeScript.

## Features

- **Responsive Design**: Mobile-first approach ensuring great experience on all devices.
- **Performance**: Optimized images, lazy loading, and efficient animations (60fps).
- **Custom Design**: Golden Yellow (#ffbe40) and Dark Gray (#333333) color scheme with Playfair Display and Inter fonts.
- **Interactive Elements**:
  - Hero section with typewriter effect and stats counters.
  - Services grid with hover effects.
  - Parallax About section.
  - 3D Testimonials carousel.
  - Functional Contact form with validation.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Icons**: Custom SVG components

## Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

3.  **Build for Production**:
    ```bash
    npm run build
    npm start
    ```

## Customization

-   **Colors**: Edit `app/globals.css` to change `--primary` and `--secondary` CSS variables.
-   **Fonts**: Edit `app/layout.tsx` to change font imports.
-   **Content**: Edit components in `app/components/` to update text and images.
-   **Images**: Replace placeholder URLs with actual images in `public/` folder or update `src` paths.

## Project Structure

-   `app/`: Main application code.
    -   `components/`: Reusable UI components and sections.
    -   `hooks/`: Custom React hooks (useTypewriter, useCounter).
    -   `layout.tsx`: Root layout and font configuration.
    -   `page.tsx`: Main homepage composition.
    -   `globals.css`: Global styles and Tailwind configuration.

## License

[MIT](LICENSE)
