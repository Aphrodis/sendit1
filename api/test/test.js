const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require('./deliveries');
const should = chai.should(); 

chai.use(chaiHttp);

describe('/POST parcel',()=>{
	it('The parcel delivery order should be created',(done)=>{
		let parcelorder ={
					"id": 2,
					"owner":"kellen",
					"pickup":"Rwanda",
					"destination":"Nigeria",
					"weight": 10
					};
		chai.request(app).post('/api/v1/parcels').send(parcelorder).end((error,res)=>{
			res.should.have.status(200);
			res.body.should.have.property('price').eql(12000);
			});	
			done();
	});
	it('An error should be displayed',(done)=>{
		let parcels ={	
					"id": 1,
					"owner":"Albert",
					"pickup":"Ethiopia",
					"destination":"Burundi",
					"weight": "10"
					};
		chai.request(app).post('/api/v1/parcels').send(parcels).end((error,res)=>{
			res.should.have.status(200);
			res.body.should.be.a('object');
			
			});	
			done();
	});
});

describe("/PUT parcels/cancel",()=>{
	it("The user with the identified id should be deleted",(done)=>{
		let id ="5";
		chai.request(app).put(`/api/v1/parcels/${id}/cancel`).end((error,res)=>{
			res.should.have.status(200);
			res.body.should.be.a('object');
			done();
		});
	});

	
	it("The person with an identified id should be removed",(done)=>{
		let id ="x";
		chai.request(app).put(`/api/v1/parcels/${id}/cancel`).end((error,res)=>{
			res.should.have.status(404);
			res.body.should.be.a('object');
			done();
		});
	});
});

describe('/GET parcels ',()=>{
	it("The order with a given id should be returned",(done)=>{
		let id ='1'; 
		chai.request(app).get('/api/v1/parcels/'+id).end((error,res)=>{
			res.should.have.status(200);
			res.body.should.have.property("pickup");
			res.body.should.be.a('object'); 
			done();
		});

	});
	it("All orders created should be returned",(done)=>{
		chai.request(app).get('/api/v1/parcels').end((error,res)=>{
			res.should.have.status(200);			
			res.body.should.be.a('array'); 
			done();
		});
	});

	it("It should return the orders made by a spceific person",(done)=>{
		let owner="Eric"; 
		chai.request(app).get(`/api/v1/users/${owner}/parcels`).end((error,res)=>{
			res.should.have.status(404);
			
			done();
		});

	});
});

