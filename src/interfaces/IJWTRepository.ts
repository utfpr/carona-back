export interface IJWTPayload {
    id: number;
    email: string;
}

export interface IJWTRepository {
    generate(payload: IJWTPayload): string;
    verify(key: string): IJWTPayload;
}