export type UserCredentials = {
    username: string;
    password: string;
};

export const USERS = {
    standard: {
        username: "standard_user",
        password: "secret_sauce",
    },
    locked: {
        username: "locked_out_user",
        password: "secret_sauce",
    },
} satisfies Record<string, UserCredentials>;