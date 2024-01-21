import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css',
})
export class BasicsPageComponent {
  public nameLower: string = 'silvia';
  public nameUpper: string = 'SILVIA';
  public fullName: string = 'sIlviA LOzaNO';

  public customDate: Date = new Date();
}
