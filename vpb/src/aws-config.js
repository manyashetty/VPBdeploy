// src/aws-config.js

import AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: '63OC7YN7R0OHRQ8EKJB2',
  secretAccessKey: 'CFrRYDtoDvFH8F4o4CBe7IM9ANQAVzeOyht2Le9A',
  endpoint: 'https://s3.ap-southeast-1.wasabisys.com',
});

export const s3 = new AWS.S3();




