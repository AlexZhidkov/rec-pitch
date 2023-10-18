import { Component, inject } from '@angular/core';
import { Analytics } from '@angular/fire/analytics';
import { Auth, User, onAuthStateChanged } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  private firestore: Firestore = inject(Firestore);
  private analytics: Analytics = inject(Analytics);
  isLoading = true;
  private auth: Auth = inject(Auth);
  user: User | null = null;
  startups: any[] = [];

  constructor(
  ) {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.user = user;
      }
    });
    this.isLoading = false;
  }
}