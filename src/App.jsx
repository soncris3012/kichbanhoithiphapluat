import React, { useState, useEffect } from 'react';
import { CHARACTERS, SCENES, SLOGANS } from './data/scriptData';
import './index.css';

export default function App() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('kb-theme') === 'dark';
  });

  // Dark Mode Sync
  useEffect(() => {
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('kb-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('kb-theme', 'light');
    }
  }, [isDark]);

  // Text to Speech
  const handleSpeak = (speaker, text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(`${speaker} nói: ${text}`);
      utterance.lang = 'vi-VN';
      utterance.rate = 1.0;

      const voices = window.speechSynthesis.getVoices();
      const viVoice = voices.find(v => v.lang.includes('vi'));
      if (viVoice) utterance.voice = viVoice;

      window.speechSynthesis.speak(utterance);
    } else {
      alert('Trình duyệt chưa hỗ trợ phát âm thanh.');
    }
  };

  // Filter character handler
  const handleFilterClick = (roleId) => {
    setActiveFilter(roleId);
  };

  // Highlight search text helper
  const renderHighlightedText = (text, query) => {
    if (!query) return text;
    const regex = new RegExp(`(${query.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, index) =>
      regex.test(part) ? (
        <mark key={index} className="search-highlight">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    <div className={`app-root ${activeFilter !== 'all' ? 'is-filtering' : ''}`}>
      {/* Top Header */}
      <header className="site-header">
        <div className="container header-inner">
          <a href="#top" className="logo-area">
            <div className="logo-icon">⚖️</div>
            <div className="logo-text">
              <h1>HỘI THI PHÁP LUẬT</h1>
              <span>Kịch bản: Rượu Vào... Kỷ Luật Ra</span>
            </div>
          </a>

          <div className="header-actions">
            <button
              id="themeToggleBtn"
              className="btn"
              onClick={() => setIsDark(prev => !prev)}
              title="Chuyển đổi giao diện Sáng / Tối"
            >
              {isDark ? '☀️ Sáng' : '🌙 Tối'}
            </button>
          </div>
        </div>
      </header>

      <main className="container" id="top">
        {/* Hero Card - No subtitle as requested */}
        <section className="hero-card">
          <div className="hero-badges">
            <span className="badge badge-gold">⭐ HỘI THI TÌM HIỂU PHÁP LUẬT</span>
            <span className="badge badge-red">🚨 TIỂU PHẨM TUYÊN TRUYỀN</span>
            <span className="badge badge-blue">🎖️ KỶ LUẬT QUÂN ĐỘI</span>
          </div>
          <h1>Kịch Bản: RƯỢU VÀO… KỶ LUẬT RA</h1>
        </section>

        {/* Control Hub (Search & Character Filters) */}
        <section className="control-hub">
          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              id="scriptSearch"
              placeholder="Tìm câu thoại, tên nhân vật, hành động..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoComplete="off"
            />
          </div>

          <div className="filter-section">
            <div className="filter-title">
              <span>Lọc kịch bản theo nhân vật</span>
            </div>
            <div className="char-pills">
              <button
                className={`pill-btn ${activeFilter === 'all' ? 'active' : ''}`}
                onClick={() => handleFilterClick('all')}
              >
                <span>Tất cả</span>
              </button>
              {CHARACTERS.map((char) => (
                <button
                  key={char.id}
                  className={`pill-btn ${activeFilter === char.id ? 'active' : ''}`}
                  onClick={() => handleFilterClick(char.id)}
                >
                  <span className="pill-dot" style={{ background: char.borderColor }}></span>
                  <span>{char.name}</span>
                </button>
              ))}
              <button
                className={`pill-btn ${activeFilter === 'group' ? 'active' : ''}`}
                onClick={() => handleFilterClick('group')}
              >
                <span className="pill-dot" style={{ background: '#6366f1' }}></span>
                <span>Cả nhóm</span>
              </button>
            </div>
          </div>
        </section>

        {/* Scene Navigation Bar */}
        <nav className="scene-nav-bar" aria-label="Mục lục cảnh diễn">
          <a href="#cast" className="scene-nav-item">👥 Diễn viên</a>
          <a href="#canh-1" className="scene-nav-item">🚪 Cảnh 1</a>
          <a href="#canh-2" className="scene-nav-item">🍻 Cảnh 2</a>
          <a href="#canh-3" className="scene-nav-item">💥 Cảnh 3</a>
          <a href="#canh-4" className="scene-nav-item">📱 Cảnh 4</a>
          <a href="#canh-5" className="scene-nav-item">🎖️ Cảnh 5</a>
          <a href="#thong-diep" className="scene-nav-item">⭐ Thông điệp</a>
        </nav>

        {/* Characters Cast Section */}
        <section className="cast-section" id="cast">
          <div className="section-heading">
            <h2>👥 BẢNG PHÂN VAI &amp; ĐẶC TRƯNG TÍNH CÁCH</h2>
          </div>

          <div className="cast-grid">
            {CHARACTERS.map((char) => (
              <div
                key={char.id}
                className="cast-card"
                style={{ borderLeft: `4px solid ${char.borderColor}` }}
                onClick={() => {
                  handleFilterClick(char.id);
                  const firstElem = document.querySelector(`.dialogue-item[data-character="${char.id}"]`);
                  if (firstElem) {
                    firstElem.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }
                }}
              >
                <div
                  className="cast-avatar"
                  style={{ background: char.tagBg, color: char.tagText }}
                >
                  {char.avatar}
                </div>
                <div className="cast-info">
                  <div className="cast-name">
                    <span>{char.name}</span>
                    <span className="badge" style={{ background: char.tagBg, color: char.tagText }}>
                      {char.role}
                    </span>
                  </div>
                  <div className="cast-desc">{char.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Script Content */}
        <div className="script-container" id="scriptContainer">
          {SCENES.map((scene) => (
            <article key={scene.id} className="scene-block" id={scene.id}>
              <header className="scene-header">
                <div className="scene-title-wrap">
                  <span className="scene-number-badge">{scene.number}</span>
                  <h3>{scene.title}</h3>
                </div>
                <span className="scene-meta-tag">{scene.meta}</span>
              </header>

              <div className="scene-content">
                {scene.items.map((item, idx) => {
                  if (item.type === 'stage-dir') {
                    // Check search query filter
                    if (searchQuery && !item.content.toLowerCase().includes(searchQuery.toLowerCase())) {
                      return null;
                    }

                    return (
                      <div key={idx} className="stage-dir-box">
                        <span className="stage-dir-icon">🎬</span>
                        <div>
                          {item.sfx && (
                            <span className="sfx-tag">🔊 {item.sfx}</span>
                          )}
                          {renderHighlightedText(item.content, searchQuery)}
                        </div>
                      </div>
                    );
                  }

                  if (item.type === 'dialogue') {
                    const isMatchedRole = activeFilter === 'all' || activeFilter === item.character;
                    const matchesSearch =
                      !searchQuery ||
                      item.speaker.toLowerCase().includes(searchQuery.toLowerCase()) ||
                      item.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
                      (item.actionNote && item.actionNote.toLowerCase().includes(searchQuery.toLowerCase()));

                    if (!matchesSearch) return null;

                    return (
                      <div
                        key={idx}
                        className={`dialogue-item char-${item.character} ${isMatchedRole ? 'is-matched' : ''}`}
                        data-character={item.character}
                      >
                        <div className="dialogue-header">
                          <div className="speaker-wrap">
                            <span className="speaker-avatar">
                              {item.character === 'group' ? '👥' : item.speaker.charAt(0)}
                            </span>
                            <span className="speaker-badge">
                              {renderHighlightedText(item.speaker, searchQuery)}
                            </span>
                          </div>
                          <div className="dialogue-tools">
                            <button
                              className="speak-btn"
                              title="Nghe đọc giọng nói"
                              onClick={() => handleSpeak(item.speaker, item.text)}
                            >
                              🔈
                            </button>
                          </div>
                        </div>

                        <div className="dialogue-text">
                          {item.actionNote && (
                            <span className="action-note">
                              {renderHighlightedText(item.actionNote, searchQuery)}{' '}
                            </span>
                          )}
                          {renderHighlightedText(item.text, searchQuery)}
                        </div>
                      </div>
                    );
                  }

                  return null;
                })}
              </div>
            </article>
          ))}

          {/* Slogans Banner */}
          <section className="message-banner" id="thong-diep">
            <div className="message-star">⭐ ⭐ ⭐</div>
            <h2>THÔNG ĐIỆP TUYÊN TRUYỀN PHÁP LUẬT</h2>

            <div
              className="stage-dir-box"
              style={{
                background: 'rgba(255,255,255,0.08)',
                color: '#e2e8f0',
                borderLeftColor: 'var(--accent-gold)',
                maxWidth: '720px',
                margin: '0 auto 20px auto'
              }}
            >
              <span className="stage-dir-icon">🎬</span>
              <div>(Thượng úy Lai bước lên giữa sân khấu, tất cả các nhân vật xếp thành hàng ngang trang nghiêm phía sau).</div>
            </div>

            <div
              style={{
                fontSize: '1.15rem',
                fontStyle: 'italic',
                maxWidth: '700px',
                margin: '0 auto 24px auto',
                color: '#fef08a',
                lineHeight: '1.6'
              }}
            >
              “Một phút bốc đồng ham vui có thể đổi lấy nhiều ngày tháng ân hận.<br />
              Một lần buông lỏng kỷ luật không chỉ tự hủy hoại tương lai bản thân, mà còn làm tổn hại danh dự gia đình, tập thể và hình ảnh cao đẹp của người chiến sĩ Quân đội nhân dân Việt Nam!”
            </div>

            <div className="slogan-list">
              {SLOGANS.map((slogan, sIdx) => (
                <div key={sIdx} className="slogan-item">
                  {slogan}
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
