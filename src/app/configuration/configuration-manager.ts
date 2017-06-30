import { Injectable } from "@angular/core";

@Injectable()
export class ConfigurationManager {
    public contentBaseUrl: string = "http://contentblock.quinntynebrown.com";
    public contactBaseUrl: string = "http://contact.quinntynebrown.com";
}