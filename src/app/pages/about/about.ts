import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { TranslationService } from '../../shared/services/translation.service';

@Component({
  selector: 'app-about',
  imports: [NgOptimizedImage],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  public ts = inject(TranslationService);
}
