/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class ErrorResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "error" })
    error?: string;
}
