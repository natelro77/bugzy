// Bugzy's World - Consolidated JavaScript
// This is a React application converted to vanilla JavaScript

// Authentication state management
let isAuthenticated = false;
let currentUser = null;

// Router state
let currentRoute = '/';

// DOM utility functions
function createElement(tag, props = {}, ...children) {
  const element = document.createElement(tag);
  
  Object.entries(props).forEach(([key, value]) => {
    if (key === 'className') {
      element.className = value;
    } else if (key.startsWith('on') && typeof value === 'function') {
      element.addEventListener(key.substring(2).toLowerCase(), value);
    } else {
      element.setAttribute(key, value);
    }
  });
  
  children.forEach(child => {
    if (typeof child === 'string') {
      element.appendChild(document.createTextNode(child));
    } else if (child) {
      element.appendChild(child);
    }
  });
  
  return element;
}

// Animation utilities
function animateElement(element, keyframes, options = {}) {
  if (element.animate) {
    return element.animate(keyframes, {
      duration: 1000,
      iterations: 1,
      ...options
    });
  }
}

// Floating elements component
function createFloatingElements() {
  const container = createElement('div', {
    className: 'fixed inset-0 pointer-events-none z-0'
  });

  // Star field background
  const starField = createElement('div', {
    className: 'star-field w-full h-full opacity-60'
  });
  container.appendChild(starField);

  // Floating items data
  const floatingItems = [
    { icon: '💖', color: 'text-pink-400', delay: 0, x: '10%', y: '20%' },
    { icon: '⭐', color: 'text-purple-400', delay: 1000, x: '80%', y: '40%' },
    { icon: '💖', color: 'text-pink-400', delay: 2000, x: '20%', y: '70%' },
    { icon: '⭐', color: 'text-purple-300', delay: 1500, x: '90%', y: '20%' },
    { icon: '✨', color: 'text-purple-400', delay: 3000, x: '30%', y: '60%' },
    { icon: '💖', color: 'text-pink-400', delay: 500, x: '70%', y: '80%' }
  ];

  floatingItems.forEach((item, index) => {
    const element = createElement('div', {
      className: `absolute ${item.color} text-xl opacity-60`,
      style: `left: ${item.x}; top: ${item.y}; font-size: 24px;`
    }, item.icon);

    container.appendChild(element);

    // Animate floating elements
    setTimeout(() => {
      if (element.animate) {
        element.animate([
          { transform: 'translateY(0px)', opacity: 0.6 },
          { transform: 'translateY(-20px)', opacity: 1 },
          { transform: 'translateY(0px)', opacity: 0.6 }
        ], {
          duration: 3000,
          iterations: Infinity,
          easing: 'ease-in-out'
        });
      }
    }, item.delay);
  });

  return container;
}

// Landing page
function createLandingPage() {
  const container = createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden'
  });

  container.appendChild(createFloatingElements());

  const content = createElement('div', {
    className: 'text-center z-10 relative max-w-2xl mx-auto px-6'
  });

  const title = createElement('h1', {
    className: 'text-6xl md:text-8xl font-bold mb-8 gradient-text-purple-pink animate-glow-pulse'
  }, "Bugzy's World 💜");

  const subtitle = createElement('p', {
    className: 'text-xl md:text-2xl mb-12 text-purple-200 animate-fade-in'
  }, 'A magical private digital space made just for you - filled with love, surprises, and comfort.');

  const passwordInput = createElement('input', {
    type: 'password',
    placeholder: 'Enter the magic word...',
    className: 'w-full max-w-md mx-auto mb-2 px-6 py-4 text-lg bg-purple-900/30 border border-purple-400/50 rounded-full text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent backdrop-blur-sm',
    id: 'passwordInput'
  });

  const hint = createElement('p', {
    className: 'text-sm text-purple-300 mb-6 text-center italic'
  }, '💡 Hint: your middle name + my fav number');

  const enterButton = createElement('button', {
    className: 'px-8 py-4 text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 animate-bounce-gentle',
    onclick: handleLogin
  }, 'Enter My World ✨');

  content.appendChild(title);
  content.appendChild(subtitle);
  content.appendChild(passwordInput);
  content.appendChild(hint);
  content.appendChild(enterButton);
  container.appendChild(content);

  return container;
}

