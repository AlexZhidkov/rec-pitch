import { Component, inject } from '@angular/core';
import { Analytics } from '@angular/fire/analytics';
import { Auth, User, onAuthStateChanged } from '@angular/fire/auth';
import { CollectionReference, Firestore, collection, collectionData, addDoc, DocumentReference } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  private firestore: Firestore = inject(Firestore);
  private analytics: Analytics = inject(Analytics);
  startupsCollection: CollectionReference;
  isLoading = true;
  private auth: Auth = inject(Auth);
  user: User | null = null;
  startups: any[] = [];

  constructor(
    private router: Router,
  ) {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.user = user;
      }
    });
    this.startupsCollection = collection(this.firestore, 'startups');
    collectionData(this.startupsCollection, { idField: 'id' }).subscribe((startups) => {
      this.startups = startups;
      this.isLoading = false;
    });
  }

  createStartup() {
    addDoc(this.startupsCollection, { name: 'New Startup' })
      .then((newStartupReference: DocumentReference) => {
        this.router.navigate([`startup/${newStartupReference.id}`]);
      });
  }
}