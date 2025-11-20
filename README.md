# Image Cut ✂️

**Free, secure, and browser-based image tools.**

[Live Demo](https://www.image-cut.com/) | [Report Bug](https://github.com/Radukutz1/Image-Cut/issues)

**Image Cut** is a suite of lightweight online tools designed for creators, developers, and professionals. It allows users to compress, convert, resize, and merge images/documents entirely within the browser. 

Because all processing is client-side, **no files are ever uploaded to a server**, ensuring 100% data privacy.

## 🚀 Features

* **📉 Smart Image Compressor:** Reduce file size (MB/KB) while maintaining visual quality using `browser-image-compression`.
* **🔄 Format Converter:** Instantly convert between JPG, PNG, WebP, and AVIF.
* **📏 Pixel Resizer:** Adjust image width and height dimensions specifically for social media or web standards.
* **📄 JPG to PDF:** Merge images, text files, and Word documents into a single PDF using `jspdf` and `pdf-lib`.
* **🔒 Privacy First:** Zero server-side processing. Your data stays on your device.
* **🎨 Modern UI:** Fully responsive, dark-themed design with glassmorphism effects.

## 📂 Project Structure

The project has been organized for modularity and ease of maintenance. All styling is centralized in a single stylesheet.

```text
image-cut/
├── images/                 # Logos, favicons, and OG images
│   ├── imagecutlogo.png
│   ├── favicon.ico
│   └── ...
├── styles.css              # Master stylesheet for all pages
├── index.html              # Landing page
├── compress.html           # Pixel Resizer tool
├── sizecompress.html       # Smart File Size Compressor tool
├── converter.html          # Format Converter tool
├── pdfconv.html            # JPG/Doc to PDF tool
├── about.html              # About Us page
├── privacy.html            # Privacy Policy
└── README.md               # Documentation

