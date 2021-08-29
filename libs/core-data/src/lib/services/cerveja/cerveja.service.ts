import { Inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Cerveja } from "@cerveja/api-interfaces";
import { CervejaEnvironment, CERVEJA_ENVIRONMENT } from "@cerveja/environment";


@Injectable({
  providedIn: 'root'
})
export class CervejasService {
  model = 'cervejas';

  constructor(
    private httpClient: HttpClient,
    @Inject(CERVEJA_ENVIRONMENT) private environment: CervejaEnvironment
  ) {}

  all() {
    return this.httpClient.get<Cerveja[]>(this.getUrl())
  };

  find(cervejaId: string) {
    return this.httpClient.get<Cerveja>(this.getUrlById(cervejaId))
  };

  create(cervejas: Cerveja) {
    return this.httpClient.post<Cerveja>(this.getUrl(), cervejas)
  };

  update(cervejas: Cerveja) {
    return this.httpClient.patch<Cerveja>(this.getUrlById(cervejas.id), cervejas)
  };

  delete({ id }: Cerveja) {
    return this.httpClient.delete<Cerveja>(this.getUrlById(id))
  };

  private getUrl() {
    return `${this.environment.apiUrl}${this.model}`
  };

  private getUrlById(id) {
    return `${this.getUrl()}/${id}`
  };
}