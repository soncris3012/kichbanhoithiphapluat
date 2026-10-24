/**
 * KỊCH BẢN HỘI THI PHÁP LUẬT: "RƯỢU VÀO... KỶ LUẬT RA"
 * Interactive Logic, Filtering, Rehearsal Mode & Teleprompter
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const searchInput = document.getElementById('scriptSearch');
  const filterPills = document.querySelectorAll('.pill-btn');
  const castCards = document.querySelectorAll('.cast-card');
  const dialogueItems = document.querySelectorAll('.dialogue-item');
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const rehearsalToggleBtn = document.getElementById('rehearsalToggleBtn');
  const prompterToggleBtn = document.getElementById('prompterToggleBtn');
  const prompterDock = document.getElementById('prompterDock');
  const prompterPlayBtn = document.getElementById('prompterPlayBtn');
  const prompterSpeedInput = document.getElementById('prompterSpeed');
  const speedLabel = document.getElementById('speedLabel');
  const prompterCloseBtn = document.getElementById('prompterCloseBtn');
  const sceneNavItems = document.querySelectorAll('.scene-nav-item');
  const sceneBlocks = document.querySelectorAll('.scene-block');

  // State
  let activeFilter = 'all';
  let isRehearsalActive = false;
  let isPrompterRunning = false;
  let prompterInterval = null;
  let prompterSpeed = 2; // px per tick

  // 1. Character Filter Handler
  function setCharacterFilter(role) {
    activeFilter = role;

    // Update Pill UI
    filterPills.forEach(p => {
      p.classList.toggle('active', p.getAttribute('data-filter') === role);
    });

    if (role === 'all') {
      document.body.classList.remove('is-filtering');
      dialogueItems.forEach(item => {
        item.classList.remove('is-matched');
        item.classList.remove('revealed');
      });
    } else {
      document.body.classList.add('is-filtering');
      dialogueItems.forEach(item => {
        const itemChar = item.getAttribute('data-character');
        const isMatch = itemChar === role;
        item.classList.toggle('is-matched', isMatch);
        item.classList.remove('revealed'); // reset revealed state
      });
    }

    // Update Rehearsal mode indication if needed
    updateRehearsalState();
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
        // Scroll smoothly to first match
        const firstMatch = document.querySelector(`.dialogue-item[data-character="${role}"]`);
        if (firstMatch) {
          firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    });
  });

  // 3. Search Filter with Real-time Text Highlighting
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();

    dialogueItems.forEach(item => {
      const textElem = item.querySelector('.dialogue-text');
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
        // Highlight matched text
        const regex = new RegExp(`(${query.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')})`, 'gi');
        textElem.innerHTML = originalText.replace(regex, '<mark class="search-highlight">$1</mark>');
      } else {
        if (activeFilter === 'all') {
          item.style.display = 'none';
        }
      }
    });
  });

  // 4. Rehearsal Mode (Che lời thoại để luyện tập)
  function updateRehearsalState() {
    if (isRehearsalActive) {
      document.body.classList.add('rehearsal-active');
      rehearsalToggleBtn.classList.add('btn-primary');
      rehearsalToggleBtn.innerHTML = '🎯 Đang học thoại (Bật)';
    } else {
      document.body.classList.remove('rehearsal-active');
      rehearsalToggleBtn.classList.remove('btn-primary');
      rehearsalToggleBtn.innerHTML = '🎯 Luyện học thoại';
    }
  }

  rehearsalToggleBtn.addEventListener('click', () => {
    if (activeFilter === 'all') {
      alert('💡 Mẹo: Hãy chọn một nhân vật bên dưới để bật chế độ che thoại tập dượt cho vai đó!');
      // auto pick Son
      setCharacterFilter('son');
    }
    isRehearsalActive = !isRehearsalActive;
    updateRehearsalState();
  });

  // Click on hidden dialogue to reveal in rehearsal mode
  dialogueItems.forEach(item => {
    const textElem = item.querySelector('.dialogue-text');
    if (textElem) {
      textElem.addEventListener('click', () => {
        if (isRehearsalActive && item.classList.contains('is-matched')) {
          item.classList.toggle('revealed');
        }
      });
    }
  });

  // 5. Teleprompter Auto-Scroll
  prompterToggleBtn.addEventListener('click', () => {
    prompterDock.classList.toggle('show');
    if (prompterDock.classList.contains('show')) {
      startPrompter();
    } else {
      stopPrompter();
    }
  });

  prompterCloseBtn.addEventListener('click', () => {
    prompterDock.classList.remove('show');
    stopPrompter();
  });

  function startPrompter() {
    if (prompterInterval) clearInterval(prompterInterval);
    isPrompterRunning = true;
    prompterPlayBtn.innerHTML = '⏸️ Tạm dừng';
    prompterInterval = setInterval(() => {
      window.scrollBy({ top: prompterSpeed, behavior: 'instant' });
      // Stop if reached bottom
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 10) {
        stopPrompter();
      }
    }, 50);
  }

  function stopPrompter() {
    if (prompterInterval) clearInterval(prompterInterval);
    isPrompterRunning = false;
    prompterPlayBtn.innerHTML = '▶️ Tiếp tục';
  }

  prompterPlayBtn.addEventListener('click', () => {
    if (isPrompterRunning) {
      stopPrompter();
    } else {
      startPrompter();
    }
  });

  prompterSpeedInput.addEventListener('input', (e) => {
    prompterSpeed = parseInt(e.target.value, 10);
    speedLabel.textContent = `${prompterSpeed}x`;
  });
  // Dark / Light Mode Toggle
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

  // Text-to-Speech (Đọc thoại Tiếng Việt)
  const speakButtons = document.querySelectorAll('.speak-btn');
  let currentUtterance = null;

  speakButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const parent = btn.closest('.dialogue-item');
      if (!parent) return;

      const speaker = parent.querySelector('.speaker-badge')?.textContent || '';
      const textElem = parent.querySelector('.dialogue-text');
      // Clean action notes for speech
      const clone = textElem.cloneNode(true);
      clone.querySelectorAll('.action-note').forEach(n => n.remove());
      const cleanText = clone.textContent.trim();

      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const speechText = `${speaker} nói: ${cleanText}`;
        currentUtterance = new SpeechSynthesisUtterance(speechText);
        currentUtterance.lang = 'vi-VN';
        currentUtterance.rate = 1.0;
        
        // Find Vietnamese voice if available
        const voices = window.speechSynthesis.getVoices();
        const viVoice = voices.find(v => v.lang.includes('vi'));
        if (viVoice) currentUtterance.voice = viVoice;

        btn.innerHTML = '🔊';
        currentUtterance.onend = () => { btn.innerHTML = '🔈'; };
        currentUtterance.onerror = () => { btn.innerHTML = '🔈'; };

        window.speechSynthesis.speak(currentUtterance);
      } else {
        alert('Trình duyệt của bạn chưa hỗ trợ đọc giọng nói!');
      }
    });
  });

  // 10. ScrollSpy for Scene Navigation Bar
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
});
