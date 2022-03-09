import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  PrfxUrl = "http://localhost:5000/";

  constructor(private http: HttpClient) {}

  getData(route) {
    return new Promise((resolve) => {
      this.http.get(this.PrfxUrl + route.apiroute + route.id).subscribe(
        (data) => {
          resolve(data);
        },
        (err) => {
          console.log(err);
        }
      );
    });
  }

  get(route) {
    return new Promise((resolve) => {
      this.http.get(this.PrfxUrl + route.apiroute).subscribe(
        (data) => {
          resolve(data);
        },
        (err) => {
          console.log(err);
        }
      );
    });
  }

  setData(route) {
    return new Promise<any>((resolve, reject) => {
      this.http.post(this.PrfxUrl + route.apiroute, route.data).subscribe(
        (res) => {
          resolve(res);
        },
        (err) => {
          console.log(err);
          reject(err);
        }
      );
    });
  }

  putData(route) {
    return new Promise((resolve) => {
      this.http.put(this.PrfxUrl + route.apiroute + route.id, route.data).subscribe(
        (data) => {
          resolve(data);
        },
        (err) => {
          console.log(err);
        }
      );
    });
  }

  deleteData(route) {
    return new Promise((resolve) => {
      this.http.delete(this.PrfxUrl + route.apiroute + route.id).subscribe(
        (data) => {
          resolve(data);
        },
        (err) => {
          console.log(err);
        }
      );
    });
  }

}
