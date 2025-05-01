/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Injectable } from '@nestjs/common';

@Injectable()
export class QueryService {
  convertParamsToMap(params: Record<string, string>): Record<string, any> {
    const result: any = {};

    for (const [encodedKey, encodedValue] of Object.entries(params)) {
      // Skip any non-dotted or unexpected keys
      if (!encodedKey.includes('.')) {
        continue;
      }
      const key = decodeURIComponent(encodedKey);
      const value = decodeURIComponent(encodedValue);
      const parts = key.split('.');
      let current = result;

      for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        if (i === parts.length - 1) {
          current[part] = value;
        } else {
          if (!current[part] || typeof current[part] !== 'object') {
            current[part] = {};
          }
          current = current[part];
        }
      }
    }

    return result;
  }
}
