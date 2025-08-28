import { ResolveFn } from '@angular/router';
import { SchemaService } from '../providers/api/schema/schema.service';
import { inject } from '@angular/core';
import { ISchema, ISchemaRequest } from '../models/ISchemaRequest';
import {map, tap} from 'rxjs';

export const schemaResolver: ResolveFn<ISchema> = () => {
  const schemaApiService: SchemaService = inject(SchemaService);

  return schemaApiService.getSchema$()
    .pipe(
      map((response: ISchemaRequest) => response.schema)
    )
};
