import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { TranslationService } from '../../shared/services/translation.service';

@Component({
  selector: 'app-projects',
  imports: [NgOptimizedImage],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
  public ts = inject(TranslationService);
}
