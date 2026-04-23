import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { TranslationService } from '../../shared/services/translation.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  public ts = inject(TranslationService);
}
