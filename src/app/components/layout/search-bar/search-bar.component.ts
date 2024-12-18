import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PartService } from '../../../services/part.service';
import { MatOption } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNavList } from '@angular/material/list';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatSidenavContainer, MatSidenav } from '@angular/material/sidenav';

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

  searchCriteria = {
    starterAlternatorCode: '',
    originalCode: '',
    code: '',
    group: null,
    subGroup: null,
    manufacturer: null,
    brand: null,
    model: null
  };

  ngOnInit(): void {
    this.loadGroups();
    this.loadBrands();
    this.loadManufacturers();
  }

  loadGroups() {
    this.partService.getGroups().subscribe(data => {
      this.groups = data;
    });
  }

  loadSubGroups(groupId: number) {
    this.partService.getSubGroups(groupId).subscribe(data => {
      this.subGroups = data;
    });
  }

  loadBrands() {
    this.partService.getBrands().subscribe(data => {
      this.brands = data;
    });
  }

  loadModels(brandId: number) {
    this.partService.getModels(brandId).subscribe(data => {
      this.models = data;
    });
  }

  loadManufacturers() {
    this.partService.getManufacturers().subscribe(data => {
      this.manufacturers = data;
    });
  }  

  onGroupChange() {
    const selectedGroup = this.groups.find(group => group.name === this.searchCriteria.group);
  
    if (selectedGroup) {
      this.subGroupPlaceholder = '';
      this.loadSubGroups(selectedGroup.id); 
    } else {
      this.subGroups = []; 
      this.subGroupPlaceholder = 'Selecione um Grupo';
    }
  }    

  onBrandChange() {
    const selectedBrand = this.brands.find(brand => brand.name === this.searchCriteria.brand);
  
    if (selectedBrand) {
      this.modelPlaceholder = '';
      this.loadModels(selectedBrand.id); 
      console.log(selectedBrand.id, selectedBrand.name)
    } else {
      this.models = []; 
      this.modelPlaceholder = 'Selecione uma Marca';
    }
  }
  
  onSearch() {
    const queryParams = this.buildQueryParams();
    this.router.navigate(['/parts'], { queryParams });
  }

  buildQueryParams() {
    const params: any = {};

    if (this.searchCriteria.starterAlternatorCode) {
      params.starterAlternatorCode = this.searchCriteria.starterAlternatorCode;
    }

    if (this.searchCriteria.originalCode) {
      params.originalCode = this.searchCriteria.originalCode;
    }

    if (this.searchCriteria.code) {
      params.code = this.searchCriteria.code;
    }

    if (this.searchCriteria.group) {
      params.group = this.searchCriteria.group;
    }

    if (this.searchCriteria.subGroup) {
      params.subGroup = this.searchCriteria.subGroup;
    }

    if (this.searchCriteria.manufacturer) {
      params.manufacturer = this.searchCriteria.manufacturer;
    }

    if (this.searchCriteria.brand) {
      params.brand = this.searchCriteria.brand;
    }

    if (this.searchCriteria.model) {
      params.model = this.searchCriteria.model;
    }

    return params;
  }

}
