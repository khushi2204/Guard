import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function NewsPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=cybersecurity&apiKey=25d41a220978408eb22dafba84dc4a74`
        );
        const data = await response.json();
        setNews(data.articles.slice(0, 5));
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    }

    if (isOpen) fetchNews();
  }, [isOpen]);

  return (
    <>
      <div className={styles.newsIcon} onClick={() => setIsOpen(true)}>
        📰
      </div>
      {isOpen && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <span className={styles.close} onClick={() => setIsOpen(false)}>
              &times;
            </span>
            <h2>Cyber News</h2>
            {news.length > 0 ? (
              news.map((article, index) => (
                <div key={index} className={styles.newsArticle}>
                  <h3>
                    <a href={article.url} target="_blank">
                      {article.title}
                    </a>
                  </h3>
                </div>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
