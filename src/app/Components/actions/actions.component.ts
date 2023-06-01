import { Component,} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styles: [],
})
export class ActionsComponent {
  action = '';
  id = 0;
  displayForm = 'd-none';
  displayAlert = 'd-none';
  closePopup() {
    this.displayForm = 'd-none';
    this.displayAlert = 'd-none';
    this.router.navigate(['/home']);
  }
  user: {id:any; name: any; email: any; phone: any; address: any } = {
    id: "",
    name: '',
    email: '',
    phone: '',
    address: {
      street: '',
      suite: '',
      city: '',
    },
  };

  constructor(
    protected userService: UserService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
    this.activeRoute.data.subscribe((data) => {
      console.log(data['action']);
      this.action = data['action'];
      this.action == 'DELETE'
        ? (this.displayAlert = 'd-block')
        : (this.displayForm = 'd-block');
    });
  }
  ngOnInit(): void {
    if (this.action != 'ADD') {
      this.activeRoute.params.subscribe((params) => {
        this.id = params['id'];
        this.get(params['id']);
      });
    }
  }

  get(id: any) {
    this.userService.getUserByID(id).subscribe((data: any) => {
      this.user = data;
    });
  }
  update() {
    if (this.user.name.length > 3) {
      this.userService.updateUser(this.user).subscribe({
        next: (data) => {
          this.router.navigate(['/home']);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
  delete(id: number) {
    this.userService.deleteUser(this.id).subscribe({
      next: (data) => {
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  actionFun(act: any) {
    switch (act) {
      // case 'ADD':
      //   this.add();
      //   break;
      case 'UPDATE':
        this.update();
        break;
      case 'DELETE':
        this.delete(this.id);
        break;
      default:
        break;
    }
  }
  go2albums(){

  }

  //======================================== validation =================================
  keyPressNumbers(event: any) {
    let inp = String.fromCharCode(event.keyCode);
    /[0-9]/.test(inp) ? true : event.preventDefault();
  }

  keyPressCharacters(event: any) {
    let inp = String.fromCharCode(event.keyCode);
    /[A-Za-z\s]/.test(inp) ? true : event.preventDefault();
  }
  emailFlag = false;
  emailChecker(event: any) {
    const emailRe =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let inp = '';
    inp = event.target.value;
    console.log(inp);
    emailRe.test(this.user.email) ? this.emailFlag == true : 0;
  }
}
