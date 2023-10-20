import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { DocumentReference, DocumentData, Firestore, onSnapshot, doc, DocumentSnapshot, updateDoc } from '@angular/fire/firestore';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RecPitchService } from '../rec-pitch.service';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable, map, startWith } from 'rxjs';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  private firestore: Firestore = inject(Firestore);
  isLoading = true;
  profileId: string | null = null;
  profileRef!: DocumentReference<DocumentData>;
  profile: any;
  educationControl = new FormControl('');
  educationOptions: string[] = [];

  separatorKeysCodes: number[] = [ENTER, COMMA];
  occupationControl = new FormControl('');
  filteredOccupations!: Observable<string[]>;
  occupations: string[] = [];
  occupationOptions: string[] = [];
  @ViewChild('occupationInput')
  occupationInput!: ElementRef<HTMLInputElement>;
  announcer = inject(LiveAnnouncer);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: RecPitchService,
  ) {
    this.profileId = this.route.snapshot.paramMap.get('profileId');
    if (!this.profileId) {
      console.error('Profile ID is falsy');
      return;
    }
    this.educationOptions = service.getEducationOptions();
    this.occupationOptions = service.getOccupationOptions();
    this.filteredOccupations = this.occupationControl.valueChanges.pipe(
      startWith(null),
      map((occupation: string | null) => (occupation ? this._filter(occupation) : this.occupationOptions.slice())),
    );
    this.profileRef = doc(this.firestore, 'profiles', this.profileId as string);
    onSnapshot(this.profileRef, async (profileSnapshot: DocumentSnapshot<DocumentData>) => {
      this.profile = profileSnapshot.data();
      this.profile.id = profileSnapshot.id;
      this.occupations = (profileSnapshot as any).get('occupations') || [];
      this.isLoading = false;
    });
  }

  updateProfile(data: any) {
    updateDoc(this.profileRef as DocumentReference<DocumentData>, data)
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.occupations.push(value);
      this.updateProfile({ occupations: this.occupations });
    }
    event.chipInput!.clear();
    this.occupationControl.setValue(null);
  }

  remove(occupation: string): void {
    const index = this.occupations.indexOf(occupation);
    if (index >= 0) {
      this.occupations.splice(index, 1);
      this.updateProfile({ occupations: this.occupations });
      this.announcer.announce(`Removed ${occupation}`);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.occupations.push(event.option.viewValue);
    this.updateProfile({ occupations: this.occupations });
    this.occupationInput.nativeElement.value = '';
    this.occupationControl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.occupationOptions.filter(occupation => occupation.toLowerCase().includes(filterValue));
  }
}
