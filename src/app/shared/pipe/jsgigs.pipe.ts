import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "jsgigs"
})
export class JsgigsPipe implements PipeTransform {
    transform(value: string): string {
        return value.toUpperCase() + ', JSGIGS welcomes you';
    }
}