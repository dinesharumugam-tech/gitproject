import { IsOnlyOneRequiredFrom } from '@avolta-ag/validator-utils';
import { Transform, Type } from 'class-transformer';
import {
  IsBoolean,
  IsDefined,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
  ValidateIf,
} from 'class-validator';

export class GetStocksQueryParameters {
  @ValidateIf(
    (o) =>
      o.itemNumber != null || o.storeIdentifierStartKey != null || o.localItemCodeStartKey != null
  )
  @IsOnlyOneRequiredFrom(['storeIdentifierStartKey', 'localItemCodeStartKey'], {
    message:
      "One of the following properties must be provided: itemNumber or ('storeIdentifierStartKey' and 'localItemCodeStartKey')",
  })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  itemNumber?: string;

  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  @IsInt()
  timestamp?: number;

  @Type(() => String)
  @IsOptional()
  @IsString()
  stockType?: string;

  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  @IsInt()
  minStock?: number;

  @IsOptional()
  @Transform(({ value }) => (value != null && value !== '' ? Number(value) : undefined))
  @Max(2_147_483_647)
  @Min(1)
  @IsInt()
  @IsNumber()
  pageSize?: number;

  @ValidateIf((o) => o.storeIdentifierStartKey != null || o.localItemCodeStartKey != null)
  @IsDefined({
    message: 'storeIdentifierStartKey must be defined if localItemCodeStartKey is defined',
  })
  @IsString()
  @IsNotEmpty()
  storeIdentifierStartKey?: string;

  @ValidateIf((o) => o.storeIdentifierStartKey != null || o.localItemCodeStartKey != null)
  @IsDefined({
    message: 'localItemCodeStartKey must be defined if storeIdentifierStartKey is defined',
  })
  @IsString()
  @IsNotEmpty()
  localItemCodeStartKey?: string;

  @Transform(({ value }) => value === 'true')
  @IsOptional()
  @IsBoolean()
  unmarshallResponse?: boolean;
}
