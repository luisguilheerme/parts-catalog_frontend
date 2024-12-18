import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatOption } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNavList } from '@angular/material/list';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatSidenavContainer, MatSidenav } from '@angular/material/sidenav';
import { PartService } from '../../../services/part.service';


@Component({
  selector: 'app-search-bar',
  imports: [MatSidenavContainer, MatSidenav, MatNavList, MatSelect, MatOption,         
    CommonModule,FormsModule, MatSelectModule, MatButtonModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {

  constructor(private partService: PartService, private router: Router) {} 
  groups: any[] = [];
  subGroups: any[] = [];
  brands: any[] = [];
  models: any[] = [];
  manufacturers: any[] = [];
  selectedGroup!: number;
  selectedBrand!: number;
  subGroupPlaceholder: string = 'Selecione um Grupo';
  modelPlaceholder: string = 'Selecione uma Marca';
  ngOnInit(): void {
    this.loadGroups();
    this.loadBrands();
    this.loadManufacturers();
  }
  loadGroups() {
    this.partService.getGroups().subscribe((data: any[]) => {
      this.groups = data;
    });
  }
  loadSubGroups(groupId: number) {
    this.partService.getSubGroups(groupId).subscribe((data: any[]) => {
      this.subGroups = data;
    });
  }
  loadBrands() {
    this.partService.getBrands().subscribe((data: any[]) => {
      this.brands = data;
    });
  }
  loadModels(brandId: number) {
    this.partService.getModels(brandId).subscribe((data: any[]) => {
      this.models = data;
    });
  }
  loadManufacturers() {
    this.partService.getManufacturers().subscribe((data: any[]) => {
      this.manufacturers = data;
    });
  }  
  onGroupChange() {
    const selectedGroup = this.groups.find(group => group.name === this.selectedGroup);
  
    if (selectedGroup) {
      this.subGroupPlaceholder = '';
      this.loadSubGroups(selectedGroup.id); 
    } else {
      this.subGroups = []; 
      this.subGroupPlaceholder = 'Selecione um Grupo';
    }
  }    
  onBrandChange() {
    const selectedBrand = this.brands.find(brand => brand.name === this.selectedBrand);
  
    if (selectedBrand) {
      this.modelPlaceholder = '';
      this.loadModels(selectedBrand.id); 
      console.log(selectedBrand.id, selectedBrand.name)
    } else {
      this.models = []; 
      this.modelPlaceholder = 'Selecione uma Marca';
    }
  }

}
