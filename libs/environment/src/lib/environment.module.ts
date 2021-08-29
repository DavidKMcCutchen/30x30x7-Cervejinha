import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CERVEJA_ENVIRONMENT } from './cerveja.token';
import { CervejaEnvironment } from "./cerveja.model";


@NgModule({})
export class EnvironmentModule {
  static withEnvironment(environment: CervejaEnvironment): ModuleWithProviders<EnvironmentModule> {
    return {
      ngModule: EnvironmentModule,
      providers: [
        {
          provide: CERVEJA_ENVIRONMENT,
          useValue: environment
        }
      ]
    }
  }
}