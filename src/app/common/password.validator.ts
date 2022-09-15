import { AbstractControl, ValidationErrors } from "@angular/forms";

export class PasswordValidator {
  static passwordMatch(control: AbstractControl): ValidationErrors | null {
    const newPassword = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    if (newPassword !== confirmPassword) return { passwordMismatch: true };

    return null;
  }
}
