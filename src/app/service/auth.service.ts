import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiRoute: any = {};
  baqalaInfo: any = {};

  constructor(private apiService: ApiService) {}

  sendUserData(data) {
    return new Promise((resolve, reject) => {
      this.apiRoute.apiroute = "session/simulation/start";
      this.apiRoute.data = data;
      this.apiService.setData(this.apiRoute)
      .then((data: any) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
    });
  }

  sendToExpress(data) {
    return new Promise((resolve, reject) => {
      this.apiRoute.apiroute = "addStudent";
      this.apiRoute.data = data;
      this.apiService.setData(this.apiRoute)
      .then((data: any) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
    });
  }
  
}
