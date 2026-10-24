/**
 * KỊCH BẢN HỘI THI PHÁP LUẬT: "RƯỢU VÀO... KỶ LUẬT RA"
 * Interactive Logic, Realtime Search & Character Filtering
 */

document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const searchInput = document.getElementById('scriptSearch');
  const filterPills = document.querySelectorAll('.pill-btn');
  const castCards = document.querySelectorAll('.cast-card');
  const dialogueItems = document.querySelectorAll('.dialogue-item');
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const sceneNavItems = document.querySelectorAll('.scene-nav-item');
  const sceneBlocks = document.querySelectorAll('.scene-block');

  let activeFilter = 'all';

  // 1. Character Filter Handler
  function setCharacterFilter(role) {
    activeFilter = role;

    // Update Pill Buttons Active State
    filterPills.forEach(p => {
      p.classList.toggle('active', p.getAttribute('data-filter') === role);
    });

    if (role === 'all') {
      document.body.classList.remove('is-filtering');
      dialogueItems.forEach(item => {
        item.classList.remove('is-matched');
      });
    } else {
      document.body.classList.add('is-filtering');
      dialogueItems.forEach(item => {
        const itemChar = item.getAttribute('data-character');
        const isMatch = itemChar === role;
        item.classList.toggle('is-matched', isMatch);
      });
    }
  }

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const role = pill.getAttribute('data-filter');
      setCharacterFilter(role);
    });
  });

  castCards.forEach(card => {
    card.addEventListener('click', () => {
      const role = card.getAttribute('data-character');
      if (role) {
        setCharacterFilter(role);
        const firstMatch = document.querySelector(`.dialogue-item[data-character="${role}"]`);
        if (firstMatch) {
          firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    });
  });

  // 2. Realtime Search with Text Highlighting
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.trim().toLowerCase();

      dialogueItems.forEach(item => {
        const textElem = item.querySelector('.dialogue-text');
        if (!textElem) return;

        const originalText = textElem.getAttribute('data-original') || textElem.textContent;
        if (!textElem.getAttribute('data-original')) {
          textElem.setAttribute('data-original', originalText);
        }

        if (!query) {
          textElem.innerHTML = originalText;
          if (activeFilter === 'all') {
            item.style.display = '';
          }
          return;
        }

        const rawContent = item.textContent.toLowerCase();
        if (rawContent.includes(query)) {
          item.style.display = '';
          const regex = new RegExp(`(${query.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')})`, 'gi');
          textElem.innerHTML = originalText.replace(regex, '<mark class="search-highlight">$1</mark>');
        } else {
          if (activeFilter === 'all') {
            item.style.display = 'none';
          }
        }
      });
    });
  }

  // 3. Dark / Light Mode Toggle with Persistence
  if (themeToggleBtn) {
    const savedTheme = localStorage.getItem('kb-theme') || 'light';
    if (savedTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      themeToggleBtn.innerHTML = '☀️ Sáng';
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      themeToggleBtn.innerHTML = '🌙 Tối';
    }

    themeToggleBtn.addEventListener('click', () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      if (isDark) {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('kb-theme', 'light');
        themeToggleBtn.innerHTML = '🌙 Tối';
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('kb-theme', 'dark');
        themeToggleBtn.innerHTML = '☀️ Sáng';
      }
    });
  }

  // 4. Text-to-Speech (Đọc thoại Tiếng Việt)
  const speakButtons = document.querySelectorAll('.speak-btn');
  let currentUtterance = null;

  speakButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const parent = btn.closest('.dialogue-item');
      if (!parent) return;

      const speaker = parent.querySelector('.speaker-badge')?.textContent || '';
      const textElem = parent.querySelector('.dialogue-text');
      const clone = textElem.cloneNode(true);
      clone.querySelectorAll('.action-note').forEach(n => n.remove());
      const cleanText = clone.textContent.trim();

      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const speechText = `${speaker} nói: ${cleanText}`;
        currentUtterance = new SpeechSynthesisUtterance(speechText);
        currentUtterance.lang = 'vi-VN';
        currentUtterance.rate = 1.0;

        const voices = window.speechSynthesis.getVoices();
        const viVoice = voices.find(v => v.lang.includes('vi'));
        if (viVoice) currentUtterance.voice = viVoice;

        btn.innerHTML = '🔊';
        currentUtterance.onend = () => { btn.innerHTML = '🔈'; };
        currentUtterance.onerror = () => { btn.innerHTML = '🔈'; };

        window.speechSynthesis.speak(currentUtterance);
      } else {
        alert('Trình duyệt chưa hỗ trợ phát âm thanh.');
      }
    });
  });

  // 5. ScrollSpy for Scene Navigation Tabs
  if (sceneBlocks.length && sceneNavItems.length) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          sceneNavItems.forEach(item => {
            item.classList.toggle('active', item.getAttribute('href') === `#${id}`);
          });
        }
      });
    }, observerOptions);

    sceneBlocks.forEach(block => observer.observe(block));
  }
});
