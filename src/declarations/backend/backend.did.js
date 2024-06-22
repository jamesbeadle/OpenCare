export const idlFactory = ({ IDL }) => {
  const CreateUserDTO = IDL.Record({
    username: IDL.Text,
    displayName: IDL.Text,
    profilePictureExtension: IDL.Text,
    profilePicture: IDL.Vec(IDL.Nat8),
  });
  const Error = IDL.Variant({
    DecodeError: IDL.Null,
    NotAllowed: IDL.Null,
    NotEnoughFunds: IDL.Null,
    NotFound: IDL.Null,
    NotAuthorized: IDL.Null,
    InvalidData: IDL.Null,
    AlreadyExists: IDL.Null,
    PaymentError: IDL.Null,
  });
  const Result_2 = IDL.Variant({ ok: IDL.Null, err: Error });
  const UserDTO = IDL.Record({});
  const Result_1 = IDL.Variant({ ok: UserDTO, err: Error });
  const UpdateUserDTO = IDL.Record({
    username: IDL.Text,
    displayName: IDL.Text,
    profilePictureExtension: IDL.Text,
    profilePicture: IDL.Vec(IDL.Nat8),
  });
  const Result = IDL.Variant({ ok: UpdateUserDTO, err: Error });
  return IDL.Service({
    createAgent: IDL.Func([CreateUserDTO], [Result_2], []),
    getAgent: IDL.Func([], [Result_1], ["query"]),
    updateAgent: IDL.Func([UpdateUserDTO], [Result], []),
  });
};
export const init = ({ IDL }) => {
  return [];
};
