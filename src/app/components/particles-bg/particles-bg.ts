import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  PLATFORM_ID,
  inject,
  viewChild,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  baseOpacity: number;
}

@Component({
  selector: 'app-particles-bg',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<canvas #canvas aria-hidden="true"></canvas>`,
  styles: `
    :host {
      display: block;
      position: fixed;
      inset: 0;
      z-index: 0;
      pointer-events: none;
    }
    canvas {
      width: 100%;
      height: 100%;
      display: block;
    }
  `,
})
export class ParticlesBg implements AfterViewInit, OnDestroy {
  private readonly canvasRef = viewChild.required<ElementRef<HTMLCanvasElement>>('canvas');
  private readonly zone = inject(NgZone);
  private readonly platformId = inject(PLATFORM_ID);

  private ctx!: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private animationId = 0;
  private mouseX = -9999;
  private mouseY = -9999;
  private width = 0;
  private height = 0;
  private dpr = 1;

  // Configuration Constants
  private readonly MOUSE_RADIUS = 180;
  private readonly DENSITY = 0.8; // Reduced from 1.6 for a cleaner look
  private readonly BASE_SPEED = 0.3; // Speed multiplier for autonomous drift
  private readonly REPEL_FORCE = 1.2; // How strongly the mouse pushes particles

  // Colour: --color-secondary (#ab00a2)
  private readonly PARTICLE_R = 171;
  private readonly PARTICLE_G = 0;
  private readonly PARTICLE_B = 162;

  private readonly onMouseMove = (e: MouseEvent) => {
    this.mouseX = e.clientX * this.dpr;
    this.mouseY = e.clientY * this.dpr;
  };

  private readonly onMouseLeave = () => {
    this.mouseX = -9999;
    this.mouseY = -9999;
  };

  private readonly onResize = () => this.resize();

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const canvas = this.canvasRef().nativeElement;
    this.ctx = canvas.getContext('2d')!;
    this.dpr = window.devicePixelRatio || 1;

    this.resize();
    this.initParticles();

    document.addEventListener('mousemove', this.onMouseMove, { passive: true });
    document.addEventListener('mouseleave', this.onMouseLeave);
    window.addEventListener('resize', this.onResize, { passive: true });

    this.zone.runOutsideAngular(() => this.animate());
  }

  ngOnDestroy(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    cancelAnimationFrame(this.animationId);
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseleave', this.onMouseLeave);
    window.removeEventListener('resize', this.onResize);
  }

  private resize(): void {
    const canvas = this.canvasRef().nativeElement;
    this.width = window.innerWidth * this.dpr;
    this.height = window.innerHeight * this.dpr;
    canvas.width = this.width;
    canvas.height = this.height;
  }

  private initParticles(): void {
    const area = this.width * this.height;
    const count = Math.floor((area / 10_000) * this.DENSITY);
    this.particles = [];

    for (let i = 0; i < count; i++) {
      const x = Math.random() * this.width;
      const y = Math.random() * this.height;
      const radius = Math.random() * 3.5 + 1.5;
      const baseOpacity = Math.random() * 0.3 + 0.08;

      this.particles.push({
        x,
        y,
        baseX: x,
        baseY: y,
        vx: (Math.random() - 0.5) * this.BASE_SPEED,
        vy: (Math.random() - 0.5) * this.BASE_SPEED,
        radius,
        opacity: baseOpacity,
        baseOpacity,
      });
    }
  }

  private animate(): void {
    this.ctx.clearRect(0, 0, this.width, this.height);

    const mr = this.MOUSE_RADIUS * this.dpr;
    const mr2 = mr * mr;

    for (const p of this.particles) {
      // Gentle autonomous drift
      p.x += p.vx;
      p.y += p.vy;

      // Wrap around edges softly
      if (p.x < -10) p.x = this.width + 10;
      if (p.x > this.width + 10) p.x = -10;
      if (p.y < -10) p.y = this.height + 10;
      if (p.y > this.height + 10) p.y = -10;

      // Mouse interaction: repel gently and brighten
      const dx = p.x - this.mouseX;
      const dy = p.y - this.mouseY;
      const dist2 = dx * dx + dy * dy;

      if (dist2 < mr2) {
        const dist = Math.sqrt(dist2);
        const force = (mr - dist) / mr; // 0 → 1 as particle gets closer
        const angle = Math.atan2(dy, dx);

        // Repel
        p.x += Math.cos(angle) * force * this.REPEL_FORCE;
        p.y += Math.sin(angle) * force * this.REPEL_FORCE;

        // Brighten on proximity
        p.opacity = p.baseOpacity + force * 0.45;
      } else {
        // Ease back to base opacity
        p.opacity += (p.baseOpacity - p.opacity) * 0.02;
      }

      // Draw
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius * this.dpr, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(${this.PARTICLE_R},${this.PARTICLE_G},${this.PARTICLE_B},${p.opacity})`;
      this.ctx.fill();
    }

    // Draw faint connecting lines between nearby particles for an organic mesh feel
    this.drawConnections();

    this.animationId = requestAnimationFrame(() => this.animate());
  }

  private drawConnections(): void {
    const maxDist = 100 * this.dpr;
    const maxDist2 = maxDist * maxDist;
    const len = this.particles.length;

    for (let i = 0; i < len; i++) {
      for (let j = i + 1; j < len; j++) {
        const a = this.particles[i];
        const b = this.particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist2 = dx * dx + dy * dy;

        if (dist2 < maxDist2) {
          const opacity = (1 - Math.sqrt(dist2) / maxDist) * 0.08;
          this.ctx.beginPath();
          this.ctx.moveTo(a.x, a.y);
          this.ctx.lineTo(b.x, b.y);
          this.ctx.strokeStyle = `rgba(${this.PARTICLE_R},${this.PARTICLE_G},${this.PARTICLE_B},${opacity})`;
          this.ctx.lineWidth = 0.5 * this.dpr;
          this.ctx.stroke();
        }
      }
    }
  }
}
