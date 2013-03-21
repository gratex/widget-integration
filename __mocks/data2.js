define([
	"dojo/store/Memory"
], function(Memory) {
	var mockData = [
		{
			id : 1,
			amount : "10000",
			date : new Date(2013, 1, 2)
		},
		{
			id : 2,
			amount : "20007",
			date : new Date(2013, 1, 4)
		},
		{
			id : 3,
			amount : "30014",
			date : new Date(2013, 1, 6)
		}
	];

	return new Memory({
		data : mockData,
		idProperty : "id"
	});
});