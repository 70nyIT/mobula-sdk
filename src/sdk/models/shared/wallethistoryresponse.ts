/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class BalanceHistory extends SpeakeasyBase {}

export class WalletHistoryResponseData extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: BalanceHistory })
    @Expose({ name: "balance_history" })
    @Type(() => BalanceHistory)
    balanceHistory?: BalanceHistory[];

    @SpeakeasyMetadata()
    @Expose({ name: "balance_usd" })
    balanceUsd?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "wallet" })
    wallet?: string[];
}

export class WalletHistoryResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => WalletHistoryResponseData)
    data?: WalletHistoryResponseData;
}
