(function() {
    const baseColors = [
        '#ff00ff', // Pink
        '#800080', // Purple
        '#00ff00', // Green
        '#ff1493', // Deep Pink
        '#00ffff', // Cyan
    ];

    const idColorMap = new Map();
    let colorIndex = 0;

    // Function to generate a random neon color
    function getRandomNeonColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function getColorForId(id) {
        if (idColorMap.has(id)) {
            return idColorMap.get(id);
        } else {
            let color;
            if (colorIndex < baseColors.length) {
                color = baseColors[colorIndex];
                colorIndex++;
            } else {
                do {
                    color = getRandomNeonColor();
                } while (idColorMap.has(color));
            }
            idColorMap.set(id, color);
            return color;
        }
    }

    document.querySelectorAll('button').forEach((button) => {
        const id = button.id || button.innerText || Math.random().toString();
        const color = getColorForId(id);

        button.style.fontSize = '20px';
        button.style.padding = '15px 30px';
        button.style.border = `2px solid ${color}`;
        button.style.color = color;
        button.style.backgroundColor = 'transparent';
        button.style.borderRadius = '5px';
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.style.textTransform = 'uppercase';
        button.style.transition = 'all 0.3s ease-in-out';
        button.style.boxShadow = `0 0 10px ${color}, 0 0 20px ${color}`;
        
        const span = document.createElement('span');
        span.innerText = button.innerText;
        span.style.position = 'relative';
        span.style.zIndex = '1';
        span.style.textShadow = `
            0 0 5px ${color},
            0 0 10px ${color},
            0 0 15px ${color}
        `;
        
        button.innerHTML = '';
        button.appendChild(span);

        const glowEffect = document.createElement('div');
        glowEffect.style.content = '';
        glowEffect.style.position = 'absolute';
        glowEffect.style.top = '100%';
        glowEffect.style.left = '-50%';
        glowEffect.style.width = '200%';
        glowEffect.style.height = '200%';
        glowEffect.style.backgroundColor = color;
        glowEffect.style.filter = 'blur(20px)';
        glowEffect.style.zIndex = '-1';

        button.appendChild(glowEffect);
    });
})();
