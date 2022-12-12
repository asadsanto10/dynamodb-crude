const dynamoClient = require('../config/aws');

const TABLE_NAME = 'harry-potter-api';

const getCharacter = async (req, res) => {
  const params = {
    TableName: TABLE_NAME,
  };

  try {
    const getCharacterData = await dynamoClient.scan(params).promise();
    console.log(getCharacterData);
    res.json(getCharacterData);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getCharacter };
