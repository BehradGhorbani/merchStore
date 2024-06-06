export class CreateTokenDto {
  email: string
  token: string
  expiresAt: number
  isActive: boolean
}