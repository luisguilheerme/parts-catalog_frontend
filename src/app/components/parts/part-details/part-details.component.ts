import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PartService } from '../../../services/part.service';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-part-details',
  imports: [CommonModule],
  templateUrl: './part-details.component.html',
  styleUrl: './part-details.component.scss'
})
export class PartDetailsComponent {

  part: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private partService: PartService,
   private route: ActivatedRoute, private router: Router, private dialogRef: MatDialogRef<PartDetailsComponent>) {}
  
  ngOnInit(): void {    
    this.loadPartDetails();
  }

  loadPartDetails(): void {
    const partId = this.data.id;
    this.partService.getPartById(partId).subscribe((data: any) => {
      this.part = data;
    });
  }

  closeModal() {
    this.dialogRef.close();
  }
}
