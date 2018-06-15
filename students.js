const studentData = [
	{
		id : 1,
		name : 'Babalola Kolawale' ,
		class : 'SC 1',
		age : 16 ,
		score : 25
	} ,
	{
		id : 2,
		name : 'Azeez Abdul' ,
		class : 'SC 2',
		age : 17 ,
		score : 56
	},
	{
		id : 3,
		name : 'Babalola Akande' ,
		class : 'SC 1',
		age : 15 ,
		score : 88
	}
];

if (!window.indexedDB) {
	alert('Your Browser doesnt support indexedDB') ;
}

 var db  ;
//open a database
var request = window.indexedDB.open("studentInfo" , 1) ;

request.onupgradeneeded = function(e){
	db = this.target.result ;
	objectStore = db.createObjectStore('studentData', {keyPath : 'id'}) ;
	index = objectStore.createIndex('id' , 'id' , {unique : true }) ;

	
};

request.onerror = function(e){
	console.log('Request event error' , e.errorCode) ;
};

request.onsuccess = function(e){
	db = request.result ;
	tx = db.transaction(['studentData'], 'readwrite') ;
	store = tx.objectStore('studentData') ;
	
	for( data in studentData){
		store.add(studentData[data]) ;
		//console.log(data)
 	}

 
};

// Uncaught TypeError: Cannot read property 'transaction' of undefined
 //   at students.js:58
var tx = db.transaction(['studentData'], 'readwrite') ;
	store = tx.objectStore('studentData') ;