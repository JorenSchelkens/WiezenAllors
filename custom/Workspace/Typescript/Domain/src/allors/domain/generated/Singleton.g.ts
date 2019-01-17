// Allors generated file.
// Do not edit this file, changes will be overwritten.
/* tslint:disable */
import { INewSessionObject, Method } from '../../framework';

import { Settings } from './Settings.g';
import { Locale } from './Locale.g';
import { User } from './User.g';
import { Media } from './Media.g';

export interface Singleton extends INewSessionObject {
    CanReadSettings: boolean;

    CanWriteSettings: boolean;

Settings: Settings;


    CanReadDefaultLocale: boolean;

    CanWriteDefaultLocale: boolean;

DefaultLocale: Locale;


    CanReadAdditionalLocales: boolean;

    CanWriteAdditionalLocales: boolean;

AdditionalLocales: Locale[];

    AddAdditionalLocale(value: Locale);

    RemoveAdditionalLocale(value: Locale);

    CanReadGuest: boolean;

    CanWriteGuest: boolean;

Guest: User;


    CanReadLogoImage: boolean;

    CanWriteLogoImage: boolean;

LogoImage: Media;




}