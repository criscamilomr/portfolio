import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslationService } from '../../shared/services/translation.service';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  public ts = inject(TranslationService);
}
