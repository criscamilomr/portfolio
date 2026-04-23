import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslationService } from '../../shared/services/translation.service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  public ts = inject(TranslationService);
}
