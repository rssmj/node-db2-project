exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('cars')
		.del()
		.then(function () {
			// Inserts seed entries
			return knex('cars').insert([
				{
					vin: 'WAUFFAFM3CA000000',
					make: 'fiat',
					model: '500 abarth',
					mileage: 22222,
					transmission: 'manual',
					title_status: 'clear',
				},
				{
					vin: '19UYA31581L000000',
					make: 'toyota',
					model: 'echo',
					mileage: 199999,
					transmission: 'automatic',
					title_status: 'clear',
				},
				{
					vin: ' 4UZACJDT78CZ09199',
					make: 'freightliner',
					model: 'xc-s chassis straight c-channel rail motorhome',
					mileage: 0,
					transmission: 'automatic',
					title_status: 'clear',
				},
				{
					vin: 'OSCRMYRWNR000001',
					make: 'oscar mayer',
					model: 'wienermobile',
					mileage: 1234567,
					transmission: 'manual',
					title_status: 'salvage',
				},
			]);
		});
};
