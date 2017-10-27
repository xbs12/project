// 定义数据库存储结构

var mongoose = require("../config/mongoose");
var models = {};

// 账户结构
var userSchema = mongoose.Schema({
	account: String,
	password: String,
	userId: Number,
	nickname: {
		type: String,
		default: '吃藕'
	},
	tel: {
		type: Number,
		default: ''
	},
	qq: {
		type: Number,
		default: ''
	},
	sex: {
		type: String,
		default: '男'
	},
	// brith: String,
	avatar: {
		type: String,
		default: "img/user_photo.png"
	}
});

models.User = mongoose.model('User', userSchema);

// 商品结构
//var goodsSchema = mongoose.Schema({
//  name: String,
//  price: String
//});
//
//models.Goods = mongoose.model('Goods', goodsSchema);

// 商品列表
var goodslistSchema = mongoose.Schema({
	//	find1: String,
	//	find2: String,
	//	find3: String,
	//	goodsname: String,
	//	selling: String,
	//	price: Number,
	//	mark: Number,
	//	cost: Number,
	//	discount: Number,
	//	repertory: Number,
	//	goodsnum: String,
	//	brand: String,
	//	freight: Number,
	//	area1: String,
	//	area2: String,
	//	area3: String,

	find1: String,
	goodsname: String,
	selling: String,
	price: Number,
	mark: Number,
	cost: Number,
	discount: String,
	repertory: Number,
	goodsnum: String,
	lgImg: String,
	mdImg: String,
	slideImg: [String],
	brand: String,
	detail: String,
	address: String,
	freight: Number
});

models.Goodslist = mongoose.model('Goodslist', goodslistSchema);

//添加收货地址
var addressSchema = mongoose.Schema({
	uid: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User"
	},
	name: String,
	phone: String,
	city: String,
	street: String,
	isDefault: Boolean
});

models.Address = mongoose.model('Address', addressSchema);

//商品分类结构
var categorySchema = mongoose.Schema({
	children: [],
	id: Number,
	level: Number,
	name: String,
	pId: String,
	parentTId: String,
	tId: String
});

models.Category = mongoose.model('Category', categorySchema);

// 模块化
module.exports = models;