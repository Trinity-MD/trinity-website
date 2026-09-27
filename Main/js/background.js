/* =======================================
 * background.js - Animação de Partículas
 * ======================================= */

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas-bg');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particlesArray;

    // Configurações visuais
    const numberOfParticles = 100; // Quantidade de pontos (diminua se travar)
    const connectionDistance = 120; // Distância para criar linhas
    const moveSpeed = 0.3; // Velocidade (quanto menor, mais suave)

    // Ajusta o tamanho do canvas para a tela
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Classe Partícula
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            // Velocidade aleatória
            this.directionX = (Math.random() * moveSpeed) - (moveSpeed / 2); 
            this.directionY = (Math.random() * moveSpeed) - (moveSpeed / 2); 
            this.size = Math.random() * 2 + 1; // Tamanho entre 1 e 3
            
            // Cores Aleatórias (Cyan e Roxo do seu tema)
            const colors = ['#22d3ee', '#a855f7', '#ffffff'];
            this.color = colors[Math.floor(Math.random() * colors.length)];
        }

        // Desenha o ponto
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
            ctx.fillStyle = this.color;
            ctx.globalAlpha = 0.8; // Transparência do ponto
            ctx.fill();
        }

        // Atualiza a posição
        update() {
            // Se bater na borda, inverte a direção
            if (this.x > canvas.width || this.x < 0) {
                this.directionX = -this.directionX;
            }
            if (this.y > canvas.height || this.y < 0) {
                this.directionY = -this.directionY;
            }

            this.x += this.directionX;
            this.y += this.directionY;
            this.draw();
        }
    }

    // Criar array de partículas
    function init() {
        particlesArray = [];
        // Ajusta quantidade baseado no tamanho da tela (menos em celular)
        const density = (canvas.width * canvas.height) / 15000;
        const count = Math.min(numberOfParticles, density); // Limite máximo

        for (let i = 0; i < count; i++) {
            particlesArray.push(new Particle());
        }
    }

    // Conectar pontos próximos com linhas
    function connect() {
        for (let a = 0; a < particlesArray.length; a++) {
            for (let b = a; b < particlesArray.length; b++) {
                // Calcula distância (Pitágoras)
                let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x))
                             + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
                
                if (distance < (connectionDistance * connectionDistance)) {
                    ctx.strokeStyle = 'rgba(103, 232, 249, 0.25)'; // Linha Cyan bem transparente
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                    ctx.stroke();
                }
            }
        }
    }

    // Loop de Animação
    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa a tela anterior

        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
        }
        connect();
    }

    // Redimensionar janela
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init();
    });

    // Iniciar
    init();
    animate();
});