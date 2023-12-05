// credenciales.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CredencialesService {
  private credencialesCorrectas: boolean = false;

  setCredencialesCorrectas(valor: boolean): void {
    this.credencialesCorrectas = valor;
  }

  getCredencialesCorrectas(): boolean {
    return this.credencialesCorrectas;
  }
}
