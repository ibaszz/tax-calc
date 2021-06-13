const defaultResult = ({statusCode = "00", data = undefined}) => {
    const response = {
        statusCode,
        data
    };
  
    return response;
  };

module.exports = defaultResult;