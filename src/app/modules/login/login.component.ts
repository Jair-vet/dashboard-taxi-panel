import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rememberMe: [false]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password, rememberMe } = this.loginForm.value;
      this.authService.login(email, password).subscribe(
        (response) => {
          if (response.success) {
            if (rememberMe) {
              localStorage.setItem('email', email);
            }
            Swal.fire('Login exitoso', 'Bienvenido', 'success');
            // Redirigir al usuario a la página deseada
          } else {
            Swal.fire('Error', response.message, 'error');
          }
        },
        (error) => {
          Swal.fire('Error', 'Ocurrió un error al iniciar sesión', 'error');
        }
      );
    }
  }
}
