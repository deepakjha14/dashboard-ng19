import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    constructor(
        private http: HttpClient
    ) { }
    
    login(): void {
        window.location.href = "http://localhost:4000/auth/login";
    }

    logout(): void {
    }

    processAuthCode(code: string): any {
        return this.http.post<any>('/auth/token', { code });
    }

    // Hardcoded data to be sent to the user
    getChartsData() {
        return this.http.get<any>('/auth/charts-data');
    }
    
    getStudents() {
        return this.http.get<any>('/auth/get-students');
    }
    
    saveData(data: any) {
        return this.http.post<any>('/auth/save-students', {data});
    }
}