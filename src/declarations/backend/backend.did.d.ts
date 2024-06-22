import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface CreateUserDTO {
  'username' : string,
  'displayName' : string,
  'profilePictureExtension' : string,
  'profilePicture' : Uint8Array | number[],
}
export type Error = { 'DecodeError' : null } |
  { 'NotAllowed' : null } |
  { 'NotEnoughFunds' : null } |
  { 'NotFound' : null } |
  { 'NotAuthorized' : null } |
  { 'InvalidData' : null } |
  { 'AlreadyExists' : null } |
  { 'PaymentError' : null };
export type Result = { 'ok' : UpdateUserDTO } |
  { 'err' : Error };
export type Result_1 = { 'ok' : UserDTO } |
  { 'err' : Error };
export type Result_2 = { 'ok' : null } |
  { 'err' : Error };
export interface UpdateUserDTO {
  'username' : string,
  'displayName' : string,
  'profilePictureExtension' : string,
  'profilePicture' : Uint8Array | number[],
}
export type UserDTO = {};
export interface _SERVICE {
  'createAgent' : ActorMethod<[CreateUserDTO], Result_2>,
  'getAgent' : ActorMethod<[], Result_1>,
  'updateAgent' : ActorMethod<[UpdateUserDTO], Result>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
