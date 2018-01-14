// Bagian penjual
// nama elemennya adalah id = toko

var app = new Vue({
	el: '#toko',
	data: {
		mencungul: 'A',
		items: []
	},
	mounted() {
		axios.get('http://localhost:3000').then(response => {
			response.data.forEach(el => {
				this.items.push({
					id: el.idBarang,
					nama: el.namaBarang,
					harga: el.harga,
					stok: el.jumlah
				});
			});
		}).catch(response => {
			console.log("Gagal");
		});
	},
	method: {
		sortedArray: function() {
    		function compare(a, b) {
      			if (a.name < b.name)
		        	return -1;
		      	if (a.name > b.name)
		        	return 1;
		      	return 0;
		    }
    		return this.arrays.sort(compare);
  		}
	}
});