"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiPlay, FiX, FiFilm } from "react-icons/fi";
import { MULTIMEDIA_VIDEOS } from "@/data/siteData";
import styles from "./Multimedia.module.css";

export default function Multimedia() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const openVideo = (youtubeId: string) => setActiveVideo(youtubeId);
  const closeVideo = () => setActiveVideo(null);

  const categoryColors: Record<string, string> = {
    Profil: "#e85d04",
    Kegiatan: "#f48c06",
    Testimoni: "#2a9d8f",
  };

  return (
    <section id="multimedia" className={styles.multimedia} ref={ref}>
      <div className={styles.bgGradient} />
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label light">Konten Media</span>
          <h2 className="section-title light">Video & Dokumentasi</h2>
          <div className="gold-divider" />
          <p className="section-subtitle light">
            Saksikan sendiri suasana belajar, kegiatan, dan kesaksian para alumni
            I-SALAM melalui konten video kami.
          </p>
        </motion.div>

        <div className={styles.videoGrid}>
          {MULTIMEDIA_VIDEOS.map((video, i) => (
            <motion.div
              key={video.id}
              className={styles.videoCard}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              {/* Thumbnail */}
              <div className={styles.thumbnailWrap}>
                <div className={styles.thumbnailPlaceholder} style={{ background: `linear-gradient(135deg, ${categoryColors[video.category]}30 0%, ${categoryColors[video.category]}10 100%)` }}>
                  <FiFilm size={48} style={{ color: categoryColors[video.category], opacity: 0.6 }} />
                </div>
                <div className={styles.thumbnailOverlay} />

                {/* Play Button */}
                <button
                  id={`video-play-${video.id}`}
                  className={styles.playBtn}
                  onClick={() => openVideo(video.youtubeId)}
                  style={{ background: categoryColors[video.category] }}
                  aria-label={`Putar video ${video.title}`}
                >
                  <FiPlay size={22} className={styles.playIcon} />
                </button>

                {/* Category Badge */}
                <span
                  className={styles.categoryBadge}
                  style={{ background: categoryColors[video.category] }}
                >
                  {video.category}
                </span>
              </div>

              {/* Info */}
              <div className={styles.videoInfo}>
                <h3 className={styles.videoTitle}>{video.title}</h3>
                <p className={styles.videoDesc}>{video.description}</p>
                <button
                  className={styles.watchBtn}
                  onClick={() => openVideo(video.youtubeId)}
                  style={{ color: categoryColors[video.category] }}
                >
                  <FiPlay size={14} />
                  Tonton Sekarang
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className={styles.modal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeVideo}
          >
            <motion.div
              className={styles.modalContent}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.closeBtn} onClick={closeVideo} aria-label="Tutup video">
                <FiX size={22} />
              </button>
              <div className={styles.iframeWrap}>
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                  title="Video I-SALAM"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={styles.iframe}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
