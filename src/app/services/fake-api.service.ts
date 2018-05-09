import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class FakeApiService {

  baseUrl = '../../assets/data.json';

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get(this.baseUrl);
  }
}
