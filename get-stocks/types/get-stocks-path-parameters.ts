import { IsDefined, IsNotEmpty, IsString } from 'class-validator';

export class GetStocksPathParameters {
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  store_identifier: string;
}
