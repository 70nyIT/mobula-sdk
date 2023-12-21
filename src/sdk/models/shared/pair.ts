/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class PairToken0 extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "address" })
    address?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "price" })
    price?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "priceToken" })
    priceToken?: number;
}

export class PairToken1 extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "address" })
    address?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "price" })
    price?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "priceToken" })
    priceToken?: number;
}

export class Pair extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "token0" })
    @Type(() => PairToken0)
    token0?: PairToken0;

    @SpeakeasyMetadata()
    @Expose({ name: "token1" })
    @Type(() => PairToken1)
    token1?: PairToken1;
}