// Main navigation page
function createMainPage() {
  const container = createElement('div', {
    className: 'min-h-screen bg-black text-white relative overflow-hidden'
  });

  container.appendChild(createFloatingElements());

  const content = createElement('div', {
    className: 'relative z-10 max-w-6xl mx-auto px-6 py-12'
  });

  const header = createElement('div', {
    className: 'text-center mb-16'
  });

  const title = createElement('h1', {
    className: 'text-5xl md:text-7xl font-bold mb-6 gradient-text-purple-pink animate-glow-pulse'
  }, "Welcome to Your World 💜");

  const subtitle = createElement('p', {
    className: 'text-xl text-purple-200 max-w-2xl mx-auto'
  }, 'Choose your adventure, beautiful soul');

  header.appendChild(title);
  header.appendChild(subtitle);
  content.appendChild(header);

  const navigationItems = [
    {
      title: "Love Notes",
      description: "Sweet messages just for you",
      icon: "💌",
      route: "/love-notes"
    },
    {
      title: "Open a Surprise",
      description: "Random sweet moments",
      icon: "🎁",
      route: "/surprise"
    },
    {
      title: "Gift Box",
      description: "A special surprise awaits",
      icon: "📦",
      route: "/gift-box"
    },
    {
      title: "Mirror",
      description: "See your beautiful self",
      icon: "🪞",
      route: "/mirror"
    },
    {
      title: "If You're Sad",
      description: "Comfort when you need it",
      icon: "🌧️",
      route: "/comfort"
    }
  ];

  const grid = createElement('div', {
    className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
  });

  navigationItems.forEach(item => {
    const card = createElement('div', {
      className: 'card-gradient rounded-3xl p-8 hover:scale-105 transition-all duration-300 cursor-pointer hover-glow border border-purple-400/30',
      onclick: () => navigateTo(item.route)
    });

    const icon = createElement('div', {
      className: 'text-6xl mb-4 text-center animate-bounce-gentle'
    }, item.icon);

    const cardTitle = createElement('h3', {
      className: 'text-2xl font-bold mb-3 text-center gradient-text-purple-light'
    }, item.title);

    const description = createElement('p', {
      className: 'text-purple-200 text-center'
    }, item.description);

    card.appendChild(icon);
    card.appendChild(cardTitle);
    card.appendChild(description);
    grid.appendChild(card);
  });

  content.appendChild(grid);
  container.appendChild(content);

  return container;
}

// Custom mirror page
function createCustomMirrorPage() {
  const container = createElement('div', {
    className: 'min-h-screen flex flex-col items-center justify-center text-center px-4 sparkle relative overflow-hidden'
  });

  container.appendChild(createFloatingElements());

  const content = createElement('div', {
    className: 'relative z-10'
  });

  const backButton = createElement('button', {
    className: 'absolute top-6 left-6 px-4 py-2 bg-purple-600/50 hover:bg-purple-600/70 rounded-full text-white transition-all duration-200',
    onclick: () => navigateTo('/')
  }, '← Back to World');

  const title = createElement('h1', {
    className: 'text-5xl md:text-6xl font-bold gradient-text-purple-pink mb-4'
  }, '✨ Mirror ✨');

  const subtitle = createElement('p', {
    className: 'text-xl mb-6 text-purple-200'
  }, 'Click to see something magical...');

  const mirrorButton = createElement('button', {
    className: 'bg-purple-700 hover:bg-purple-800 px-6 py-3 rounded-full text-lg font-semibold transition-all duration-200 transform hover:scale-105',
    onclick: showKuromi
  }, 'Open Mirror');

  const mirrorResult = createElement('div', {
    className: 'mt-10 hidden flex-col items-center space-y-4',
    id: 'mirrorResult'
  });

  const kuromiImg = createElement('img', {
    src: 'https://media.tenor.com/dgPNgHcGXe0AAAAi/kuromi-wink.gif',
    alt: 'Kuromi Wink',
    className: 'w-32 animate-bounce-gentle rounded-full border-4 border-purple-500 shadow-lg'
  });

  const kuromiImg2 = createElement('img', {
    src: 'https://media.tenor.com/1pxXHf5gFvoAAAAi/kuromi.gif',
    alt: 'Kuromi Dancing',
    className: 'w-28 animate-bounce-gentle rounded-full border-4 border-pink-500 shadow-lg ml-4'
  });

  const kuromiContainer = createElement('div', {
    className: 'flex items-center justify-center space-x-4'
  });

  const rating = createElement('h2', {
    className: 'text-3xl font-bold text-purple-300 gradient-text-purple-pink'
  }, '10/10 😤💅');

  const message = createElement('p', {
    className: 'text-lg text-white'
  }, "Still the prettiest girl I've ever known.");

  // Create floating hearts
  const floatingHeart1 = createElement('div', {
    className: 'floating-heart absolute animate-float-heart'
  }, '💜');

  const floatingHeart2 = createElement('div', {
    className: 'floating-heart-2 absolute animate-float-heart-delayed'
  }, '💗');

  const floatingHeart3 = createElement('div', {
    className: 'floating-heart-3 absolute animate-float-heart-slow'
  }, '💖');

  kuromiContainer.appendChild(kuromiImg);
  kuromiContainer.appendChild(kuromiImg2);
  
  mirrorResult.appendChild(kuromiContainer);
  mirrorResult.appendChild(rating);
  mirrorResult.appendChild(message);
  mirrorResult.appendChild(floatingHeart1);
  mirrorResult.appendChild(floatingHeart2);
  mirrorResult.appendChild(floatingHeart3);

  content.appendChild(title);
  content.appendChild(subtitle);
  content.appendChild(mirrorButton);
  content.appendChild(mirrorResult);

  container.appendChild(backButton);
  container.appendChild(content);

  return container;
}

