import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UserService {

  constructor(private toastr: ToastrService,
    private afs: AngularFirestore) { }

  addContact(contact){
    var subject = new Subject();
    const sub = this.afs.collection('subscribers', ref => ref.where('email', '==', contact.email)).valueChanges().subscribe(data =>{
      sub.unsubscribe();
      setTimeout(()=>{
        if(data.length < 1){
          this.afs.collection('subscribers').add(contact)
          .then(res => {
              this.toastr.success('Our representative will contact you in next 12 hours or call +91 9999883332',  'Thankyou', { timeOut: 4000 });
              subject.next('added');
          })
          .catch(err => {
              this.toastr.error('No Network', 'Error', { timeOut: 4000 });
              subject.error('error');
          });
      }
      else{
          this.toastr.info('Our representative will contact you in next 12 hours or call +91 8860660028', 'Already registered', { timeOut: 4000 });
          subject.next('already added');
      }
      },1000);
    });
    return subject;
  }

}
