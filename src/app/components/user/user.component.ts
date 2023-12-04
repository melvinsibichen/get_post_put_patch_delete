import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userList: any[];
  filteredUserList: any[];
  showTable: boolean = false;
  searchId: string = '';
  deletedUser: any | null = null;
  updatedUserData: any = {}; // Declare and initialize updatedUserData

  constructor(private httpService: HttpService) {
    this.userList = [];
    this.filteredUserList = [];
  }

  ngOnInit() {
    // Data is not loaded initially
  }

  loadUserDetails() {
    this.httpService.getUserDetails().subscribe(
      (result: any[]) => {
        this.userList = result;
        this.filteredUserList = result;
        this.showTable = true;
      },
      (error) => {
        console.error('Error fetching user details:', error);
      }
    );
  }

  searchUser() {
    if (this.searchId) {
      this.filteredUserList = this.userList.filter(
        (user: any) => user.id.toString() === this.searchId
      );
    } else {
      this.filteredUserList = this.userList;
    }
  }

  deleteUser(userId: any) {
    this.httpService.deleteUser(userId).subscribe(
      () => {
        console.log(`User with ID ${userId} deleted successfully`);
        this.filteredUserList = this.filteredUserList.filter(
          (user: any) => user.id !== userId
        );
      },
      (error) => {
        console.error('Error deleting user:', error);
      }
    );
  }

 

  
}
