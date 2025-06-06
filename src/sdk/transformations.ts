/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { transformationsCreateTransformation } from "../funcs/transformationsCreateTransformation.js";
import { transformationsDeleteTransformation } from "../funcs/transformationsDeleteTransformation.js";
import { transformationsGetTransformation } from "../funcs/transformationsGetTransformation.js";
import { transformationsListTransformations } from "../funcs/transformationsListTransformations.js";
import { transformationsUpdateTransformation } from "../funcs/transformationsUpdateTransformation.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Transformations extends ClientSDK {
  /**
   * Get transformations
   *
   * @remarks
   * Retrieves a list of all transformations, which can be filtered to show either only named or unnamed transformations.
   */
  async listTransformations(
    request: operations.ListTransformationsRequest,
    options?: RequestOptions,
  ): Promise<components.ListResponse> {
    return unwrapAsync(transformationsListTransformations(
      this,
      request,
      options,
    ));
  }

  /**
   * Get a transformation
   *
   * @remarks
   * Retrieves details for a named or unnamed transformation.
   */
  async getTransformation(
    request: operations.GetTransformationRequest,
    options?: RequestOptions,
  ): Promise<components.TransformationInfo> {
    return unwrapAsync(transformationsGetTransformation(
      this,
      request,
      options,
    ));
  }

  /**
   * Create a named transformation
   *
   * @remarks
   * Creates a new named transformation with the given name and transformation string.
   */
  async createTransformation(
    request: operations.CreateTransformationRequest,
    options?: RequestOptions,
  ): Promise<operations.CreateTransformationResponse> {
    return unwrapAsync(transformationsCreateTransformation(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a transformation
   *
   * @remarks
   * Update an existing named or unnamed transformation.
   */
  async updateTransformation(
    request: operations.UpdateTransformationRequest,
    options?: RequestOptions,
  ): Promise<operations.UpdateTransformationResponse> {
    return unwrapAsync(transformationsUpdateTransformation(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete a transformation
   *
   * @remarks
   * Delete a named or unnamed transformation. Optionally invalidate derived resources generated using the named transformation.
   */
  async deleteTransformation(
    request: operations.DeleteTransformationRequest,
    options?: RequestOptions,
  ): Promise<operations.DeleteTransformationResponse> {
    return unwrapAsync(transformationsDeleteTransformation(
      this,
      request,
      options,
    ));
  }
}
