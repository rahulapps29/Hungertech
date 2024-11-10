import Axios from 'axios';
export default {
	get:function(conf){
		var promise = new Promise((resolve, reject)=>{
			let axiosHeaders = {
			  	headers: {}
			};
			if(!conf || !conf.url){
				reject({'error':'Provide a valid configuration object to hit a request'});
			}else{
				if(conf.headers){
					axiosHeaders.headers = conf.headers;
				}
				let params = "";
				if(conf.data){
					params = this.serialize(conf.data);
				}
				let url = conf.url + params;
				Axios.get(url, axiosHeaders).then((resp)=>{
					resolve(resp);
				}).catch((err)=>{
					reject(err);
				})
			}
		});
		return promise;
		
	},
	post:function(conf){
		var promise = new Promise((resolve, reject)=>{
			let axiosHeaders = {
			  	headers: {}
			};
			if(!conf || !conf.url){
				reject({'error':'Provide a valid configuration object to hit a request'});
			}else{
				if(conf.headers){
					axiosHeaders.headers = conf.headers;
				}
				let params = {};
				if(conf.data){
					params = conf.data;
				}
				let url = conf.url;
				Axios.post(url, params, axiosHeaders).then((resp)=>{
					if(resp && resp.data){
						resolve(resp.data);
					}else{
						reject({'error':'Something went Wrong'});
					}
				}).catch((err)=>{
					reject(err);
				})
			}
		})
		return promise;
	},
	formPost:function(){

	},
	serialize:function(obj){
		let serializePattern = "?";
		if(obj){
			for(var key in obj){
				if(obj[key]){
					serializePattern = serializePattern+key+"="+obj[key]+"&";
				}
			}
		}
		return serializePattern;
	}
};