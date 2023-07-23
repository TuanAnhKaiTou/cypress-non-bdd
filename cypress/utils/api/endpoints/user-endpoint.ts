const userUrl: string = "/Account/v1";

export const userEndpoint = {
  AUTHORIZED_ENDPOINT: `${userUrl}/Authorized`,
  GENERATE_TOKEN_ENDPOINT: `${userUrl}/GenerateToken`,
  CREATE_USER_ENDPOINT: `${userUrl}/User`,
  GET_USER_ENDPOINT: (userId: string) => `${userUrl}/User/${userId}`,
  DELETE_USER_ENDPOINT: (userId: string) => `${userUrl}/User/${userId}`,
};
