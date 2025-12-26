import { Component, ElementRef, ViewChild, AfterViewInit, HostListener, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-background-3d',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './background-3d.component.html',
  styleUrl: './background-3d.component.css'
})
export class Background3dComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private animationFrameId: number = 0;
  private mouse = { x: 0, y: 0 };
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit() {
    if (this.isBrowser) {
      this.initCanvas();
      this.createParticles();
      this.animate();
    }
  }

  ngOnDestroy() {
    if (this.isBrowser) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  @HostListener('window:resize')
  onResize() {
    if (this.isBrowser) {
      this.initCanvas();
      this.createParticles();
    }
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isBrowser) {
      this.mouse.x = event.clientX;
      this.mouse.y = event.clientY;
    }
  }

  private initCanvas() {
    if (!this.isBrowser) return;
    const canvas = this.canvasRef.nativeElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    this.ctx = canvas.getContext('2d')!;
  }

  private createParticles() {
    if (!this.isBrowser) return;
    this.particles = [];
    const numberOfParticles = Math.floor((window.innerWidth * window.innerHeight) / 15000);
    
    for (let i = 0; i < numberOfParticles; i++) {
      this.particles.push(new Particle(window.innerWidth, window.innerHeight));
    }
  }

  private animate() {
    if (!this.isBrowser) return;
    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    
    this.particles.forEach(particle => {
      particle.update(this.mouse);
      particle.draw(this.ctx);
      this.connectParticles(particle);
    });

    this.animationFrameId = requestAnimationFrame(() => this.animate());
  }

  private connectParticles(particle: Particle) {
    for (let other of this.particles) {
      const dx = particle.x - other.x;
      const dy = particle.y - other.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 120) {
        this.ctx.beginPath();
        this.ctx.strokeStyle = `rgba(178, 165, 255, ${1 - distance / 120})`;
        this.ctx.lineWidth = 0.5;
        this.ctx.moveTo(particle.x, particle.y);
        this.ctx.lineTo(other.x, other.y);
        this.ctx.stroke();
      }
    }
  }
}

class Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  baseX: number;
  baseY: number;
  density: number;

  constructor(width: number, height: number) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.baseX = this.x;
    this.baseY = this.y;
    this.size = Math.random() * 2 + 1;
    this.speedX = Math.random() * 1 - 0.5;
    this.speedY = Math.random() * 1 - 0.5;
    this.density = (Math.random() * 30) + 1;
  }

  update(mouse: { x: number, y: number }) {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x > window.innerWidth || this.x < 0) this.speedX *= -1;
    if (this.y > window.innerHeight || this.y < 0) this.speedY *= -1;

    const dx = mouse.x - this.x;
    const dy = mouse.y - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const forceDirectionX = dx / distance;
    const forceDirectionY = dy / distance;
    const maxDistance = 150;
    const force = (maxDistance - distance) / maxDistance;

    if (distance < maxDistance) {
      this.x -= forceDirectionX * force * this.density * 0.6;
      this.y -= forceDirectionY * force * this.density * 0.6;
    } else {
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = 'rgba(178, 165, 255, 0.8)';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}
