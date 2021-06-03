import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { FbCreateResponse, Post } from "./interfaces";

@Injectable({ providedIn: 'root' })

export class PostsService {
  constructor(private http: HttpClient) {}

  create(post: Post): Observable<Post> {
    return this.http.post(`${environment.FbDbUrl}/posts.json`, post)
    .pipe(map((res: FbCreateResponse) => {
      return {
        ...post,
        id: res.name,
        date: new Date(post.date)
      }
    }));
  }

  getAll(): Observable<Post[]> {
    return this.http.get(`${environment.FbDbUrl}/posts.json`)
    .pipe(map((res: {[key: string]: any}) => {
      Object.keys(res)
      return []
    }));
  }
}

