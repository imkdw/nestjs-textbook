import { IsEmail, IsString, Length, Matches, MaxLength } from 'class-validator';
import {
  EMAIL_MAX_LENGTH,
  NAME_MAX_LENGTH,
  NAME_MIN_LENGTH,
  PASSWORD_MAX_LENGTH,
  PASSWORD_MIN_LENGTH,
  PASSWORD_REGEX,
} from '../../common/constants/user.contants';

export class CreateUserDto {
  @IsString()
  @Length(NAME_MIN_LENGTH, NAME_MAX_LENGTH)
  readonly name: string;

  @IsEmail()
  @MaxLength(EMAIL_MAX_LENGTH)
  readonly email: string;

  @IsString()
  @Length(PASSWORD_MIN_LENGTH, PASSWORD_MAX_LENGTH)
  @Matches(PASSWORD_REGEX)
  readonly password: string;
}
