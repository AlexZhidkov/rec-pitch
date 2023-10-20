import { Component, inject } from '@angular/core';
import { Firestore, onSnapshot, doc, DocumentSnapshot, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentReference, DocumentData } from 'rxfire/firestore/interfaces';

@Component({
  selector: 'app-startup',
  templateUrl: './startup.component.html',
  styleUrls: ['./startup.component.css']
})
export class StartupComponent {
  private firestore: Firestore = inject(Firestore);
  isLoading = true;
  startupId: string | null = null;
  startupRef!: DocumentReference<DocumentData>;
  startup: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.startupId = this.route.snapshot.paramMap.get('startupId');
    if (!this.startupId) {
      console.error('Startup ID is falsy');
      return;
    }
    this.startupRef = doc(this.firestore, 'startups', this.startupId as string);
    onSnapshot(this.startupRef, async (startupSnapshot: DocumentSnapshot<DocumentData>) => {
      this.startup = startupSnapshot.data();
      this.startup.id = startupSnapshot.id;
      this.isLoading = false;
    });
  }

  updateStartup(data: any) {
    updateDoc(this.startupRef as DocumentReference<DocumentData>, data)
  }

  deleteStartup() {
    deleteDoc(this.startupRef)
      .then(() => {
        this.router.navigate([`/`])
      });
  }
}
