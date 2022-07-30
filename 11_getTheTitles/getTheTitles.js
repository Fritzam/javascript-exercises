const getTheTitles = function(userArray) {
    const titleArray = userArray.map(title => {
        return title['title'];
    });
    return titleArray;
};

// Do not edit below this line
module.exports = getTheTitles;
