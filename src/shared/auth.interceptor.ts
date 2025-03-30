import { HttpRequest, HttpHandler, HttpEvent, HttpHandlerFn } from "@angular/common/http";
import { Observable } from "rxjs";

export function AuthInterceptor (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
    const token = sessionStorage.getItem('auth_token');
    if (token) {
        const clonnedRequest = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${token}`)
        });
        return next(clonnedRequest);
    }

    return next(req);
}
