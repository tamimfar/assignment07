export interface RegistrationPayload {
  name: string;
  email: string;
  password: string;
 phone?: string
}
export interface VerifyAccountPayload {
  email: string;
  OTP: string;
}