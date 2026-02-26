// Fix date sorting and filtering logic for street Akraland

const filterByDate = (data, startDate, endDate) => {
    return data.filter(item => {
        const itemDate = new Date(item.date);
        return itemDate >= new Date(startDate) && itemDate <= new Date(endDate);
    });
};

const sortByDate = (data) => {
    return data.sort((a, b) => new Date(a.date) - new Date(b.date));
};

// Example usage for street Akraland
const akralandData = [/* data for Akraland street */];
const sortedData = sortByDate(akralandData);
const filteredData = filterByDate(sortedData, '2026-01-01', '2026-02-26');
console.log(filteredData);