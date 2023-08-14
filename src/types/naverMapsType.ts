/*
  The classes written in this document do not specify all the fields that the class has.
  Please refer to the NAVER Maps API documentation to add the fields you need.
*/

/** Maps default location (Seoul, CityHall Station Line1) */
export enum DefaultCoordinate {
  Y = 37.5653559,
  X = 126.9771423,
}

export class Coordinate {
  constructor(public y?: number, public x?: number) {}
}

export type NaverMap = {
  [key: string]: any;
}

export class InfoWindow {
  constructor(public open: Function, public close: Function, public setContent: Function) {}
}
