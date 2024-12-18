import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PartListDTO } from '../../../models/dto/part-list-dto';
import { Page, PartService } from '../../../services/part.service';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';

@Component({
  selector: 'app-part-list',
  imports: [MatGridList, MatGridTile, MatCard, MatCardContent, CommonModule            
   ],
  templateUrl: './part-list.component.html',
  styleUrl: './part-list.component.scss'
})

export class PartListComponent implements OnInit {
  parts: PartListDTO[] = []; 
  loading: boolean = true;   
  totalPages: number = 0;
  totalElements: number = 0;
  currentPage: number = 0;

  constructor(private partService: PartService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.loadParts(params);
      console.log(this.parts);
    });
  }

  loadParts(params: any) {
    this.partService.getAllParts(params).subscribe((data: Page<PartListDTO>) => {
      this.parts = data.content; 
      this.totalPages = data.totalPages; 
      this.totalElements = data.totalElements; 
      this.currentPage = data.number; 
    });
  }

}