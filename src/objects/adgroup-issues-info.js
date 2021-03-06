/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * AdgroupIssuesInfo
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdgroupIssuesInfo extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      error_code: 'error_code',
      error_message: 'error_message',
      error_summary: 'error_summary',
      id: 'id'
    });
  }

  get (fields, params): AdgroupIssuesInfo {
    return this.read(
      fields,
      params
    );
  }
}
