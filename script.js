// Inject style CSS into the document
const style = document.createElement("style");
style.textContent = `
    body {
        font-family: 'Poppins', sans-serif;
    }

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

// Your interactive script can go here (e.g., content creation)
document.getElementById("root").innerHTML = `
    <div class="flex flex-col items-center justify-center text-center py-20 px-4 space-y-6 star-field">
        <h1 class="text-4xl md:text-6xl font-bold gradient-text-purple-pink animate-glow-pulse">Welcome to Bugzy's World 💜</h1>
        <p class="text-lg md:text-2xl gradient-text-purple-light">A secret magical corner of the universe made just for you.</p>
        <div class="p-6 rounded-2xl card-gradient max-w-xl hover-glow transition-all duration-300">
            <p class="text-white text-md md:text-lg">You’re not just loved. You’re adored. Cherished. Worshipped. This world exists because your smile deserves its own galaxy. ✨</p>
        </div>
    </div>
`;