// Show Kuromi function for mirror
function showKuromi() {
  const mirrorResult = document.getElementById('mirrorResult');
  if (mirrorResult) {
    mirrorResult.classList.remove('hidden');
    mirrorResult.classList.add('flex');
  }
}

// Simple page creator for other routes
function createSimplePage(title, content, emoji = '💜') {
  const container = createElement('div', {
    className: 'min-h-screen bg-black text-white relative overflow-hidden'
  });

  container.appendChild(createFloatingElements());

  const pageContent = createElement('div', {
    className: 'relative z-10 max-w-4xl mx-auto px-6 py-12'
  });

  const header = createElement('div', {
    className: 'text-center mb-12'
  });

  const backButton = createElement('button', {
    className: 'absolute top-6 left-6 px-4 py-2 bg-purple-600/50 hover:bg-purple-600/70 rounded-full text-white transition-all duration-200',
    onclick: () => navigateTo('/')
  }, '← Back to World');

  const pageTitle = createElement('h1', {
    className: 'text-5xl md:text-6xl font-bold mb-6 gradient-text-purple-pink'
  }, `${title} ${emoji}`);

  const pageText = createElement('div', {
    className: 'text-xl text-purple-200 max-w-3xl mx-auto card-gradient rounded-2xl p-8'
  }, content);

  header.appendChild(pageTitle);
  pageContent.appendChild(backButton);
  pageContent.appendChild(header);
  pageContent.appendChild(pageText);
  container.appendChild(pageContent);

  return container;
}

// Authentication handler
function handleLogin() {
  const passwordInput = document.getElementById('passwordInput');
  const password = passwordInput.value.toLowerCase().trim();
  
  // Simple password check (you can modify this)
  if (password === 'leigh7') {
    isAuthenticated = true;
    currentUser = 'Bugzy';
    navigateTo('/');
  } else {
    // Show error animation
    passwordInput.style.borderColor = '#ef4444';
    passwordInput.value = '';
    passwordInput.placeholder = 'Try again, beautiful 💜';
    
    setTimeout(() => {
      passwordInput.style.borderColor = '';
      passwordInput.placeholder = 'Enter the magic word...';
    }, 2000);
  }
}

// Navigation function
function navigateTo(route) {
  currentRoute = route;
  renderCurrentPage();
}

// Page renderer
function renderCurrentPage() {
  const app = document.getElementById('root');
  if (!app) return;

  // Clear current content
  app.innerHTML = '';

  let page;

  if (!isAuthenticated) {
    page = createLandingPage();
  } else {
    switch (currentRoute) {
      case '/':
        page = createMainPage();
        break;
      case '/love-notes':
        page = createSimplePage(
          'Love Notes',
          'Every day I fall more in love with your beautiful soul. You bring magic into every moment, and I am so grateful to have you in my life. Your smile lights up my world, and your laugh is my favorite song. You are absolutely perfect just as you are. 💕'
        );
        break;
      case '/surprise':
        const surprises = [
          'You are the most beautiful person, inside and out! ✨',
          'Did you know your smile can light up an entire room? 😊',
          'You make everything better just by being you 💖',
          'I believe in you and all your dreams! 🌟',
          'You are stronger than you know and braver than you feel 💪',
          'Your kindness makes the world a better place 🌍'
        ];
        const randomSurprise = surprises[Math.floor(Math.random() * surprises.length)];
        page = createSimplePage('Surprise!', randomSurprise, '🎉');
        break;
      case '/gift-box':
        page = createSimplePage(
          'Gift Box',
          'Inside this magical gift box is the most precious gift of all - YOU! You are a gift to this world, bringing joy, love, and light wherever you go. Never forget how special and loved you are. 🎁✨',
          '🎁'
        );
        break;
      case '/mirror':
        page = createCustomMirrorPage();
        break;
      case '/comfort':
        page = createSimplePage(
          'Comfort Corner',
          'Hey beautiful, it\'s okay to feel sad sometimes. You don\'t have to be strong all the time. I\'m here for you, always. Take deep breaths, be gentle with yourself, and remember that this feeling will pass. You are loved beyond measure. 🤗💜',
          '🌧️'
        );
        break;
      default:
        page = createSimplePage('Page Not Found', 'This magical place doesn\'t exist yet! Let\'s go back home. 🏠', '❓');
    }
  }

  app.appendChild(page);
}

