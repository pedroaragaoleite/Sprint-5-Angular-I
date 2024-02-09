import { Component, Input } from '@angular/core';
import { IStep } from '../../interfaces/i-step';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.scss'
})
export class EscenaComponent {
  faArrowRight: any = faArrowRight;
  faArrowLeft: any = faArrowLeft;
  slide: number = 0;

  @Input() phrases!: IStep[];


  previousCard(): void {
    console.log("previous clicked");
    if (this.slide === 0) {
      this.slide++;
    } else {
      this.slide--;
      console.log(this.slide);
    }

  }
  nextCard(): void {
    if (this.slide === 2) {
      this.slide--;
    } else {
      this.slide++;
    }
  }
}
