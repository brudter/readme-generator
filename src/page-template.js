const generatePage = (name, github) => {
return `
# title
    
## description
${name}
    
## instillation
${github}
        
## usage
${""}
        
## contributing
${""}
        
## tests
${""}    
    
`;
};

module.exports = generatePage;