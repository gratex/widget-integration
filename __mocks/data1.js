define([
	"dojo/store/Memory"
], function(Memory) {
	var mockData = [
		{
			id : 1,
			location : "Dolny Kubin"
		},
		{
			id : 2,
			location : "Horny Kubin"
		},
		{
			id : 3,
			location : "Vysny Kubin"
		},
		{
			id : 4,
			location : "Nizny Kubin"
		},
		{
			id : 5,
			location : "Stredny Kubin"
		},
		{
			id : 6,
			location : "Medzny Kubin"
		}
	];
	
	return new Memory({
		data : mockData,
		idProperty : "id"
	});
});