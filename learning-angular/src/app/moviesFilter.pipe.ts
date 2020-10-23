import { Pipe, PipeTransform } from "@angular/core";
import { Content } from "./helper-files/content-interface";
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
 */
@Pipe({ name: "moviesFilter" })
export class MoviesFilter implements PipeTransform {
  transform(value: Content[], type: String): Content[] {
    return value.filter(item => item.type == type);
  }
}