// Initialize the application
function initApp() {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderCurrentPage);
  } else {
    renderCurrentPage();
  }

  // Handle browser back/forward buttons
  window.addEventListener('popstate', (event) => {
    currentRoute = window.location.pathname;
    renderCurrentPage();
  });
}

// Start the application
initApp();

// Add some global styles programmatically
function addGlobalStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .gradient-text-purple-pink {
      background: linear-gradient(to right, hsl(262, 83%, 70%), hsl(328, 85%, 70%));
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
    .gradient-text-purple-light {
      background: linear-gradient(to right, hsl(266, 85%, 78%), hsl(210, 40%, 80%));
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
    .card-gradient {
      background: linear-gradient(135deg, 
        hsl(258, 90%, 66%, 0.4), 
        hsl(262, 83%, 70%, 0.4)
      );
      backdrop-filter: blur(10px);
    }
    
    .hover-glow:hover {
      box-shadow: 0 0 25px hsl(262, 83%, 70%, 0.6);
    }
    
    .animate-glow-pulse {
      animation: glowPulse 2s ease-in-out infinite alternate;
    }
    
    .animate-bounce-gentle {
      animation: bounceGentle 2s ease-in-out infinite;
    }
    
    @keyframes glowPulse {
      0% { 
        text-shadow: 0 0 20px hsl(262, 83%, 70%, 0.5); 
      }
      100% { 
        text-shadow: 0 0 30px hsl(262, 83%, 70%, 0.8), 0 0 40px hsl(266, 85%, 78%, 0.3); 
      }
    }
    
    @keyframes bounceGentle {
      0%, 100% { 
        transform: translateY(0px); 
      }
      50% { 
        transform: translateY(-10px); 
      }
    }
    
    @keyframes floatHeart {
      0% {
        transform: translateY(0px) translateX(0px) scale(1);
        opacity: 0.8;
      }
      25% {
        transform: translateY(-20px) translateX(10px) scale(1.1);
        opacity: 1;
      }
      50% {
        transform: translateY(-40px) translateX(-5px) scale(0.9);
        opacity: 0.9;
      }
      75% {
        transform: translateY(-60px) translateX(15px) scale(1.2);
        opacity: 0.7;
      }
      100% {
        transform: translateY(-80px) translateX(0px) scale(0.8);
        opacity: 0.5;
      }
    }
    
    .floating-heart {
      font-size: 1.5rem;
      top: 60%;
      left: 20%;
      pointer-events: none;
      z-index: 5;
    }
    
    .floating-heart-2 {
      font-size: 1.2rem;
      top: 70%;
      right: 25%;
      pointer-events: none;
      z-index: 5;
    }
    
    .floating-heart-3 {
      font-size: 1.8rem;
      top: 50%;
      right: 15%;
      pointer-events: none;
      z-index: 5;
    }
    
    .animate-float-heart {
      animation: floatHeart 4s ease-in-out infinite;
    }
    
    .animate-float-heart-delayed {
      animation: floatHeart 4s ease-in-out infinite 1.5s;
    }
    
    .animate-float-heart-slow {
      animation: floatHeart 5s ease-in-out infinite 3s;
    }
    
    .star-field {
      background-image: 
        radial-gradient(2px 2px at 20px 30px, #ffffff, transparent),
        radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.8), transparent),
        radial-gradient(1px 1px at 90px 40px, #ffffff, transparent),
        radial-gradient(1px 1px at 130px 80px, rgba(255,255,255,0.6), transparent),
        radial-gradient(2px 2px at 160px 30px, #ffffff, transparent);
      background-repeat: repeat;
      background-size: 200px 100px;
    }
  `;
  document.head.appendChild(style);
}

// Add styles when script loads
addGlobalStyles();

// Export functions for external use
window.BugzysWorld = {
  navigateTo,
  handleLogin,
  initApp
};
