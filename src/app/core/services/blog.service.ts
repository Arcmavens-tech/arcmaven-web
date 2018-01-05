import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

@Injectable()
export class BlogService {

  constructor(private afs: AngularFirestore) {
   }

   getAllBlogs(){
    return this.afs.collection('blogs');
  }

  getBlog(id){
    return this.afs.doc('/blogs/' + id);
  }

}
