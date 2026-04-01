# 🎵 Music Explorer Web App

A beginner-level web application that allows users to search, filter, and sort songs using the iTunes API. This project is developed using HTML, CSS, and vanilla JavaScript (ES6) as part of an academic assignment.

---

## 📌 Project Overview

Music Explorer fetches real-time music data from the iTunes API and displays it in a clean, responsive user interface. Users can search for songs, view details like track name, artist, and artwork, and interact with the results through filtering and sorting features.

---

## 🚀 Planned Features

* 🔍 **Search** — Search songs by name or artist using the iTunes API
* 🎛️ **Filter** — Filter results based on artist or collection
* 🔃 **Sort** — Sort results by track name (A–Z) or artist name
* 🃏 **Music Cards** — Display artwork, track name, and artist for each result
* 📱 **Responsive Design** — Support for mobile, tablet, and desktop screens

---

## 🛠️ Tech Stack

| Technology       | Purpose                                |
| ---------------- | -------------------------------------- |
| HTML5            | Page structure and layout              |
| CSS3             | Styling and responsive design          |
| JavaScript (ES6) | Logic and interactivity                |
| Fetch API        | Fetching data from iTunes API          |
| Git & GitHub     | Version control and project submission |

---

## 📁 Project Structure

```
music-explorer/
├── index.html       # Main HTML file (page structure)
├── style.css        # Stylesheet (layout, cards, responsiveness)
├── script.js        # JavaScript (API calls, search, filter, sort)
└── README.md        # Project documentation (this file)
```

---

## ⚙️ Setup & Usage

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/music-explorer.git
cd music-explorer
```

### 2. Run the App

Simply open `index.html` in your browser — no server setup required.

---

## 🌐 API Reference

This project uses the **iTunes Search API**.

* **Base URL:** `https://itunes.apple.com/search`
* **Search Endpoint:** `?term={song_or_artist}&entity=song&limit=10`

**Example Request:**

```
https://itunes.apple.com/search?term=arijit&entity=song
```

---

## 🗺️ Development Milestones

* [x] Milestone 1 — Project setup and planning
* [ ] Milestone 2 — API integration and displaying data
* [ ] Milestone 3 — Search, filter, and sort functionality
* [ ] Milestone 4 — Documentation and deployment

---

## ⚠️ Known Limitations

* Results depend on the availability of data from the iTunes API
* Some songs may not have artwork or complete metadata
* Limited control over filtering directly from API (handled on frontend)

---

## 🔮 Possible Future Improvements

* Add a **Favorites** feature using `localStorage`
* Add **pagination** for large result sets
* Add a **Dark Mode** toggle
* Improve UI design and animations

---

## 👤 Author

**Kritarth Patel**

* GitHub: https://github.com/your-username
* Course: Web Development — Academic Assignment

---

## 📄 License

This project is created for educational purposes as part of an academic assignment.
