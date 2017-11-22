import { Component, OnInit } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { RoleService } from './role.service';
import { SearchService } from './../../itunes/itunes.service';


import { Role } from './role.model';
import { SearchItem } from './../../itunes/itunes.model';

import {Modal} from 'ngx-modal'

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';



@Component({
  moduleId: module.id.toString(),  
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css'],
})
export class RoleComponent implements OnInit {

  roles: Role[];
  role: Role ={} as any;
  addEnabled: boolean = false;

   results: Observable<SearchItem[]>;
  addRoleCheckbox: NgModel;

  searchField: FormControl; //[formControl]="searchField"


  constructor(private roleService: RoleService) {
  }

  ngOnInit() {
    this.refreshRole();
  }

  toggleAdd = () => {
    this.addEnabled = !this.addEnabled;
  };

  onEdit = () => {
    this.roleService.editRole(this.role)
    .subscribe((res) => {
      this.refreshRole();
    });
    this.role={} as any;
  }

  onSubmit = (myForm: NgForm) => {
    //console.log(myForm.value);
    this.roleService.addRole(myForm.value)
      .subscribe((res) => {
        console.log(res);
        this.refreshRole();
        this.toggleAdd();
        myForm.reset();
      },
      (err) => {
        console.log(err);
        this.refreshRole();
      }
      );
  }

  editRole = (value: Role,id: Modal) => {
    console.log(value);
    this.role = new Role(value.roleId,value.roleName,value.roleDesc);
    id.open();    
  }

  deleteRole = (value: Role) => {
    console.log(value);
    this.roleService.deleteRole(value)
      .subscribe((res) => {
        console.log(res);
        this.refreshRole();
      });
  }

  refreshRole = () => {
    this.roleService.getRoles()
      .subscribe(
      (roles) => {
        this.roles = roles;
      }
      );
  }
}