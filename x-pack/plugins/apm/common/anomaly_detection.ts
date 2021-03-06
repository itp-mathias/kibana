/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { i18n } from '@kbn/i18n';

export interface ServiceAnomalyStats {
  transactionType?: string;
  anomalyScore?: number;
  actualValue?: number;
  jobId?: string;
}

export const ML_ERRORS = {
  INVALID_LICENSE: i18n.translate(
    'xpack.apm.anomaly_detection.error.invalid_license',
    {
      defaultMessage: `To use anomaly detection, you must be subscribed to an Elastic Platinum license. With it, you'll be able to monitor your services with the aid of machine learning.`,
    }
  ),
  MISSING_READ_PRIVILEGES: i18n.translate(
    'xpack.apm.anomaly_detection.error.missing_read_privileges',
    {
      defaultMessage:
        'You must have "read" privileges to Machine Learning and APM in order to view Anomaly Detection jobs',
    }
  ),
  MISSING_WRITE_PRIVILEGES: i18n.translate(
    'xpack.apm.anomaly_detection.error.missing_write_privileges',
    {
      defaultMessage:
        'You must have "write" privileges to Machine Learning and APM in order to create Anomaly Detection jobs',
    }
  ),
  ML_NOT_AVAILABLE: i18n.translate(
    'xpack.apm.anomaly_detection.error.not_available',
    {
      defaultMessage: 'Machine learning is not available',
    }
  ),
  ML_NOT_AVAILABLE_IN_SPACE: i18n.translate(
    'xpack.apm.anomaly_detection.error.not_available_in_space',
    {
      defaultMessage: 'Machine learning is not available in the selected space',
    }
  ),
};
