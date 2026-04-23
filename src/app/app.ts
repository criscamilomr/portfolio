import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { ParticlesBg } from './components/particles-bg/particles-bg';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, ParticlesBg],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly title = signal('portafolio-minimalista');
}
