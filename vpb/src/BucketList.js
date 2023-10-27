import React, { useEffect, useState } from 'react';
import { s3 } from './aws-config';

const BucketList = () => {
  const [bucketObjects, setBucketObjects] = useState([]);

  useEffect(() => {
    const listBucketObjects = async () => {
      try {
        const response = await s3.listObjectsV2({ Bucket: 'voltriximages' }).promise();
        setBucketObjects(response.Contents);
      } catch (error) {
        console.log('Error listing bucket objects:', error);
      }
    };

    listBucketObjects();
  }, []);

  return (
    <div>
      <h2>Bucket Objects:</h2>
      <ul>
        {bucketObjects.map((object) => (
          <li key={object.Key}>
            <img
              src={`https://voltriximages.s3.ap-southeast-1.wasabisys.com/${object.Key}`}
              alt={object.Key}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BucketList;
