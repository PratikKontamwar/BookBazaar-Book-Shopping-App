import { Injectable } from '@angular/core';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { LoginForm, RegisterForm } from '../types/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated: boolean = false;

  isLoading: boolean = false;

  isPasswordMatched: boolean = true;

  constructor(private router: Router) {}

  login(form: LoginForm) {
    if (this.isLoading) {
      return;
    }

    this.isLoading = true;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Signed in
        this.isAuthenticated = true;
        this.router.navigate(['']);
        // alert("Login Successfully");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuthenticated = false;
        // alert("Credential does not match our record");
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  register(form: RegisterForm) {
    if (this.isLoading) {
      return;
    }

    this.isLoading = true;

    if (form.password !== form.confirm_password) {
      this.isPasswordMatched = false;
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Signed in
        this.isAuthenticated = true;
        // alert("Register Successfully!");
        // console.log(userCredential);
        // const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuthenticated = false;
        // alert("Invalid information, please try again!");
        // ..
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  logout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        this.router.navigate(['/login']);
        this.isAuthenticated = false;
      })
      .catch((error) => {
        // An error happened.
      });
  }
}
